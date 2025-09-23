globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CrUJU3Ch.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_g5zOGT9n.mjs';
import { $ as $$PostForm } from '../../../chunks/PostForm_CkfhQxVZ.mjs';
import { g as getLocale } from '../../../chunks/runtime_DSWkPTzG.mjs';
export { renderers } from '../../../renderers.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const new_post$3 = () => `New Post`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const new_post$2 = () => `Nouvel Article`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const new_post$1 = () => `Nueva Publicación`;

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
const new_post = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return new_post$3()
	if (locale === "fr") return new_post$2()
	if (locale === "es") return new_post$1()
	return "new_post"
};

const $$Astro = createAstro();
const $$New = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  const token = Astro2.cookies.get("directus_session_token");
  if (!token) {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": new_post() }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-secondary"> <div class="container py-8"> <div class="card animate-fade-in"> <div class="card-header"> <h1 class="text-2xl font-bold text-gray-900">${new_post()}</h1> </div> <div class="card-content"> ${renderComponent($$result2, "PostForm", $$PostForm, { "action": "/api/posts/new" })} </div> </div> </div> </div> ` })}`;
}, "/home/glm/wavmap/src/pages/dashboard/posts/new.astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/dashboard/posts/new.astro";
const $$url = "/dashboard/posts/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$New,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
