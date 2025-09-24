import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";
import { passwordRequest } from "@directus/sdk";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { email, resetUrl } = await request.json();
    
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    const client = createDirectusClient(directusUrl);
    
    // Use the passwordRequest SDK function with custom reset URL
    await client.request(passwordRequest(email, resetUrl));

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Password reset email sent successfully!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Forgot password error:', error);
    const message = error?.errors?.[0]?.message || error?.message || 'Failed to send password reset email';
    return new Response(JSON.stringify({ error: message }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};