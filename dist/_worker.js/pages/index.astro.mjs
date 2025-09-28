globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BB4k16uX.mjs';
import { $ as $$Layout } from '../chunks/Layout_C97wbnVE.mjs';
import { g as getLocale } from '../chunks/runtime_DSWkPTzG.mjs';
export { renderers } from '../renderers.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const home_title$3 = () => `Home - Content Platform`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const home_title$2 = () => `Accueil - Plateforme de contenu`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const home_title$1 = () => `Inicio - Plataforma de contenido`;

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
const home_title = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return home_title$3()
	if (locale === "fr") return home_title$2()
	if (locale === "es") return home_title$1()
	return "home_title"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const home_description$3 = () => `Create, manage and share your content easily`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const home_description$2 = () => `Créez, gérez et partagez vos contenus facilement`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const home_description$1 = () => `Crea, gestiona y comparte tu contenido fácilmente`;

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
const home_description = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return home_description$3()
	if (locale === "fr") return home_description$2()
	if (locale === "es") return home_description$1()
	return "home_description"
};

const logoGif = new Proxy({"src":"/_astro/logo.DlCqHi_y.gif","width":1920,"height":1080,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/glm/front-wavmap/src/assets/images/logo.gif";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": home_title(), "description": home_description() }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-screen w-screen bg-gradient-primary flex items-center justify-center overflow-hidden"> <a href="/map/"> <img${addAttribute(logoGif.src, "src")} alt="Logo animation" class="h-full w-full object-contain cursor-pointer"> </a> </div> ` })}`;
}, "/home/glm/front-wavmap/src/pages/index.astro", void 0);

const $$file = "/home/glm/front-wavmap/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
