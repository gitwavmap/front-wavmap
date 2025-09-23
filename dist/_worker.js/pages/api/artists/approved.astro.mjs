globalThis.process ??= {}; globalThis.process.env ??= {};
import { L as Ls, l as le, j as ju } from '../../../chunks/index_B9RZUytk.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
let globalClient = null;
function getDirectusClient(directusUrl) {
  if (!globalClient) {
    globalClient = le(directusUrl).with(ju());
  }
  return globalClient;
}
const GET = async ({ request, locals }) => {
  try {
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = getDirectusClient(directusUrl);
    const artists = await client.request(
      Ls("form", {
        filter: {
          status: { _eq: "approved" },
          latitude: { _nnull: true },
          // Seulement avec coordonnées
          longitude: { _nnull: true }
        },
        fields: [
          "id",
          "artistname",
          "maincity",
          "country",
          "latitude",
          "longitude",
          "activitydomains",
          "musicalstyles"
          // Champs optimisés pour la map - bio/liens dans l'API individuelle
        ],
        limit: 1e3,
        // Limite raisonnable pour éviter les timeouts
        sort: ["-date_created"]
        // Plus récents en premier
      })
    );
    const mapboxData = artists.map((artist) => {
      let activities = [];
      let genres = [];
      if (artist.activitydomains) {
        if (Array.isArray(artist.activitydomains)) {
          activities = artist.activitydomains;
        } else if (typeof artist.activitydomains === "string") {
          try {
            if (artist.activitydomains.startsWith("[") || artist.activitydomains.startsWith("{")) {
              activities = JSON.parse(artist.activitydomains);
            } else {
              activities = artist.activitydomains.split(",").map((s) => s.trim()).filter((s) => s);
            }
          } catch (e) {
            console.warn(`⚠️ Invalid activities data for artist ${artist.id}:`, artist.activitydomains);
            activities = [];
          }
        }
      }
      if (artist.musicalstyles) {
        if (Array.isArray(artist.musicalstyles)) {
          genres = artist.musicalstyles;
        } else if (typeof artist.musicalstyles === "string") {
          try {
            if (artist.musicalstyles.startsWith("[") || artist.musicalstyles.startsWith("{")) {
              genres = JSON.parse(artist.musicalstyles);
            } else {
              genres = artist.musicalstyles.split(",").map((s) => s.trim()).filter((s) => s);
            }
          } catch (e) {
            console.warn(`⚠️ Invalid genres data for artist ${artist.id}:`, artist.musicalstyles);
            genres = [];
          }
        }
      }
      const result = {
        id: artist.id,
        artistName: artist.artistname,
        city: artist.maincity,
        country: artist.country,
        latitude: artist.latitude,
        longitude: artist.longitude,
        activities,
        genres
      };
      return result;
    }).filter((artist) => {
      const hasValidCoords = artist.latitude != null && artist.longitude != null && !isNaN(artist.latitude) && !isNaN(artist.longitude) && artist.latitude !== "" && artist.longitude !== "";
      if (!hasValidCoords) {
        console.warn(`⚠️ Artist ${artist.id} (${artist.artistName}) excluded: invalid coordinates`);
      }
      return hasValidCoords;
    });
    return new Response(JSON.stringify({
      success: true,
      count: mapboxData.length,
      artists: mapboxData
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=1800"
        // Cache 30 minutes
      }
    });
  } catch (error) {
    console.error("❌ Error fetching approved artists:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Error loading artist data",
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
