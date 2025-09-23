globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as citiesData } from '../../../chunks/european-cities_CmJr617f.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    return new Response(JSON.stringify({
      success: true,
      count: citiesData.length,
      cities: citiesData
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
        // Cache 1 hour
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: "Error loading cities data",
      error: error.message || "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
