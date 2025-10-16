import { defineMiddleware } from 'astro:middleware';
import { createTokenClient } from '../lib/directus';
import { readMe } from '@directus/sdk';
import { cookieName, isLocale, defineGetLocale } from '../paraglide/runtime.js';

export const onRequest = defineMiddleware(async (context, next) => {
  // Manual locale detection for server-side rendering
  const urlLang = context.url.searchParams.get('lang');
  const cookieLang = context.cookies.get(cookieName)?.value;
  const acceptLanguage = context.request.headers.get('accept-language');
  
  let detectedLang = 'en'; // default
  
  // Priority order: URL parameter > Cookie > Accept-Language header
  if (urlLang && isLocale(urlLang)) {
    detectedLang = urlLang;
    // Save to Paraglide cookie
    context.cookies.set(cookieName, detectedLang, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false, // Allow client-side access
      secure: false, // Set to true in production with HTTPS
      sameSite: 'lax'
    });
  } else if (cookieLang && isLocale(cookieLang)) {
    detectedLang = cookieLang;
  } else if (acceptLanguage) {
    // Parse Accept-Language header
    const langs = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
    for (const lang of langs) {
      if (isLocale(lang)) {
        detectedLang = lang;
        break;
      }
      // Check for language without region (e.g., 'fr' from 'fr-FR')
      const baseLang = lang.split('-')[0];
      if (isLocale(baseLang)) {
        detectedLang = baseLang;
        break;
      }
    }
    // Save detected language to Paraglide cookie
    context.cookies.set(cookieName, detectedLang, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: false,
      sameSite: 'lax'
    });
  }
  
  // Configure Paraglide to use the detected locale for this request
  defineGetLocale(() => detectedLang);
  
  // Store language for use in components
  context.locals.language = detectedLang;
  
  // Get DIRECTUS_URL from Cloudflare runtime environment
  const directusUrl = context.locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
  
  
  // No protected routes - all pages accessible
  // Keep user info available if they're logged in
  const sessionToken = context.cookies.get('directus_session_token')?.value;
  
  if (sessionToken) {
    try {
      // Create authenticated client and verify token with runtime URL
      const tokenClient = createTokenClient(sessionToken, directusUrl);
      const user = await tokenClient.request(readMe());
      
      
      if (user && (user.email || user.id)) {
        context.locals.user = user;
      } else {
        console.log('❌ User data is undefined or incomplete, clearing token');
        console.log('❌ User object:', user);
        context.cookies.delete('directus_session_token');
      }
    } catch (error) {
      console.log('❌ Token invalid, attempting refresh:', error.message || error);

      // Try to refresh token before deleting
      const refreshToken = context.cookies.get('directus_refresh_token')?.value;

      if (refreshToken) {
        try {
          console.log('🔄 Attempting token refresh in middleware...');
          const response = await fetch(`${directusUrl}auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token: refreshToken })
          });

          const data = await response.json();

          if (response.ok && data.data?.access_token) {
            console.log('✅ Token refreshed successfully in middleware');

            // Update session token cookie
            context.cookies.set('directus_session_token', data.data.access_token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'lax',
              path: '/',
              maxAge: 60 * 60 * 24 * 7 // 7 days
            });

            // Update refresh token if provided
            if (data.data.refresh_token) {
              context.cookies.set('directus_refresh_token', data.data.refresh_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // 7 days
              });
            }

            // Retry user fetch with new token
            try {
              const tokenClient = createTokenClient(data.data.access_token, directusUrl);
              const user = await tokenClient.request(readMe());

              if (user && (user.email || user.id)) {
                context.locals.user = user;
                console.log('✅ User authenticated with refreshed token');
                return next();
              }
            } catch (retryError) {
              console.log('❌ Failed to fetch user with refreshed token:', retryError.message || retryError);
            }
          } else {
            console.log('❌ Token refresh failed:', data.error || data.message);
          }
        } catch (refreshError) {
          console.log('❌ Refresh request failed:', refreshError.message || refreshError);
        }
      } else {
        console.log('❌ No refresh token available');
      }

      // Only delete tokens if refresh failed or wasn't available
      console.log('🧹 Clearing invalid tokens');
      context.cookies.delete('directus_session_token', { path: '/' });
      context.cookies.delete('directus_refresh_token', { path: '/' });
    }
  }

  return next();
});