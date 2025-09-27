globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderScript, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, f as defineScriptVars, r as renderComponent, b as createAstro, F as Fragment } from './astro/server_BB4k16uX.mjs';
import { g as getLocale } from './runtime_DSWkPTzG.mjs';
import { e as email } from './index_5YQCP_8e.mjs';
/* empty css                         */

// eslint-disable

/** @type {(inputs: {}) => string} */
const login$3 = () => `Login`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const login$2 = () => `Connexion`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const login$1 = () => `Iniciar sesión`;

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
const login = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return login$3()
	if (locale === "fr") return login$2()
	if (locale === "es") return login$1()
	return "login"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const register$3 = () => `Register`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const register$2 = () => `S'inscrire`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const register$1 = () => `Registrarse`;

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
const register = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return register$3()
	if (locale === "fr") return register$2()
	if (locale === "es") return register$1()
	return "register"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const password$3 = () => `Password`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const password$2 = () => `Mot de passe`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const password$1 = () => `Contraseña`;

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
const password = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return password$3()
	if (locale === "fr") return password$2()
	if (locale === "es") return password$1()
	return "password"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const first_name$3 = () => `First Name`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const first_name$2 = () => `Prénom`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const first_name$1 = () => `Nombre`;

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
const first_name = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return first_name$3()
	if (locale === "fr") return first_name$2()
	if (locale === "es") return first_name$1()
	return "first_name"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const last_name$3 = () => `Last Name`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const last_name$2 = () => `Nom`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const last_name$1 = () => `Apellido`;

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
const last_name = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return last_name$3()
	if (locale === "fr") return last_name$2()
	if (locale === "es") return last_name$1()
	return "last_name"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const signing_in$3 = () => `Signing in...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const signing_in$2 = () => `Connexion...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const signing_in$1 = () => `Iniciando sesión...`;

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
const signing_in = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return signing_in$3()
	if (locale === "fr") return signing_in$2()
	if (locale === "es") return signing_in$1()
	return "signing_in"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const signing_up$3 = () => `Signing up...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const signing_up$2 = () => `Inscription...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const signing_up$1 = () => `Registrando...`;

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
const signing_up = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return signing_up$3()
	if (locale === "fr") return signing_up$2()
	if (locale === "es") return signing_up$1()
	return "signing_up"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const network_error$3 = () => `A network error occurred`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const network_error$2 = () => `Une erreur réseau est survenue`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const network_error$1 = () => `Ocurrió un error de red`;

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
const network_error = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return network_error$3()
	if (locale === "fr") return network_error$2()
	if (locale === "es") return network_error$1()
	return "network_error"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const error_occurred$3 = () => `An error occurred`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const error_occurred$2 = () => `Une erreur est survenue`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const error_occurred$1 = () => `Ocurrió un error`;

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
const error_occurred = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return error_occurred$3()
	if (locale === "fr") return error_occurred$2()
	if (locale === "es") return error_occurred$1()
	return "error_occurred"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_name$3 = () => `Artist Name`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_name$2 = () => `Nom d'artiste`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_name$1 = () => `Nombre artístico`;

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
const artist_name = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return artist_name$3()
	if (locale === "fr") return artist_name$2()
	if (locale === "es") return artist_name$1()
	return "artist_name"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const real_name$3 = () => `Real Name`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const real_name$2 = () => `Nom réel`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const real_name$1 = () => `Nombre real`;

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
const real_name = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return real_name$3()
	if (locale === "fr") return real_name$2()
	if (locale === "es") return real_name$1()
	return "real_name"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const pronouns$3 = () => `Pronoun(s)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const pronouns$2 = () => `Pronom(s)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const pronouns$1 = () => `Pronombre(s)`;

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
const pronouns = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return pronouns$3()
	if (locale === "fr") return pronouns$2()
	if (locale === "es") return pronouns$1()
	return "pronouns"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const pronouns_placeholder$3 = () => `e.g. she/her, he/him, they/them`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const pronouns_placeholder$2 = () => `ex. elle/elle, il/il, iel/iel`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const pronouns_placeholder$1 = () => `ej. ella/ella, él/él, elle/elle`;

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
const pronouns_placeholder = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return pronouns_placeholder$3()
	if (locale === "fr") return pronouns_placeholder$2()
	if (locale === "es") return pronouns_placeholder$1()
	return "pronouns_placeholder"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const main_city$3 = () => `Main City`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const main_city$2 = () => `Ville principale`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const main_city$1 = () => `Ciudad principal`;

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
const main_city = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return main_city$3()
	if (locale === "fr") return main_city$2()
	if (locale === "es") return main_city$1()
	return "main_city"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const city_placeholder$3 = () => `Where are you based?`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const city_placeholder$2 = () => `Où êtes-vous basé(e) ?`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const city_placeholder$1 = () => `¿Dónde tienes tu base?`;

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
const city_placeholder = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return city_placeholder$3()
	if (locale === "fr") return city_placeholder$2()
	if (locale === "es") return city_placeholder$1()
	return "city_placeholder"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const city_note$3 = () => `The city where you're primarily active musically`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const city_note$2 = () => `La ville où vous êtes principalement actif musicalement`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const city_note$1 = () => `La ciudad donde eres principalmente activo musicalmente`;

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
const city_note = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return city_note$3()
	if (locale === "fr") return city_note$2()
	if (locale === "es") return city_note$1()
	return "city_note"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const country$3 = () => `Country`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const country$2 = () => `Pays`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const country$1 = () => `País`;

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
const country = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return country$3()
	if (locale === "fr") return country$2()
	if (locale === "es") return country$1()
	return "country"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_country$3 = () => `Select your country`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_country$2 = () => `Sélectionnez votre pays`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_country$1 = () => `Selecciona tu país`;

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
const select_country = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return select_country$3()
	if (locale === "fr") return select_country$2()
	if (locale === "es") return select_country$1()
	return "select_country"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const activities$3 = () => `Field(s) of Activity`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const activities$2 = () => `Domaine(s) d'activité`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const activities$1 = () => `Campo(s) de actividad`;

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
const activities = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return activities$3()
	if (locale === "fr") return activities$2()
	if (locale === "es") return activities$1()
	return "activities"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const dj$3 = () => `DJ`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const dj$2 = () => `DJ`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const dj$1 = () => `DJ`;

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
const dj = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return dj$3()
	if (locale === "fr") return dj$2()
	if (locale === "es") return dj$1()
	return "dj"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const producer$3 = () => `Producer`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const producer$2 = () => `Producteur`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const producer$1 = () => `Productor`;

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
const producer = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return producer$3()
	if (locale === "fr") return producer$2()
	if (locale === "es") return producer$1()
	return "producer"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const curator$3 = () => `Curator`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const curator$2 = () => `Curateur`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const curator$1 = () => `Curador`;

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
const curator = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return curator$3()
	if (locale === "fr") return curator$2()
	if (locale === "es") return curator$1()
	return "curator"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const promoter$3 = () => `Promoter`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const promoter$2 = () => `Promoteur`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const promoter$1 = () => `Promotor`;

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
const promoter = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return promoter$3()
	if (locale === "fr") return promoter$2()
	if (locale === "es") return promoter$1()
	return "promoter"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const label$3 = () => `Label`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const label$2 = () => `Label`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const label$1 = () => `Sello`;

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
const label = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return label$3()
	if (locale === "fr") return label$2()
	if (locale === "es") return label$1()
	return "label"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const booking_agency$3 = () => `Booking Agency`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const booking_agency$2 = () => `Agence de booking`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const booking_agency$1 = () => `Agencia de booking`;

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
const booking_agency = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return booking_agency$3()
	if (locale === "fr") return booking_agency$2()
	if (locale === "es") return booking_agency$1()
	return "booking_agency"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const collective$3 = () => `Collective`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const collective$2 = () => `Collectif`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const collective$1 = () => `Colectivo`;

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
const collective = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return collective$3()
	if (locale === "fr") return collective$2()
	if (locale === "es") return collective$1()
	return "collective"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const radio$3 = () => `Radio`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const radio$2 = () => `Radio`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const radio$1 = () => `Radio`;

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
const radio = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return radio$3()
	if (locale === "fr") return radio$2()
	if (locale === "es") return radio$1()
	return "radio"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const record_store$3 = () => `Record Store`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const record_store$2 = () => `Disquaire`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const record_store$1 = () => `Tienda de discos`;

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
const record_store = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return record_store$3()
	if (locale === "fr") return record_store$2()
	if (locale === "es") return record_store$1()
	return "record_store"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const festival$3 = () => `Festival`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const festival$2 = () => `Festival`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const festival$1 = () => `Festival`;

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
const festival = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return festival$3()
	if (locale === "fr") return festival$2()
	if (locale === "es") return festival$1()
	return "festival"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const media$3 = () => `Media`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const media$2 = () => `Médias`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const media$1 = () => `Medios`;

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
const media = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return media$3()
	if (locale === "fr") return media$2()
	if (locale === "es") return media$1()
	return "media"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const other$3 = () => `Other`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const other$2 = () => `Autre`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const other$1 = () => `Otro`;

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
const other = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return other$3()
	if (locale === "fr") return other$2()
	if (locale === "es") return other$1()
	return "other"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const musical_styles$3 = () => `Musical Styles`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const musical_styles$2 = () => `Styles musicaux`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const musical_styles$1 = () => `Estilos musicales`;

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
const musical_styles = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return musical_styles$3()
	if (locale === "fr") return musical_styles$2()
	if (locale === "es") return musical_styles$1()
	return "musical_styles"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio$3 = () => `Bio`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio$2 = () => `Biographie`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio$1 = () => `Biografía`;

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
const bio = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return bio$3()
	if (locale === "fr") return bio$2()
	if (locale === "es") return bio$1()
	return "bio"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio_max$3 = () => `max 250 characters`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio_max$2 = () => `max 250 caractères`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio_max$1 = () => `máx 250 caracteres`;

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
const bio_max = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return bio_max$3()
	if (locale === "fr") return bio_max$2()
	if (locale === "es") return bio_max$1()
	return "bio_max"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio_placeholder$3 = () => `Tell us about your musical journey...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio_placeholder$2 = () => `Parlez-nous de votre parcours musical...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const bio_placeholder$1 = () => `Cuéntanos sobre tu trayectoria musical...`;

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
const bio_placeholder = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return bio_placeholder$3()
	if (locale === "fr") return bio_placeholder$2()
	if (locale === "es") return bio_placeholder$1()
	return "bio_placeholder"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political$3 = () => `Social & Political Subjects`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political$2 = () => `Sujets sociaux et politiques`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political$1 = () => `Temas sociales y políticos`;

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
const social_political = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return social_political$3()
	if (locale === "fr") return social_political$2()
	if (locale === "es") return social_political$1()
	return "social_political"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political_optional$3 = () => `(Optional)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political_optional$2 = () => `(Optionnel)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political_optional$1 = () => `(Opcional)`;

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
const social_political_optional = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return social_political_optional$3()
	if (locale === "fr") return social_political_optional$2()
	if (locale === "es") return social_political_optional$1()
	return "social_political_optional"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political_help$3 = () => `Identifying this helps people with similar experiences and political engagements to find you for potential collaborations. Please note that your selection will be visible on your profile. Only give an answer if you feel safe and/or comfortable with giving this information publicly. You can update or remove this information at any time.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political_help$2 = () => `Identifier cela aide les personnes ayant des expériences et des engagements politiques similaires à vous trouver pour d'éventuelles collaborations. Veuillez noter que votre sélection sera visible sur votre profil. Ne donnez une réponse que si vous vous sentez en sécurité et/ou à l'aise de donner cette information publiquement. Notez également que vous pouvez mettre à jour ou supprimer cette information à tout moment.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const social_political_help$1 = () => `Identificar esto ayuda a personas con experiencias y compromisos políticos similares a encontrarte para posibles colaboraciones. Ten en cuenta que tu selección será visible en tu perfil. Solo da una respuesta si te sientes seguro/a y/o cómodo/a dando esta información públicamente. También ten en cuenta que puedes actualizar o eliminar esta información en cualquier momento.`;

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
const social_political_help = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return social_political_help$3()
	if (locale === "fr") return social_political_help$2()
	if (locale === "es") return social_political_help$1()
	return "social_political_help"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const queer_rights$3 = () => `Queer rights`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const queer_rights$2 = () => `Droits queer`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const queer_rights$1 = () => `Derechos queer`;

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
const queer_rights = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return queer_rights$3()
	if (locale === "fr") return queer_rights$2()
	if (locale === "es") return queer_rights$1()
	return "queer_rights"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const flinta_representation$3 = () => `FLINTA* representation`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const flinta_representation$2 = () => `Représentation FLINTA*`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const flinta_representation$1 = () => `Representación FLINTA*`;

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
const flinta_representation = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return flinta_representation$3()
	if (locale === "fr") return flinta_representation$2()
	if (locale === "es") return flinta_representation$1()
	return "flinta_representation"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const gender_equality$3 = () => `Gender equality`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const gender_equality$2 = () => `Égalité des genres`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const gender_equality$1 = () => `Igualdad de género`;

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
const gender_equality = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return gender_equality$3()
	if (locale === "fr") return gender_equality$2()
	if (locale === "es") return gender_equality$1()
	return "gender_equality"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const anti_racism$3 = () => `Anti-racism`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const anti_racism$2 = () => `Anti-racisme`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const anti_racism$1 = () => `Antirracismo`;

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
const anti_racism = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return anti_racism$3()
	if (locale === "fr") return anti_racism$2()
	if (locale === "es") return anti_racism$1()
	return "anti_racism"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const decolonialism$3 = () => `Decolonialism`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const decolonialism$2 = () => `Décolonialisme`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const decolonialism$1 = () => `Decolonialismo`;

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
const decolonialism = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return decolonialism$3()
	if (locale === "fr") return decolonialism$2()
	if (locale === "es") return decolonialism$1()
	return "decolonialism"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const access_disabled$3 = () => `Access for disabled`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const access_disabled$2 = () => `Accessibilité pour les personnes handicapées`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const access_disabled$1 = () => `Acceso para personas con discapacidad`;

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
const access_disabled = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return access_disabled$3()
	if (locale === "fr") return access_disabled$2()
	if (locale === "es") return access_disabled$1()
	return "access_disabled"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const economic_equality$3 = () => `Economic equality/class solidarity`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const economic_equality$2 = () => `Égalité économique/solidarité de classe`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const economic_equality$1 = () => `Igualdad económica/solidaridad de clase`;

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
const economic_equality = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return economic_equality$3()
	if (locale === "fr") return economic_equality$2()
	if (locale === "es") return economic_equality$1()
	return "economic_equality"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const climate_justice$3 = () => `Climate justice`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const climate_justice$2 = () => `Justice climatique`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const climate_justice$1 = () => `Justicia climática`;

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
const climate_justice = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return climate_justice$3()
	if (locale === "fr") return climate_justice$2()
	if (locale === "es") return climate_justice$1()
	return "climate_justice"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const geographic_marginalization$3 = () => `Geographic marginalization`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const geographic_marginalization$2 = () => `Marginalisation géographique`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const geographic_marginalization$1 = () => `Marginalización geográfica`;

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
const geographic_marginalization = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return geographic_marginalization$3()
	if (locale === "fr") return geographic_marginalization$2()
	if (locale === "es") return geographic_marginalization$1()
	return "geographic_marginalization"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development$3 = () => `How these themes inform your work`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development$2 = () => `Comment ces thèmes informent votre travail`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development$1 = () => `Cómo estos temas informan tu trabajo`;

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
const themes_development = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return themes_development$3()
	if (locale === "fr") return themes_development$2()
	if (locale === "es") return themes_development$1()
	return "themes_development"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development_optional$3 = () => `(Optional, max 500 characters)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development_optional$2 = () => `(Optionnel, max 500 caractères)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development_optional$1 = () => `(Opcional, máx 500 caracteres)`;

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
const themes_development_optional = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return themes_development_optional$3()
	if (locale === "fr") return themes_development_optional$2()
	if (locale === "es") return themes_development_optional$1()
	return "themes_development_optional"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development_placeholder$3 = () => `If you wish, develop on how these themes inform your work...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development_placeholder$2 = () => `Si vous le souhaitez, développez sur la façon dont ces thèmes informent votre travail...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const themes_development_placeholder$1 = () => `Si lo deseas, desarrolla cómo estos temas informan tu trabajo...`;

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
const themes_development_placeholder = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return themes_development_placeholder$3()
	if (locale === "fr") return themes_development_placeholder$2()
	if (locale === "es") return themes_development_placeholder$1()
	return "themes_development_placeholder"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics$3 = () => `Any other take on club politics`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics$2 = () => `Toute autre approche des politiques de club`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics$1 = () => `Cualquier otra perspectiva sobre políticas de club`;

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
const club_politics = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return club_politics$3()
	if (locale === "fr") return club_politics$2()
	if (locale === "es") return club_politics$1()
	return "club_politics"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics_optional$3 = () => `(Optional, max 500 characters)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics_optional$2 = () => `(Optionnel, max 500 caractères)`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics_optional$1 = () => `(Opcional, máx 500 caracteres)`;

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
const club_politics_optional = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return club_politics_optional$3()
	if (locale === "fr") return club_politics_optional$2()
	if (locale === "es") return club_politics_optional$1()
	return "club_politics_optional"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics_placeholder$3 = () => `Share your thoughts on club politics...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics_placeholder$2 = () => `Partagez vos réflexions sur les politiques de club...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const club_politics_placeholder$1 = () => `Comparte tus pensamientos sobre políticas de club...`;

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
const club_politics_placeholder = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return club_politics_placeholder$3()
	if (locale === "fr") return club_politics_placeholder$2()
	if (locale === "es") return club_politics_placeholder$1()
	return "club_politics_placeholder"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const join_community$3 = () => `Join the Community`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const join_community$2 = () => `Rejoindre la communauté`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const join_community$1 = () => `Únete a la comunidad`;

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
const join_community = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return join_community$3()
	if (locale === "fr") return join_community$2()
	if (locale === "es") return join_community$1()
	return "join_community"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const submitting$3 = () => `Submitting...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const submitting$2 = () => `Envoi en cours...`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const submitting$1 = () => `Enviando...`;

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
const submitting = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return submitting$3()
	if (locale === "fr") return submitting$2()
	if (locale === "es") return submitting$1()
	return "submitting"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_activity$3 = () => `Please select at least one field of activity.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_activity$2 = () => `Veuillez sélectionner au moins un domaine d'activité.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_activity$1 = () => `Por favor selecciona al menos un campo de actividad.`;

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
const select_activity = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return select_activity$3()
	if (locale === "fr") return select_activity$2()
	if (locale === "es") return select_activity$1()
	return "select_activity"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_genre$3 = () => `Please select at least one musical style.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_genre$2 = () => `Veuillez sélectionner au moins un style musical.`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const select_genre$1 = () => `Por favor selecciona al menos un estilo musical.`;

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
const select_genre = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return select_genre$3()
	if (locale === "fr") return select_genre$2()
	if (locale === "es") return select_genre$1()
	return "select_genre"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const characters$3 = () => `characters`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const characters$2 = () => `caractères`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const characters$1 = () => `caracteres`;

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
const characters = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return characters$3()
	if (locale === "fr") return characters$2()
	if (locale === "es") return characters$1()
	return "characters"
};

const $$CityCountryPicker = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="city-country-picker" data-astro-cid-wtn5ntte> <!-- Country Selection --> <div class="form-group" data-astro-cid-wtn5ntte> <label for="country" data-astro-cid-wtn5ntte>${country()} *</label> <select id="country" name="country" required data-astro-cid-wtn5ntte> <option value="" data-astro-cid-wtn5ntte>${select_country()}</option> <option value="AT" data-astro-cid-wtn5ntte>🇦🇹 Austria</option> <option value="BE" data-astro-cid-wtn5ntte>🇧🇪 Belgium</option> <option value="CH" data-astro-cid-wtn5ntte>🇨🇭 Switzerland</option> <option value="CZ" data-astro-cid-wtn5ntte>🇨🇿 Czech Republic</option> <option value="DE" data-astro-cid-wtn5ntte>🇩🇪 Germany</option> <option value="DK" data-astro-cid-wtn5ntte>🇩🇰 Denmark</option> <option value="ES" data-astro-cid-wtn5ntte>🇪🇸 Spain</option> <option value="FI" data-astro-cid-wtn5ntte>🇫🇮 Finland</option> <option value="FR" data-astro-cid-wtn5ntte>🇫🇷 France</option> <option value="GB" data-astro-cid-wtn5ntte>🇬🇧 United Kingdom</option> <option value="GR" data-astro-cid-wtn5ntte>🇬🇷 Greece</option> <option value="HU" data-astro-cid-wtn5ntte>🇭🇺 Hungary</option> <option value="IE" data-astro-cid-wtn5ntte>🇮🇪 Ireland</option> <option value="IT" data-astro-cid-wtn5ntte>🇮🇹 Italy</option> <option value="NL" data-astro-cid-wtn5ntte>🇳🇱 Netherlands</option> <option value="NO" data-astro-cid-wtn5ntte>🇳🇴 Norway</option> <option value="PL" data-astro-cid-wtn5ntte>🇵🇱 Poland</option> <option value="PT" data-astro-cid-wtn5ntte>🇵🇹 Portugal</option> <option value="RO" data-astro-cid-wtn5ntte>🇷🇴 Romania</option> <option value="SE" data-astro-cid-wtn5ntte>🇸🇪 Sweden</option> </select> </div> <!-- City Autocomplete --> <div class="form-group" data-astro-cid-wtn5ntte> <label for="city" data-astro-cid-wtn5ntte>${main_city()} *</label> <div class="autocomplete-container" data-astro-cid-wtn5ntte> <input type="text" id="city" name="city"${addAttribute(city_placeholder(), "placeholder")} required autocomplete="off" data-astro-cid-wtn5ntte> <!-- Hidden fields pour données géographiques optimisées --> <input type="hidden" id="city-id" name="cityId" value="" data-astro-cid-wtn5ntte> <input type="hidden" id="latitude" name="latitude" value="" data-astro-cid-wtn5ntte> <input type="hidden" id="longitude" name="longitude" value="" data-astro-cid-wtn5ntte> <div id="city-suggestions" class="city-suggestions hidden" data-astro-cid-wtn5ntte></div> </div> <small class="city-note" data-astro-cid-wtn5ntte>${city_note()}</small> </div> </div> ${renderScript($$result, "/home/glm/front-wavmap/src/components/CityCountryPicker.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/glm/front-wavmap/src/components/CityCountryPicker.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const SendFlat = createSvgComponent({"meta":{"src":"/_astro/send_flat.CmIJnwHY.svg","width":130,"height":68,"format":"svg"},"attributes":{"width":"130","height":"68","viewBox":"0 0 130 68","fill":"none"},"children":"\n<path d=\"M13.1793 2H2V52.9673L25.0573 66H36.9353V54.5964L54.8688 66H66.7468V54.5964L84.2144 66H96.3253V54.5964L116.821 66H128V14.3345L103.079 2H91.9002V11.0764L72.3364 2H60.9242V11.0764L42.9908 2H31.3457V11.0764L13.1793 2Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M21.5823 37.534H25.5943C25.6849 38.3953 25.8889 39.1773 26.2063 39.88C26.5463 40.56 26.9883 41.138 27.5323 41.614C28.0763 42.09 28.7223 42.4527 29.4703 42.702C30.2183 42.9287 31.0683 43.042 32.0203 43.042C32.8136 43.042 33.5276 42.9627 34.1623 42.804C34.8196 42.6453 35.3636 42.4073 35.7943 42.09C36.2476 41.75 36.5876 41.3533 36.8143 40.9C37.0636 40.424 37.1883 39.9027 37.1883 39.336C37.1883 38.656 37.0409 38.1007 36.7463 37.67C36.4516 37.2167 36.0209 36.8427 35.4543 36.548C34.9103 36.2533 34.2416 36.0153 33.4483 35.834C32.6549 35.63 31.7709 35.426 30.7963 35.222C29.6403 34.9953 28.5409 34.7347 27.4983 34.44C26.4556 34.1453 25.5376 33.7487 24.7443 33.25C23.9509 32.7513 23.3163 32.1167 22.8403 31.346C22.3643 30.5527 22.1263 29.5553 22.1263 28.354C22.1263 27.2887 22.3303 26.3253 22.7383 25.464C23.1463 24.58 23.7243 23.832 24.4723 23.22C25.2429 22.5853 26.1723 22.098 27.2603 21.758C28.3709 21.418 29.6063 21.248 30.9663 21.248C32.4849 21.248 33.8336 21.4633 35.0123 21.894C36.1909 22.3247 37.1883 22.914 38.0043 23.662C38.8429 24.41 39.5003 25.3053 39.9763 26.348C40.4523 27.368 40.7243 28.4787 40.7923 29.68H36.7803C36.6896 28.9547 36.4969 28.286 36.2023 27.674C35.9303 27.062 35.5449 26.5293 35.0463 26.076C34.5476 25.6227 33.9469 25.2713 33.2443 25.022C32.5643 24.7727 31.7936 24.648 30.9323 24.648C30.2296 24.648 29.5836 24.7387 28.9943 24.92C28.4049 25.0787 27.8949 25.328 27.4643 25.668C27.0563 25.9853 26.7389 26.3593 26.5123 26.79C26.2856 27.2207 26.1723 27.708 26.1723 28.252C26.1723 28.8867 26.3309 29.4193 26.6483 29.85C26.9883 30.258 27.4303 30.598 27.9743 30.87C28.5409 31.142 29.1983 31.3687 29.9463 31.55C30.6943 31.7313 31.4989 31.9127 32.3603 32.094C33.6069 32.3433 34.7629 32.6267 35.8283 32.944C36.9163 33.2387 37.8569 33.6467 38.6503 34.168C39.4663 34.6893 40.0896 35.3467 40.5203 36.14C40.9736 36.9333 41.2003 37.9307 41.2003 39.132C41.2003 40.2653 40.9736 41.2853 40.5203 42.192C40.0896 43.0987 39.4663 43.8693 38.6503 44.504C37.8343 45.116 36.8596 45.592 35.7263 45.932C34.5929 46.272 33.3463 46.442 31.9863 46.442C30.3769 46.442 28.9376 46.2267 27.6683 45.796C26.4216 45.3653 25.3563 44.7533 24.4723 43.96C23.5883 43.1667 22.8969 42.226 22.3983 41.138C21.8996 40.05 21.6276 38.8487 21.5823 37.534ZM43.5566 46V21.69H60.2846V25.09H47.4326V32.128H59.7066V35.46H47.4326V42.6H60.4546V46H43.5566ZM63.3133 46V21.69H68.1413L80.0413 41.172V21.69H83.9173V46H78.8853L67.1893 27.028V46H63.3133ZM87.2851 46V21.69H95.4791C99.5138 21.69 102.608 22.7327 104.761 24.818C106.914 26.9033 107.991 29.9067 107.991 33.828C107.991 37.772 106.914 40.7867 104.761 42.872C102.608 44.9573 99.5138 46 95.4791 46H87.2851ZM91.1611 42.6H95.4791C98.2898 42.6 100.398 41.886 101.803 40.458C103.231 39.0073 103.945 36.7973 103.945 33.828C103.945 30.8587 103.242 28.66 101.837 27.232C100.432 25.804 98.3125 25.09 95.4791 25.09H91.1611V42.6Z\" fill=\"black\" />\n"});

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$ArtistForm = createComponent(async ($$result, $$props, $$slots) => {
  getLocale();
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div class="artist-form-container" data-astro-cid-vnw7dsdz> <form class="artist-form" id="artist-signup-form" data-astro-cid-vnw7dsdz> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="artist-name" data-astro-cid-vnw7dsdz>', ' *</label> <input type="text" id="artist-name" name="artistName" required data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="real-name" data-astro-cid-vnw7dsdz>', '</label> <input type="text" id="real-name" name="realName" data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="pronouns" data-astro-cid-vnw7dsdz>', '</label> <input type="text" id="pronouns" name="pronouns"', ' data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="email" data-astro-cid-vnw7dsdz>', ' *</label> <input type="email" id="email" name="email" required data-astro-cid-vnw7dsdz> </div> <!-- Smart City/Country Picker --> ', ' <div class="form-group" data-astro-cid-vnw7dsdz> <label data-astro-cid-vnw7dsdz>', ' *</label> <div class="checkbox-group" data-astro-cid-vnw7dsdz> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="dj" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="producer" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="curator" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="promoter" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="label" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="bookingagency" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="collective" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="radio" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="recordstore" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="festival" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="medias" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="other" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> </div> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label data-astro-cid-vnw7dsdz>', ' *</label> <div class="checkbox-group" data-astro-cid-vnw7dsdz> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bass" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBass\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bailefunkbresilianfunk" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBaile Funk / Bresilian Funk\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="breakbeat" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBreakbeat\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="drumandbass" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDrum & Bass\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dubstep" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDubstep\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="jerseyclub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nJersey Club\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="garage" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGarage\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="breaks" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBreaks\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="techno" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTechno\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dancehall" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDancehall\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="footwork" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nFootwork\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="grime" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGrime\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="jungle" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nJungle\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="rap" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nRap\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bouyon" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBouyon\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="hiphop" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHip-Hop\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="shatta" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nShatta\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="club" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nClub\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="baltimoreclub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBaltimore Club\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDub\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ghettotech" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGhetto Tech\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="gqom" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGqom\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="house" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHouse\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="trap" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTrap\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="afrobeats" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAfrobeats\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="amapiano" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAmapiano\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dembow" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDembow\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ukfunky" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nUK Funky\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="reggaeton" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nReggaeton\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ghettohouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGhetto House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="speedgarage" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nSpeed Garage\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="afrohouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAfro House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="batida" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBatida\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="experimental" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nExperimental\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="electronic" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nElectronic\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ambient" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAmbient\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="neoperrero" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nNeo Perreo\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="trance" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTrance\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="deephouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDeep House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dubtechno" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDub Techno\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="techhouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTech House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="acid" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAcid\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bassline" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBassline\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="electro" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nElectro\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="brokenbeat" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBroken Beat\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="kuduro" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nKuduro\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ballroom" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBallroom\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="cumbia" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nCumbia\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="guaracha" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGuaracha\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="downtempo" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDowntempo\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="hyperpop" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHyperpop\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dance" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDance\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="drill" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDrill\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="gabber" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGabber\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="soca" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nSoca\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="coupedecale" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nCoup\xE9-D\xE9cal\xE9\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="electronica" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nElectronica\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="minimal" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nMinimal\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="psytrance" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nPsytrance\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="zouk" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nZouk\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="hardcore" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHardcore\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="balearichouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBalearic House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="chaabi" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nChaabi\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="donk" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDonk\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="kwaito" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nKwaito\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="raptorhouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nRaptor House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="singeli" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nSingeli\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="calypso" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nCalypso\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="miamibass" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nMiami Bass\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="harddrum" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHard Drum\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="juke" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nJuke\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bubbling" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBubbling\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="latinclub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nLatin Club\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="rai" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nRai\n</label> </div> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="soundcloud" data-astro-cid-vnw7dsdz>SoundCloud</label> <input type="url" id="soundcloud" name="soundcloud" placeholder="https://soundcloud.com/yourprofile" data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="spotify" data-astro-cid-vnw7dsdz>Spotify</label> <input type="url" id="spotify" name="spotify" placeholder="https://open.spotify.com/artist/..." data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="instagram" data-astro-cid-vnw7dsdz>Instagram</label> <input type="text" id="instagram" name="instagram" placeholder="@yourusername" data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="bio" data-astro-cid-vnw7dsdz>', " (", ')</label> <textarea id="bio" name="bio" rows="4" maxlength="250"', ` onInput="updateCharCount('bio', 'bio-count', 250)" data-astro-cid-vnw7dsdz></textarea> <small class="char-count" id="bio-count" data-astro-cid-vnw7dsdz>0/250 `, '</small> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label data-astro-cid-vnw7dsdz>', " ", '</label> <p class="form-help-text" data-astro-cid-vnw7dsdz> ', ' </p> <div class="checkbox-group" data-astro-cid-vnw7dsdz> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="queerrights" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="flintarepresentation" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="genderequality" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="anti-racism" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="decolonialism" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="acccessibilityforpeoplewithdisabilities" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="economicequalityclasssolidarity" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="climatejustice" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="geographicmarginalization" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> </div> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="themes-development" data-astro-cid-vnw7dsdz>', " ", '</label> <textarea id="themes-development" name="themesDevelopment" rows="4" maxlength="500"', ` onInput="updateCharCount('themes-development', 'themes-count', 500)" data-astro-cid-vnw7dsdz></textarea> <small class="char-count" id="themes-count" data-astro-cid-vnw7dsdz>0/500 `, '</small> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="club-politics" data-astro-cid-vnw7dsdz>', " ", '</label> <textarea id="club-politics" name="clubPolitics" rows="4" maxlength="500"', ` onInput="updateCharCount('club-politics', 'club-count', 500)" data-astro-cid-vnw7dsdz></textarea> <small class="char-count" id="club-count" data-astro-cid-vnw7dsdz>0/500 `, '</small> </div> <button type="submit" class="submit-btn" data-astro-cid-vnw7dsdz> <img', ' alt="Submit" data-astro-cid-vnw7dsdz> </button> </form> </div> <script>(function(){', "\n  // Function to update character count\n  function updateCharCount(textareaId, counterId, maxLength) {\n    const textarea = document.getElementById(textareaId);\n    const counter = document.getElementById(counterId);\n    if (textarea && counter) {\n      const currentLength = textarea.value.length;\n      counter.textContent = `${currentLength}/${maxLength} ${characters}`;\n      \n      // Change color when approaching limit\n      if (currentLength > maxLength * 0.8) {\n        counter.style.color = '#ef4444'; // red\n      } else if (currentLength > maxLength * 0.6) {\n        counter.style.color = '#f59e0b'; // amber\n      } else {\n        counter.style.color = '#6b7280'; // gray\n      }\n    }\n  }\n\n  function initArtistForm() {\n    const form = document.getElementById('artist-signup-form');\n    if (!form) return;\n\n    // Initialize character counters\n    updateCharCount('bio', 'bio-count', 250);\n    updateCharCount('themes-development', 'themes-count', 500);\n    updateCharCount('club-politics', 'club-count', 500);\n\n    \n    form.addEventListener('submit', async function(e) {\n      e.preventDefault();\n      \n      const submitBtn = form.querySelector('button[type=\"submit\"]');\n      const originalText = submitBtn?.textContent || joinCommunity;\n      \n      // Check that at least one activity is selected\n      const activitiesChecked = form.querySelectorAll('input[name=\"activities\"]:checked');\n      if (activitiesChecked.length === 0) {\n        alert(selectActivity);\n        return;\n      }\n\n      // Check that at least one genre is selected\n      const genresChecked = form.querySelectorAll('input[name=\"genres\"]:checked');\n      if (genresChecked.length === 0) {\n        alert(selectGenre);\n        return;\n      }\n\n      // Validate and auto-resolve city coordinates if missing\n      const cityInput = form.querySelector('#city');\n      const countryInput = form.querySelector('#country');\n      const cityIdField = form.querySelector('#city-id');\n      const latField = form.querySelector('#latitude');\n      const lngField = form.querySelector('#longitude');\n\n      if (cityInput && countryInput && cityInput.value && countryInput.value) {\n        // If city is entered but no cityId, try to find it\n        if (!cityIdField?.value || !latField?.value || !lngField?.value) {\n          console.log('\u{1F50D} Missing city data, attempting to resolve...');\n\n          // Try to find the city in the cities data\n          if (window.citiesData) {\n            const matchingCity = window.citiesData.find(city =>\n              city.name.toLowerCase() === cityInput.value.toLowerCase() &&\n              city.country === countryInput.value\n            );\n\n            if (matchingCity) {\n              console.log('\u2705 Found matching city:', matchingCity);\n              if (cityIdField) cityIdField.value = matchingCity.id;\n              if (latField && matchingCity.coordinates) latField.value = matchingCity.coordinates[1];\n              if (lngField && matchingCity.coordinates) lngField.value = matchingCity.coordinates[0];\n            } else {\n              console.warn('\u26A0\uFE0F City not found in database:', cityInput.value, countryInput.value);\n              alert(`Warning: The city \"${cityInput.value}\" was not found in our database. Your submission will be processed but may not appear on the map immediately.`);\n            }\n          }\n        }\n      }\n      \n      try {\n        // Disable button\n        if (submitBtn) {\n          submitBtn.disabled = true;\n          submitBtn.textContent = submitting;\n        }\n        \n        // Prepare data\n        const formData = new FormData(form);\n        \n        // Send to API\n        const response = await fetch('/api/artist/submit', {\n          method: 'POST',\n          body: formData,\n          credentials: 'include' // Important: include cookies\n        });\n\n        if (!response) {\n          throw new Error('No response received from server');\n        }\n\n        if (!response.ok) {\n          throw new Error(`HTTP error! status: ${response.status}`);\n        }\n\n        const result = await response.json();\n        \n        if (result.success) {\n          // Success - redirect to thank you page\n          if (result.redirect) {\n            window.location.href = result.redirect;\n          } else {\n            window.location.href = '/thank-you';\n          }\n        } else {\n          // Error\n          alert(`\u274C ${result.message}`);\n        }\n        \n      } catch (error) {\n        console.error('Form submission error:', error);\n        alert('\u274C Network error. Please check your connection and try again.');\n      } finally {\n        // Re-enable button\n        if (submitBtn) {\n          submitBtn.disabled = false;\n          submitBtn.textContent = originalText;\n        }\n      }\n    });\n  }\n\n  // Initialize on load\n  document.addEventListener('DOMContentLoaded', initArtistForm);\n  \n  // Make updateCharCount available globally for inline onInput calls\n  window.updateCharCount = updateCharCount;\n})();<\/script> "], ["", '<div class="artist-form-container" data-astro-cid-vnw7dsdz> <form class="artist-form" id="artist-signup-form" data-astro-cid-vnw7dsdz> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="artist-name" data-astro-cid-vnw7dsdz>', ' *</label> <input type="text" id="artist-name" name="artistName" required data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="real-name" data-astro-cid-vnw7dsdz>', '</label> <input type="text" id="real-name" name="realName" data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="pronouns" data-astro-cid-vnw7dsdz>', '</label> <input type="text" id="pronouns" name="pronouns"', ' data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="email" data-astro-cid-vnw7dsdz>', ' *</label> <input type="email" id="email" name="email" required data-astro-cid-vnw7dsdz> </div> <!-- Smart City/Country Picker --> ', ' <div class="form-group" data-astro-cid-vnw7dsdz> <label data-astro-cid-vnw7dsdz>', ' *</label> <div class="checkbox-group" data-astro-cid-vnw7dsdz> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="dj" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="producer" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="curator" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="promoter" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="label" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="bookingagency" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="collective" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="radio" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="recordstore" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="festival" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="medias" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="activities" value="other" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> </div> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label data-astro-cid-vnw7dsdz>', ' *</label> <div class="checkbox-group" data-astro-cid-vnw7dsdz> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bass" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBass\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bailefunkbresilianfunk" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBaile Funk / Bresilian Funk\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="breakbeat" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBreakbeat\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="drumandbass" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDrum & Bass\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dubstep" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDubstep\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="jerseyclub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nJersey Club\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="garage" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGarage\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="breaks" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBreaks\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="techno" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTechno\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dancehall" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDancehall\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="footwork" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nFootwork\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="grime" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGrime\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="jungle" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nJungle\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="rap" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nRap\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bouyon" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBouyon\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="hiphop" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHip-Hop\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="shatta" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nShatta\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="club" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nClub\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="baltimoreclub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBaltimore Club\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDub\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ghettotech" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGhetto Tech\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="gqom" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGqom\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="house" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHouse\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="trap" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTrap\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="afrobeats" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAfrobeats\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="amapiano" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAmapiano\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dembow" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDembow\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ukfunky" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nUK Funky\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="reggaeton" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nReggaeton\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ghettohouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGhetto House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="speedgarage" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nSpeed Garage\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="afrohouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAfro House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="batida" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBatida\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="experimental" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nExperimental\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="electronic" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nElectronic\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ambient" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAmbient\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="neoperrero" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nNeo Perreo\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="trance" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTrance\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="deephouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDeep House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dubtechno" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDub Techno\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="techhouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nTech House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="acid" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nAcid\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bassline" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBassline\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="electro" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nElectro\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="brokenbeat" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBroken Beat\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="kuduro" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nKuduro\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="ballroom" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBallroom\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="cumbia" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nCumbia\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="guaracha" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGuaracha\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="downtempo" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDowntempo\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="hyperpop" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHyperpop\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="dance" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDance\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="drill" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDrill\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="gabber" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nGabber\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="soca" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nSoca\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="coupedecale" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nCoup\xE9-D\xE9cal\xE9\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="electronica" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nElectronica\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="minimal" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nMinimal\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="psytrance" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nPsytrance\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="zouk" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nZouk\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="hardcore" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHardcore\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="balearichouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBalearic House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="chaabi" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nChaabi\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="donk" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nDonk\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="kwaito" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nKwaito\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="raptorhouse" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nRaptor House\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="singeli" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nSingeli\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="calypso" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nCalypso\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="miamibass" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nMiami Bass\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="harddrum" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nHard Drum\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="juke" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nJuke\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="bubbling" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nBubbling\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="latinclub" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nLatin Club\n</label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="genres" value="rai" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span>\nRai\n</label> </div> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="soundcloud" data-astro-cid-vnw7dsdz>SoundCloud</label> <input type="url" id="soundcloud" name="soundcloud" placeholder="https://soundcloud.com/yourprofile" data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="spotify" data-astro-cid-vnw7dsdz>Spotify</label> <input type="url" id="spotify" name="spotify" placeholder="https://open.spotify.com/artist/..." data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="instagram" data-astro-cid-vnw7dsdz>Instagram</label> <input type="text" id="instagram" name="instagram" placeholder="@yourusername" data-astro-cid-vnw7dsdz> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="bio" data-astro-cid-vnw7dsdz>', " (", ')</label> <textarea id="bio" name="bio" rows="4" maxlength="250"', ` onInput="updateCharCount('bio', 'bio-count', 250)" data-astro-cid-vnw7dsdz></textarea> <small class="char-count" id="bio-count" data-astro-cid-vnw7dsdz>0/250 `, '</small> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label data-astro-cid-vnw7dsdz>', " ", '</label> <p class="form-help-text" data-astro-cid-vnw7dsdz> ', ' </p> <div class="checkbox-group" data-astro-cid-vnw7dsdz> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="queerrights" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="flintarepresentation" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="genderequality" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="anti-racism" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="decolonialism" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="acccessibilityforpeoplewithdisabilities" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="economicequalityclasssolidarity" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="climatejustice" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> <label class="checkbox-item" data-astro-cid-vnw7dsdz> <input type="checkbox" name="socialPolitical" value="geographicmarginalization" data-astro-cid-vnw7dsdz> <span class="checkmark" data-astro-cid-vnw7dsdz></span> ', ' </label> </div> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="themes-development" data-astro-cid-vnw7dsdz>', " ", '</label> <textarea id="themes-development" name="themesDevelopment" rows="4" maxlength="500"', ` onInput="updateCharCount('themes-development', 'themes-count', 500)" data-astro-cid-vnw7dsdz></textarea> <small class="char-count" id="themes-count" data-astro-cid-vnw7dsdz>0/500 `, '</small> </div> <div class="form-group" data-astro-cid-vnw7dsdz> <label for="club-politics" data-astro-cid-vnw7dsdz>', " ", '</label> <textarea id="club-politics" name="clubPolitics" rows="4" maxlength="500"', ` onInput="updateCharCount('club-politics', 'club-count', 500)" data-astro-cid-vnw7dsdz></textarea> <small class="char-count" id="club-count" data-astro-cid-vnw7dsdz>0/500 `, '</small> </div> <button type="submit" class="submit-btn" data-astro-cid-vnw7dsdz> <img', ' alt="Submit" data-astro-cid-vnw7dsdz> </button> </form> </div> <script>(function(){', "\n  // Function to update character count\n  function updateCharCount(textareaId, counterId, maxLength) {\n    const textarea = document.getElementById(textareaId);\n    const counter = document.getElementById(counterId);\n    if (textarea && counter) {\n      const currentLength = textarea.value.length;\n      counter.textContent = \\`\\${currentLength}/\\${maxLength} \\${characters}\\`;\n      \n      // Change color when approaching limit\n      if (currentLength > maxLength * 0.8) {\n        counter.style.color = '#ef4444'; // red\n      } else if (currentLength > maxLength * 0.6) {\n        counter.style.color = '#f59e0b'; // amber\n      } else {\n        counter.style.color = '#6b7280'; // gray\n      }\n    }\n  }\n\n  function initArtistForm() {\n    const form = document.getElementById('artist-signup-form');\n    if (!form) return;\n\n    // Initialize character counters\n    updateCharCount('bio', 'bio-count', 250);\n    updateCharCount('themes-development', 'themes-count', 500);\n    updateCharCount('club-politics', 'club-count', 500);\n\n    \n    form.addEventListener('submit', async function(e) {\n      e.preventDefault();\n      \n      const submitBtn = form.querySelector('button[type=\"submit\"]');\n      const originalText = submitBtn?.textContent || joinCommunity;\n      \n      // Check that at least one activity is selected\n      const activitiesChecked = form.querySelectorAll('input[name=\"activities\"]:checked');\n      if (activitiesChecked.length === 0) {\n        alert(selectActivity);\n        return;\n      }\n\n      // Check that at least one genre is selected\n      const genresChecked = form.querySelectorAll('input[name=\"genres\"]:checked');\n      if (genresChecked.length === 0) {\n        alert(selectGenre);\n        return;\n      }\n\n      // Validate and auto-resolve city coordinates if missing\n      const cityInput = form.querySelector('#city');\n      const countryInput = form.querySelector('#country');\n      const cityIdField = form.querySelector('#city-id');\n      const latField = form.querySelector('#latitude');\n      const lngField = form.querySelector('#longitude');\n\n      if (cityInput && countryInput && cityInput.value && countryInput.value) {\n        // If city is entered but no cityId, try to find it\n        if (!cityIdField?.value || !latField?.value || !lngField?.value) {\n          console.log('\u{1F50D} Missing city data, attempting to resolve...');\n\n          // Try to find the city in the cities data\n          if (window.citiesData) {\n            const matchingCity = window.citiesData.find(city =>\n              city.name.toLowerCase() === cityInput.value.toLowerCase() &&\n              city.country === countryInput.value\n            );\n\n            if (matchingCity) {\n              console.log('\u2705 Found matching city:', matchingCity);\n              if (cityIdField) cityIdField.value = matchingCity.id;\n              if (latField && matchingCity.coordinates) latField.value = matchingCity.coordinates[1];\n              if (lngField && matchingCity.coordinates) lngField.value = matchingCity.coordinates[0];\n            } else {\n              console.warn('\u26A0\uFE0F City not found in database:', cityInput.value, countryInput.value);\n              alert(\\`Warning: The city \"\\${cityInput.value}\" was not found in our database. Your submission will be processed but may not appear on the map immediately.\\`);\n            }\n          }\n        }\n      }\n      \n      try {\n        // Disable button\n        if (submitBtn) {\n          submitBtn.disabled = true;\n          submitBtn.textContent = submitting;\n        }\n        \n        // Prepare data\n        const formData = new FormData(form);\n        \n        // Send to API\n        const response = await fetch('/api/artist/submit', {\n          method: 'POST',\n          body: formData,\n          credentials: 'include' // Important: include cookies\n        });\n\n        if (!response) {\n          throw new Error('No response received from server');\n        }\n\n        if (!response.ok) {\n          throw new Error(\\`HTTP error! status: \\${response.status}\\`);\n        }\n\n        const result = await response.json();\n        \n        if (result.success) {\n          // Success - redirect to thank you page\n          if (result.redirect) {\n            window.location.href = result.redirect;\n          } else {\n            window.location.href = '/thank-you';\n          }\n        } else {\n          // Error\n          alert(\\`\u274C \\${result.message}\\`);\n        }\n        \n      } catch (error) {\n        console.error('Form submission error:', error);\n        alert('\u274C Network error. Please check your connection and try again.');\n      } finally {\n        // Re-enable button\n        if (submitBtn) {\n          submitBtn.disabled = false;\n          submitBtn.textContent = originalText;\n        }\n      }\n    });\n  }\n\n  // Initialize on load\n  document.addEventListener('DOMContentLoaded', initArtistForm);\n  \n  // Make updateCharCount available globally for inline onInput calls\n  window.updateCharCount = updateCharCount;\n})();<\/script> "])), maybeRenderHead(), artist_name({}, { locale: "en" }), real_name({}, { locale: "en" }), pronouns({}, { locale: "en" }), addAttribute(pronouns_placeholder({}, { locale: "en" }), "placeholder"), email({}, { locale: "en" }), renderComponent($$result, "CityCountryPicker", $$CityCountryPicker, { "data-astro-cid-vnw7dsdz": true }), activities({}, { locale: "en" }), dj({}, { locale: "en" }), producer({}, { locale: "en" }), curator({}, { locale: "en" }), promoter({}, { locale: "en" }), label({}, { locale: "en" }), booking_agency({}, { locale: "en" }), collective({}, { locale: "en" }), radio({}, { locale: "en" }), record_store({}, { locale: "en" }), festival({}, { locale: "en" }), media({}, { locale: "en" }), other({}, { locale: "en" }), musical_styles({}, { locale: "en" }), bio({}, { locale: "en" }), bio_max({}, { locale: "en" }), addAttribute(bio_placeholder({}, { locale: "en" }), "placeholder"), characters({}, { locale: "en" }), social_political({}, { locale: "en" }), social_political_optional({}, { locale: "en" }), social_political_help({}, { locale: "en" }), queer_rights({}, { locale: "en" }), flinta_representation({}, { locale: "en" }), gender_equality({}, { locale: "en" }), anti_racism({}, { locale: "en" }), decolonialism({}, { locale: "en" }), access_disabled({}, { locale: "en" }), economic_equality({}, { locale: "en" }), climate_justice({}, { locale: "en" }), geographic_marginalization({}, { locale: "en" }), themes_development({}, { locale: "en" }), themes_development_optional({}, { locale: "en" }), addAttribute(themes_development_placeholder({}, { locale: "en" }), "placeholder"), characters({}, { locale: "en" }), club_politics({}, { locale: "en" }), club_politics_optional({}, { locale: "en" }), addAttribute(club_politics_placeholder({}, { locale: "en" }), "placeholder"), characters({}, { locale: "en" }), addAttribute(SendFlat.src, "src"), defineScriptVars({
    selectActivity: select_activity({}, { locale: "en" }),
    selectGenre: select_genre({}, { locale: "en" }),
    submitting: submitting({}, { locale: "en" }),
    joinCommunity: join_community({}, { locale: "en" }),
    characters: characters({}, { locale: "en" })
  }));
}, "/home/glm/front-wavmap/src/components/ArtistForm.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$AuthModalForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="auth-modal-container" data-astro-cid-pup5zyrj> <div class="auth-toggle-buttons" data-astro-cid-pup5zyrj> <button id="login-tab" class="tab-button active" data-astro-cid-pup5zyrj>', '</button> <button id="register-tab" class="tab-button" data-astro-cid-pup5zyrj>', '</button> </div> <!-- Login Form --> <div id="login-form" class="auth-form-section active" data-astro-cid-pup5zyrj> <div id="login-error" class="error-message hidden" data-astro-cid-pup5zyrj></div> <form id="auth-login-form" method="POST" action="/api/auth/login" class="space-y-4" data-astro-cid-pup5zyrj> <div class="form-group" data-astro-cid-pup5zyrj> <label for="login-email" class="form-label" data-astro-cid-pup5zyrj>', '</label> <input type="email" id="login-email" name="email" class="form-input" required data-astro-cid-pup5zyrj> </div> <div class="form-group" data-astro-cid-pup5zyrj> <label for="login-password" class="form-label" data-astro-cid-pup5zyrj>', '</label> <input type="password" id="login-password" name="password" class="form-input" required data-astro-cid-pup5zyrj> </div> <button type="submit" class="btn btn-primary btn-lg w-full" id="login-submit" data-astro-cid-pup5zyrj> ', ' </button> </form> </div> <!-- Register Form --> <div id="register-form" class="auth-form-section" data-astro-cid-pup5zyrj> <div id="register-error" class="error-message hidden" data-astro-cid-pup5zyrj></div> <form id="auth-register-form" method="POST" action="/api/auth/register" class="space-y-4" data-astro-cid-pup5zyrj> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-pup5zyrj> <div class="form-group" data-astro-cid-pup5zyrj> <label for="register-firstName" class="form-label" data-astro-cid-pup5zyrj>', '</label> <input type="text" id="register-firstName" name="firstName" class="form-input" required data-astro-cid-pup5zyrj> </div> <div class="form-group" data-astro-cid-pup5zyrj> <label for="register-lastName" class="form-label" data-astro-cid-pup5zyrj>', '</label> <input type="text" id="register-lastName" name="lastName" class="form-input" required data-astro-cid-pup5zyrj> </div> </div> <div class="form-group" data-astro-cid-pup5zyrj> <label for="register-email" class="form-label" data-astro-cid-pup5zyrj>', '</label> <input type="email" id="register-email" name="email" class="form-input" required data-astro-cid-pup5zyrj> </div> <div class="form-group" data-astro-cid-pup5zyrj> <label for="register-password" class="form-label" data-astro-cid-pup5zyrj>', '</label> <input type="password" id="register-password" name="password" class="form-input" required data-astro-cid-pup5zyrj> </div> <button type="submit" class="btn btn-primary btn-lg w-full" id="register-submit" data-astro-cid-pup5zyrj> ', " </button> </form> </div> </div> <script>(function(){", "\n  function initAuthModal() {\n    const loginTab = document.getElementById('login-tab');\n    const registerTab = document.getElementById('register-tab');\n    const loginForm = document.getElementById('login-form');\n    const registerForm = document.getElementById('register-form');\n    const loginSubmit = document.getElementById('login-submit');\n    const registerSubmit = document.getElementById('register-submit');\n    const loginError = document.getElementById('login-error');\n    const registerError = document.getElementById('register-error');\n\n    // Tab switching\n    loginTab?.addEventListener('click', () => {\n      loginTab.classList.add('active');\n      registerTab.classList.remove('active');\n      loginForm.classList.add('active');\n      registerForm.classList.remove('active');\n    });\n\n    registerTab?.addEventListener('click', () => {\n      registerTab.classList.add('active');\n      loginTab.classList.remove('active');\n      registerForm.classList.add('active');\n      loginForm.classList.remove('active');\n    });\n\n    // Login form handling\n    document.getElementById('auth-login-form')?.addEventListener('submit', async (e) => {\n      e.preventDefault();\n      const formData = new FormData(e.target);\n      const originalText = loginSubmit?.textContent;\n      \n      try {\n        loginSubmit.disabled = true;\n        loginSubmit.textContent = signingIn;\n        loginError.classList.add('hidden');\n        \n        const response = await fetch('/api/auth/login', {\n          method: 'POST',\n          body: formData,\n        });\n        \n        if (response.ok) {\n          // Success - trigger artist form view\n          window.dispatchEvent(new CustomEvent('authSuccess'));\n        } else {\n          const data = await response.json();\n          loginError.textContent = data.error || errorOccurred;\n          loginError.classList.remove('hidden');\n        }\n      } catch (error) {\n        loginError.textContent = networkError;\n        loginError.classList.remove('hidden');\n      } finally {\n        loginSubmit.disabled = false;\n        loginSubmit.textContent = originalText;\n      }\n    });\n\n    // Register form handling\n    document.getElementById('auth-register-form')?.addEventListener('submit', async (e) => {\n      e.preventDefault();\n      const formData = new FormData(e.target);\n      const originalText = registerSubmit?.textContent;\n      \n      try {\n        registerSubmit.disabled = true;\n        registerSubmit.textContent = signingUp;\n        registerError.classList.add('hidden');\n        \n        const response = await fetch('/api/auth/register', {\n          method: 'POST',\n          body: formData,\n        });\n        \n        const data = await response.json();\n        \n        if (response.ok) {\n          // Success message\n          registerError.textContent = data.message || 'Registration successful!';\n          registerError.className = 'success-message';\n          registerError.classList.remove('hidden');\n          \n          // Switch to login after success\n          setTimeout(() => {\n            loginTab.click();\n            registerError.classList.add('hidden');\n            registerError.className = 'error-message hidden';\n          }, 2000);\n        } else {\n          registerError.textContent = data.error || errorOccurred;\n          registerError.classList.remove('hidden');\n        }\n      } catch (error) {\n        registerError.textContent = networkError;\n        registerError.classList.remove('hidden');\n      } finally {\n        registerSubmit.disabled = false;\n        registerSubmit.textContent = originalText;\n      }\n    });\n  }\n\n  // Initialize when loaded\n  document.addEventListener('DOMContentLoaded', initAuthModal);\n  if (document.readyState !== 'loading') {\n    initAuthModal();\n  }\n})();<\/script> "])), maybeRenderHead(), login({}, { locale: "en" }), register({}, { locale: "en" }), email({}, { locale: "en" }), password({}, { locale: "en" }), login({}, { locale: "en" }), first_name({}, { locale: "en" }), last_name({}, { locale: "en" }), email({}, { locale: "en" }), password({}, { locale: "en" }), register({}, { locale: "en" }), defineScriptVars({
    signingIn: signing_in({}, { locale: "en" }),
    signingUp: signing_up({}, { locale: "en" }),
    errorOccurred: error_occurred({}, { locale: "en" }),
    networkError: network_error({}, { locale: "en" })
  }));
}, "/home/glm/front-wavmap/src/components/AuthModalForm.astro", void 0);

