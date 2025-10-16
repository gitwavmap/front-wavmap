import { createDirectus, rest, authentication, staticToken } from '@directus/sdk';
import type { AstroCookies } from 'astro';

// Create a function to get Directus client with runtime URL
export function createDirectusClient(directusUrl: string) {
  const client = createDirectus(directusUrl)
    .with(rest())
    .with(authentication('cookie', { credentials: 'include' }));

  return client;
}

// Create a function to make authenticated requests with a specific token
export function createTokenClient(token: string, directusUrl: string) {

  const tokenClient = createDirectus(directusUrl)
    .with(rest())
    .with(staticToken(token));

  return tokenClient;
}

/**
 * Helper to refresh an expired token server-side
 * Returns the new access token or null if refresh failed
 */
export async function refreshTokenIfNeeded(
  cookies: AstroCookies,
  directusUrl: string
): Promise<string | null> {
  try {
    const refreshToken = cookies.get('directus_refresh_token')?.value;

    if (!refreshToken) {
      console.log('❌ No refresh token available');
      return null;
    }

    console.log('🔄 Attempting to refresh token server-side...');

    const response = await fetch(`${directusUrl}auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: refreshToken
      }),
    });

    if (!response.ok) {
      console.log('❌ Token refresh failed:', response.status);
      return null;
    }

    const data = await response.json();

    if (data.data?.access_token) {
      // Update cookies with new tokens
      cookies.set('directus_session_token', data.data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });

      if (data.data.refresh_token) {
        cookies.set('directus_refresh_token', data.data.refresh_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24 * 7 // 7 days
        });
      }

      console.log('✅ Token refreshed successfully');
      return data.data.access_token;
    }

    return null;
  } catch (error) {
    console.error('❌ Error refreshing token:', error);
    return null;
  }
}

/**
 * Wrapper to execute a Directus request with automatic token refresh on expiration
 * Simplifies API endpoints by handling token refresh automatically
 */
export async function withTokenRefresh<T>(
  cookies: AstroCookies,
  directusUrl: string,
  operation: (client: ReturnType<typeof createTokenClient>) => Promise<T>
): Promise<{ success: true; data: T } | { success: false; error: string; requiresLogin?: boolean }> {
  let token = cookies.get('directus_session_token')?.value;

  if (!token) {
    return {
      success: false,
      error: 'No authentication token found',
      requiresLogin: true
    };
  }

  let client = createTokenClient(token, directusUrl);

  try {
    // Try the operation
    const data = await operation(client);
    return { success: true, data };
  } catch (error: any) {
    // Check if it's a token expiration error
    const isTokenExpired =
      error?.errors?.[0]?.extensions?.code === 'TOKEN_EXPIRED' ||
      error?.response?.status === 401;

    if (isTokenExpired) {
      console.log('🔄 Token expired, attempting auto-refresh...');

      const newToken = await refreshTokenIfNeeded(cookies, directusUrl);

      if (newToken) {
        // Retry with new token
        client = createTokenClient(newToken, directusUrl);
        try {
          const data = await operation(client);
          return { success: true, data };
        } catch (retryError: any) {
          return {
            success: false,
            error: retryError?.message || 'Request failed after token refresh'
          };
        }
      } else {
        return {
          success: false,
          error: 'Session expired. Please log in again.',
          requiresLogin: true
        };
      }
    }

    // Not a token error, return the error
    return {
      success: false,
      error: error?.message || 'Unknown error occurred'
    };
  }
}

// Fallback for backward compatibility (will be removed)
export default createDirectusClient;
