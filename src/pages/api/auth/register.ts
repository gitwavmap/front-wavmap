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

    // Extract Directus error details
    const directusError = error?.errors?.[0];
    const errorCode = directusError?.extensions?.code;
    const errorMessage = directusError?.message || error?.message;

    // Provide user-friendly error messages
    let userMessage = 'Registration failed. Please try again.';

    if (errorMessage?.includes('already exists') || errorMessage?.includes('duplicate')) {
      userMessage = 'An account with this email already exists. Please try logging in or use a different email.';
    } else if (errorMessage?.includes('email') && errorMessage?.includes('invalid')) {
      userMessage = 'Please enter a valid email address.';
    } else if (errorMessage?.includes('password')) {
      userMessage = 'Password does not meet requirements. Please choose a stronger password.';
    } else if (error?.response?.status === 403) {
      userMessage = 'User registration is disabled. Please contact support.';
    } else if (error?.response?.status === 422) {
      userMessage = 'Please check your information and try again.';
    }

    return new Response(JSON.stringify({
      error: userMessage,
      code: errorCode || 'REGISTRATION_ERROR'
    }), {
      status: error?.response?.status || 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
