globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DT6E8k0k.mjs';
import { $ as $$Layout } from '../chunks/Layout_DZ88bLxA.mjs';
import '../chunks/runtime_DSWkPTzG.mjs';
import { e as email } from '../chunks/index_5YQCP_8e.mjs';
export { renderers } from '../renderers.mjs';

const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Forgot Password" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4"> <div class="max-w-md w-full"> <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20"> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-gray-900 mb-2"> ${"Forgot Password"} </h1> <p class="text-gray-600"> ${"Enter your email address and we'll send you a reset link"} </p> </div> <div id="form-container"> <form id="forgot-password-form" class="space-y-6"> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2"> ${email ? email() : "Email"} </label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"${addAttribute("Enter your email", "placeholder")}> </div> <button type="submit" id="submit-btn" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> <span id="btn-text"> ${"Send Reset Link"} </span> <span id="btn-loading" class="hidden"> <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> ${"Sending..."} </span> </button> <div class="text-center"> <a href="/map" class="text-blue-600 hover:text-blue-800 text-sm font-medium"> ${"Back to Login"} </a> </div> </form> <div id="success-message" class="hidden text-center"> <div class="text-green-600 mb-4"> <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2"> ${"Check your email"} </h3> <p class="text-gray-600 mb-6"> ${"We've sent a password reset link to your email address."} </p> <div class="space-y-2"> <a href="/map" class="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"> ${"Back to Login"} </a> <button id="resend-btn" class="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"> ${"Resend Email"} </button> </div> </div> </div> <div id="error-message" class="hidden mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"> <div class="flex"> <svg class="w-5 h-5 text-red-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> <p class="text-sm text-red-600" id="error-text"></p> </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/glm/wavmap/src/pages/forgot-password.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/glm/wavmap/src/pages/forgot-password.astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
