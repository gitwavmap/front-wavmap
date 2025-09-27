globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_BB4k16uX.mjs';
import { $ as $$Layout } from '../../chunks/Layout_4KDedCpR.mjs';
import { $ as $$Navbar, a as $$HoverLink, B as BackBtn } from '../../chunks/Navbar_Vv4RD_JC.mjs';
import { l as le, j as ju, L as Ls } from '../../chunks/index_Dhdmj7aT.mjs';
import { B as BackBtnBg } from '../../chunks/close_bg_DN3n4mAQ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let article = null;
  if (!slug) {
    return Astro2.redirect("/blog");
  }
  try {
    const directusUrl = Astro2.locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    if (!directusUrl) ;
    const directus = le(directusUrl).with(ju());
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
    const foundArticle = allArticles.find((article2) => {
      const cleanSlug = article2.slug ? article2.slug.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : article2.id;
      return cleanSlug === slug;
    });
    if (foundArticle) {
      article = {
        ...foundArticle,
        imageUrl: foundArticle.image ? `${directusUrl.replace(/\/$/, "")}/assets/${foundArticle.image}?width=1200&height=675&fit=cover` : null
      };
    }
  } catch (e) {
    console.error("Error fetching article:", e);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${article.title} - Wavmap Blog`, "description": article.excerpt || "Read this article on Wavmap blog", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Navbar", $$Navbar, { "currentPage": "blog", "data-astro-cid-4sn4zg3r": true })} <!-- Article Content --> <main class="py-4" data-astro-cid-4sn4zg3r> <div class="mx-auto article-container" data-astro-cid-4sn4zg3r> <!-- Back to Blog Link --> <!-- <div class="mb-8">
          <a 
            href="/blog" 
            class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Blog
          </a>
        </div> --> <!-- Article --> <article class="" data-astro-cid-4sn4zg3r> <!-- Featured Image --> ${article.imageUrl && renderTemplate`<div class="aspect-video bg-gray-200" data-astro-cid-4sn4zg3r> <img${addAttribute(article.imageUrl, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover" data-astro-cid-4sn4zg3r> <!-- Article Header --> <header class="p-8 pb-6" data-astro-cid-4sn4zg3r> <h1 class="text-5xl font-bold mb-6 leading-tight" data-astro-cid-4sn4zg3r> ${article.title} </h1> </header> </div>`} <div class="flex items-center justify-between pb-6 pt-2 pl-12 pr-12" data-astro-cid-4sn4zg3r> <div class="flex items-center space-x-4" data-astro-cid-4sn4zg3r> <span class="font-medium text-sm" data-astro-cid-4sn4zg3r>By Admin</span> <span data-astro-cid-4sn4zg3r>•</span> <time class="text-sm" data-astro-cid-4sn4zg3r>${formatDate(article.published_date || article.date_created)}</time> </div> ${article.date_updated && article.date_updated !== article.date_created && renderTemplate`<div class="text-sm" data-astro-cid-4sn4zg3r>
Updated: ${formatDate(article.date_updated)} </div>`} </div> <!-- Article Content --> <!-- <div class="px-8 pb-8">
            {article.excerpt && (
              <div class="text-xl text-gray-700 font-medium mb-8 leading-relaxed pl-6 italic">
                {article.excerpt}
              </div>
            )} --> <!-- TODO: à décommenter --> <!-- <div class="prose prose-lg max-w-none" set:html={article.content}> --> <div class="prose prose-lg max-w-none content" data-astro-cid-4sn4zg3r>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.

Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
</div> </article></div> <!-- Navigation to other articles --> <div class="mt-4 text-center flex justify-end" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "HoverLink", $$HoverLink, { "href": "/blog", "normal": BackBtn.src, "hover": BackBtnBg.src, "data-astro-cid-4sn4zg3r": true })} </div> </main></div> ` })} `;
}, "/home/glm/front-wavmap/src/pages/blog/[slug].astro", void 0);
const $$file = "/home/glm/front-wavmap/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
