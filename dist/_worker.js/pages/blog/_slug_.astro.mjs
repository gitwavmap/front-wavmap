globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_CrUJU3Ch.mjs';
import { $ as $$Layout } from '../../chunks/Layout_g5zOGT9n.mjs';
import { $ as $$Navbar } from '../../chunks/Navbar_-Y9DRhkq.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let article = null;
  let error = null;
  if (!slug) {
    return Astro2.redirect("/blog");
  }
  try {
    const response = await fetch(`${Astro2.url.origin}/api/blog/${slug}`);
    const result = await response.json();
    if (result.success) {
      article = result.data;
    } else {
      error = result.error;
    }
  } catch (e) {
    error = "Failed to load article";
  }
  if (!article) {
    return Astro2.redirect("/blog");
  }
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  article.user_created ? `${article.user_created.first_name || ""} ${article.user_created.last_name || ""}`.trim() : "Unknown Author";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${article.title} - Wavmap Blog`, "description": article.excerpt || "Read this article on Wavmap blog", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Navbar", $$Navbar, { "currentPage": "blog", "data-astro-cid-4sn4zg3r": true })} <!-- Article Content --> <main class="py-16" data-astro-cid-4sn4zg3r> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-4sn4zg3r> <!-- Back to Blog Link --> <div class="mb-8" data-astro-cid-4sn4zg3r> <a href="/blog" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-4sn4zg3r></path> </svg>
Back to Blog
</a> </div> <!-- Article --> <article class="bg-white rounded-2xl shadow-sm overflow-hidden" data-astro-cid-4sn4zg3r> <!-- Featured Image --> ${article.imageUrl && renderTemplate`<div class="aspect-video bg-gray-200" data-astro-cid-4sn4zg3r> <img${addAttribute(article.imageUrl, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover" data-astro-cid-4sn4zg3r> </div>`} <!-- Article Header --> <header class="p-8 pb-6" data-astro-cid-4sn4zg3r> <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight" data-astro-cid-4sn4zg3r> ${article.title} </h1> <div class="flex items-center justify-between text-gray-600 border-b border-gray-200 pb-6" data-astro-cid-4sn4zg3r> <div class="flex items-center space-x-4" data-astro-cid-4sn4zg3r> <span class="font-medium" data-astro-cid-4sn4zg3r>By Admin</span> <span data-astro-cid-4sn4zg3r>•</span> <time data-astro-cid-4sn4zg3r>${formatDate(article.published_date || article.date_created)}</time> </div> ${article.date_updated && article.date_updated !== article.date_created && renderTemplate`<div class="text-sm text-gray-500" data-astro-cid-4sn4zg3r>
Updated: ${formatDate(article.date_updated)} </div>`} </div> </header> <!-- Article Content --> <div class="px-8 pb-8" data-astro-cid-4sn4zg3r> ${article.excerpt && renderTemplate`<div class="text-xl text-gray-700 font-medium mb-8 leading-relaxed border-l-4 border-primary-600 pl-6 italic" data-astro-cid-4sn4zg3r> ${article.excerpt} </div>`} <div class="prose prose-lg max-w-none" data-astro-cid-4sn4zg3r>${unescapeHTML(article.content)}</div> </div> </article> <!-- Navigation to other articles --> <div class="mt-12 text-center" data-astro-cid-4sn4zg3r> <a href="/blog" class="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0l-4 4m4-4l-4-4" data-astro-cid-4sn4zg3r></path> </svg>
Read More Articles
</a> </div> </div> </main> </div> ` })} `;
}, "/home/glm/wavmap/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
