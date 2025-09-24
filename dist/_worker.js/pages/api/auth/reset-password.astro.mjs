globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_CRJ8d9Pu.mjs';
import { t as tt } from '../../../chunks/index_Dhdmj7aT.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, locals }) => {
  try {
    const { token, password } = await request.json();
    if (!token) {
      return new Response(JSON.stringify({ error: "Reset token is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!password || password.length < 6) {
      return new Response(JSON.stringify({ error: "Password must be at least 6 characters long" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = createDirectusClient(directusUrl);
    await client.request(tt(token, password));
    return new Response(JSON.stringify({
      success: true,
      message: "Password reset successfully!"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Password reset error:", error);
    let message = "Failed to reset password";
    if (error?.errors?.[0]?.extensions?.code === "INVALID_PAYLOAD") {
      message = "Invalid or expired reset token";
    } else if (error?.errors?.[0]?.message) {
      message = error.errors[0].message;
    } else if (error?.message) {
      message = error.message;
    }
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
