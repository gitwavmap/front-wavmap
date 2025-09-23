globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createDirectusClient } from '../../../chunks/directus_BjEWHH71.mjs';
import { U as Ut } from '../../../chunks/index_B9RZUytk.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  if (!title || !content) {
    return new Response("Title and content are required", { status: 400 });
  }
  try {
    const token = cookies.get("directus_session_token")?.value;
    if (!token) {
      return new Response("Authentication token is missing", { status: 401 });
    }
    const response = await createDirectusClient.request(Ut("posts", {
      title,
      content
    }));
    return redirect("/");
  } catch (error) {
    const message = error?.errors?.[0]?.message || "Failed to create post";
    console.error(error.errors);
    return new Response(message, { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
