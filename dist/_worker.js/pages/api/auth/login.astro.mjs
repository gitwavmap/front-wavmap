globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_C0rBbLrA.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect, locals }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = createDirectusClient(directusUrl);
    const response = await client.login({ email, password });
    if (response.access_token) {
      cookies.set("directus_session_token", response.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7
        // 7 days
      });
    }
    if (response.refresh_token) {
      cookies.set("directus_refresh_token", response.refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7
        // 7 days
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    const directusError = error?.errors?.[0];
    const errorCode = directusError?.extensions?.code;
    const errorMessage = directusError?.message || error?.message;
    let userMessage = "Login failed. Please try again.";
    if (errorCode === "INVALID_CREDENTIALS" || errorMessage?.includes("Invalid user credentials")) {
      userMessage = "Email or password is incorrect. Please check your credentials and try again.";
    } else if (errorCode === "TOKEN_EXPIRED") {
      userMessage = "Your session has expired. Please log in again.";
    } else if (errorCode === "INVALID_TOKEN") {
      userMessage = "Authentication token is invalid. Please log in again.";
    } else if (errorCode === "INVALID_IP") {
      userMessage = "Your IP address is not authorized for this account.";
    } else if (errorCode === "INVALID_OTP") {
      userMessage = "The two-factor authentication code is incorrect.";
    } else if (error?.response?.status === 401) {
      userMessage = "Email or password is incorrect. Please check your credentials and try again.";
    } else if (error?.response?.status === 403) {
      userMessage = "Access denied. Your account may be inactive or suspended.";
    }
    return new Response(JSON.stringify({
      error: userMessage,
      code: errorCode || "UNKNOWN_ERROR"
    }), {
      status: error?.response?.status || 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
