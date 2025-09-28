globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_C0rBbLrA.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, locals }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const refreshToken = body.refresh_token || cookies.get("directus_refresh_token")?.value;
    if (!refreshToken) {
      return new Response(JSON.stringify({
        error: "No refresh token provided",
        code: "NO_REFRESH_TOKEN"
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = createDirectusClient(directusUrl);
    const response = await fetch(`${directusUrl}auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        refresh_token: refreshToken
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    if (data.data?.access_token) {
      cookies.set("directus_session_token", data.data.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7
        // 7 days
      });
      if (data.data.refresh_token) {
        cookies.set("directus_refresh_token", data.data.refresh_token, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7
          // 7 days
        });
      }
      return new Response(JSON.stringify({
        success: true,
        access_token: data.data.access_token,
        expires_in: data.data.expires || 9e5
        // 15 minutes default
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    throw new Error("No access token in refresh response");
  } catch (error) {
    console.error("Token refresh error:", error);
    cookies.delete("directus_session_token", { path: "/" });
    cookies.delete("directus_refresh_token", { path: "/" });
    const errorCode = error?.errors?.[0]?.extensions?.code;
    let userMessage = "Session expired. Please log in again.";
    if (errorCode === "INVALID_CREDENTIALS") {
      userMessage = "Your session has expired. Please log in again.";
    } else if (errorCode === "TOKEN_EXPIRED") {
      userMessage = "Refresh token has expired. Please log in again.";
    }
    return new Response(JSON.stringify({
      error: userMessage,
      code: errorCode || "REFRESH_FAILED",
      requiresLogin: true
    }), {
      status: 401,
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