const $$Astro$2 = createAstro();
const $$ArtistFormModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArtistFormModal;
  const { user, isAuthenticated } = Astro2.props;
  return renderTemplate`<!-- Dropdown Content -->${maybeRenderHead()}<div class="dropdown-content" data-astro-cid-nmihdjzr> <h2 class="modal-title" data-astro-cid-nmihdjzr>Join the map</h2> <!-- Form Content --> <!-- Auth Form (shown when not logged in) --> <div id="auth-section"${addAttribute(isAuthenticated ? "hidden" : "", "class")} data-astro-cid-nmihdjzr> <div class="auth-intro" data-astro-cid-nmihdjzr> <p data-astro-cid-nmihdjzr>Log in to join the map</p> </div> ${renderComponent($$result, "AuthModalForm", $$AuthModalForm, { "data-astro-cid-nmihdjzr": true })} </div> <!-- Artist Form (shown when logged in) --> <div id="artist-section"${addAttribute(isAuthenticated ? "" : "hidden", "class")} data-astro-cid-nmihdjzr> ${renderComponent($$result, "ArtistForm", $$ArtistForm, { "data-astro-cid-nmihdjzr": true })} </div> </div>  ${renderScript($$result, "/home/glm/front-wavmap/src/components/ArtistFormModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/glm/front-wavmap/src/components/ArtistFormModal.astro", void 0);

const Blog = createSvgComponent({"meta":{"src":"/_astro/blog_button.ZNaaODrX.svg","width":140,"height":78,"format":"svg"},"attributes":{"width":"140","height":"78","viewBox":"0 0 140 78","fill":"none"},"children":"\n<path d=\"M23.1793 12H12V62.9673L35.0573 76H46.9353V64.5964L64.8688 76H76.7468V64.5964L94.2144 76H106.325V64.5964L126.821 76H138V24.3345L113.079 12H101.9V21.0764L82.3364 12H70.9242V21.0764L52.9908 12H41.3457V21.0764L23.1793 12Z\" fill=\"black\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M31.626 56V31.69H41.35C44.4326 31.69 46.7106 32.2113 48.184 33.254C49.68 34.2967 50.428 35.9627 50.428 38.252C50.428 38.9547 50.3146 39.6007 50.088 40.19C49.8613 40.7793 49.544 41.3007 49.136 41.754C48.728 42.1847 48.218 42.5473 47.606 42.842C46.994 43.1367 46.3026 43.3407 45.532 43.454C47.2093 43.6807 48.5693 44.2927 49.612 45.29C50.6546 46.2647 51.176 47.602 51.176 49.302C51.176 51.546 50.428 53.2233 48.932 54.334C47.4586 55.4447 45.2826 56 42.404 56H31.626ZM35.502 52.668H42.098C43.73 52.668 44.9766 52.362 45.838 51.75C46.6993 51.1153 47.13 50.186 47.13 48.962C47.13 47.738 46.6993 46.7973 45.838 46.14C44.9993 45.4827 43.7526 45.154 42.098 45.154H35.502V52.668ZM35.502 42.094H41.044C42.7666 42.094 44.0813 41.788 44.988 41.176C45.8946 40.564 46.348 39.68 46.348 38.524C46.348 37.3453 45.906 36.4727 45.022 35.906C44.1606 35.3167 42.8346 35.022 41.044 35.022H35.502V42.094ZM53.6064 56V31.69H57.4824V52.6H69.8244V56H53.6064ZM69.8592 43.862C69.8592 41.9353 70.1426 40.19 70.7092 38.626C71.2759 37.062 72.0806 35.736 73.1232 34.648C74.1659 33.56 75.4126 32.7213 76.8632 32.132C78.3366 31.5427 79.9686 31.248 81.7592 31.248C83.5499 31.248 85.1819 31.5427 86.6552 32.132C88.1286 32.7213 89.3866 33.56 90.4292 34.648C91.4719 35.736 92.2766 37.062 92.8432 38.626C93.4099 40.19 93.6932 41.9353 93.6932 43.862C93.6932 45.8113 93.4099 47.568 92.8432 49.132C92.2766 50.6733 91.4719 51.988 90.4292 53.076C89.4092 54.164 88.1512 55.0027 86.6552 55.592C85.1819 56.1587 83.5499 56.442 81.7592 56.442C79.9686 56.442 78.3366 56.1587 76.8632 55.592C75.3899 55.0027 74.1319 54.164 73.0892 53.076C72.0692 51.9653 71.2759 50.6393 70.7092 49.098C70.1426 47.5567 69.8592 45.8113 69.8592 43.862ZM73.8712 43.862C73.8712 45.2673 74.0526 46.548 74.4152 47.704C74.8006 48.8373 75.3332 49.8007 76.0132 50.594C76.7159 51.3873 77.5432 51.9993 78.4952 52.43C79.4699 52.838 80.5579 53.042 81.7592 53.042C82.9606 53.042 84.0486 52.838 85.0232 52.43C85.9979 51.9993 86.8252 51.3873 87.5052 50.594C88.2079 49.8007 88.7406 48.8373 89.1032 47.704C89.4886 46.5707 89.6812 45.29 89.6812 43.862C89.6812 42.4113 89.4886 41.1193 89.1032 39.986C88.7179 38.8527 88.1852 37.8893 87.5052 37.096C86.8252 36.3027 85.9979 35.702 85.0232 35.294C84.0486 34.8633 82.9606 34.648 81.7592 34.648C80.5806 34.648 79.5039 34.8633 78.5292 35.294C77.5546 35.702 76.7272 36.3027 76.0472 37.096C75.3672 37.8893 74.8346 38.8527 74.4492 39.986C74.0639 41.1193 73.8712 42.4113 73.8712 43.862ZM95.5916 43.896C95.5916 41.9693 95.8636 40.224 96.4076 38.66C96.9516 37.096 97.7223 35.77 98.7196 34.682C99.7396 33.594 100.964 32.7553 102.392 32.166C103.842 31.554 105.44 31.248 107.186 31.248C110.064 31.248 112.478 32.0073 114.428 33.526C116.377 35.022 117.669 37.1413 118.304 39.884H114.122C113.6 38.2293 112.739 36.9487 111.538 36.042C110.336 35.1127 108.863 34.648 107.118 34.648C106.007 34.648 104.976 34.8633 104.024 35.294C103.094 35.7247 102.301 36.3367 101.644 37.13C101.009 37.9007 100.51 38.864 100.148 40.02C99.785 41.1533 99.6036 42.4227 99.6036 43.828C99.6036 45.256 99.785 46.5367 100.148 47.67C100.51 48.8033 101.02 49.7667 101.678 50.56C102.335 51.3533 103.128 51.9653 104.058 52.396C104.987 52.8267 106.041 53.042 107.22 53.042C108.194 53.042 109.101 52.8947 109.94 52.6C110.778 52.2827 111.515 51.8407 112.15 51.274C112.784 50.7073 113.306 50.016 113.714 49.2C114.144 48.384 114.45 47.4433 114.632 46.378H107.288V43.25H118.372V56H115.72L115.244 52.09C114.428 53.4273 113.328 54.4927 111.946 55.286C110.586 56.0567 108.954 56.442 107.05 56.442C105.304 56.442 103.729 56.1473 102.324 55.558C100.918 54.9687 99.717 54.13 98.7196 53.042C97.7223 51.954 96.9516 50.6393 96.4076 49.098C95.8636 47.534 95.5916 45.8 95.5916 43.896Z\" fill=\"black\" />\n<path d=\"M13.1793 2H2V52.9673L25.0573 66H36.9353V54.5964L54.8688 66H66.7468V54.5964L84.2144 66H96.3253V54.5964L116.821 66H128V14.3345L103.079 2H91.9002V11.0764L72.3364 2H60.9242V11.0764L42.9908 2H31.3457V11.0764L13.1793 2Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M21.626 46V21.69H31.35C34.4326 21.69 36.7106 22.2113 38.184 23.254C39.68 24.2967 40.428 25.9627 40.428 28.252C40.428 28.9547 40.3146 29.6007 40.088 30.19C39.8613 30.7793 39.544 31.3007 39.136 31.754C38.728 32.1847 38.218 32.5473 37.606 32.842C36.994 33.1367 36.3026 33.3407 35.532 33.454C37.2093 33.6807 38.5693 34.2927 39.612 35.29C40.6546 36.2647 41.176 37.602 41.176 39.302C41.176 41.546 40.428 43.2233 38.932 44.334C37.4586 45.4447 35.2826 46 32.404 46H21.626ZM25.502 42.668H32.098C33.73 42.668 34.9766 42.362 35.838 41.75C36.6993 41.1153 37.13 40.186 37.13 38.962C37.13 37.738 36.6993 36.7973 35.838 36.14C34.9993 35.4827 33.7526 35.154 32.098 35.154H25.502V42.668ZM25.502 32.094H31.044C32.7666 32.094 34.0813 31.788 34.988 31.176C35.8946 30.564 36.348 29.68 36.348 28.524C36.348 27.3453 35.906 26.4727 35.022 25.906C34.1606 25.3167 32.8346 25.022 31.044 25.022H25.502V32.094ZM43.6064 46V21.69H47.4824V42.6H59.8244V46H43.6064ZM59.8592 33.862C59.8592 31.9353 60.1426 30.19 60.7092 28.626C61.2759 27.062 62.0806 25.736 63.1232 24.648C64.1659 23.56 65.4126 22.7213 66.8632 22.132C68.3366 21.5427 69.9686 21.248 71.7592 21.248C73.5499 21.248 75.1819 21.5427 76.6552 22.132C78.1286 22.7213 79.3866 23.56 80.4292 24.648C81.4719 25.736 82.2766 27.062 82.8432 28.626C83.4099 30.19 83.6932 31.9353 83.6932 33.862C83.6932 35.8113 83.4099 37.568 82.8432 39.132C82.2766 40.6733 81.4719 41.988 80.4292 43.076C79.4092 44.164 78.1512 45.0027 76.6552 45.592C75.1819 46.1587 73.5499 46.442 71.7592 46.442C69.9686 46.442 68.3366 46.1587 66.8632 45.592C65.3899 45.0027 64.1319 44.164 63.0892 43.076C62.0692 41.9653 61.2759 40.6393 60.7092 39.098C60.1426 37.5567 59.8592 35.8113 59.8592 33.862ZM63.8712 33.862C63.8712 35.2673 64.0526 36.548 64.4152 37.704C64.8006 38.8373 65.3332 39.8007 66.0132 40.594C66.7159 41.3873 67.5432 41.9993 68.4952 42.43C69.4699 42.838 70.5579 43.042 71.7592 43.042C72.9606 43.042 74.0486 42.838 75.0232 42.43C75.9979 41.9993 76.8252 41.3873 77.5052 40.594C78.2079 39.8007 78.7406 38.8373 79.1032 37.704C79.4886 36.5707 79.6812 35.29 79.6812 33.862C79.6812 32.4113 79.4886 31.1193 79.1032 29.986C78.7179 28.8527 78.1852 27.8893 77.5052 27.096C76.8252 26.3027 75.9979 25.702 75.0232 25.294C74.0486 24.8633 72.9606 24.648 71.7592 24.648C70.5806 24.648 69.5039 24.8633 68.5292 25.294C67.5546 25.702 66.7272 26.3027 66.0472 27.096C65.3672 27.8893 64.8346 28.8527 64.4492 29.986C64.0639 31.1193 63.8712 32.4113 63.8712 33.862ZM85.5916 33.896C85.5916 31.9693 85.8636 30.224 86.4076 28.66C86.9516 27.096 87.7223 25.77 88.7196 24.682C89.7396 23.594 90.9636 22.7553 92.3916 22.166C93.8423 21.554 95.4403 21.248 97.1856 21.248C100.064 21.248 102.478 22.0073 104.428 23.526C106.377 25.022 107.669 27.1413 108.304 29.884H104.122C103.6 28.2293 102.739 26.9487 101.538 26.042C100.336 25.1127 98.863 24.648 97.1176 24.648C96.007 24.648 94.9756 24.8633 94.0236 25.294C93.0943 25.7247 92.301 26.3367 91.6436 27.13C91.009 27.9007 90.5103 28.864 90.1476 30.02C89.785 31.1533 89.6036 32.4227 89.6036 33.828C89.6036 35.256 89.785 36.5367 90.1476 37.67C90.5103 38.8033 91.0203 39.7667 91.6776 40.56C92.335 41.3533 93.1283 41.9653 94.0576 42.396C94.987 42.8267 96.041 43.042 97.2196 43.042C98.1943 43.042 99.101 42.8947 99.9396 42.6C100.778 42.2827 101.515 41.8407 102.15 41.274C102.784 40.7073 103.306 40.016 103.714 39.2C104.144 38.384 104.45 37.4433 104.632 36.378H97.2876V33.25H108.372V46H105.72L105.244 42.09C104.428 43.4273 103.328 44.4927 101.946 45.286C100.586 46.0567 98.9536 46.442 97.0496 46.442C95.3043 46.442 93.729 46.1473 92.3236 45.558C90.9183 44.9687 89.717 44.13 88.7196 43.042C87.7223 41.954 86.9516 40.6393 86.4076 39.098C85.8636 37.534 85.5916 35.8 85.5916 33.896Z\" fill=\"black\" />\n"});

const BlogFlat = createSvgComponent({"meta":{"src":"/_astro/blog_flat.BZh5KE7M.svg","width":130,"height":68,"format":"svg"},"attributes":{"width":"130","height":"68","viewBox":"0 0 130 68","fill":"none"},"children":"\n<path d=\"M13.1793 2H2V52.9673L25.0573 66H36.9353V54.5964L54.8688 66H66.7468V54.5964L84.2144 66H96.3253V54.5964L116.821 66H128V14.3345L103.079 2H91.9002V11.0764L72.3364 2H60.9242V11.0764L42.9908 2H31.3457V11.0764L13.1793 2Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M21.626 46V21.69H31.35C34.4326 21.69 36.7106 22.2113 38.184 23.254C39.68 24.2967 40.428 25.9627 40.428 28.252C40.428 28.9547 40.3146 29.6007 40.088 30.19C39.8613 30.7793 39.544 31.3007 39.136 31.754C38.728 32.1847 38.218 32.5473 37.606 32.842C36.994 33.1367 36.3026 33.3407 35.532 33.454C37.2093 33.6807 38.5693 34.2927 39.612 35.29C40.6546 36.2647 41.176 37.602 41.176 39.302C41.176 41.546 40.428 43.2233 38.932 44.334C37.4586 45.4447 35.2826 46 32.404 46H21.626ZM25.502 42.668H32.098C33.73 42.668 34.9766 42.362 35.838 41.75C36.6993 41.1153 37.13 40.186 37.13 38.962C37.13 37.738 36.6993 36.7973 35.838 36.14C34.9993 35.4827 33.7526 35.154 32.098 35.154H25.502V42.668ZM25.502 32.094H31.044C32.7666 32.094 34.0813 31.788 34.988 31.176C35.8946 30.564 36.348 29.68 36.348 28.524C36.348 27.3453 35.906 26.4727 35.022 25.906C34.1606 25.3167 32.8346 25.022 31.044 25.022H25.502V32.094ZM43.6064 46V21.69H47.4824V42.6H59.8244V46H43.6064ZM59.8592 33.862C59.8592 31.9353 60.1426 30.19 60.7092 28.626C61.2759 27.062 62.0806 25.736 63.1232 24.648C64.1659 23.56 65.4126 22.7213 66.8632 22.132C68.3366 21.5427 69.9686 21.248 71.7592 21.248C73.5499 21.248 75.1819 21.5427 76.6552 22.132C78.1286 22.7213 79.3866 23.56 80.4292 24.648C81.4719 25.736 82.2766 27.062 82.8432 28.626C83.4099 30.19 83.6932 31.9353 83.6932 33.862C83.6932 35.8113 83.4099 37.568 82.8432 39.132C82.2766 40.6733 81.4719 41.988 80.4292 43.076C79.4092 44.164 78.1512 45.0027 76.6552 45.592C75.1819 46.1587 73.5499 46.442 71.7592 46.442C69.9686 46.442 68.3366 46.1587 66.8632 45.592C65.3899 45.0027 64.1319 44.164 63.0892 43.076C62.0692 41.9653 61.2759 40.6393 60.7092 39.098C60.1426 37.5567 59.8592 35.8113 59.8592 33.862ZM63.8712 33.862C63.8712 35.2673 64.0526 36.548 64.4152 37.704C64.8006 38.8373 65.3332 39.8007 66.0132 40.594C66.7159 41.3873 67.5432 41.9993 68.4952 42.43C69.4699 42.838 70.5579 43.042 71.7592 43.042C72.9606 43.042 74.0486 42.838 75.0232 42.43C75.9979 41.9993 76.8252 41.3873 77.5052 40.594C78.2079 39.8007 78.7406 38.8373 79.1032 37.704C79.4886 36.5707 79.6812 35.29 79.6812 33.862C79.6812 32.4113 79.4886 31.1193 79.1032 29.986C78.7179 28.8527 78.1852 27.8893 77.5052 27.096C76.8252 26.3027 75.9979 25.702 75.0232 25.294C74.0486 24.8633 72.9606 24.648 71.7592 24.648C70.5806 24.648 69.5039 24.8633 68.5292 25.294C67.5546 25.702 66.7272 26.3027 66.0472 27.096C65.3672 27.8893 64.8346 28.8527 64.4492 29.986C64.0639 31.1193 63.8712 32.4113 63.8712 33.862ZM85.5916 33.896C85.5916 31.9693 85.8636 30.224 86.4076 28.66C86.9516 27.096 87.7223 25.77 88.7196 24.682C89.7396 23.594 90.9636 22.7553 92.3916 22.166C93.8423 21.554 95.4403 21.248 97.1856 21.248C100.064 21.248 102.478 22.0073 104.428 23.526C106.377 25.022 107.669 27.1413 108.304 29.884H104.122C103.6 28.2293 102.739 26.9487 101.538 26.042C100.336 25.1127 98.863 24.648 97.1176 24.648C96.007 24.648 94.9756 24.8633 94.0236 25.294C93.0943 25.7247 92.301 26.3367 91.6436 27.13C91.009 27.9007 90.5103 28.864 90.1476 30.02C89.785 31.1533 89.6036 32.4227 89.6036 33.828C89.6036 35.256 89.785 36.5367 90.1476 37.67C90.5103 38.8033 91.0203 39.7667 91.6776 40.56C92.335 41.3533 93.1283 41.9653 94.0576 42.396C94.987 42.8267 96.041 43.042 97.2196 43.042C98.1943 43.042 99.101 42.8947 99.9396 42.6C100.778 42.2827 101.515 41.8407 102.15 41.274C102.784 40.7073 103.306 40.016 103.714 39.2C104.144 38.384 104.45 37.4433 104.632 36.378H97.2876V33.25H108.372V46H105.72L105.244 42.09C104.428 43.4273 103.328 44.4927 101.946 45.286C100.586 46.0567 98.9536 46.442 97.0496 46.442C95.3043 46.442 93.729 46.1473 92.3236 45.558C90.9183 44.9687 89.717 44.13 88.7196 43.042C87.7223 41.954 86.9516 40.6393 86.4076 39.098C85.8636 37.534 85.5916 35.8 85.5916 33.896Z\" fill=\"black\" />\n"});

const Map = createSvgComponent({"meta":{"src":"/_astro/map_button.vGqAX1mR.svg","width":108,"height":78,"format":"svg"},"attributes":{"fill":"none","viewBox":"18 12 108 78"},"children":"\n<path d=\"M40.9628 24H30V74.466L53.5583 88H65.4541V78.3656L83.1811 88H95.0769V78.3656L112.804 88H124V36.1577L100.208 24H89.0124V33.405L71.0521 24H59.1563V33.405L40.9628 24Z\" fill=\"black\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M40.9628 24H30V74.466L53.5583 88H65.4541V78.3656L83.1811 88H95.0769V78.3656L112.804 88H124V36.1577L100.208 24H89.0124V33.405L71.0521 24H59.1563V33.405L40.9628 24Z\" fill=\"black\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M42.3611 68.5V44.19H47.9711L55.3491 64.59L62.6931 44.19H68.3371V68.5H64.4271V50.106L57.6611 68.5H53.0371L46.2371 50.106V68.5H42.3611ZM69.7059 68.5L78.8179 44.19H83.9859L93.0639 68.5H88.8479L86.5699 62.21H76.1999L73.9219 68.5H69.7059ZM77.3559 58.878H85.4139L81.4019 47.692L77.3559 58.878ZM94.3896 68.5V44.19H104.692C107.593 44.19 109.769 44.8473 111.22 46.162C112.67 47.454 113.396 49.3127 113.396 51.738C113.396 54.1407 112.67 55.988 111.22 57.28C109.769 58.572 107.593 59.218 104.692 59.218H98.2656V68.5H94.3896ZM98.2656 55.818H104.454C106.086 55.818 107.31 55.5007 108.126 54.866C108.964 54.2313 109.384 53.1887 109.384 51.738C109.384 50.2647 108.964 49.2107 108.126 48.576C107.31 47.9187 106.086 47.59 104.454 47.59H98.2656V55.818Z\" fill=\"black\" />\n<path d=\"M30.9628 14H20V64.466L43.5583 78H55.4541V68.3656L73.1811 78H85.0769V68.3656L102.804 78H114V26.1577L90.2084 14H79.0124V23.405L61.0521 14H49.1563V23.405L30.9628 14Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M32.3611 58.5V34.19H37.9711L45.3491 54.59L52.6931 34.19H58.3371V58.5H54.4271V40.106L47.6611 58.5H43.0371L36.2371 40.106V58.5H32.3611ZM59.7059 58.5L68.8179 34.19H73.9859L83.0639 58.5H78.8479L76.5699 52.21H66.1999L63.9219 58.5H59.7059ZM67.3559 48.878H75.4139L71.4019 37.692L67.3559 48.878ZM84.3896 58.5V34.19H94.6916C97.593 34.19 99.769 34.8473 101.22 36.162C102.67 37.454 103.396 39.3127 103.396 41.738C103.396 44.1407 102.67 45.988 101.22 47.28C99.769 48.572 97.593 49.218 94.6916 49.218H88.2656V58.5H84.3896ZM88.2656 45.818H94.4536C96.0856 45.818 97.3096 45.5007 98.1256 44.866C98.9643 44.2313 99.3836 43.1887 99.3836 41.738C99.3836 40.2647 98.9643 39.2107 98.1256 38.576C97.3096 37.9187 96.0856 37.59 94.4536 37.59H88.2656V45.818Z\" fill=\"black\" />\n"});

const MapFlat = createSvgComponent({"meta":{"src":"/_astro/map_flat.DJ_MxCbL.svg","width":98,"height":68,"format":"svg"},"attributes":{"fill":"none","viewBox":"18 12 98 68"},"children":"\n<path d=\"M30.9628 14H20V64.466L43.5583 78H55.4541V68.3656L73.1811 78H85.0769V68.3656L102.804 78H114V26.1577L90.2084 14H79.0124V23.405L61.0521 14H49.1563V23.405L30.9628 14Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M32.3611 58.5V34.19H37.9711L45.3491 54.59L52.6931 34.19H58.3371V58.5H54.4271V40.106L47.6611 58.5H43.0371L36.2371 40.106V58.5H32.3611ZM59.7059 58.5L68.8179 34.19H73.9859L83.0639 58.5H78.8479L76.5699 52.21H66.1999L63.9219 58.5H59.7059ZM67.3559 48.878H75.4139L71.4019 37.692L67.3559 48.878ZM84.3896 58.5V34.19H94.6916C97.593 34.19 99.769 34.8473 101.22 36.162C102.67 37.454 103.396 39.3127 103.396 41.738C103.396 44.1407 102.67 45.988 101.22 47.28C99.769 48.572 97.593 49.218 94.6916 49.218H88.2656V58.5H84.3896ZM88.2656 45.818H94.4536C96.0856 45.818 97.3096 45.5007 98.1256 44.866C98.9643 44.2313 99.3836 43.1887 99.3836 41.738C99.3836 40.2647 98.9643 39.2107 98.1256 38.576C97.3096 37.9187 96.0856 37.59 94.4536 37.59H88.2656V45.818Z\" fill=\"black\" />\n"});

const About = createSvgComponent({"meta":{"src":"/_astro/about_button.Cxh_XyOm.svg","width":169,"height":78,"format":"svg"},"attributes":{"width":"169","height":"78","viewBox":"0 0 169 78","fill":"none"},"children":"\n<path d=\"M22.7057 12H12V62.4173L36.6697 76H48.6605V66.1007L65.994 76H79.8467V66.1007L97.1802 76H109.171V66.1007L126.505 76H138.263V66.1007L155.596 76H167V24.4317L143.494 12H132.323V21.4388L113.937 12H102.766V21.4388L81.8198 12H70.6486V21.4388L52.4955 12H41.3243V21.4388L22.7057 12Z\" fill=\"black\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M32.283 56L41.395 31.69H46.563L55.641 56H51.425L49.147 49.71H38.777L36.499 56H32.283ZM39.933 46.378H47.991L43.979 35.192L39.933 46.378ZM56.9668 56V31.69H66.6908C69.7734 31.69 72.0514 32.2113 73.5248 33.254C75.0208 34.2967 75.7688 35.9627 75.7688 38.252C75.7688 38.9547 75.6554 39.6007 75.4288 40.19C75.2021 40.7793 74.8848 41.3007 74.4768 41.754C74.0688 42.1847 73.5588 42.5473 72.9468 42.842C72.3348 43.1367 71.6434 43.3407 70.8728 43.454C72.5501 43.6807 73.9101 44.2927 74.9528 45.29C75.9954 46.2647 76.5168 47.602 76.5168 49.302C76.5168 51.546 75.7688 53.2233 74.2728 54.334C72.7994 55.4447 70.6234 56 67.7448 56H56.9668ZM60.8428 52.668H67.4388C69.0708 52.668 70.3174 52.362 71.1788 51.75C72.0401 51.1153 72.4708 50.186 72.4708 48.962C72.4708 47.738 72.0401 46.7973 71.1788 46.14C70.3401 45.4827 69.0934 45.154 67.4388 45.154H60.8428V52.668ZM60.8428 42.094H66.3848C68.1074 42.094 69.4221 41.788 70.3288 41.176C71.2354 40.564 71.6888 39.68 71.6888 38.524C71.6888 37.3453 71.2468 36.4727 70.3628 35.906C69.5014 35.3167 68.1754 35.022 66.3848 35.022H60.8428V42.094ZM77.868 43.862C77.868 41.9353 78.1513 40.19 78.718 38.626C79.2847 37.062 80.0893 35.736 81.132 34.648C82.1747 33.56 83.4213 32.7213 84.872 32.132C86.3453 31.5427 87.9773 31.248 89.768 31.248C91.5587 31.248 93.1907 31.5427 94.664 32.132C96.1373 32.7213 97.3953 33.56 98.438 34.648C99.4807 35.736 100.285 37.062 100.852 38.626C101.419 40.19 101.702 41.9353 101.702 43.862C101.702 45.8113 101.419 47.568 100.852 49.132C100.285 50.6733 99.4807 51.988 98.438 53.076C97.418 54.164 96.16 55.0027 94.664 55.592C93.1907 56.1587 91.5587 56.442 89.768 56.442C87.9773 56.442 86.3453 56.1587 84.872 55.592C83.3987 55.0027 82.1407 54.164 81.098 53.076C80.078 51.9653 79.2847 50.6393 78.718 49.098C78.1513 47.5567 77.868 45.8113 77.868 43.862ZM81.88 43.862C81.88 45.2673 82.0613 46.548 82.424 47.704C82.8093 48.8373 83.342 49.8007 84.022 50.594C84.7247 51.3873 85.552 51.9993 86.504 52.43C87.4787 52.838 88.5667 53.042 89.768 53.042C90.9693 53.042 92.0573 52.838 93.032 52.43C94.0067 51.9993 94.834 51.3873 95.514 50.594C96.2167 49.8007 96.7493 48.8373 97.112 47.704C97.4973 46.5707 97.69 45.29 97.69 43.862C97.69 42.4113 97.4973 41.1193 97.112 39.986C96.7267 38.8527 96.194 37.8893 95.514 37.096C94.834 36.3027 94.0067 35.702 93.032 35.294C92.0573 34.8633 90.9693 34.648 89.768 34.648C88.5893 34.648 87.5127 34.8633 86.538 35.294C85.5633 35.702 84.736 36.3027 84.056 37.096C83.376 37.8893 82.8433 38.8527 82.458 39.986C82.0727 41.1193 81.88 42.4113 81.88 43.862ZM104.116 47.33V31.69H107.992V47.194C107.992 49.0527 108.513 50.492 109.556 51.512C110.621 52.532 112.117 53.042 114.044 53.042C115.971 53.042 117.455 52.532 118.498 51.512C119.541 50.492 120.062 49.0527 120.062 47.194V31.69H123.972V47.33C123.972 48.7353 123.734 50.0047 123.258 51.138C122.782 52.2487 122.113 53.2007 121.252 53.994C120.413 54.7647 119.382 55.3653 118.158 55.796C116.934 56.2267 115.563 56.442 114.044 56.442C112.503 56.442 111.12 56.2267 109.896 55.796C108.695 55.3653 107.663 54.7647 106.802 53.994C105.941 53.2007 105.272 52.2487 104.796 51.138C104.343 50.0047 104.116 48.7353 104.116 47.33ZM134.057 56V35.09H126.237V31.69H145.753V35.09H137.933V56H134.057Z\" fill=\"black\" />\n<path d=\"M12.7057 2H2V52.4173L26.6697 66H38.6605V56.1007L55.994 66H69.8467V56.1007L87.1802 66H99.171V56.1007L116.505 66H128.263V56.1007L145.596 66H157V14.4317L133.494 2H122.323V11.4388L103.937 2H92.7658V11.4388L71.8198 2H60.6486V11.4388L42.4955 2H31.3243V11.4388L12.7057 2Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M22.283 46L31.395 21.69H36.563L45.641 46H41.425L39.147 39.71H28.777L26.499 46H22.283ZM29.933 36.378H37.991L33.979 25.192L29.933 36.378ZM46.9668 46V21.69H56.6908C59.7734 21.69 62.0514 22.2113 63.5248 23.254C65.0208 24.2967 65.7688 25.9627 65.7688 28.252C65.7688 28.9547 65.6554 29.6007 65.4288 30.19C65.2021 30.7793 64.8848 31.3007 64.4768 31.754C64.0688 32.1847 63.5588 32.5473 62.9468 32.842C62.3348 33.1367 61.6434 33.3407 60.8728 33.454C62.5501 33.6807 63.9101 34.2927 64.9528 35.29C65.9954 36.2647 66.5168 37.602 66.5168 39.302C66.5168 41.546 65.7688 43.2233 64.2728 44.334C62.7994 45.4447 60.6234 46 57.7448 46H46.9668ZM50.8428 42.668H57.4388C59.0708 42.668 60.3174 42.362 61.1788 41.75C62.0401 41.1153 62.4708 40.186 62.4708 38.962C62.4708 37.738 62.0401 36.7973 61.1788 36.14C60.3401 35.4827 59.0934 35.154 57.4388 35.154H50.8428V42.668ZM50.8428 32.094H56.3848C58.1074 32.094 59.4221 31.788 60.3288 31.176C61.2354 30.564 61.6888 29.68 61.6888 28.524C61.6888 27.3453 61.2468 26.4727 60.3628 25.906C59.5014 25.3167 58.1754 25.022 56.3848 25.022H50.8428V32.094ZM67.868 33.862C67.868 31.9353 68.1513 30.19 68.718 28.626C69.2847 27.062 70.0893 25.736 71.132 24.648C72.1747 23.56 73.4213 22.7213 74.872 22.132C76.3453 21.5427 77.9773 21.248 79.768 21.248C81.5587 21.248 83.1907 21.5427 84.664 22.132C86.1373 22.7213 87.3953 23.56 88.438 24.648C89.4807 25.736 90.2854 27.062 90.852 28.626C91.4187 30.19 91.702 31.9353 91.702 33.862C91.702 35.8113 91.4187 37.568 90.852 39.132C90.2854 40.6733 89.4807 41.988 88.438 43.076C87.418 44.164 86.16 45.0027 84.664 45.592C83.1907 46.1587 81.5587 46.442 79.768 46.442C77.9773 46.442 76.3453 46.1587 74.872 45.592C73.3987 45.0027 72.1407 44.164 71.098 43.076C70.078 41.9653 69.2847 40.6393 68.718 39.098C68.1513 37.5567 67.868 35.8113 67.868 33.862ZM71.88 33.862C71.88 35.2673 72.0613 36.548 72.424 37.704C72.8093 38.8373 73.342 39.8007 74.022 40.594C74.7247 41.3873 75.552 41.9993 76.504 42.43C77.4787 42.838 78.5667 43.042 79.768 43.042C80.9693 43.042 82.0573 42.838 83.032 42.43C84.0067 41.9993 84.834 41.3873 85.514 40.594C86.2167 39.8007 86.7493 38.8373 87.112 37.704C87.4973 36.5707 87.69 35.29 87.69 33.862C87.69 32.4113 87.4973 31.1193 87.112 29.986C86.7267 28.8527 86.194 27.8893 85.514 27.096C84.834 26.3027 84.0067 25.702 83.032 25.294C82.0573 24.8633 80.9693 24.648 79.768 24.648C78.5893 24.648 77.5127 24.8633 76.538 25.294C75.5633 25.702 74.736 26.3027 74.056 27.096C73.376 27.8893 72.8433 28.8527 72.458 29.986C72.0727 31.1193 71.88 32.4113 71.88 33.862ZM94.116 37.33V21.69H97.992V37.194C97.992 39.0527 98.5133 40.492 99.556 41.512C100.621 42.532 102.117 43.042 104.044 43.042C105.971 43.042 107.455 42.532 108.498 41.512C109.541 40.492 110.062 39.0527 110.062 37.194V21.69H113.972V37.33C113.972 38.7353 113.734 40.0047 113.258 41.138C112.782 42.2487 112.113 43.2007 111.252 43.994C110.413 44.7647 109.382 45.3653 108.158 45.796C106.934 46.2267 105.563 46.442 104.044 46.442C102.503 46.442 101.12 46.2267 99.896 45.796C98.6947 45.3653 97.6633 44.7647 96.802 43.994C95.9407 43.2007 95.272 42.2487 94.796 41.138C94.3427 40.0047 94.116 38.7353 94.116 37.33ZM124.057 46V25.09H116.237V21.69H135.753V25.09H127.933V46H124.057Z\" fill=\"black\" />\n"});

const AboutFlat = createSvgComponent({"meta":{"src":"/_astro/about_flat.CXR2SJ5D.svg","width":159,"height":68,"format":"svg"},"attributes":{"width":"159","height":"68","viewBox":"0 0 159 68","fill":"none"},"children":"\n<path d=\"M12.7057 2H2V52.4173L26.6697 66H38.6605V56.1007L55.994 66H69.8467V56.1007L87.1802 66H99.171V56.1007L116.505 66H128.263V56.1007L145.596 66H157V14.4317L133.494 2H122.323V11.4388L103.937 2H92.7658V11.4388L71.8198 2H60.6486V11.4388L42.4955 2H31.3243V11.4388L12.7057 2Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M22.283 46L31.395 21.69H36.563L45.641 46H41.425L39.147 39.71H28.777L26.499 46H22.283ZM29.933 36.378H37.991L33.979 25.192L29.933 36.378ZM46.9668 46V21.69H56.6908C59.7734 21.69 62.0514 22.2113 63.5248 23.254C65.0208 24.2967 65.7688 25.9627 65.7688 28.252C65.7688 28.9547 65.6554 29.6007 65.4288 30.19C65.2021 30.7793 64.8848 31.3007 64.4768 31.754C64.0688 32.1847 63.5588 32.5473 62.9468 32.842C62.3348 33.1367 61.6434 33.3407 60.8728 33.454C62.5501 33.6807 63.9101 34.2927 64.9528 35.29C65.9954 36.2647 66.5168 37.602 66.5168 39.302C66.5168 41.546 65.7688 43.2233 64.2728 44.334C62.7994 45.4447 60.6234 46 57.7448 46H46.9668ZM50.8428 42.668H57.4388C59.0708 42.668 60.3174 42.362 61.1788 41.75C62.0401 41.1153 62.4708 40.186 62.4708 38.962C62.4708 37.738 62.0401 36.7973 61.1788 36.14C60.3401 35.4827 59.0934 35.154 57.4388 35.154H50.8428V42.668ZM50.8428 32.094H56.3848C58.1074 32.094 59.4221 31.788 60.3288 31.176C61.2354 30.564 61.6888 29.68 61.6888 28.524C61.6888 27.3453 61.2468 26.4727 60.3628 25.906C59.5014 25.3167 58.1754 25.022 56.3848 25.022H50.8428V32.094ZM67.868 33.862C67.868 31.9353 68.1513 30.19 68.718 28.626C69.2847 27.062 70.0893 25.736 71.132 24.648C72.1747 23.56 73.4213 22.7213 74.872 22.132C76.3453 21.5427 77.9773 21.248 79.768 21.248C81.5587 21.248 83.1907 21.5427 84.664 22.132C86.1373 22.7213 87.3953 23.56 88.438 24.648C89.4807 25.736 90.2854 27.062 90.852 28.626C91.4187 30.19 91.702 31.9353 91.702 33.862C91.702 35.8113 91.4187 37.568 90.852 39.132C90.2854 40.6733 89.4807 41.988 88.438 43.076C87.418 44.164 86.16 45.0027 84.664 45.592C83.1907 46.1587 81.5587 46.442 79.768 46.442C77.9773 46.442 76.3453 46.1587 74.872 45.592C73.3987 45.0027 72.1407 44.164 71.098 43.076C70.078 41.9653 69.2847 40.6393 68.718 39.098C68.1513 37.5567 67.868 35.8113 67.868 33.862ZM71.88 33.862C71.88 35.2673 72.0613 36.548 72.424 37.704C72.8093 38.8373 73.342 39.8007 74.022 40.594C74.7247 41.3873 75.552 41.9993 76.504 42.43C77.4787 42.838 78.5667 43.042 79.768 43.042C80.9693 43.042 82.0573 42.838 83.032 42.43C84.0067 41.9993 84.834 41.3873 85.514 40.594C86.2167 39.8007 86.7493 38.8373 87.112 37.704C87.4973 36.5707 87.69 35.29 87.69 33.862C87.69 32.4113 87.4973 31.1193 87.112 29.986C86.7267 28.8527 86.194 27.8893 85.514 27.096C84.834 26.3027 84.0067 25.702 83.032 25.294C82.0573 24.8633 80.9693 24.648 79.768 24.648C78.5893 24.648 77.5127 24.8633 76.538 25.294C75.5633 25.702 74.736 26.3027 74.056 27.096C73.376 27.8893 72.8433 28.8527 72.458 29.986C72.0727 31.1193 71.88 32.4113 71.88 33.862ZM94.116 37.33V21.69H97.992V37.194C97.992 39.0527 98.5133 40.492 99.556 41.512C100.621 42.532 102.117 43.042 104.044 43.042C105.971 43.042 107.455 42.532 108.498 41.512C109.541 40.492 110.062 39.0527 110.062 37.194V21.69H113.972V37.33C113.972 38.7353 113.734 40.0047 113.258 41.138C112.782 42.2487 112.113 43.2007 111.252 43.994C110.413 44.7647 109.382 45.3653 108.158 45.796C106.934 46.2267 105.563 46.442 104.044 46.442C102.503 46.442 101.12 46.2267 99.896 45.796C98.6947 45.3653 97.6633 44.7647 96.802 43.994C95.9407 43.2007 95.272 42.2487 94.796 41.138C94.3427 40.0047 94.116 38.7353 94.116 37.33ZM124.057 46V25.09H116.237V21.69H135.753V25.09H127.933V46H124.057Z\" fill=\"black\" />\n"});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$HoverLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HoverLink;
  const { href = "#", normal, hover, alt = "" } = Astro2.props;
  const uniqueId = `hover-link-${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<a", ' class="nav-button hover-link"', "", "", " data-astro-cid-pw4yezjp> <img", "", ' class="hover-image" data-astro-cid-pw4yezjp> </a> <script>(function(){', "\n  // Attendre que le DOM soit pr\xEAt\n  function initializeHover() {\n    const link = document.getElementById(uniqueId);\n    if (!link || link.dataset.hoverInitialized) return;\n\n    const img = link.querySelector('.hover-image');\n    if (!img) return;\n\n    // Preload images pour \xE9viter les d\xE9lais\n    const normalImg = new Image();\n    const hoverImg = new Image();\n    normalImg.src = normal;\n    hoverImg.src = hover;\n\n    // Event listeners avec gestion d'erreur\n    const handleMouseEnter = () => {\n      try {\n        img.src = hover;\n      } catch (e) {\n        console.warn('Error changing to hover image:', e);\n      }\n    };\n\n    const handleMouseLeave = () => {\n      try {\n        img.src = normal;\n      } catch (e) {\n        console.warn('Error changing to normal image:', e);\n      }\n    };\n\n    // Desktop hover\n    link.addEventListener('mouseenter', handleMouseEnter, { passive: true });\n    link.addEventListener('mouseleave', handleMouseLeave, { passive: true });\n\n    // Mobile touch (avec d\xE9lai pour \xE9viter les conflits)\n    link.addEventListener('touchstart', handleMouseEnter, { passive: true });\n    link.addEventListener('touchend', () => {\n      setTimeout(handleMouseLeave, 150);\n    }, { passive: true });\n\n    // Focus pour accessibilit\xE9\n    link.addEventListener('focus', handleMouseEnter);\n    link.addEventListener('blur', handleMouseLeave);\n\n    link.dataset.hoverInitialized = 'true';\n  }\n\n  // Initialiser imm\xE9diatement si possible\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initializeHover);\n  } else {\n    initializeHover();\n  }\n\n  // R\xE9initialiser apr\xE8s navigation Astro\n  document.addEventListener('astro:page-load', initializeHover);\n})();<\/script> "])), maybeRenderHead(), addAttribute(href, "href"), addAttribute(uniqueId, "id"), addAttribute(normal, "data-normal-src"), addAttribute(hover, "data-hover-src"), addAttribute(normal, "src"), addAttribute(alt, "alt"), defineScriptVars({ uniqueId, normal, hover }));
}, "/home/glm/front-wavmap/src/components/HoverLink.astro", void 0);

