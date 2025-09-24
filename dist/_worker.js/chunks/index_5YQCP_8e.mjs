globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getLocale } from './runtime_DSWkPTzG.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const email$3 = () => `Email`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const email$2 = () => `Email`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const email$1 = () => `Email`;

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
const email = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return email$3()
	if (locale === "fr") return email$2()
	if (locale === "es") return email$1()
	return "email"
};

export { email as e };
