globalThis.process ??= {}; globalThis.process.env ??= {};
import { l as le, j as ju, L as Ls } from '../../../chunks/index_Brr1gO2v.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, locals }) => {
  try {
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    if (!directusUrl) ;
    const directus = le(directusUrl).with(ju());
    const searchParams = new URL(url).searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;
    const articles = await directus.request(
      Ls("posts", {
        fields: [
          "id",
          "title",
          "slug",
          "content",
          "excerpt",
          "image",
          "status",
          "date_created",
          "date_updated",
          "published_date",
          "post_number"
        ],
        filter: {
          status: {
            _eq: "published"
          }
        },
        sort: ["-date_created"],
        limit,
        offset
      })
    );
    const totalCount = await directus.request(
      Ls("posts", {
        aggregate: {
          count: "*"
        },
        filter: {
          status: {
            _eq: "published"
          }
        }
      })
    );
    const total = Array.isArray(totalCount) ? totalCount.length : totalCount?.[0]?.count || 0;
    const hasMore = offset + limit < total;
    const transformedArticles = articles.map((article) => {
      const imageUrl = article.image ? `${directusUrl.replace(/\/$/, "")}/assets/${article.image}?width=800&height=450&fit=cover` : null;
      const cleanSlug = article.slug ? article.slug.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : article.id;
      console.log("Article debug:", {
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
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to fetch articles",
      message: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
