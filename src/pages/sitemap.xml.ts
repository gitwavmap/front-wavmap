import type { APIRoute } from 'astro';
import { createDirectus, rest, readItems } from '@directus/sdk';

const SITE_URL = 'https://wavmap.org';

// Static pages to include in sitemap
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/map', changefreq: 'daily', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms-of-use', changefreq: 'yearly', priority: 0.3 },
];

export const GET: APIRoute = async ({ locals }) => {
  try {
    // Get Directus URL from runtime
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    const directus = createDirectus(directusUrl).with(rest());

    // Fetch all published blog articles
    let blogArticles: any[] = [];
    try {
      blogArticles = await directus.request(
        readItems('posts', {
          fields: ['slug', 'date_updated', 'date_created', 'published_date'],
          filter: {
            status: { _eq: 'published' }
          },
          sort: ['-date_created'],
          limit: -1 // Get all articles
        })
      );
    } catch (error) {
      console.error('Error fetching blog articles for sitemap:', error);
      // Continue with static pages only
    }

    // Build XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${blogArticles
  .map((article) => {
    // Clean slug
    const cleanSlug = article.slug
      ? article.slug.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      : article.id;

    // Get the most recent date for lastmod
    const lastmod = article.date_updated || article.published_date || article.date_created;
    const lastmodFormatted = lastmod ? new Date(lastmod).toISOString().split('T')[0] : '';

    return `  <url>
    <loc>${SITE_URL}/blog/${cleanSlug}</loc>
    ${lastmodFormatted ? `<lastmod>${lastmodFormatted}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Return basic sitemap with static pages only on error
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    return new Response(basicSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=600' // Cache for 10 minutes on error
      }
    });
  }
};
