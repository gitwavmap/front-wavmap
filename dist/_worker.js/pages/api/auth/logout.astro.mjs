globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_BjEWHH71.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ redirect }) => {
  try {
    await createDirectusClient.logout();
  } catch (error) {
    console.error("Logout error:", error);
  }
  return redirect("/login");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
