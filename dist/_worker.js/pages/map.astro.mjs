globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, a as renderTemplate, f as renderScript, e as defineScriptVars, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_CrUJU3Ch.mjs';
import { $ as $$Layout } from '../chunks/Layout_g5zOGT9n.mjs';
import { g as getLocale } from '../chunks/runtime_DSWkPTzG.mjs';
/* empty css                               */
import { $ as $$Navbar } from '../chunks/Navbar_-Y9DRhkq.mjs';
export { renderers } from '../renderers.mjs';

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_map_title$3 = () => `Artist Community Map`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_map_title$2 = () => `Carte de la Communauté d'Artistes`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_map_title$1 = () => `Mapa de la Comunidad de Artistas`;

// eslint-disable

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "fr" | "es" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const artist_map_title = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return artist_map_title$3()
	if (locale === "fr") return artist_map_title$2()
	if (locale === "es") return artist_map_title$1()
	return "artist_map_title"
};

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_map_description$3 = () => `Discover artists from the underground music community around the world`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_map_description$2 = () => `Découvrez les artistes de la communauté musicale underground à travers le monde`;

// eslint-disable

/** @type {(inputs: {}) => string} */
const artist_map_description$1 = () => `Descubre artistas de la comunidad musical underground de todo el mundo`;

