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
    
    // Set the tokens manually using Astro's cookie API
    if (response.access_token) {
      cookies.set('directus_session_token', response.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
    }

    // Store refresh token if available
    if (response.refresh_token) {
      cookies.set('directus_refresh_token', response.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
    }
  } catch (error: any) {
    console.error('Login error:', error);

    // Extract Directus error details
    const directusError = error?.errors?.[0];
    const errorCode = directusError?.extensions?.code;
    const errorMessage = directusError?.message || error?.message;

    // Provide user-friendly error messages based on Directus error codes
    let userMessage = 'Login failed. Please try again.';

    if (errorCode === 'INVALID_CREDENTIALS' || errorMessage?.includes('Invalid user credentials')) {
      userMessage = 'Email or password is incorrect. Please check your credentials and try again.';
    } else if (errorCode === 'TOKEN_EXPIRED') {
      userMessage = 'Your session has expired. Please log in again.';
    } else if (errorCode === 'INVALID_TOKEN') {
      userMessage = 'Authentication token is invalid. Please log in again.';
    } else if (errorCode === 'INVALID_IP') {
      userMessage = 'Your IP address is not authorized for this account.';
    } else if (errorCode === 'INVALID_OTP') {
      userMessage = 'The two-factor authentication code is incorrect.';
    } else if (error?.response?.status === 401) {
      userMessage = 'Email or password is incorrect. Please check your credentials and try again.';
    } else if (error?.response?.status === 403) {
      userMessage = 'Access denied. Your account may be inactive or suspended.';
    }

    return new Response(JSON.stringify({
      error: userMessage,
      code: errorCode || 'UNKNOWN_ERROR'
    }), {
      status: error?.response?.status || 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({
    success: true,
    redirectTo: '/map'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
