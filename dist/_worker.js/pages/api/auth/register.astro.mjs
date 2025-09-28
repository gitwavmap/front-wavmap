globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_C0rBbLrA.mjs';
import { B as Bp } from '../../../chunks/index_Brr1gO2v.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect, locals }) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  if (!firstName || !lastName || !email || !password) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const passwordErrors = [];
  if (password.length < 8) {
    passwordErrors.push("at least 8 characters");
  }
  if (!/[a-zA-Z]/.test(password)) {
    passwordErrors.push("at least one letter");
  }
  if (!/\d/.test(password)) {
    passwordErrors.push("at least one number");
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    passwordErrors.push("at least one special character");
  }
  if (passwordErrors.length > 0) {
    return new Response(JSON.stringify({
      error: `Password must contain ${passwordErrors.join(", ")}`
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (confirmPassword && password !== confirmPassword) {
    return new Response(JSON.stringify({ error: "Passwords do not match" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = createDirectusClient(directusUrl);
    await client.request(Bp(email, password, { first_name: firstName, last_name: lastName }));
    return new Response(JSON.stringify({
      success: true,
      message: "Registration successful. Please check your email to verify your account."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Registration error:", error);
    const directusError = error?.errors?.[0];
    const errorCode = directusError?.extensions?.code;
    const errorMessage = directusError?.message || error?.message;
    let userMessage = "Registration failed. Please try again.";
    if (errorMessage?.includes("already exists") || errorMessage?.includes("duplicate")) {
      userMessage = "An account with this email already exists. Please try logging in or use a different email.";
    } else if (errorMessage?.includes("email") && errorMessage?.includes("invalid")) {
      userMessage = "Please enter a valid email address.";
    } else if (errorMessage?.includes("password")) {
      userMessage = "Password does not meet requirements. Please choose a stronger password.";
    } else if (error?.response?.status === 403) {
      userMessage = "User registration is disabled. Please contact support.";
    } else if (error?.response?.status === 422) {
      userMessage = "Please check your information and try again.";
    }
    return new Response(JSON.stringify({
      error: userMessage,
      code: errorCode || "REGISTRATION_ERROR"
    }), {
      status: error?.response?.status || 400,
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
