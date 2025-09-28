import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";
import { passwordReset } from "@directus/sdk";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { token, password } = await request.json();
    
    if (!token) {
      return new Response(JSON.stringify({ error: "Reset token is required" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Enhanced password validation
    if (!password) {
      return new Response(JSON.stringify({ error: "Password is required" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const passwordErrors = [];

    if (password.length < 8) {
      passwordErrors.push('at least 8 characters');
    }

    if (!/[a-zA-Z]/.test(password)) {
      passwordErrors.push('at least one letter');
    }

    if (!/\d/.test(password)) {
      passwordErrors.push('at least one number');
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      passwordErrors.push('at least one special character');
    }

    if (passwordErrors.length > 0) {
      return new Response(JSON.stringify({
        error: `Password must contain ${passwordErrors.join(', ')}`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    const client = createDirectusClient(directusUrl);
    
    // Use the passwordReset SDK function
    await client.request(passwordReset(token, password));

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Password reset successfully!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Password reset error:', error);
    
    // Handle specific error cases
    let message = 'Failed to reset password';
    
    if (error?.errors?.[0]?.extensions?.code === 'INVALID_PAYLOAD') {
      message = 'Invalid or expired reset token';
    } else if (error?.errors?.[0]?.message) {
      message = error.errors[0].message;
    } else if (error?.message) {
      message = error.message;
    }
    
    return new Response(JSON.stringify({ error: message }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};