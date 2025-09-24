globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_CRJ8d9Pu.mjs';
import { M as Mp } from '../../../chunks/index_Dhdmj7aT.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, locals }) => {
  try {
    const { token } = await request.json();
    if (!token) {
      return new Response(JSON.stringify({ error: "Token is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = createDirectusClient(directusUrl);
    await client.request(Mp(token));
    return new Response(JSON.stringify({
      success: true,
      message: "Email verified successfully!"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Email verification error:", error);
    const message = error?.errors?.[0]?.message || error?.message || "Invalid or expired token";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
