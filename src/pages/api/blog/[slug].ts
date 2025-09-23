import type { APIRoute } from 'astro';
import { createDirectus, rest, readItems } from '@directus/sdk';

export const GET: APIRoute = async ({ params }) => {
  try {
    // Create Directus client for server-side API
    const directusUrl = import.meta.env.DIRECTUS_URL || process.env.DIRECTUS_URL;
    if (!directusUrl) {
      throw new Error('DIRECTUS_URL environment variable is not set');
    }
    
    const directus = createDirectus(directusUrl).with(rest());
    
    const { slug } = params;

    if (!slug) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Slug parameter is required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Fetch all published posts and find the matching one
    const allArticles = await directus.request(
      readItems('posts', {
        fields: [
          'id',
          'title', 
          'slug',
          'content',
          'excerpt',
          'image',
          'status',
          'date_created',
          'date_updated',
          'published_date'
        ],
        filter: {
          status: {
            _eq: 'published'
          }
        }
      })
    );

    // Find article by comparing cleaned slugs
    const article = allArticles.find((article: any) => {
      const cleanSlug = article.slug ? article.slug.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : article.id;
      return cleanSlug === slug;
    });

    if (!article) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Article not found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Transform article to include proper image URL
    const transformedArticle = {
      ...article,
      imageUrl: article.image ? `${directusUrl.replace(/\/$/, '')}/assets/${article.image}?width=1200&height=675&fit=cover` : null
    };

    return new Response(JSON.stringify({
      success: true,
      data: transformedArticle
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error fetching article:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch article',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};