const Logo = createSvgComponent({"meta":{"src":"/_astro/logo.Dz9pmR-f.svg","width":118,"height":70,"format":"svg"},"attributes":{"width":"118","height":"70","viewBox":"0 0 118 70","fill":"none"},"children":"\n<path d=\"M98.2049 0H87.4603V13.6156L69.0505 0H58.3029V13.2428L39.2184 0H29.1514V13.2428L10.067 0H0V55.3593L19.7936 70H30.5382V56.3874L48.9465 70H59.6911V56.7572L78.7801 70H88.8471V56.7572L107.933 70H118V14.6407L98.2049 0ZM29.1514 26.7603C29.1514 41.6908 20.3123 54.3071 9.85257 54.3071H1.38824V1.39795H9.63519L29.1514 14.9411V26.7603ZM58.3044 26.7603C58.3044 41.6908 49.4653 54.3071 39.001 54.3071H30.5397V1.39795H38.7866L58.3059 14.9411V26.7603H58.3044ZM78.996 14.295C78.7651 14.295 78.5327 14.3025 78.3019 14.3131C69.9335 14.7237 62.637 22.4849 59.6926 33.0163V1.39795H68.5962L86.0361 14.295H78.9975H78.996ZM108.15 14.295C99.4927 14.295 91.8709 22.1935 88.8471 33.0163V1.39795H97.7477L115.188 14.295H108.15Z\" fill=\"black\" />\n"});

