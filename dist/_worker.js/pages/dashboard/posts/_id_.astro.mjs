globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CrUJU3Ch.mjs';
import { G as Gs } from '../../../chunks/index_B9RZUytk.mjs';
import { a as createDirectusClient } from '../../../chunks/directus_BjEWHH71.mjs';
import { $ as $$PostForm } from '../../../chunks/PostForm_CkfhQxVZ.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_g5zOGT9n.mjs';
import { g as getLocale } from '../../../chunks/runtime_DSWkPTzG.mjs';
export { renderers } from '../../../renderers.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const edit_post_title$3 = () => `Edit Post`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const edit_post_title$2 = () => `Modifier l'Article`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const edit_post_title$1 = () => `Editar Publicación`;

// eslint-disable

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "fr" | "es" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const edit_post_title = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return edit_post_title$3()
	if (locale === "fr") return edit_post_title$2()
	if (locale === "es") return edit_post_title$1()
	return "edit_post_title"
};

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { id: "" } }
  ];
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const post = await createDirectusClient.request(Gs("posts", id));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": edit_post_title() }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-secondary"> <div class="container py-8"> <div class="card animate-fade-in"> <div class="card-header"> <h1 class="text-2xl font-bold text-gray-900">${edit_post_title()}</h1> </div> <div class="card-content"> ${renderComponent($$result2, "PostForm", $$PostForm, { "action": "/api/posts/update", ...post })} </div> </div> </div> </div> ` })}`;
}, "/home/glm/wavmap/src/pages/dashboard/posts/[id].astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/dashboard/posts/[id].astro";
const $$url = "/dashboard/posts/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
