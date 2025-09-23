import type { APIRoute } from "astro";
import { createDirectusClient } from "../../../lib/directus";
import { registerUser } from "@directus/sdk";

export const POST: APIRoute = async ({ request, cookies, redirect, locals }) => {
  const formData = await request.formData();
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get("email") as string;
  const password = formData.get('password') as string;

  if (!firstName || !lastName ||!email || !password) {
    return new Response(JSON.stringify({ error: "All fields are required" }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    const client = createDirectusClient(directusUrl);
    
    await client.request(registerUser(email, password, { first_name: firstName, last_name: lastName }));

    // Don't auto-login if email verification is required
    // The user will need to verify their email first
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Registration successful. Please check your email to verify your account.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    const message = error?.errors?.[0]?.message || error?.message || 'Registration failed';
    return new Response(JSON.stringify({ error: message }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
