/**
 * City utilities for handling city data and mapping
 */

/**
 * Generate a unique city ID from name and country
 * @param {string} cityName - The city name
 * @param {string} countryCode - The 2-letter country code
 * @returns {string} - Unique city ID in format "cityname_country"
 */
export function generateCityId(cityName, countryCode) {
  const cleanName = cityName
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .replace(/[ß]/g, 'ss')
    .replace(/ł/g, 'l')
    .replace(/ą/g, 'a')
    .replace(/ę/g, 'e')
    .replace(/ć/g, 'c')
    .replace(/ń/g, 'n')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  
  return `${cleanName}_${countryCode.toLowerCase()}`;
}

/**
 * Find city data by ID
 * @param {string} cityId - The unique city ID
 * @param {Array} citiesData - Array of city objects
 * @returns {Object|null} - City object or null if not found
 */
export function findCityById(cityId, citiesData) {
  return citiesData.find(city => city.id === cityId) || null;
}

/**
 * Find city data by name and country
 * @param {string} cityName - The city name
 * @param {string} countryCode - The 2-letter country code
 * @param {Array} citiesData - Array of city objects
 * @returns {Object|null} - City object or null if not found
 */
export function findCityByNameAndCountry(cityName, countryCode, citiesData) {
  return citiesData.find(city => 
    city.name.toLowerCase() === cityName.toLowerCase() && 
    city.country === countryCode.toUpperCase()
  ) || null;
}

/**
 * Get coordinates for a city
 * @param {string} cityId - The unique city ID
 * @param {Array} citiesData - Array of city objects
 * @returns {Array|null} - [longitude, latitude] or null if not found
 */
export function getCityCoordinates(cityId, citiesData) {
  const city = findCityById(cityId, citiesData);
  return city ? city.coordinates : null;
}

/**
 * Format city data for Directus storage
 * @param {Object} cityData - City object with name, country, coordinates
 * @returns {Object} - Formatted data for Directus
 */
export function formatCityForDirectus(cityData) {
  return {
    city_id: cityData.id,
    city_name: cityData.name,
    country_code: cityData.country,
    country_name: cityData.countryName,
    latitude: cityData.coordinates[1], // coordinates are [lng, lat]
    longitude: cityData.coordinates[0]
  };
}

/**
 * Create Mapbox marker data from city
 * @param {Object} cityData - City object
 * @param {Object} artistData - Artist data
 * @returns {Object} - Mapbox marker configuration
 */
export function createMapboxMarkerData(cityData, artistData) {
  return {
    coordinates: cityData.coordinates,
    popup: {
      title: artistData.artistName || artistData.name,
      city: `${cityData.name}, ${cityData.countryName}`,
      activities: artistData.activities || [],
      genres: artistData.genres || []
    }
  };
}