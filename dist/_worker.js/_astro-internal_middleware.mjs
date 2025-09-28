globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as defineMiddleware, s as sequence } from './chunks/index_CXI7KtHC.mjs';
import { c as createTokenClient } from './chunks/directus_C0rBbLrA.mjs';
import { V as Vm } from './chunks/index_Brr1gO2v.mjs';
import { c as cookieName, i as isLocale, d as defineGetLocale, r } from './chunks/runtime_DSWkPTzG.mjs';
import './chunks/astro-designed-error-pages_D-ToA2Uv.mjs';
import './chunks/astro/server_BB4k16uX.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';

const onRequest$3 = defineMiddleware(async (context, next) => {
  const urlLang = context.url.searchParams.get("lang");
  const cookieLang = context.cookies.get(cookieName)?.value;
  const acceptLanguage = context.request.headers.get("accept-language");
  let detectedLang = "en";
  if (urlLang && isLocale(urlLang)) {
    detectedLang = urlLang;
    context.cookies.set(cookieName, detectedLang, {
      maxAge: 60 * 60 * 24 * 365,
      // 1 year
      httpOnly: false,
      // Allow client-side access
      secure: false,
      // Set to true in production with HTTPS
      sameSite: "lax"
    });
  } else if (cookieLang && isLocale(cookieLang)) {
    detectedLang = cookieLang;
  } else if (acceptLanguage) {
    const langs = acceptLanguage.split(",").map((lang) => lang.split(";")[0].trim());
    for (const lang of langs) {
      if (isLocale(lang)) {
        detectedLang = lang;
        break;
      }
      const baseLang = lang.split("-")[0];
      if (isLocale(baseLang)) {
        detectedLang = baseLang;
        break;
      }
    }
    context.cookies.set(cookieName, detectedLang, {
      maxAge: 60 * 60 * 24 * 365,
      // 1 year
      httpOnly: false,
      secure: false,
      sameSite: "lax"
    });
  }
  defineGetLocale(() => detectedLang);
  context.locals.language = detectedLang;
  const directusUrl = context.locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
  const sessionToken = context.cookies.get("directus_session_token")?.value;
  if (sessionToken) {
    try {
      const tokenClient = createTokenClient(sessionToken, directusUrl);
      const user = await tokenClient.request(Vm());
      if (user && (user.email || user.id)) {
        context.locals.user = user;
      } else {
        console.log("❌ User data is undefined or incomplete, clearing token");
        console.log("❌ User object:", user);
        context.cookies.delete("directus_session_token");
      }
    } catch (error) {
      console.log("❌ Token invalid, clearing token:", error.message || error);
      context.cookies.delete("directus_session_token");
    }
  }
  return next();
});

const onRequest$2 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

// @ts-expect-error - virtuao module
// type casting
const runtime = r;
// cross request safe storage
const asyncStorage = new AsyncLocalStorage();
// retrieve the locale from the request
runtime.defineGetLocale(() => asyncStorage.getStore());
// do nothing on the server
runtime.defineSetLocale(() => { });
const onRequest$1 = async (context, next) => {
    const locale = runtime.extractLocaleFromRequest(context.request);
    return await asyncStorage.run(locale, next);
};

const onRequest = sequence(
	onRequest$2,onRequest$1,
	onRequest$3
	
);

export { onRequest };
