import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  try {
    // Get refresh token from request body or cookies
    const body = await request.json().catch(() => ({}));
    const refreshToken = body.refresh_token || cookies.get('directus_refresh_token')?.value;

    if (!refreshToken) {
      return new Response(JSON.stringify({
        error: 'No refresh token provided',
        code: 'NO_REFRESH_TOKEN'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get DIRECTUS_URL from environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    const client = createDirectusClient(directusUrl);

    // Refresh the token using the refresh token
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
      throw new Error(`HTTP ${response.status}`);
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

      return new Response(JSON.stringify({
        success: true,
        access_token: data.data.access_token,
        expires_in: data.data.expires || 900000 // 15 minutes default
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    throw new Error('No access token in refresh response');

  } catch (error: any) {
    console.error('Token refresh error:', error);

    // Clear invalid tokens
    cookies.delete('directus_session_token', { path: '/' });
    cookies.delete('directus_refresh_token', { path: '/' });

    const errorCode = error?.errors?.[0]?.extensions?.code;
    let userMessage = 'Session expired. Please log in again.';

    if (errorCode === 'INVALID_CREDENTIALS') {
      userMessage = 'Your session has expired. Please log in again.';
    } else if (errorCode === 'TOKEN_EXPIRED') {
      userMessage = 'Refresh token has expired. Please log in again.';
    }

    return new Response(JSON.stringify({
      error: userMessage,
      code: errorCode || 'REFRESH_FAILED',
      requiresLogin: true
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};