const BackBtn = createSvgComponent({"meta":{"src":"/_astro/close_btn.uafqJeUd.svg","width":159,"height":68,"format":"svg"},"attributes":{"width":"159","height":"68","viewBox":"0 0 159 68","fill":"none"},"children":"\n<path d=\"M12.7057 2H2V52.4173L26.6697 66H38.6605V56.1007L55.994 66H69.8467V56.1007L87.1802 66H99.171V56.1007L116.505 66H128.263V56.1007L145.596 66H157V14.4317L133.494 2H122.323V11.4388L103.937 2H92.7658V11.4388L71.8198 2H60.6486V11.4388L42.4955 2H31.3243V11.4388L12.7057 2Z\" fill=\"#F6F6F6\" stroke=\"black\" stroke-width=\"4\" />\n<path d=\"M26.4803 33.862C26.4803 31.9353 26.7523 30.2013 27.2963 28.66C27.8403 27.096 28.611 25.77 29.6083 24.682C30.6283 23.594 31.8523 22.7553 33.2803 22.166C34.7083 21.554 36.3063 21.248 38.0743 21.248C39.5703 21.248 40.9417 21.4633 42.1883 21.894C43.4577 22.302 44.5683 22.9027 45.5203 23.696C46.4723 24.4893 47.277 25.464 47.9343 26.62C48.5917 27.776 49.0563 29.0907 49.3283 30.564H45.2143C44.7837 28.6827 43.945 27.232 42.6983 26.212C41.4517 25.1693 39.8877 24.648 38.0063 24.648C36.8957 24.648 35.8757 24.8633 34.9463 25.294C34.017 25.7247 33.2237 26.3367 32.5663 27.13C31.909 27.9233 31.399 28.8867 31.0363 30.02C30.6737 31.1307 30.4923 32.4113 30.4923 33.862C30.4923 35.2673 30.6737 36.5367 31.0363 37.67C31.399 38.8033 31.909 39.7667 32.5663 40.56C33.2237 41.3533 34.017 41.9653 34.9463 42.396C35.8757 42.8267 36.9183 43.042 38.0743 43.042C40.0237 43.042 41.6217 42.4867 42.8683 41.376C44.1377 40.2427 44.9537 38.6447 45.3163 36.582H49.4303C49.2037 38.146 48.773 39.54 48.1383 40.764C47.5037 41.9653 46.6877 42.9853 45.6903 43.824C44.7157 44.6627 43.5823 45.3087 42.2903 45.762C40.9983 46.2153 39.5817 46.442 38.0403 46.442C36.295 46.442 34.7083 46.1473 33.2803 45.558C31.8523 44.9687 30.6283 44.13 29.6083 43.042C28.611 41.954 27.8403 40.6393 27.2963 39.098C26.7523 37.5567 26.4803 35.8113 26.4803 33.862ZM52.0635 46V21.69H55.9395V42.6H68.2815V46H52.0635ZM68.3163 33.862C68.3163 31.9353 68.5996 30.19 69.1663 28.626C69.7329 27.062 70.5376 25.736 71.5803 24.648C72.6229 23.56 73.8696 22.7213 75.3203 22.132C76.7936 21.5427 78.4256 21.248 80.2163 21.248C82.0069 21.248 83.6389 21.5427 85.1123 22.132C86.5856 22.7213 87.8436 23.56 88.8863 24.648C89.9289 25.736 90.7336 27.062 91.3003 28.626C91.8669 30.19 92.1503 31.9353 92.1503 33.862C92.1503 35.8113 91.8669 37.568 91.3003 39.132C90.7336 40.6733 89.9289 41.988 88.8863 43.076C87.8663 44.164 86.6083 45.0027 85.1123 45.592C83.6389 46.1587 82.0069 46.442 80.2163 46.442C78.4256 46.442 76.7936 46.1587 75.3203 45.592C73.8469 45.0027 72.5889 44.164 71.5463 43.076C70.5263 41.9653 69.7329 40.6393 69.1663 39.098C68.5996 37.5567 68.3163 35.8113 68.3163 33.862ZM72.3283 33.862C72.3283 35.2673 72.5096 36.548 72.8723 37.704C73.2576 38.8373 73.7903 39.8007 74.4703 40.594C75.1729 41.3873 76.0003 41.9993 76.9523 42.43C77.9269 42.838 79.0149 43.042 80.2163 43.042C81.4176 43.042 82.5056 42.838 83.4803 42.43C84.4549 41.9993 85.2823 41.3873 85.9623 40.594C86.6649 39.8007 87.1976 38.8373 87.5603 37.704C87.9456 36.5707 88.1383 35.29 88.1383 33.862C88.1383 32.4113 87.9456 31.1193 87.5603 29.986C87.1749 28.8527 86.6423 27.8893 85.9623 27.096C85.2823 26.3027 84.4549 25.702 83.4803 25.294C82.5056 24.8633 81.4176 24.648 80.2163 24.648C79.0376 24.648 77.9609 24.8633 76.9863 25.294C76.0116 25.702 75.1843 26.3027 74.5043 27.096C73.8243 27.8893 73.2916 28.8527 72.9063 29.986C72.5209 31.1193 72.3283 32.4113 72.3283 33.862ZM93.4407 37.534H97.4527C97.5433 38.3953 97.7473 39.1773 98.0647 39.88C98.4047 40.56 98.8467 41.138 99.3907 41.614C99.9347 42.09 100.581 42.4527 101.329 42.702C102.077 42.9287 102.927 43.042 103.879 43.042C104.672 43.042 105.386 42.9627 106.021 42.804C106.678 42.6453 107.222 42.4073 107.653 42.09C108.106 41.75 108.446 41.3533 108.673 40.9C108.922 40.424 109.047 39.9027 109.047 39.336C109.047 38.656 108.899 38.1007 108.605 37.67C108.31 37.2167 107.879 36.8427 107.313 36.548C106.769 36.2533 106.1 36.0153 105.307 35.834C104.513 35.63 103.629 35.426 102.655 35.222C101.499 34.9953 100.399 34.7347 99.3567 34.44C98.314 34.1453 97.396 33.7487 96.6027 33.25C95.8093 32.7513 95.1747 32.1167 94.6987 31.346C94.2227 30.5527 93.9847 29.5553 93.9847 28.354C93.9847 27.2887 94.1887 26.3253 94.5967 25.464C95.0047 24.58 95.5827 23.832 96.3307 23.22C97.1013 22.5853 98.0307 22.098 99.1187 21.758C100.229 21.418 101.465 21.248 102.825 21.248C104.343 21.248 105.692 21.4633 106.871 21.894C108.049 22.3247 109.047 22.914 109.863 23.662C110.701 24.41 111.359 25.3053 111.835 26.348C112.311 27.368 112.583 28.4787 112.651 29.68H108.639C108.548 28.9547 108.355 28.286 108.061 27.674C107.789 27.062 107.403 26.5293 106.905 26.076C106.406 25.6227 105.805 25.2713 105.103 25.022C104.423 24.7727 103.652 24.648 102.791 24.648C102.088 24.648 101.442 24.7387 100.853 24.92C100.263 25.0787 99.7533 25.328 99.3227 25.668C98.9147 25.9853 98.5973 26.3593 98.3707 26.79C98.144 27.2207 98.0307 27.708 98.0307 28.252C98.0307 28.8867 98.1893 29.4193 98.5067 29.85C98.8467 30.258 99.2887 30.598 99.8327 30.87C100.399 31.142 101.057 31.3687 101.805 31.55C102.553 31.7313 103.357 31.9127 104.219 32.094C105.465 32.3433 106.621 32.6267 107.687 32.944C108.775 33.2387 109.715 33.6467 110.509 34.168C111.325 34.6893 111.948 35.3467 112.379 36.14C112.832 36.9333 113.059 37.9307 113.059 39.132C113.059 40.2653 112.832 41.2853 112.379 42.192C111.948 43.0987 111.325 43.8693 110.509 44.504C109.693 45.116 108.718 45.592 107.585 45.932C106.451 46.272 105.205 46.442 103.845 46.442C102.235 46.442 100.796 46.2267 99.5267 45.796C98.28 45.3653 97.2147 44.7533 96.3307 43.96C95.4467 43.1667 94.7553 42.226 94.2567 41.138C93.758 40.05 93.486 38.8487 93.4407 37.534ZM115.415 46V21.69H132.143V25.09H119.291V32.128H131.565V35.46H119.291V42.6H132.313V46H115.415Z\" fill=\"black\" />\n"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { currentPage } = Astro2.props;
  const user = Astro2.locals.user;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(["", '<nav class="navbar" data-astro-cid-5blmo7yk> <!-- Partie GAUCHE : Boutons dynamiques (desktop) + boutons regroup\xE9s (mobile) --> <div class="nav-left" data-astro-cid-5blmo7yk> <!-- Bouton gauche desktop --> <div class="desktop-left" data-astro-cid-5blmo7yk> ', ' </div> <!-- Boutons regroup\xE9s mobile --> <div class="mobile-buttons" data-astro-cid-5blmo7yk> ', ' </div> </div> <!-- Partie CENTRE : Titre + sous-titre (cach\xE9 en mobile) --> <div class="nav-center" data-astro-cid-5blmo7yk> <h1 data-astro-cid-5blmo7yk>The European electronic music artists map</h1> <h1 data-astro-cid-5blmo7yk>Connect with artists around Europe</h1> </div> <!-- Partie DROITE : Bouton dynamique (desktop) + "Join the Community" --> <div class="nav-right" data-astro-cid-5blmo7yk> <div class="desktop-right" data-astro-cid-5blmo7yk> ', ' </div> </div> <div class="community-dropdown-container" data-astro-cid-5blmo7yk> <button id="join-community-btn" class="community-button" data-astro-cid-5blmo7yk> <div class="community-content" data-astro-cid-5blmo7yk> <span class="join-text" data-astro-cid-5blmo7yk>Join the community</span> <img class="close-icon hidden"', ' alt="Close" data-astro-cid-5blmo7yk> <img class="logo-icon"', ' alt="logo" data-astro-cid-5blmo7yk> </div> </button> <!-- Dropdown Form --> <div id="community-dropdown" class="community-dropdown hidden" data-astro-cid-5blmo7yk> ', " </div> </div></nav>  <script>(function(){", `
  // Function to update navigation based on current page
  function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    // Determine current page from path
    let page = 'home';
    if (currentPath === '/map') page = 'map';
    else if (currentPath === '/blog' || currentPath.startsWith('/blog/')) page = 'blog';
    else if (currentPath === '/about') page = 'about';
    
    // Show/hide links based on current page
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === page) {
        link.style.display = 'none'; // Hide current page link
      } else {
        link.style.display = 'block'; // Show other links
      }
    });
  }
  
  // Update on initial load
  function initNavigation() {
    updateNavigation();
  }
  
  // Update on page changes (View Transitions)
  document.addEventListener('astro:page-load', updateNavigation);
  
  // Also run on initial load
  document.addEventListener('DOMContentLoaded', initNavigation);
  
  // Listen for successful authentication to show logout button
  function showLogoutButton() {
    const authButtons = document.querySelector('.flex.items-center.space-x-3');
    if (authButtons) {
      // Check if logout button already exists
      const existingLogout = authButtons.querySelector('a[href="/api/auth/logout"]');
      if (!existingLogout) {
        // Create logout button
        const logoutBtn = document.createElement('a');
        logoutBtn.href = '/api/auth/logout';
        logoutBtn.className = 'bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors';
        logoutBtn.textContent = 'Logout';
        authButtons.appendChild(logoutBtn);
      }
    }
  }
  
  // Listen for authSuccess event
  window.addEventListener('authSuccess', showLogoutButton);

  // Community Dropdown Logic
  function initCommunityDropdown() {
    const joinBtn = document.getElementById('join-community-btn');
    const dropdown = document.getElementById('community-dropdown');
    const dropdownContainer = document.querySelector('.community-dropdown-container');
    const navbar = document.querySelector('.navbar');

    if (!joinBtn || !dropdown || !dropdownContainer || !navbar) return;

    let isOpen = false;

    function openDropdown() {
      dropdown.classList.remove('hidden');
      navbar.classList.add('dropdown-open');
      dropdownContainer.classList.add('dropdown-state');
      // Change button style
      joinBtn.style.background = 'linear-gradient(to right, #E9930F, #3E44E6, #8FD116)';
      joinBtn.style.color = 'white';
      isOpen = true;
    }

    function closeDropdown() {
      dropdown.classList.add('hidden');
      navbar.classList.remove('dropdown-open');
      dropdownContainer.classList.remove('dropdown-state');
      // Reset button style
      joinBtn.style.background = 'white';
      joinBtn.style.color = 'black';
      isOpen = false;
    }

    function toggleDropdown() {
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    }

    // Button click handler
    joinBtn.addEventListener('click', toggleDropdown);

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.community-dropdown-container')) {
        closeDropdown();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) {
        closeDropdown();
      }
    });
  }

  // Initialize dropdown
  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initCommunityDropdown();
  });

  // Fallback for immediate execution
  if (document.readyState !== 'loading') {
    initNavigation();
    initCommunityDropdown();
  }
})();<\/script>`])), maybeRenderHead(), currentPath.includes("/about") ? renderTemplate`${renderComponent($$result, "HoverLink", $$HoverLink, { "href": "/map", "normal": MapFlat.src, "hover": Map.src, "alt": "map", "data-astro-cid-5blmo7yk": true })}` : currentPath.includes("/blog") ? renderTemplate`${renderComponent($$result, "HoverLink", $$HoverLink, { "href": "/map", "normal": MapFlat.src, "hover": Map.src, "alt": "map", "data-astro-cid-5blmo7yk": true })}` : renderTemplate`${renderComponent($$result, "HoverLink", $$HoverLink, { "href": "/about", "normal": AboutFlat.src, "hover": About.src, "alt": "about", "data-astro-cid-5blmo7yk": true })}`, currentPath.includes("/about") ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HoverLink", $$HoverLink, { "href": "/map", "normal": MapFlat.src, "hover": Map.src, "alt": "map", "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result2, "HoverLink", $$HoverLink, { "href": "/blog", "normal": BlogFlat.src, "hover": Blog.src, "alt": "blog", "data-astro-cid-5blmo7yk": true })} ` })}` : currentPath.includes("/blog") ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HoverLink", $$HoverLink, { "href": "/map", "normal": MapFlat.src, "hover": Map.src, "alt": "map", "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result2, "HoverLink", $$HoverLink, { "href": "/about", "normal": AboutFlat.src, "hover": About.src, "alt": "about", "data-astro-cid-5blmo7yk": true })} ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HoverLink", $$HoverLink, { "href": "/about", "normal": AboutFlat.src, "hover": About.src, "alt": "about", "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result2, "HoverLink", $$HoverLink, { "href": "/blog", "normal": BlogFlat.src, "hover": Blog.src, "alt": "blog", "data-astro-cid-5blmo7yk": true })} ` })}`, currentPath.includes("/about") ? renderTemplate`${renderComponent($$result, "HoverLink", $$HoverLink, { "href": "/blog", "normal": BlogFlat.src, "hover": Blog.src, "alt": "blog", "data-astro-cid-5blmo7yk": true })}` : currentPath.includes("/blog") ? renderTemplate`${renderComponent($$result, "HoverLink", $$HoverLink, { "href": "/about", "normal": AboutFlat.src, "hover": About.src, "alt": "about", "data-astro-cid-5blmo7yk": true })}` : renderTemplate`${renderComponent($$result, "HoverLink", $$HoverLink, { "href": "/blog", "normal": BlogFlat.src, "hover": Blog.src, "alt": "blog", "data-astro-cid-5blmo7yk": true })}`, addAttribute(BackBtn.src, "src"), addAttribute(Logo.src, "src"), renderComponent($$result, "ArtistFormModal", $$ArtistFormModal, { "user": user, "isAuthenticated": !!user, "data-astro-cid-5blmo7yk": true }), defineScriptVars({ currentPage }));
}, "/home/glm/front-wavmap/src/components/Navbar.astro", void 0);

export { $$Navbar as $, BackBtn as B, $$HoverLink as a, createSvgComponent as c };
