globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BB4k16uX.mjs';
import { $ as $$Layout } from '../chunks/Layout_4KDedCpR.mjs';
import '../chunks/runtime_DSWkPTzG.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found | Wavmap", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4" data-astro-cid-zetdm5md> <div class="max-w-lg w-full text-center" data-astro-cid-zetdm5md> <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20" data-astro-cid-zetdm5md> <!-- 404 Icon --> <div class="mb-8" data-astro-cid-zetdm5md> <div class="mx-auto w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center" data-astro-cid-zetdm5md> <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 10-8 8 7.962 7.962 0 014.709-1.29z" data-astro-cid-zetdm5md></path> </svg> </div> </div> <!-- Error Message --> <h1 class="text-6xl font-bold text-gray-900 mb-4" data-astro-cid-zetdm5md>404</h1> <h2 class="text-2xl font-semibold text-gray-800 mb-4" data-astro-cid-zetdm5md> ${"Page Not Found"} </h2> <p class="text-gray-600 mb-8" data-astro-cid-zetdm5md> ${"Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track!"} </p> <!-- Action Buttons --> <div class="space-y-3" data-astro-cid-zetdm5md> <a href="/map" class="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors" data-astro-cid-zetdm5md> ${"Explore the Map"} </a> <div class="flex space-x-3" data-astro-cid-zetdm5md> <a href="/" class="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors" data-astro-cid-zetdm5md> ${"Go Home"} </a> <a href="/blog" class="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors" data-astro-cid-zetdm5md> ${"Blog"} </a> </div> <button onclick="history.back()" class="w-full text-blue-600 hover:text-blue-800 text-sm font-medium py-2" data-astro-cid-zetdm5md> ${"\u2190 Go Back"} </button> </div> <!-- Popular Links --> <div class="mt-8 pt-6 border-t border-gray-200" data-astro-cid-zetdm5md> <h3 class="text-sm font-medium text-gray-500 mb-4" data-astro-cid-zetdm5md> ${"Popular Pages"} </h3> <div class="flex flex-wrap gap-2 justify-center" data-astro-cid-zetdm5md> <a href="/map" class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors" data-astro-cid-zetdm5md> ${"Artist Map"} </a> <a href="/about" class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors" data-astro-cid-zetdm5md> ${"About"} </a> <a href="/blog" class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors" data-astro-cid-zetdm5md> ${"Blog"} </a> </div> </div> </div> </div> </main> ` })} `;
}, "/home/glm/front-wavmap/src/pages/404.astro", void 0);

const $$file = "/home/glm/front-wavmap/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
