globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CrUJU3Ch.mjs';
import { $ as $$Layout } from '../../chunks/Layout_g5zOGT9n.mjs';
import { $ as $$Navbar } from '../../chunks/Navbar_-Y9DRhkq.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let artist = null;
  let error = null;
  try {
    const response = await fetch(`${Astro2.url.origin}/api/artists/${id}`);
    const data = await response.json();
    if (data.success) {
      artist = data.artist;
    } else {
      error = data.message || "Artist not found";
    }
  } catch (e) {
    console.error("Error fetching artist:", e);
    error = "Failed to load artist data";
  }
  if (!artist) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${artist.artistName} - Wavmap`, "description": artist.bio || `D\xE9couvrez le profil de ${artist.artistName}`, "data-astro-cid-7jl7xeig": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50" data-astro-cid-7jl7xeig> ${renderComponent($$result2, "Navbar", $$Navbar, { "currentPage": "map", "data-astro-cid-7jl7xeig": true })} <main class="py-12" data-astro-cid-7jl7xeig> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-7jl7xeig> <!-- Profile Header --> <div class="bg-white rounded-2xl shadow-lg p-8 mb-8" data-astro-cid-7jl7xeig> <div class="flex items-center justify-between mb-6" data-astro-cid-7jl7xeig> <div data-astro-cid-7jl7xeig> <h1 class="text-3xl font-bold text-gray-900 mb-2" data-astro-cid-7jl7xeig>${artist.artistName}</h1> ${artist.realName && renderTemplate`<p class="text-lg text-gray-600" data-astro-cid-7jl7xeig>(${artist.realName})</p>`} ${artist.pronouns && renderTemplate`<p class="text-sm text-gray-500" data-astro-cid-7jl7xeig>${artist.pronouns}</p>`} </div> <div class="text-right" data-astro-cid-7jl7xeig> <p class="text-lg font-semibold text-gray-700" data-astro-cid-7jl7xeig>📍 ${artist.city}, ${artist.country}</p> <p class="text-sm text-gray-500" data-astro-cid-7jl7xeig>Member since ${new Date(artist.createdAt).toLocaleDateString()}</p> </div> </div> <!-- Bio --> ${artist.bio && renderTemplate`<div class="mb-6" data-astro-cid-7jl7xeig> <h2 class="text-xl font-semibold text-gray-800 mb-3" data-astro-cid-7jl7xeig>Bio</h2> <p class="text-gray-700 leading-relaxed" data-astro-cid-7jl7xeig>${artist.bio}</p> </div>`} <!-- Activities & Genres --> <div class="grid md:grid-cols-2 gap-6 mb-6" data-astro-cid-7jl7xeig> <!-- Activities --> <div data-astro-cid-7jl7xeig> <h3 class="text-lg font-semibold text-gray-800 mb-3" data-astro-cid-7jl7xeig>🎵 Activities</h3> <div class="flex flex-wrap gap-2" data-astro-cid-7jl7xeig> ${artist.activities.map((activity) => renderTemplate`<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium" data-astro-cid-7jl7xeig> ${activity} </span>`)} </div> </div> <!-- Genres --> <div data-astro-cid-7jl7xeig> <h3 class="text-lg font-semibold text-gray-800 mb-3" data-astro-cid-7jl7xeig>🎶 Musical Styles</h3> <div class="flex flex-wrap gap-2" data-astro-cid-7jl7xeig> ${artist.genres.map((genre) => renderTemplate`<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium" data-astro-cid-7jl7xeig> ${genre} </span>`)} </div> </div> </div> <!-- Social Links --> ${(artist.soundcloud || artist.spotify || artist.instagram) && renderTemplate`<div class="mb-6" data-astro-cid-7jl7xeig> <h3 class="text-lg font-semibold text-gray-800 mb-3" data-astro-cid-7jl7xeig>🔗 Links</h3> <div class="flex flex-wrap gap-4" data-astro-cid-7jl7xeig> ${artist.soundcloud && renderTemplate`<a${addAttribute(artist.soundcloud, "href")} target="_blank" rel="noopener noreferrer" class="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors" data-astro-cid-7jl7xeig>
🎵 SoundCloud
</a>`} ${artist.spotify && renderTemplate`<a${addAttribute(artist.spotify, "href")} target="_blank" rel="noopener noreferrer" class="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors" data-astro-cid-7jl7xeig>
🎧 Spotify
</a>`} ${artist.instagram && renderTemplate`<a${addAttribute(`https://instagram.com/${artist.instagram.replace("@", "")}`, "href")} target="_blank" rel="noopener noreferrer" class="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-600 transition-colors" data-astro-cid-7jl7xeig>
📷 Instagram
</a>`} </div> </div>`} <!-- Social & Political Engagement --> ${artist.socialPolitical && artist.socialPolitical.length > 0 && renderTemplate`<div class="mb-6" data-astro-cid-7jl7xeig> <h3 class="text-lg font-semibold text-gray-800 mb-3" data-astro-cid-7jl7xeig>✊ Social & Political Engagement</h3> <div class="flex flex-wrap gap-2" data-astro-cid-7jl7xeig> ${artist.socialPolitical.map((topic) => renderTemplate`<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium" data-astro-cid-7jl7xeig> ${topic} </span>`)} </div> </div>`} <!-- Themes & Development --> ${artist.themesDevelopment && renderTemplate`<div class="mb-6" data-astro-cid-7jl7xeig> <h3 class="text-lg font-semibold text-gray-800 mb-3" data-astro-cid-7jl7xeig>💭 Themes & Development</h3> <p class="text-gray-700 leading-relaxed" data-astro-cid-7jl7xeig>${artist.themesDevelopment}</p> </div>`} <!-- Club Politics --> ${artist.clubPolitics && renderTemplate`<div class="mb-6" data-astro-cid-7jl7xeig> <h3 class="text-lg font-semibold text-gray-800 mb-3" data-astro-cid-7jl7xeig>🏛️ Club Politics</h3> <p class="text-gray-700 leading-relaxed" data-astro-cid-7jl7xeig>${artist.clubPolitics}</p> </div>`} </div> <!-- Back to Map --> <div class="text-center" data-astro-cid-7jl7xeig> <a href="/map" class="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center gap-2" data-astro-cid-7jl7xeig>
← Back to Map
</a> </div> </div> </main> </div> ` })} `;
}, "/home/glm/wavmap/src/pages/artist/[id].astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/artist/[id].astro";
const $$url = "/artist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
