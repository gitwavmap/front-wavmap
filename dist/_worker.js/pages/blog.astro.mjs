globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, b as createAstro, a as renderTemplate, f as defineScriptVars, r as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BB4k16uX.mjs';
import { $ as $$Layout } from '../chunks/Layout_4KDedCpR.mjs';
import { c as createSvgComponent, $ as $$Navbar } from '../chunks/Navbar_Vv4RD_JC.mjs';
import { $ as $$Footer } from '../chunks/Footer_ecRfe9Ko.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const CountImg = createSvgComponent({"meta":{"src":"/_astro/count_img.DImMY5A7.svg","width":50,"height":34,"format":"svg"},"attributes":{"width":"50","height":"34","viewBox":"0 0 50 34","fill":"none"},"children":"\n<path d=\"M35.9577 2.58414H31.4834V7.39606L21.2278 2.58414H16.7535V7.29058L6.47039 2.46411H2V25.098L13.5312 31.0847H18.3038V26.0218L28.2886 31.2011H33.0612V26.0364L43.0185 31.2011H47.7911V8.1344L35.9577 2.58414Z\" fill=\"black\" stroke=\"black\" stroke-width=\"4\" stroke-miterlimit=\"10\" />\n"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  let articles = [];
  let hasMore = false;
  let error = null;
  try {
    const response = await fetch(`${Astro2.url.origin}/api/blog/articles?page=1&limit=10`);
    const result = await response.json();
    if (result.success) {
      articles = result.data.articles;
      hasMore = result.data.pagination.hasMore;
    } else {
      error = result.error;
    }
  } catch (e) {
    error = "Failed to load articles";
  }
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  let currentPage = 1;
  let isLoading = false;
  let hasMoreArticles = hasMore;

  function initBlogPagination() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadingIndicator = document.getElementById('loading-indicator');
    const articlesGrid = document.getElementById('articles-grid');

    if (!loadMoreBtn || !articlesGrid) return;

    loadMoreBtn.addEventListener('click', async function() {
      if (isLoading || !hasMoreArticles) return;

      isLoading = true;
      currentPage++;

      // Show loading indicator
      loadingIndicator.classList.remove('hidden');
      loadMoreBtn.style.display = 'none';

      try {
        const response = await fetch(\`/api/blog/articles?page=\${currentPage}&limit=10\`);
        const result = await response.json();

        if (result.success && result.data.articles.length > 0) {
          // Add new articles to the grid
          result.data.articles.forEach(article => {
            const articleElement = createArticleElement(article);
            articlesGrid.appendChild(articleElement);
          });

          hasMoreArticles = result.data.pagination.hasMore;

          // Show/hide load more button based on hasMore
          if (hasMoreArticles) {
            loadMoreBtn.style.display = 'inline-block';
          }
        } else {
          hasMoreArticles = false;
        }
      } catch (error) {
        console.error('Error loading more articles:', error);
        alert('Error loading more articles. Please try again.');
      } finally {
        isLoading = false;
        loadingIndicator.classList.add('hidden');
        
        if (!hasMoreArticles) {
          loadMoreBtn.style.display = 'none';
        }
      }
    });
  }

  function createArticleElement(article) {
    const articleEl = document.createElement('article');
    articleEl.className = '';

    const featuredImage = article.imageUrl 
      ? \`<div class="aspect-video">
           <img src="\${article.imageUrl}" alt="\${article.title}" class="w-full h-full object-cover">
         </div>\`
      : '';

    const excerpt = article.excerpt || 'No preview available';
    const date = new Date(article.published_date || article.date_created).toLocaleDateString();

    const postNumber = article.post_number ? String(article.post_number).padStart(3, '0') : '001';

    articleEl.innerHTML = \`
      \${featuredImage}
      <div class="article">
        <div class="divider-container">
          <div class="divider"></div>
          <div class="count">
            <img src="/src/assets/images/count_img.svg" alt="" />
            <p>\${postNumber}</p>
          </div>
        </div>
        <h2 class="text-xl font-semibold" style="color: black">
          <a href="/blog/\${article.slug}" class="hover:text-primary-600 transition-colors">
            \${article.title}
          </a>
        </h2>
        <p class="text-gray-600 mb-4 line-clamp-3">\${excerpt}</p>
      </div>
    \`;

    return articleEl;
  }

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', initBlogPagination);
  
  // Also initialize immediately in case DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogPagination);
  } else {
    initBlogPagination();
  }
})();<\/script> `], ["", " <script>(function(){", `
  let currentPage = 1;
  let isLoading = false;
  let hasMoreArticles = hasMore;

  function initBlogPagination() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadingIndicator = document.getElementById('loading-indicator');
    const articlesGrid = document.getElementById('articles-grid');

    if (!loadMoreBtn || !articlesGrid) return;

    loadMoreBtn.addEventListener('click', async function() {
      if (isLoading || !hasMoreArticles) return;

      isLoading = true;
      currentPage++;

      // Show loading indicator
      loadingIndicator.classList.remove('hidden');
      loadMoreBtn.style.display = 'none';

      try {
        const response = await fetch(\\\`/api/blog/articles?page=\\\${currentPage}&limit=10\\\`);
        const result = await response.json();

        if (result.success && result.data.articles.length > 0) {
          // Add new articles to the grid
          result.data.articles.forEach(article => {
            const articleElement = createArticleElement(article);
            articlesGrid.appendChild(articleElement);
          });

          hasMoreArticles = result.data.pagination.hasMore;

          // Show/hide load more button based on hasMore
          if (hasMoreArticles) {
            loadMoreBtn.style.display = 'inline-block';
          }
        } else {
          hasMoreArticles = false;
        }
      } catch (error) {
        console.error('Error loading more articles:', error);
        alert('Error loading more articles. Please try again.');
      } finally {
        isLoading = false;
        loadingIndicator.classList.add('hidden');
        
        if (!hasMoreArticles) {
          loadMoreBtn.style.display = 'none';
        }
      }
    });
  }

  function createArticleElement(article) {
    const articleEl = document.createElement('article');
    articleEl.className = '';

    const featuredImage = article.imageUrl 
      ? \\\`<div class="aspect-video">
           <img src="\\\${article.imageUrl}" alt="\\\${article.title}" class="w-full h-full object-cover">
         </div>\\\`
      : '';

    const excerpt = article.excerpt || 'No preview available';
    const date = new Date(article.published_date || article.date_created).toLocaleDateString();

    const postNumber = article.post_number ? String(article.post_number).padStart(3, '0') : '001';

    articleEl.innerHTML = \\\`
      \\\${featuredImage}
      <div class="article">
        <div class="divider-container">
          <div class="divider"></div>
          <div class="count">
            <img src="/src/assets/images/count_img.svg" alt="" />
            <p>\\\${postNumber}</p>
          </div>
        </div>
        <h2 class="text-xl font-semibold" style="color: black">
          <a href="/blog/\\\${article.slug}" class="hover:text-primary-600 transition-colors">
            \\\${article.title}
          </a>
        </h2>
        <p class="text-gray-600 mb-4 line-clamp-3">\\\${excerpt}</p>
      </div>
    \\\`;

    return articleEl;
  }

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', initBlogPagination);
  
  // Also initialize immediately in case DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogPagination);
  } else {
    initBlogPagination();
  }
})();<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": `Blog - Wavmap`, "description": "Wavmap Blog - Underground music community stories", "data-astro-cid-ijnerlr2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50" data-astro-cid-ijnerlr2> ${renderComponent($$result2, "Navbar", $$Navbar, { "currentPage": "blog", "data-astro-cid-ijnerlr2": true })} <!-- Blog Content --> <main class="py-16" data-astro-cid-ijnerlr2> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijnerlr2> <!-- Articles Grid --> <div id="articles-container" data-astro-cid-ijnerlr2> ${error ? renderTemplate`<div class="bg-red-50 border border-red-200 rounded-lg p-8 text-center" data-astro-cid-ijnerlr2> <div class="text-4xl mb-4" data-astro-cid-ijnerlr2>⚠️</div> <h2 class="text-2xl font-semibold text-red-800 mb-4" data-astro-cid-ijnerlr2>Error Loading Articles</h2> <p class="text-red-600" data-astro-cid-ijnerlr2>${error}</p> </div>` : articles.length === 0 ? renderTemplate`<div class="bg-white rounded-2xl shadow-sm p-12 text-center" data-astro-cid-ijnerlr2> <div class="text-8xl mb-6" data-astro-cid-ijnerlr2>📝</div> <h2 class="text-3xl font-semibold text-gray-900 mb-6" data-astro-cid-ijnerlr2>No Articles Yet</h2> <p class="text-lg text-gray-600 max-w-md mx-auto" data-astro-cid-ijnerlr2>
We're working on bringing you the latest stories and insights from the underground music scene.
</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid" data-astro-cid-ijnerlr2> ${articles.map((article) => renderTemplate`<article class="" data-astro-cid-ijnerlr2> ${article.imageUrl && renderTemplate`<div class="aspect-video " data-astro-cid-ijnerlr2> <img${addAttribute(article.imageUrl, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover" data-astro-cid-ijnerlr2> </div>`} <div class="article" data-astro-cid-ijnerlr2> <div class="divider-container" data-astro-cid-ijnerlr2> <div class="divider" data-astro-cid-ijnerlr2></div> <div class="count" data-astro-cid-ijnerlr2> <img${addAttribute(CountImg.src, "src")} alt="" data-astro-cid-ijnerlr2> <p data-astro-cid-ijnerlr2>${article.post_number ? String(article.post_number).padStart(3, "0") : "001"}</p> </div> </div> <h2 class="text-xl font-semibold"${addAttribute({ color: "black" }, "style")} data-astro-cid-ijnerlr2> <a${addAttribute(`/blog/${article.slug}`, "href")} class="hover:text-primary-600 transition-colors" data-astro-cid-ijnerlr2> ${article.title} </a> </h2> <p class="text-gray-600 mb-4 line-clamp-3" data-astro-cid-ijnerlr2> ${article.excerpt || "No preview available"} </p>  </div> </article>`)} </div>`} </div> <!-- Load More Button --> ${hasMore && !error && renderTemplate`<div class="text-center mt-12" data-astro-cid-ijnerlr2> <button id="load-more-btn" class="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors" data-astro-cid-ijnerlr2>
Load More Articles
</button> </div>`} <!-- Loading indicator --> <div id="loading-indicator" class="hidden text-center mt-12" data-astro-cid-ijnerlr2> <div class="inline-flex items-center space-x-2" data-astro-cid-ijnerlr2> <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600" data-astro-cid-ijnerlr2></div> <span class="text-gray-600" data-astro-cid-ijnerlr2>Loading articles...</span> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ijnerlr2": true })} </div> ` }), defineScriptVars({ hasMore }));
}, "/home/glm/front-wavmap/src/pages/blog.astro", void 0);

const $$file = "/home/glm/front-wavmap/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
