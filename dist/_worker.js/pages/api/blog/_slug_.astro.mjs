globalThis.process ??= {}; globalThis.process.env ??= {};
import { l as le, j as ju, L as Ls } from '../../../chunks/index_Dhdmj7aT.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params }) => {
  try {
    const directusUrl = "https://directus-production-1f5c.up.railway.app/";
    if (!directusUrl) ;
    const directus = le(directusUrl).with(ju());
    const { slug } = params;
    if (!slug) {
      return new Response(JSON.stringify({
        success: false,
        error: "Slug parameter is required"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const allArticles = await directus.request(
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
          "published_date"
        ],
        filter: {
          status: {
            _eq: "published"
          }
        }
      })
    );
    const article = allArticles.find((article2) => {
      const cleanSlug = article2.slug ? article2.slug.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : article2.id;
      return cleanSlug === slug;
    });
    if (!article) {
      return new Response(JSON.stringify({
        success: false,
        error: "Article not found"
      }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const transformedArticle = {
      ...article,
      imageUrl: article.image ? `${directusUrl.replace(/\/$/, "")}/assets/${article.image}?width=1200&height=675&fit=cover` : null
    };
    return new Response(JSON.stringify({
      success: true,
      data: transformedArticle
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching article:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to fetch article",
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
