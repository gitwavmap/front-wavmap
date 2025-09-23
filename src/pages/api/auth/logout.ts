import type { APIRoute } from "astro";
import client from "../../../lib/directus";

export const GET: APIRoute = async ({ redirect, cookies }) => {
  try {
    await client.logout();
  } catch (error) {
    console.error('Logout error:', error);
  }
  
  // Clear the session token cookie
  cookies.delete('directus_session_token', {
    path: '/'
  });
  
  return redirect("/");
};