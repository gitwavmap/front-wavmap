globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CrUJU3Ch.mjs';
import { g as getLocale } from './runtime_DSWkPTzG.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const title$3 = () => `Title`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const title$2 = () => `Titre`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const title$1 = () => `Título`;

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
const title = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return title$3()
	if (locale === "fr") return title$2()
	if (locale === "es") return title$1()
	return "title"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const content$3 = () => `Content`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const content$2 = () => `Contenu`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const content$1 = () => `Contenido`;

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
const content = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return content$3()
	if (locale === "fr") return content$2()
	if (locale === "es") return content$1()
	return "content"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const cancel$3 = () => `Cancel`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const cancel$2 = () => `Annuler`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const cancel$1 = () => `Cancelar`;

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
const cancel = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return cancel$3()
	if (locale === "fr") return cancel$2()
	if (locale === "es") return cancel$1()
	return "cancel"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const update_post$3 = () => `Update post`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const update_post$2 = () => `Mettre à jour l'article`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const update_post$1 = () => `Actualizar publicación`;

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
const update_post = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return update_post$3()
	if (locale === "fr") return update_post$2()
	if (locale === "es") return update_post$1()
	return "update_post"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_post_button$3 = () => `Create post`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_post_button$2 = () => `Créer l'article`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const create_post_button$1 = () => `Crear publicación`;

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
const create_post_button = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return create_post_button$3()
	if (locale === "fr") return create_post_button$2()
	if (locale === "es") return create_post_button$1()
	return "create_post_button"
};

const $$Astro = createAstro();
const $$PostForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostForm;
  const { action, title: title$1 = "", content: content$1 = "", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form method="POST"${addAttribute(action, "action")} class="space-y-6"> ${id && renderTemplate`<input type="hidden" name="id"${addAttribute(id, "value")}>`} <div class="form-group"> <label for="title" class="form-label">${title()}:</label> <input type="text" id="title" required name="title"${addAttribute(title$1, "value")} class="form-input"> </div> <div class="form-group"> <label for="content" class="form-label">${content()}:</label> <textarea id="content" name="content" required class="form-input min-h-[200px]">${content$1}</textarea> </div> <div class="flex gap-4"> <button type="submit" class="btn btn-primary"> ${id ? update_post() : create_post_button()} </button> <a href="/" class="btn btn-secondary"> ${cancel()} </a> </div> </form>`;
}, "/home/glm/wavmap/src/components/PostForm.astro", void 0);

export { $$PostForm as $ };
