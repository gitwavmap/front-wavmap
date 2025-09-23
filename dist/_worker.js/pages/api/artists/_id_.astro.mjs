globalThis.process ??= {}; globalThis.process.env ??= {};
import { G as Gs, l as le, j as ju } from '../../../chunks/index_B9RZUytk.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
let globalClient = null;
function getDirectusClient(directusUrl) {
  if (!globalClient) {
    globalClient = le(directusUrl).with(ju());
  }
  return globalClient;
}
const GET = async ({ params, locals }) => {
  try {
    const artistId = params.id;
    if (!artistId) {
      return new Response(JSON.stringify({
        success: false,
        message: "Artist ID is required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = getDirectusClient(directusUrl);
    const artist = await client.request(
      Gs("form", artistId, {
        filter: {
          status: { _eq: "approved" }
          // Seulement les artistes approuvés
        },
        fields: [
          "id",
          "artistname",
          "realname",
          "pronouns",
          "email",
          "maincity",
          "country",
          "cityid",
          "latitude",
          "longitude",
          "activitydomains",
          "musicalstyles",
          "soundcloud",
          "spotify",
          "instagram",
          "bio",
          "socialtopics",
          "linksbetweenthemeandwork",
          "anyotherpoliticalapproach",
          "status",
          "date_created"
        ]
      })
    );
    if (!artist) {
      return new Response(JSON.stringify({
        success: false,
        message: "Artist not found or not approved"
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    let activities = [];
    let genres = [];
    let socialPolitical = [];
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
    if (artist.socialtopics) {
      if (Array.isArray(artist.socialtopics)) {
        socialPolitical = artist.socialtopics;
      } else if (typeof artist.socialtopics === "string") {
        try {
          if (artist.socialtopics.startsWith("[") || artist.socialtopics.startsWith("{")) {
            socialPolitical = JSON.parse(artist.socialtopics);
          } else {
            socialPolitical = artist.socialtopics.split(",").map((s) => s.trim()).filter((s) => s);
          }
        } catch (e) {
          console.warn(`⚠️ Invalid social topics data for artist ${artist.id}:`, artist.socialtopics);
          socialPolitical = [];
        }
      }
    }
    const artistDetails = {
      id: artist.id,
      artistName: artist.artistname,
      realName: artist.realname || "",
      pronouns: artist.pronouns || "",
      email: artist.email,
      city: artist.maincity,
      country: artist.country,
      cityId: artist.cityid || "",
      latitude: artist.latitude,
      longitude: artist.longitude,
      activities,
      genres,
      soundcloud: artist.soundcloud || "",
      spotify: artist.spotify || "",
      instagram: artist.instagram || "",
      bio: artist.bio || "",
      socialPolitical,
      themesDevelopment: artist.linksbetweenthemeandwork || "",
      clubPolitics: artist.anyotherpoliticalapproach || "",
      status: artist.status,
      createdAt: artist.date_created
    };
    return new Response(JSON.stringify({
      success: true,
      artist: artistDetails
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=600"
        // Cache 10 minutes
      }
    });
  } catch (error) {
    console.error("❌ Error fetching artist details:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Error loading artist details",
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
