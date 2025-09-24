import type { APIRoute } from "astro";
import client from "../../../lib/directus";

export const GET: APIRoute = async ({ redirect, cookies }) => {
  try {
    await client.logout();
  } catch (error) {
    console.error('Logout error:', error);
  }
  
  // Clear both session and refresh token cookies
  cookies.delete('directus_session_token', {
    path: '/'
  });

  cookies.delete('directus_refresh_token', {
    path: '/'
  });
  
  return redirect("/");
};