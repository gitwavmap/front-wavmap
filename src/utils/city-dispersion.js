/**
 * Système de dispersion géographique intelligente pour les villes
 * Distribue les utilisateurs naturellement dans les zones urbaines
 */

// Classification des villes par taille avec rayons optimisés
const CITY_TYPES = {
  // Métropoles > 1M habitants
  major_city: {
    radius: 6,
    cities: [
      'london_gb', 'paris_fr', 'berlin_de', 'madrid_es', 'rome_it',
      'barcelona_es', 'milan_it', 'hamburg_de', 'munich_de'
    ]
  },

  // Grandes villes 300k-1M habitants
  large_city: {
    radius: 3,
    cities: [
      'amsterdam_nl', 'vienna_at', 'brussels_be', 'budapest_hu',
      'copenhagen_dk', 'dublin_ie', 'helsinki_fi', 'lisbon_pt',
      'oslo_no', 'prague_cz', 'stockholm_se', 'warsaw_pl', 'zurich_ch',
      'toulouse_fr', 'lyon_fr', 'marseille_fr', 'frankfurt_de',
      'cologne_de', 'stuttgart_de', 'manchester_gb', 'birmingham_gb',
      'glasgow_gb', 'athens_gr'
    ]
  },

  // Villes moyennes 100k-300k habitants
  medium_city: {
    radius: 2,
    cities: [
      'nice_fr', 'nantes_fr', 'strasbourg_fr', 'montpellier_fr',
      'bordeaux_fr', 'lille_fr', 'rennes_fr', 'reims_fr',
      'dortmund_de', 'essen_de', 'bremen_de', 'dresden_de',
      'hanover_de', 'liverpool_gb', 'leeds_gb', 'edinburgh_gb'
    ]
  },

  // Petites villes < 100k habitants (défaut)
  small_city: {
    radius: 1.5,
    cities: []
  }
};

/**
 * Détermine le type de ville basé sur son ID
 */
function getCityType(cityId) {
  for (const [type, config] of Object.entries(CITY_TYPES)) {
    if (config.cities.includes(cityId)) {
      return config;
    }
  }
  // Par défaut : petite ville
  return CITY_TYPES.small_city;
}

/**
 * Génère des coordonnées dispersées intelligemment dans une ville
 * Distribution : 70% centre-ville, 30% zone urbaine
 */
export function smartDispersion(originalLat, originalLng, cityId = null) {
  const cityType = getCityType(cityId);
  const maxRadius = cityType.radius;

  // Distribution probabiliste
  const random = Math.random();
  let effectiveRadius;

  if (random < 0.7) {
    // 70% des utilisateurs dans le centre-ville (rayon réduit)
    effectiveRadius = maxRadius * 0.4;
  } else {
    // 30% des utilisateurs en zone urbaine (rayon plus large)
    effectiveRadius = maxRadius * 0.8;
  }

  return disperseWithRadius(originalLat, originalLng, effectiveRadius);
}

/**
 * Disperse un point dans un rayon donné
 */
function disperseWithRadius(originalLat, originalLng, radiusKm) {
  // Conversion du rayon en degrés (approximation)
  const earthRadiusKm = 6371;
  const radiusInDegrees = radiusKm / earthRadiusKm * (180 / Math.PI);

  // Génération d'un angle aléatoire (0-360°)
  const randomAngle = Math.random() * 2 * Math.PI;

  // Distance aléatoire dans le rayon (distribution uniforme)
  const randomDistance = Math.sqrt(Math.random()) * radiusInDegrees;

  // Calcul des deltas en tenant compte de la déformation de la latitude
  const deltaLat = randomDistance * Math.cos(randomAngle);
  const deltaLng = randomDistance * Math.sin(randomAngle) / Math.cos(originalLat * Math.PI / 180);

  return {
    lat: originalLat + deltaLat,
    lng: originalLng + deltaLng
  };
}

/**
 * Calcule la distance entre deux points (formule de Haversine)
 */
function calculateDistance(lat1, lng1, lat2, lng2) {
  const earthRadiusKm = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

/**
 * Valide que les coordonnées dispersées respectent les contraintes
 */
export function validateDispersion(originalLat, originalLng, newLat, newLng, cityId) {
  const cityType = getCityType(cityId);
  const maxDistance = cityType.radius;
  const actualDistance = calculateDistance(originalLat, originalLng, newLat, newLng);

  // Si la distance dépasse la limite, on réduit proportionnellement
  if (actualDistance > maxDistance) {
    const ratio = maxDistance / actualDistance;
    return {
      lat: originalLat + (newLat - originalLat) * ratio,
      lng: originalLng + (newLng - originalLng) * ratio
    };
  }

  return { lat: newLat, lng: newLng };
}

/**
 * Obtient le rayon de dispersion pour une ville
 */
export function getCityRadius(cityId) {
  return getCityType(cityId).radius;
}

/**
 * Fonction principale : génère des coordonnées dispersées et validées
 */
export function generateDispersedCoordinates(originalLat, originalLng, cityId = null) {
  // 1. Génération intelligente
  const dispersed = smartDispersion(originalLat, originalLng, cityId);

  // 2. Validation des contraintes
  const validated = validateDispersion(originalLat, originalLng, dispersed.lat, dispersed.lng, cityId);

  // 3. Arrondir pour éviter une précision excessive
  return {
    lat: Math.round(validated.lat * 1000000) / 1000000, // 6 décimales
    lng: Math.round(validated.lng * 1000000) / 1000000  // 6 décimales
  };
}