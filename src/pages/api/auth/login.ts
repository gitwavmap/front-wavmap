import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";

export const POST: APIRoute = async ({ request, cookies, redirect, locals }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password are required" }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    
    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    const client = createDirectusClient(directusUrl);
    
    const response = await client.login({ email, password });
    
    // Set the token manually using Astro's cookie API
    if (response.access_token) {
      cookies.set('directus_session_token', response.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only secure in production
        sameSite: 'lax', // More permissive for development
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
    }
  } catch (error: any) {
    console.error('Login error:', error);
    const message = error?.errors?.[0]?.message || error?.message || 'Login failed';
    return new Response(JSON.stringify({ error: message }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
