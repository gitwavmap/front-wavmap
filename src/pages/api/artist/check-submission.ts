import type { APIRoute } from 'astro';
import { readMe, readItems } from '@directus/sdk';
import { createTokenClient } from '../../../lib/directus';

export const prerender = false;

/**
 * Lightweight endpoint to check if the current user has already submitted a form
 * Returns only a boolean, not the full form data
 */
export const GET: APIRoute = async ({ cookies, locals }) => {
  try {
    // Check authentication
    const token = cookies.get('directus_session_token')?.value;
    if (!token) {
      return new Response(JSON.stringify({
        success: false,
        hasSubmission: false,
        message: 'Not authenticated'
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';

    // Create authenticated Directus client
    const client = createTokenClient(token, directusUrl);

    // Get current user using readMe()
    const me = await client.request(
      readMe({
        fields: ['id']
      })
    );

    if (!me || !me.id) {
      return new Response(JSON.stringify({
        success: false,
        hasSubmission: false,
        message: 'User not found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const userId = me.id;

    // Check if user has already submitted a form
    // Fetch all fields to pre-fill the form if exists
    const submissions = await client.request(
      readItems('form', {
        filter: {
          user_created: { _eq: userId }
        },
        fields: [
          'id',
          'artistname',
          'pronouns',
          'maincity',
          'country',
          'cityid',
          'latitude',
          'longitude',
          'activitydomains',
          'musicalstyles',
          'website',
          'bandcamp',
          'soundcloud',
          'instagram',
          'subvert',
          'tiktok',
          'youtube',
          'email',
          'bio',
          'socialtopics',
          'linksbetweenthemeandwork',
          'anyotherpoliticalapproach',
          'status'
        ],
        limit: 1
      })
    );

    const hasSubmission = submissions && submissions.length > 0;

    return new Response(JSON.stringify({
      success: true,
      hasSubmission: hasSubmission,
      data: hasSubmission ? submissions[0] : null,
      message: hasSubmission
        ? 'User has already submitted a form'
        : 'No submission found'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error: any) {
    console.error('❌ Error checking submission:', error);

    return new Response(JSON.stringify({
      success: false,
      hasSubmission: false,
      message: 'Error checking submission',
      error: error?.message || 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
