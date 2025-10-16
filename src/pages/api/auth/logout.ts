import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";

export const GET: APIRoute = async ({ redirect, cookies, locals }) => {
  try {
    // Get DIRECTUS_URL from environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL ||
                        'https://directus-production-1f5c.up.railway.app/';

    // Get refresh token from cookies
    const refreshToken = cookies.get('directus_refresh_token')?.value;

    // Only attempt to invalidate session on server if we have a refresh token
    if (refreshToken) {
      // Call Directus logout endpoint directly with refresh_token in body
      await fetch(`${directusUrl}auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh_token: refreshToken
        })
      });
      console.log('✅ Session invalidated on Directus');
    }
  } catch (error) {
    console.error('❌ Logout error:', error);
    // Continue anyway to clear cookies locally
  }

  // Clear both session and refresh token cookies
  cookies.delete('directus_session_token', {
    path: '/'
  });

  cookies.delete('directus_refresh_token', {
    path: '/'
  });

  console.log('✅ Cookies cleared');

  return redirect("/");
};