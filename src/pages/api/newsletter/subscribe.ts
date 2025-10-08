import type { APIRoute } from 'astro';
import * as brevo from '@getbrevo/brevo';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email is required',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Get Brevo API key from environment variables
    const apiKey = import.meta.env.BREVO_API_KEY;
    const listId = import.meta.env.BREVO_LIST_ID;

    if (!apiKey) {
      console.error('BREVO_API_KEY not configured');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Newsletter service not configured',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Initialize Brevo API client
    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, apiKey);

    // Create contact request
    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.updateEnabled = true; // Update if already exists

    // Add to list if listId is provided
    if (listId) {
      createContact.listIds = [parseInt(listId)];
    }

    // Add contact to Brevo
    await apiInstance.createContact(createContact);

    console.log(`✅ Newsletter subscription successful: ${email}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Successfully subscribed to newsletter',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);

    // Handle Brevo specific errors
    if (error.response) {
      const statusCode = error.response.status;

      // Contact already exists (not an error for us)
      if (statusCode === 400 && error.response.body?.code === 'duplicate_parameter') {
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Already subscribed to newsletter',
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to subscribe. Please try again.',
        }),
        {
          status: statusCode,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Generic error
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An unexpected error occurred',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
