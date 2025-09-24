globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_CRJ8d9Pu.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ redirect, cookies }) => {
  try {
    await createDirectusClient.logout();
  } catch (error) {
    console.error("Logout error:", error);
  }
  cookies.delete("directus_session_token", {
    path: "/"
  });
  cookies.delete("directus_refresh_token", {
    path: "/"
  });
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
