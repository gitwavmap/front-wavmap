import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";

export const GET: APIRoute = async ({ redirect, cookies, locals }) => {
  try {
    // Get DIRECTUS_URL from environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL ||
                        'https://directus-production-1f5c.up.railway.app/';

    // Create client instance (not just the function)
    const client = createDirectusClient(directusUrl);

    // Logout - SDK will automatically send cookies via 'credentials: include'
    await client.logout();
    console.log('✅ Session invalidated on Directus');
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