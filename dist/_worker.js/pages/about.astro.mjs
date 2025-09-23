globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CrUJU3Ch.mjs';
import { $ as $$Layout } from '../chunks/Layout_g5zOGT9n.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_-Y9DRhkq.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `About - Wavmap`, "description": "About Wavmap - Underground music community platform" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50"> ${renderComponent($$result2, "Navbar", $$Navbar, { "currentPage": "about" })} <!-- About Content --> <main class="py-16"> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-white rounded-2xl shadow-sm p-12"> <h1 class="text-5xl font-bold text-gray-900 mb-12 text-center">About Wavmap</h1> <div class="prose prose-xl mx-auto max-w-4xl"> <p class="text-xl text-gray-700 mb-8 leading-relaxed">
Wavmap is a platform dedicated to connecting and showcasing artists from the underground music community around the world.
</p> <h2 class="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2> <p class="text-lg text-gray-700 mb-8 leading-relaxed">
We believe in the power of underground music to bring people together, challenge conventions, and create meaningful connections across geographic and cultural boundaries.
</p> <h2 class="text-3xl font-semibold text-gray-900 mb-6">What We Do</h2> <ul class="text-lg text-gray-700 mb-8 space-y-3 leading-relaxed"> <li>• Connect artists from diverse musical backgrounds and locations</li> <li>• Provide a platform for discovery and collaboration</li> <li>• Support marginalized voices in the music community</li> <li>• Foster inclusive and accessible music spaces</li> </ul> <div class="text-center mt-16"> <div class="text-8xl mb-6">🎵</div> <p class="text-xl text-gray-600 font-medium">
Join the movement and be part of the underground music revolution.
</p> </div> </div> </div> </div> </main> </div> ` })}`;
}, "/home/glm/wavmap/src/pages/about.astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
