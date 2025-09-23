globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CrUJU3Ch.mjs';
import { $ as $$Layout } from '../chunks/Layout_g5zOGT9n.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-232m4wxw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-232m4wxw> <h1 data-astro-cid-232m4wxw>Bienvenue !</h1> <p data-astro-cid-232m4wxw>Merci de vous être inscrit. Votre compte a été créé avec succès.</p> <div data-astro-cid-232m4wxw> <a href="/login" data-astro-cid-232m4wxw>Se connecter</a> </div> </main> ` })} `;
}, "/home/glm/wavmap/src/pages/welcome.astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/welcome.astro";
const $$url = "/welcome";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Welcome,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
