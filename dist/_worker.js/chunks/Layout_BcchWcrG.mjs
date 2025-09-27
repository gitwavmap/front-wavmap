globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as createAstro, e as addAttribute, d as renderScript, a as renderTemplate, r as renderComponent, g as renderHead, h as renderSlot } from './astro/server_BB4k16uX.mjs';
/* empty css                         */
import { g as getLocale } from './runtime_DSWkPTzG.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const dashboard$3 = () => `Dashboard`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const dashboard$2 = () => `Tableau de bord`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const dashboard$1 = () => `Panel de control`;

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
const dashboard = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return dashboard$3()
	if (locale === "fr") return dashboard$2()
	if (locale === "es") return dashboard$1()
	return "dashboard"
};

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/glm/front-wavmap/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/glm/front-wavmap/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = dashboard(), description = "Manage your content easily" } = Astro2.props;
  Astro2.locals.user;
  return renderTemplate`<html${addAttribute(getLocale(), "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen bg-gray-50 font-sans antialiased"> ${renderSlot($$result, $$slots["default"])} <!-- Auth Interceptor - Gère automatiquement le refresh des tokens --> ${renderScript($$result, "/home/glm/front-wavmap/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/glm/front-wavmap/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
