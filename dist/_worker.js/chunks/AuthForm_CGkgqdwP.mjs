globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as createAstro, a as renderTemplate, e as defineScriptVars, d as addAttribute, m as maybeRenderHead } from './astro/server_CrUJU3Ch.mjs';
import { g as getLocale } from './runtime_DSWkPTzG.mjs';
import { n as network_error, a as error_occurred, s as signing_up, b as signing_in, r as register, l as login, p as password, e as email, f as first_name, c as last_name } from './index_CyXi_74P.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const no_account$3 = () => `No account?`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const no_account$2 = () => `Pas de compte ?`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const no_account$1 = () => `¿No tienes cuenta?`;

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
const no_account = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return no_account$3()
	if (locale === "fr") return no_account$2()
	if (locale === "es") return no_account$1()
	return "no_account"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const already_have_account$3 = () => `Already have an account?`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const already_have_account$2 = () => `Vous avez déjà un compte ?`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const already_have_account$1 = () => `¿Ya tienes una cuenta?`;

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
const already_have_account = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return already_have_account$3()
	if (locale === "fr") return already_have_account$2()
	if (locale === "es") return already_have_account$1()
	return "already_have_account"
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$AuthForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthForm;
  const { type, action } = Astro2.props;
  const isLogin = type === "login";
  return renderTemplate(_a || (_a = __template(["", '<div class="min-h-screen flex items-center justify-center p-4 bg-gradient-primary"> <div class="card w-full max-w-md animate-fade-in"> <div class="card-header text-center"> <h1 class="text-2xl font-bold text-gray-900"> ', ' </h1> </div> <div class="card-content"> <div id="error-message" class="hidden mb-4 p-3 rounded-md bg-red-50 text-red-800 border border-red-200"></div> <form id="auth-form" method="POST"', ' class="space-y-6"> ', ' <div class="form-group"> <label for="email" class="form-label">', '</label> <input type="email" id="email" name="email" class="form-input" required> </div> <div class="form-group"> <label for="password" class="form-label">', '</label> <input type="password" id="password" name="password" class="form-input" required> </div> <button type="submit" class="btn btn-primary btn-lg w-full" id="submit-button"> ', ' </button> <div class="text-center text-sm text-gray-600"> ', " </div> </form> </div> </div> </div> <script>(function(){", "\n  document.addEventListener('DOMContentLoaded', () => {\n    const form = document.getElementById('auth-form');\n    const errorMessage = document.getElementById('error-message');\n    const submitButton = document.getElementById('submit-button');\n    \n    if (form) {\n      form.addEventListener('submit', async (e) => {\n        e.preventDefault();\n        \n        const formData = new FormData(form);\n        const originalButtonText = submitButton.textContent;\n        \n        // Show loading state with translations\n        submitButton.disabled = true;\n        submitButton.textContent = isLogin ? signingIn : signingUp;\n        errorMessage.classList.add('hidden');\n        \n        try {\n          const response = await fetch(action, {\n            method: 'POST',\n            body: formData,\n          });\n          \n          if (response.ok) {\n            // Success\n            if (isLogin) {\n              window.location.href = '/map';\n            } else {\n              // Show success message for registration\n              const data = await response.json();\n              errorMessage.textContent = data.message || 'Registration successful!';\n              errorMessage.className = 'mt-4 p-3 rounded-md bg-green-50 text-green-800 border border-green-200';\n              errorMessage.classList.remove('hidden');\n              \n              // Redirect to login after 3 seconds\n              setTimeout(() => {\n                window.location.href = '/login';\n              }, 3000);\n            }\n          } else {\n            // Error - show message\n            const data = await response.json();\n            errorMessage.textContent = data.error || errorOccurred;\n            errorMessage.classList.remove('hidden');\n          }\n        } catch (error) {\n          console.error('Auth error:', error);\n          errorMessage.textContent = networkError;\n          errorMessage.classList.remove('hidden');\n        } finally {\n          // Reset button\n          submitButton.disabled = false;\n          submitButton.textContent = originalButtonText;\n        }\n      });\n    }\n  });\n})();<\/script>"])), maybeRenderHead(), isLogin ? login() : register(), addAttribute(action, "action"), !isLogin && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="form-group"> <label for="firstName" class="form-label">${first_name()}</label> <input type="text" id="firstName" name="firstName" class="form-input" required> </div> <div class="form-group"> <label for="lastName" class="form-label">${last_name()}</label> <input type="text" id="lastName" name="lastName" class="form-input" required> </div> </div>`, email(), password(), isLogin ? login() : register(), isLogin ? renderTemplate`<p> ${no_account()} <a href="/register" class="text-primary-600 hover:text-primary-700 font-medium hover:underline"> ${register()} </a> </p>` : renderTemplate`<p> ${already_have_account()} <a href="/login" class="text-primary-600 hover:text-primary-700 font-medium hover:underline"> ${login()} </a> </p>`, defineScriptVars({ action, isLogin, signingIn: signing_in(), signingUp: signing_up(), errorOccurred: error_occurred(), networkError: network_error() }));
}, "/home/glm/wavmap/src/components/AuthForm.astro", void 0);

export { $$AuthForm as $ };
