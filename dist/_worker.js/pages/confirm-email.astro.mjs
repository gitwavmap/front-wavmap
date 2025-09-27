globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BB4k16uX.mjs';
import { $ as $$Layout } from '../chunks/Layout_4KDedCpR.mjs';
import '../chunks/runtime_DSWkPTzG.mjs';
export { renderers } from '../renderers.mjs';

const $$ConfirmEmail = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Email Confirmation" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4"> <div class="max-w-md w-full"> <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20"> <div class="text-center"> <h1 class="text-3xl font-bold text-gray-900 mb-6"> ${"Email Confirmation"} </h1> <div id="confirmation-content"> <div id="loading-state" class="flex flex-col items-center"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div> <p class="text-gray-600"> ${"Confirming your email..."} </p> </div> <div id="success-state" class="hidden"> <div class="text-green-600 mb-4"> <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> </div> <p class="text-green-600 font-semibold text-lg mb-2"> ${"Email confirmed!"} </p> <p class="text-gray-600"> ${"Redirecting to login..."} </p> </div> <div id="error-state" class="hidden"> <div class="text-red-600 mb-4"> <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> </div> <p class="text-red-600 font-semibold text-lg mb-4" id="error-message"> ${"Invalid or expired link"} </p> <div class="space-y-2"> <a href="/register" class="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"> ${"Back to Register"} </a> <button id="retry-btn" class="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"> ${"Try Again"} </button> </div> </div> </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/glm/front-wavmap/src/pages/confirm-email.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/glm/front-wavmap/src/pages/confirm-email.astro", void 0);

const $$file = "/home/glm/front-wavmap/src/pages/confirm-email.astro";
const $$url = "/confirm-email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ConfirmEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
