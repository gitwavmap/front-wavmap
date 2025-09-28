globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_C0rBbLrA.mjs';
import { Z as Ze } from '../../../chunks/index_Brr1gO2v.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, locals }) => {
  try {
    const { email, resetUrl } = await request.json();
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = createDirectusClient(directusUrl);
    await client.request(Ze(email, resetUrl));
    return new Response(JSON.stringify({
      success: true,
      message: "Password reset email sent successfully!"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    const message = error?.errors?.[0]?.message || error?.message || "Failed to send password reset email";
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
