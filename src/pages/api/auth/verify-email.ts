import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";
import { registerUserVerify } from "@directus/sdk";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { token } = await request.json();
    
    if (!token) {
      return new Response(JSON.stringify({ error: "Token is required" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    const client = createDirectusClient(directusUrl);
    
    // Use the registerUserVerify SDK function
    await client.request(registerUserVerify(token));

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Email verified successfully!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Email verification error:', error);
    const message = error?.errors?.[0]?.message || error?.message || 'Invalid or expired token';
    return new Response(JSON.stringify({ error: message }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};