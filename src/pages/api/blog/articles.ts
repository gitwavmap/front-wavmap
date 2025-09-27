import type { APIRoute } from 'astro';
import { createDirectus, rest, readItems } from '@directus/sdk';

export const GET: APIRoute = async ({ url, locals }) => {
  try {
    // Create Directus client for server-side API
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    if (!directusUrl) {
      throw new Error('DIRECTUS_URL environment variable is not set');
    }
    
    const directus = createDirectus(directusUrl).with(rest());
    
    const searchParams = new URL(url).searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    // Fetch posts from Directus with all available fields
    const articles = await directus.request(
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
          'published_date',
          'post_number'
        ],
        filter: {
          status: {
            _eq: 'published'
          }
        },
        sort: ['-date_created'],
        limit: limit,
        offset: offset
      })
    );

    // Get total count for pagination
    const totalCount = await directus.request(
      readItems('posts', {
        aggregate: {
          count: '*'
        },
        filter: {
          status: {
            _eq: 'published'
          }
        }
      })
    );

    const total = Array.isArray(totalCount) ? totalCount.length : (totalCount as any)?.[0]?.count || 0;
    const hasMore = offset + limit < total;

    // Transform articles to include proper image URLs and clean slugs
    const transformedArticles = articles.map((article: any) => {
      const imageUrl = article.image ? `${directusUrl.replace(/\/$/, '')}/assets/${article.image}?width=800&height=450&fit=cover` : null;
      
      // Clean slug: remove spaces, convert to lowercase, remove special chars
      const cleanSlug = article.slug ? article.slug.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : article.id;
      
      console.log('Article debug:', { 
        id: article.id, 
        title: article.title,
        originalSlug: article.slug,
        cleanSlug,
        imageUrl
      });
      
      return {
        ...article,
        slug: cleanSlug,
        originalSlug: article.slug,
        imageUrl
      };
    });

    return new Response(JSON.stringify({
      success: true,
      data: {
        articles: transformedArticles,
        pagination: {
          page,
          limit,
          total,
          hasMore,
          totalPages: Math.ceil(total / limit)
        }
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error fetching articles:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch articles',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};