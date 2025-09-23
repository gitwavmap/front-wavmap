globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CrUJU3Ch.mjs';
import { $ as $$Layout } from '../chunks/Layout_g5zOGT9n.mjs';
import { $ as $$AuthForm } from '../chunks/AuthForm_CGkgqdwP.mjs';
import '../chunks/runtime_DSWkPTzG.mjs';
import { r as register } from '../chunks/index_CyXi_74P.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": register() }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "AuthForm", $$AuthForm, { "type": "register", "action": "/api/auth/register" })} </main> ` })}`;
}, "/home/glm/wavmap/src/pages/register.astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