// eslint-disable

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "fr" | "es" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const artist_map_description = (inputs= {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return artist_map_description$3()
	if (locale === "fr") return artist_map_description$2()
	if (locale === "es") return artist_map_description$1()
	return "artist_map_description"
};

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoid2F2bWFwIiwiYSI6ImNtY2huc3I1ajB4ZzcybXF4cWEzdXlkbG4ifQ.Szzm5T0oYElXQwPq6GO4Sw";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ArtistMap = createComponent(async ($$result, $$props, $$slots) => {
  const mapboxToken = MAPBOX_ACCESS_TOKEN;
  return renderTemplate(_a || (_a = __template(["", '<div class="map-container" data-astro-cid-4qmttrul> <h2 data-astro-cid-4qmttrul>', '</h2> <p class="map-description" data-astro-cid-4qmttrul>', '</p> <div id="wavmap" class="map" data-astro-cid-4qmttrul></div> </div> <script>(function(){', `
  // Fetch real artist data from Directus API
  async function loadApprovedArtists() {
    try {
      const response = await fetch('/api/artists/approved');
      const data = await response.json();
      
      if (data.success && data.artists) {
        return data.artists;
      } else {
        return getFallbackArtists();
      }
    } catch (error) {
      console.error('\u{1F5FA}\uFE0F Error loading artists, using fallback data:', error);
      return getFallbackArtists();
    }
  }

  // Fallback data si l'API \xE9choue
  function getFallbackArtists() {
    return [
      {
        id: 1,
        artistName: "DJ Sample Paris",
        city: "Paris",
        country: "France",
        latitude: 48.8566,
        longitude: 2.3522,
        activities: ["DJ", "Producer"],
        genres: ["Techno", "House"]
      },
      {
        id: 2,
        artistName: "Berlin Beats",
        city: "Berlin",
        country: "Germany",
        latitude: 52.5200,
        longitude: 13.4050,
        activities: ["DJ", "Label"],
        genres: ["Techno", "Electronic"]
      },
      {
        id: 3,
        artistName: "Barcelona Vibes",
        city: "Barcelona",
        country: "Spain",
        latitude: 41.3851,
        longitude: 2.1734,
        activities: ["Producer", "Collective"],
        genres: ["Bass", "Experimental"]
      }
    ];
  }
  
  // Cleanup function to properly remove existing map
  function cleanupMap() {
    if (window.wavmapInstance) {
      try {
        window.wavmapInstance.remove();
      } catch (e) {
      }
      window.wavmapInstance = null;
    }
  }
  
  async function initializeMap() {
    const mapContainer = document.getElementById('wavmap');
    
    if (!mapContainer) {
      return;
    }
    
    // Always cleanup existing map first
    cleanupMap();
    
    // Wait for Mapbox GL to load with retry mechanism
    let attempts = 0;
    const maxAttempts = 10;
    
    while (typeof mapboxgl === 'undefined' && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
    
    // Check if Mapbox GL is available
    if (typeof mapboxgl === 'undefined') {
      console.error('\u{1F5FA}\uFE0F Mapbox GL JS not loaded after', maxAttempts, 'attempts');
      return;
    }
    
    // Use token from environment variables
    mapboxgl.accessToken = mapboxToken;
    
    try {
      const map = new mapboxgl.Map({
        container: 'wavmap',
        style: 'mapbox://styles/mapbox/dark-v11', // Dark theme to match the site
        center: [2.3522, 48.8566], // Centered on Paris initially
        zoom: 4 // Show Europe level view
      });
      
      // Store global instance
      window.wavmapInstance = map;
      
      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl());
      
      // Add fullscreen control  
      map.addControl(new mapboxgl.FullscreenControl());
      
      // Load and add real artist data when map is ready
      map.on('load', async function() {
        
        // Fetch approved artists from API
        const artists = await loadApprovedArtists();
        
        artists.forEach(artist => {
          // Create lightweight popup (optimized version)
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(\`
              <div class="artist-popup">
                <h3>\${artist.artistName}</h3>
                <p><strong>\${artist.city}, \${artist.country}</strong></p>
                <p><strong>Activities:</strong> \${artist.activities.join(', ')}</p>
                <p><strong>Genres:</strong> \${artist.genres.slice(0, 3).join(', ')}\${artist.genres.length > 3 ? '...' : ''}</p>
                <div class="popup-actions">
                  <a href="/artist/\${artist.id}" class="view-profile-btn">\u{1F464} Voir le profil</a>
                </div>
              </div>
            \`);
          
          // Create a marker with coordinates from database
          new mapboxgl.Marker({
            color: '#6366f1' // Match the site's primary color
          })
          .setLngLat([artist.longitude, artist.latitude])
          .setPopup(popup)
          .addTo(map);
        });
        
      });
      
      map.on('error', function(e) {
        console.error('\u{1F5FA}\uFE0F Mapbox error:', e);
      });
      
    } catch (error) {
      console.error('\u{1F5FA}\uFE0F Error initializing Mapbox:', error);
    }
  }
  
  // Cleanup before page swap (View Transitions)
  document.addEventListener('astro:before-swap', () => {
    cleanupMap();
  });
  
  // Reinitialize after page swap (View Transitions)  
  document.addEventListener('astro:after-swap', () => {
    // Small delay to ensure DOM is ready
    setTimeout(initializeMap, 50);
  });
  
  // Initialize map on page load (View Transitions)
  document.addEventListener('astro:page-load', () => {
    setTimeout(initializeMap, 50);
  });
  
  // Initialize on DOM content loaded (first load)
  document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
  });
  
  // Fallback for immediate execution
  if (document.readyState !== 'loading') {
    initializeMap();
  }
  
  // TODO: In the future, fetch real artist data from Directus
  // async function loadArtistLocations() {
  //   try {
  //     const response = await fetch('/api/artists/locations');
  //     const artists = await response.json();
  //     // Add markers for real artists
  //   } catch (error) {
  //     console.error('Error loading artist locations:', error);
  //   }
  // }
})();<\/script>  <!-- Import Mapbox CSS and JS --> <link href="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css" rel="stylesheet"> `, ""], ["", '<div class="map-container" data-astro-cid-4qmttrul> <h2 data-astro-cid-4qmttrul>', '</h2> <p class="map-description" data-astro-cid-4qmttrul>', '</p> <div id="wavmap" class="map" data-astro-cid-4qmttrul></div> </div> <script>(function(){', `
  // Fetch real artist data from Directus API
  async function loadApprovedArtists() {
    try {
      const response = await fetch('/api/artists/approved');
      const data = await response.json();
      
      if (data.success && data.artists) {
        return data.artists;
      } else {
        return getFallbackArtists();
      }
    } catch (error) {
      console.error('\u{1F5FA}\uFE0F Error loading artists, using fallback data:', error);
      return getFallbackArtists();
    }
  }

  // Fallback data si l'API \xE9choue
  function getFallbackArtists() {
    return [
      {
        id: 1,
        artistName: "DJ Sample Paris",
        city: "Paris",
        country: "France",
        latitude: 48.8566,
        longitude: 2.3522,
        activities: ["DJ", "Producer"],
        genres: ["Techno", "House"]
      },
      {
        id: 2,
        artistName: "Berlin Beats",
        city: "Berlin",
        country: "Germany",
        latitude: 52.5200,
        longitude: 13.4050,
        activities: ["DJ", "Label"],
        genres: ["Techno", "Electronic"]
      },
      {
        id: 3,
        artistName: "Barcelona Vibes",
        city: "Barcelona",
        country: "Spain",
        latitude: 41.3851,
        longitude: 2.1734,
        activities: ["Producer", "Collective"],
        genres: ["Bass", "Experimental"]
      }
    ];
  }
  
  // Cleanup function to properly remove existing map
  function cleanupMap() {
    if (window.wavmapInstance) {
      try {
        window.wavmapInstance.remove();
      } catch (e) {
      }
      window.wavmapInstance = null;
    }
  }
  
  async function initializeMap() {
    const mapContainer = document.getElementById('wavmap');
    
    if (!mapContainer) {
      return;
    }
    
    // Always cleanup existing map first
    cleanupMap();
    
    // Wait for Mapbox GL to load with retry mechanism
    let attempts = 0;
    const maxAttempts = 10;
    
    while (typeof mapboxgl === 'undefined' && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
    
    // Check if Mapbox GL is available
    if (typeof mapboxgl === 'undefined') {
      console.error('\u{1F5FA}\uFE0F Mapbox GL JS not loaded after', maxAttempts, 'attempts');
      return;
    }
    
    // Use token from environment variables
    mapboxgl.accessToken = mapboxToken;
    
    try {
      const map = new mapboxgl.Map({
        container: 'wavmap',
        style: 'mapbox://styles/mapbox/dark-v11', // Dark theme to match the site
        center: [2.3522, 48.8566], // Centered on Paris initially
        zoom: 4 // Show Europe level view
      });
      
      // Store global instance
      window.wavmapInstance = map;
      
      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl());
      
      // Add fullscreen control  
      map.addControl(new mapboxgl.FullscreenControl());
      
      // Load and add real artist data when map is ready
      map.on('load', async function() {
        
        // Fetch approved artists from API
        const artists = await loadApprovedArtists();
        
        artists.forEach(artist => {
          // Create lightweight popup (optimized version)
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(\\\`
              <div class="artist-popup">
                <h3>\\\${artist.artistName}</h3>
                <p><strong>\\\${artist.city}, \\\${artist.country}</strong></p>
                <p><strong>Activities:</strong> \\\${artist.activities.join(', ')}</p>
                <p><strong>Genres:</strong> \\\${artist.genres.slice(0, 3).join(', ')}\\\${artist.genres.length > 3 ? '...' : ''}</p>
                <div class="popup-actions">
                  <a href="/artist/\\\${artist.id}" class="view-profile-btn">\u{1F464} Voir le profil</a>
                </div>
              </div>
            \\\`);
          
          // Create a marker with coordinates from database
          new mapboxgl.Marker({
            color: '#6366f1' // Match the site's primary color
          })
          .setLngLat([artist.longitude, artist.latitude])
          .setPopup(popup)
          .addTo(map);
        });
        
      });
      
      map.on('error', function(e) {
        console.error('\u{1F5FA}\uFE0F Mapbox error:', e);
      });
      
    } catch (error) {
      console.error('\u{1F5FA}\uFE0F Error initializing Mapbox:', error);
    }
  }
  
  // Cleanup before page swap (View Transitions)
  document.addEventListener('astro:before-swap', () => {
    cleanupMap();
  });
  
  // Reinitialize after page swap (View Transitions)  
  document.addEventListener('astro:after-swap', () => {
    // Small delay to ensure DOM is ready
    setTimeout(initializeMap, 50);
  });
  
  // Initialize map on page load (View Transitions)
  document.addEventListener('astro:page-load', () => {
    setTimeout(initializeMap, 50);
  });
  
  // Initialize on DOM content loaded (first load)
  document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
  });
  
  // Fallback for immediate execution
  if (document.readyState !== 'loading') {
    initializeMap();
  }
  
  // TODO: In the future, fetch real artist data from Directus
  // async function loadArtistLocations() {
  //   try {
  //     const response = await fetch('/api/artists/locations');
  //     const artists = await response.json();
  //     // Add markers for real artists
  //   } catch (error) {
  //     console.error('Error loading artist locations:', error);
  //   }
  // }
})();<\/script>  <!-- Import Mapbox CSS and JS --> <link href="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css" rel="stylesheet"> `, ""])), maybeRenderHead(), artist_map_title(), artist_map_description(), defineScriptVars({ mapboxToken }), renderScript($$result, "/home/glm/wavmap/src/components/ArtistMap.astro?astro&type=script&index=0&lang.ts"));
}, "/home/glm/wavmap/src/components/ArtistMap.astro", void 0);

const $$Map = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${artist_map_title()} - Wavmap`, "description": artist_map_description() }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="min-h-screen bg-gray-50"> ${renderComponent($$result2, "Navbar", $$Navbar, { "currentPage": "map" })} <!-- Map Section --> <main class="py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ArtistMap", $$ArtistMap, {})} </div> </main> </div> ` })}`;
}, "/home/glm/wavmap/src/pages/map.astro", void 0);

const $$file = "/home/glm/wavmap/src/pages/map.astro";
const $$url = "/map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Map,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
