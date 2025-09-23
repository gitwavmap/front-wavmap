globalThis.process ??= {}; globalThis.process.env ??= {};
import { U as Ut } from '../../../chunks/index_B9RZUytk.mjs';
import { c as createTokenClient } from '../../../chunks/directus_BjEWHH71.mjs';
import { c as citiesData } from '../../../chunks/european-cities_CmJr617f.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
function findCityCoordinates(cityName, countryCode) {
  const city = citiesData.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase() && c.country === countryCode.toUpperCase()
  );
  if (city && city.coordinates) {
    return {
      latitude: city.coordinates[1],
      // coordinates sont [lng, lat]
      longitude: city.coordinates[0],
      cityId: city.id
    };
  }
  return null;
}
function validateFormData(data) {
  if (!data.artistName?.trim()) {
    return "Artist name is required";
  }
  if (!data.email?.trim()) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return "Please enter a valid email address";
  }
  if (!data.city?.trim()) {
    return "Main city is required";
  }
  if (!data.country?.trim()) {
    return "Country is required";
  }
  if (!data.activities || data.activities.length === 0) {
    return "Please select at least one field of activity";
  }
  if (!data.genres || data.genres.length === 0) {
    return "Please select at least one musical style";
  }
  return null;
}
function transformFormData(formData) {
  let finalLatitude = formData.latitude || null;
  let finalLongitude = formData.longitude || null;
  let finalCityId = formData.cityId || "";
  if (!finalLatitude || !finalLongitude || isNaN(finalLatitude) || isNaN(finalLongitude)) {
    const serverCoords = findCityCoordinates(formData.city, formData.country);
    if (serverCoords) {
      finalLatitude = serverCoords.latitude;
      finalLongitude = serverCoords.longitude;
      finalCityId = serverCoords.cityId || "";
    } else {
      console.warn(`⚠️ No coordinates found for: ${formData.city}, ${formData.country}`);
    }
  }
  return {
    artistname: formData.artistName,
    realname: formData.realName || "",
    pronouns: formData.pronouns || "",
    email: formData.email,
    maincity: formData.city,
    country: formData.country,
    cityid: finalCityId,
    // ID validé/complété par serveur
    latitude: finalLatitude,
    // Coordonnées validées/complétées
    longitude: finalLongitude,
    // Coordonnées validées/complétées
    activitydomains: JSON.stringify(formData.activities),
    musicalstyles: JSON.stringify(formData.genres),
    soundcloud: formData.soundcloud || "",
    spotify: formData.spotify || "",
    instagram: formData.instagram || "",
    bio: formData.bio || "",
    socialtopics: formData.socialPolitical ? JSON.stringify(formData.socialPolitical) : "",
    linksbetweenthemeandwork: formData.themesDevelopment || "",
    anyotherpoliticalapproach: formData.clubPolitics || "",
    status: "pending"
    // Status par défaut = en attente de validation
  };
}
const POST = async ({ request, cookies, locals }) => {
  try {
    const formData = await request.formData();
    const data = {
      artistName: formData.get("artistName")?.toString() || "",
      realName: formData.get("realName")?.toString() || "",
      pronouns: formData.get("pronouns")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      city: formData.get("city")?.toString() || "",
      country: formData.get("country")?.toString() || "",
      cityId: formData.get("cityId")?.toString() || "",
      latitude: formData.get("latitude") ? parseFloat(formData.get("latitude").toString()) : void 0,
      longitude: formData.get("longitude") ? parseFloat(formData.get("longitude").toString()) : void 0,
      activities: formData.getAll("activities"),
      genres: formData.getAll("genres"),
      soundcloud: formData.get("soundcloud")?.toString() || "",
      spotify: formData.get("spotify")?.toString() || "",
      instagram: formData.get("instagram")?.toString() || "",
      bio: formData.get("bio")?.toString() || "",
      socialPolitical: formData.getAll("socialPolitical"),
      themesDevelopment: formData.get("themesDevelopment")?.toString() || "",
      clubPolitics: formData.get("clubPolitics")?.toString() || ""
    };
    const validationError = validateFormData(data);
    if (validationError) {
      return new Response(JSON.stringify({
        success: false,
        message: validationError,
        error: validationError
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const token = cookies.get("directus_session_token")?.value;
    if (!token) {
      return new Response(JSON.stringify({
        success: false,
        message: "Authentication required. Please log in first.",
        error: "No authentication token found"
      }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const directusData = transformFormData(data);
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || "https://directus-production-1f5c.up.railway.app/";
    const client = createTokenClient(token, directusUrl);
    const response = await client.request(
      Ut("form", directusData)
      // 'Form' = nom de votre collection
    );
    return new Response(JSON.stringify({
      success: true,
      message: "🎉 Thank you for your registration! We will review your profile and contact you soon.",
      redirect: "/thank-you",
      data: response
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("❌ Error submitting artist form:", error);
    let errorMessage = "An error occurred while submitting the form. Please try again.";
    if (error?.response?.status === 403) {
      errorMessage = "Permission denied. Please check your access rights.";
    } else if (error?.response?.status === 422) {
      errorMessage = "Invalid data provided. Please check your inputs.";
    } else if (error?.errors?.[0]?.message) {
      errorMessage = error.errors[0].message;
    } else if (error?.message) {
      errorMessage = error.message;
    }
    return new Response(JSON.stringify({
      success: false,
      message: errorMessage,
      error: errorMessage
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
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
