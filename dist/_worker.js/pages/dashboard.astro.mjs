globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CrUJU3Ch.mjs';
import { L as Ls } from '../chunks/index_B9RZUytk.mjs';
import { $ as $$Layout, d as dashboard } from '../chunks/Layout_g5zOGT9n.mjs';
import { c as createTokenClient } from '../chunks/directus_BjEWHH71.mjs';
import { $ as $$LanguageSelector } from '../chunks/LanguageSelector_BhtPxXCb.mjs';
import { g as getLocale } from '../chunks/runtime_DSWkPTzG.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const logout$3 = () => `Logout`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const logout$2 = () => `Déconnexion`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const logout$1 = () => `Cerrar sesión`;

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
const logout = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return logout$3()
	if (locale === "fr") return logout$2()
	if (locale === "es") return logout$1()
	return "logout"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const welcome_user$3 = () => `Welcome to your dashboard`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const welcome_user$2 = () => `Bienvenue dans votre tableau de bord`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const welcome_user$1 = () => `Bienvenido a tu panel de control`;

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
const welcome_user = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return welcome_user$3()
	if (locale === "fr") return welcome_user$2()
	if (locale === "es") return welcome_user$1()
	return "welcome_user"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const my_posts$3 = () => `My Posts`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const my_posts$2 = () => `Mes Articles`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const my_posts$1 = () => `Mis Publicaciones`;

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
const my_posts = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return my_posts$3()
	if (locale === "fr") return my_posts$2()
	if (locale === "es") return my_posts$1()
	return "my_posts"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_post$3 = () => `Create Post`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_post$2 = () => `Créer un article`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_post$1 = () => `Crear publicación`;

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
const create_post = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return create_post$3()
	if (locale === "fr") return create_post$2()
	if (locale === "es") return create_post$1()
	return "create_post"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const edit_post_action$3 = () => `Edit`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const edit_post_action$2 = () => `Modifier`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const edit_post_action$1 = () => `Editar`;

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
const edit_post_action = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return edit_post_action$3()
	if (locale === "fr") return edit_post_action$2()
	if (locale === "es") return edit_post_action$1()
	return "edit_post_action"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const no_posts_yet$3 = () => `No posts yet`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const no_posts_yet$2 = () => `Aucun article pour le moment`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const no_posts_yet$1 = () => `Aún no hay publicaciones`;

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
const no_posts_yet = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return no_posts_yet$3()
	if (locale === "fr") return no_posts_yet$2()
	if (locale === "es") return no_posts_yet$1()
	return "no_posts_yet"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const start_creating$3 = () => `Start your creative journey by publishing your first post.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const start_creating$2 = () => `Commencez votre parcours de création en publiant votre premier article.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const start_creating$1 = () => `Comienza tu viaje creativo publicando tu primera publicación.`;

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
const start_creating = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return start_creating$3()
	if (locale === "fr") return start_creating$2()
	if (locale === "es") return start_creating$1()
	return "start_creating"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_first_post$3 = () => `Create your first post`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_first_post$2 = () => `Créer votre premier article`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_first_post$1 = () => `Crear tu primera publicación`;

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
const create_first_post = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return create_first_post$3()
	if (locale === "fr") return create_first_post$2()
	if (locale === "es") return create_first_post$1()
	return "create_first_post"
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = Astro2.locals.user;
  let posts;
  try {
    const sessionToken = Astro2.cookies.get("directus_session_token")?.value;
    if (sessionToken) {
      const tokenClient = createTokenClient(sessionToken);
      posts = await tokenClient.request(Ls("posts"));
    } else {
      posts = [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    posts = [];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": dashboard(), "description": dashboard(), "data-astro-cid-y55gmoyq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-secondary" data-astro-cid-y55gmoyq> <!-- Header --> <header class="bg-white shadow-sm border-b border-gray-200" data-astro-cid-y55gmoyq> <div class="container py-6" data-astro-cid-y55gmoyq> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4" data-astro-cid-y55gmoyq> <div class="space-y-1" data-astro-cid-y55gmoyq> <h1 class="page-title" data-astro-cid-y55gmoyq>${dashboard()}</h1> <p class="page-subtitle" data-astro-cid-y55gmoyq>${welcome_user()}</p> <p class="text-sm text-gray-500" data-astro-cid-y55gmoyq>${user.email}</p> </div> <div class="flex items-center gap-4" data-astro-cid-y55gmoyq> ${renderComponent($$result2, "LanguageSelector", $$LanguageSelector, { "data-astro-cid-y55gmoyq": true })} <a href="/api/auth/logout" class="btn btn-danger btn-md" data-astro-cid-y55gmoyq> ${logout()} </a> </div> </div> </div> </header> <!-- Main Content --> <main class="container py-8" data-astro-cid-y55gmoyq> <div class="card animate-fade-in" data-astro-cid-y55gmoyq> <div class="card-header" data-astro-cid-y55gmoyq> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" data-astro-cid-y55gmoyq> <h2 class="text-xl font-semibold text-gray-900" data-astro-cid-y55gmoyq>${my_posts()}</h2> <a href="/dashboard/posts/new" class="btn btn-primary btn-md" data-astro-cid-y55gmoyq>
✍️ ${create_post()} </a> </div> </div> <div class="card-content" data-astro-cid-y55gmoyq> ${posts && posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-y55gmoyq> ${posts.map((post) => renderTemplate`<article class="card card-hover group" data-astro-cid-y55gmoyq> <div class="card-content" data-astro-cid-y55gmoyq> <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors" data-astro-cid-y55gmoyq> ${post.title} </h3> <p class="text-gray-600 text-sm line-clamp-3 mb-4" data-astro-cid-y55gmoyq> ${post.content} </p> </div> <div class="card-footer" data-astro-cid-y55gmoyq> <a${addAttribute(`/dashboard/posts/${post.id}`, "href")} class="btn btn-outline btn-sm w-full" data-astro-cid-y55gmoyq>
✏️ ${edit_post_action()} </a> </div> </article>`)} </div>` : renderTemplate`<div class="text-center py-16" data-astro-cid-y55gmoyq> <div class="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center" data-astro-cid-y55gmoyq> <span class="text-3xl" data-astro-cid-y55gmoyq>📝</span> </div> <h3 class="text-lg font-medium text-gray-900 mb-2" data-astro-cid-y55gmoyq> ${no_posts_yet()} </h3> <p class="text-gray-600 mb-6 max-w-md mx-auto" data-astro-cid-y55gmoyq> ${start_creating()} </p> <a href="/dashboard/posts/new" class="btn btn-primary btn-lg" data-astro-cid-y55gmoyq>
🚀 ${create_first_post()} </a> </div>`} </div> </div> </main> </div> ` })} `;
}, "/home/glm/wavmap/src/pages/dashboard/index.astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
