import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
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

    // Get Brevo API key from Cloudflare environment (secrets + wrangler.toml)
    const env = locals.runtime?.env || import.meta.env;
    const apiKey = env.BREVO_API_KEY;
    const listId = env.BREVO_LIST_ID;

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

    // Call Brevo API directly using fetch (server-side, compatible with Cloudflare Workers)
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: listId ? [parseInt(listId)] : [],
        updateEnabled: true, // Update if contact already exists
      }),
    });

    // Check Brevo API response
    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json().catch(() => ({}));
      console.error('Brevo API error:', errorData);

      // Contact already exists (code: duplicate_parameter) - treat as success
      if (brevoResponse.status === 400 && errorData.code === 'duplicate_parameter') {
        console.log(`ℹ️ Contact already exists: ${email}`);
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

      // Other errors
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to subscribe. Please try again.',
        }),
        {
          status: brevoResponse.status,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

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
