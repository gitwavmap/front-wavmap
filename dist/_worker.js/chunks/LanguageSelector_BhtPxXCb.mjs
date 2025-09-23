globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as createAstro, m as maybeRenderHead, f as renderScript, d as addAttribute, a as renderTemplate } from './astro/server_CrUJU3Ch.mjs';
import { g as getLocale } from './runtime_DSWkPTzG.mjs';

const $$Astro = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const currentLang = getLocale();
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Fran\xE7ais" },
    { code: "es", name: "Espa\xF1ol" }
  ];
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="relative group"> <button class="glass-card px-4 py-2 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-white/20 transition-all duration-200" id="language-toggle"> <span class="text-sm">🌐</span> <span class="text-sm">${languages.find((lang) => lang.code === currentLang)?.name}</span> <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="absolute top-full left-0 mt-2 min-w-full bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" id="language-dropdown"> ${languages.map((lang) => renderTemplate`<button type="button"${addAttribute(`block w-full text-left px-4 py-2 text-sm hover:bg-primary-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${currentLang === lang.code ? "bg-primary-100 text-primary-700 font-medium" : "text-gray-700"}`, "class")}${addAttribute(lang.code, "data-lang")}${addAttribute(`changeLanguage('${lang.code}')`, "onclick")}> ${lang.name} </button>`)} </div> </div> ${renderScript($$result, "/home/glm/wavmap/src/components/LanguageSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/glm/wavmap/src/components/LanguageSelector.astro", void 0);

export { $$LanguageSelector as $ };
