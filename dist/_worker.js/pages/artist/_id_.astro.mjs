globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_BB4k16uX.mjs';
import { $ as $$Layout } from '../../chunks/Layout_4KDedCpR.mjs';
import { $ as $$Navbar } from '../../chunks/Navbar_Vv4RD_JC.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$HoverBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HoverBlock;
  const {
    defaultText,
    hoverText,
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`hover-block ${className}`, "class")} data-astro-cid-kk5pogzo> <div class="content-wrapper" data-astro-cid-kk5pogzo> <span class="default-text" data-astro-cid-kk5pogzo>${defaultText}</span> <span class="hover-text" data-astro-cid-kk5pogzo>${hoverText}</span> </div>  </div>`;
}, "/home/glm/front-wavmap/src/components/HoverBlock.astro", void 0);

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
      console.log(artist);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${artist.artistName} - Wavmap`, "description": artist.bio || `D\xE9couvrez le profil de ${artist.artistName}`, "data-astro-cid-7jl7xeig": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50" data-astro-cid-7jl7xeig> ${renderComponent($$result2, "Navbar", $$Navbar, { "currentPage": "map", "data-astro-cid-7jl7xeig": true })} ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "Artist name", "hoverText": artist.artistName, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "City", "hoverText": artist.city, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "Country", "hoverText": artist.country, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "role", "hoverText": artist.artistName, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "style", "hoverText": artist.artistName, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "social media", "hoverText": artist.artistName, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "email", "hoverText": artist.email, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> ${renderComponent($$result2, "HoverBlock", $$HoverBlock, { "defaultText": "bio", "hoverText": artist.bio, "data-astro-cid-7jl7xeig": true })} <div class="separator" data-astro-cid-7jl7xeig></div> <!-- <main class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        Profile Header
        <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{artist.artistName}</h1>
              {artist.realName && (
                <p class="text-lg text-gray-600">({artist.realName})</p>
              )}
              {artist.pronouns && (
                <p class="text-sm text-gray-500">{artist.pronouns}</p>
              )}
            </div>
            <div class="text-right">
              <p class="text-lg font-semibold text-gray-700">📍 {artist.city}, {artist.country}</p>
              <p class="text-sm text-gray-500">Member since {new Date(artist.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          {artist.bio && (
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">Bio</h2>
              <p class="text-gray-700 leading-relaxed">{artist.bio}</p>
            </div>
          )}

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">🎵 Activities</h3>
              <div class="flex flex-wrap gap-2">
                {artist.activities.map(activity => (
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">🎶 Musical Styles</h3>
              <div class="flex flex-wrap gap-2">
                {artist.genres.map(genre => (
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {(artist.soundcloud || artist.spotify || artist.instagram) && (
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">🔗 Links</h3>
              <div class="flex flex-wrap gap-4">
                {artist.soundcloud && (
                  <a 
                    href={artist.soundcloud} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors"
                  >
                    🎵 SoundCloud
                  </a>
                )}
                {artist.spotify && (
                  <a 
                    href={artist.spotify} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors"
                  >
                    🎧 Spotify
                  </a>
                )}
                {artist.instagram && (
                  <a 
                    href={\`https://instagram.com/\${artist.instagram.replace('@', '')}\`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-600 transition-colors"
                  >
                    📷 Instagram
                  </a>
                )}
              </div>
            </div>
          )}

          {artist.socialPolitical && artist.socialPolitical.length > 0 && (
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">✊ Social & Political Engagement</h3>
              <div class="flex flex-wrap gap-2">
                {artist.socialPolitical.map(topic => (
                  <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {artist.themesDevelopment && (
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">💭 Themes & Development</h3>
              <p class="text-gray-700 leading-relaxed">{artist.themesDevelopment}</p>
            </div>
          )}

          {artist.clubPolitics && (
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">🏛️ Club Politics</h3>
              <p class="text-gray-700 leading-relaxed">{artist.clubPolitics}</p>
            </div>
          )}
        </div>

        <div class="text-center">
          <a 
            href="/map" 
            class="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
          >
            ← Back to Map
          </a>
        </div>

      </div>
    </main> --> </div> ` })} `;
}, "/home/glm/front-wavmap/src/pages/artist/[id].astro", void 0);

const $$file = "/home/glm/front-wavmap/src/pages/artist/[id].astro";
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
