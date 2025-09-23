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
      console.log('❌ Token invalid, clearing token:', error.message || error);
      // Clear invalid token
      context.cookies.delete('directus_session_token');
    }
  }

  return next();
});