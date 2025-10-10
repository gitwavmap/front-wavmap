import type { APIRoute } from 'astro';
import { createDirectus, rest, readItems } from '@directus/sdk';

export const prerender = false;

// Interface pour les données d'artiste optimisées pour Mapbox
interface MapboxArtistData {
  id: number;
  artistName: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  activities: string[];
  genres: string[];
  socialTopics: string[];
  clubPolitics: string;
  themesDevelopment: string;
  pronouns: string;
  bio: string;
  website: string;
  bandcamp: string;
  soundcloud: string;
  instagram: string;
  subvert: string;
  tiktok: string;
  youtube: string;
  email: string;
  profile_image: string;
}

// Client Directus réutilisable (connection pooling)
let globalClient: any = null;

// Cache pour les métadonnées des champs (choices)
let fieldMetadataCache: { [key: string]: { [value: string]: string } | null } = {
  musicalstyles: null,
  activitydomains: null,
  socialtopics: null
};

function getDirectusClient(directusUrl: string) {
  if (!globalClient) {
    globalClient = createDirectus(directusUrl).with(rest());
  }
  return globalClient;
}

// Fonction pour récupérer les métadonnées d'un champ depuis Directus
async function getFieldChoices(directusUrl: string, collection: string, fieldName: string): Promise<{ [value: string]: string } | null> {
  try {
    // Vérifier le cache
    if (fieldMetadataCache[fieldName]) {
      return fieldMetadataCache[fieldName];
    }

    // Récupérer les métadonnées du champ via l'API Directus
    const response = await fetch(`${directusUrl}fields/${collection}/${fieldName}`);

    if (!response.ok) {
      console.warn(`⚠️ Failed to fetch field metadata for ${fieldName}:`, response.status);
      return null;
    }

    const fieldData = await response.json();

    // Extraire les choices depuis les options du champ
    const choices = fieldData?.data?.meta?.options?.choices || null;

    if (choices && Array.isArray(choices)) {
      // Créer un mapping value → text
      const mapping: { [value: string]: string } = {};
      choices.forEach((choice: any) => {
        if (choice.value && choice.text) {
          mapping[choice.value] = choice.text;
        }
      });

      // Mettre en cache
      fieldMetadataCache[fieldName] = mapping;

      return mapping;
    }

    return null;
  } catch (error) {
    console.error(`❌ Error fetching field metadata for ${fieldName}:`, error);
    return null;
  }
}

// Fonction helper pour transformer les values en texts
function mapValuesToTexts(values: string[], mapping: { [value: string]: string } | null): string[] {
  if (!mapping) {
    // Pas de mapping disponible, retourner les values telles quelles
    return values;
  }

  return values.map(value => {
    // Si on a un mapping pour cette value, utiliser le text, sinon garder la value
    return mapping[value] || value;
  });
}

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';

    // Utiliser le client global pour éviter de recréer des connexions
    const client = getDirectusClient(directusUrl);

    // Charger les métadonnées des champs (une seule fois, ensuite en cache)
    const genresMapping = await getFieldChoices(directusUrl, 'form', 'musicalstyles');
    const activitiesMapping = await getFieldChoices(directusUrl, 'form', 'activitydomains');

    // Récupérer les artistes avec pagination et limites pour performance
    const artists = await client.request(
      readItems('form', {
        filter: {
          status: { _eq: 'approved' },
          latitude: { _nnull: true }, // Seulement avec coordonnées
          longitude: { _nnull: true }
        },
        fields: [
          'id',
          'artistname',
          'maincity',
          'country',
          'latitude',
          'longitude',
          'activitydomains',
          'musicalstyles',
          'socialtopics',
          'anyotherpoliticalapproach',
          'linksbetweenthemeandwork',
          'pronouns',
          'bio',
          'website',
          'bandcamp',
          'soundcloud',
          'instagram',
          'subvert',
          'tiktok',
          'youtube',
          'email',
          'profile_image'
          // Champs optimisés pour la map + filtres + détail artiste
        ],
        limit: 1000, // Limite raisonnable pour éviter les timeouts
        sort: ['-date_created'] // Plus récents en premier
      })
    );


    // Transformer les données pour Mapbox (format léger pour performance)
    const mapboxData: MapboxArtistData[] = artists.map((artist: any) => {

      // Parser les données de manière sécurisée
      let activities = [];
      let genres = [];

      // Vérifier le type des données activities/activitydomains
      if (artist.activitydomains) {
        if (Array.isArray(artist.activitydomains)) {
          // Les values sont déjà en array, on les transforme via le mapping
          activities = mapValuesToTexts(artist.activitydomains, activitiesMapping);
        } else if (typeof artist.activitydomains === 'string') {
          try {
            if (artist.activitydomains.startsWith('[') || artist.activitydomains.startsWith('{')) {
              // String JSON - parser
              const parsed = JSON.parse(artist.activitydomains);
              if (Array.isArray(parsed)) {
                activities = mapValuesToTexts(parsed, activitiesMapping);
              } else {
                activities = [];
              }
            } else {
              // String séparée par virgules
              const values = artist.activitydomains.split(',').map(s => s.trim()).filter(s => s);
              activities = mapValuesToTexts(values, activitiesMapping);
            }
          } catch (e) {
            console.warn(`⚠️ Invalid activities data for artist ${artist.id}:`, artist.activitydomains);
            activities = [];
          }
        }
      }
      
      // Vérifier le type des données genres/musicalstyles
      if (artist.musicalstyles) {
        if (Array.isArray(artist.musicalstyles)) {
          // Les values sont déjà en array, on les transforme via le mapping
          genres = mapValuesToTexts(artist.musicalstyles, genresMapping);
        } else if (typeof artist.musicalstyles === 'string') {
          try {
            if (artist.musicalstyles.startsWith('[') || artist.musicalstyles.startsWith('{')) {
              // String JSON - parser
              const parsed = JSON.parse(artist.musicalstyles);
              if (Array.isArray(parsed)) {
                genres = mapValuesToTexts(parsed, genresMapping);
              } else {
                genres = [];
              }
            } else {
              // String séparée par virgules
              const values = artist.musicalstyles.split(',').map(s => s.trim()).filter(s => s);
              genres = mapValuesToTexts(values, genresMapping);
            }
          } catch (e) {
            console.warn(`⚠️ Invalid genres data for artist ${artist.id}:`, artist.musicalstyles);
            genres = [];
          }
        }
      }

      // Parser les sujets sociaux/politiques pour les filtres
      let socialTopics = [];
      if (artist.socialtopics) {
        if (Array.isArray(artist.socialtopics)) {
          socialTopics = artist.socialtopics;
        } else if (typeof artist.socialtopics === 'string') {
          try {
            if (artist.socialtopics.startsWith('[') || artist.socialtopics.startsWith('{')) {
              socialTopics = JSON.parse(artist.socialtopics);
            } else {
              socialTopics = artist.socialtopics.split(',').map(s => s.trim()).filter(s => s);
            }
          } catch (e) {
            console.warn(`⚠️ Invalid social topics data for artist ${artist.id}:`, artist.socialtopics);
            socialTopics = [];
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
        genres,
        socialTopics,
        clubPolitics: artist.anyotherpoliticalapproach || '',
        themesDevelopment: artist.linksbetweenthemeandwork || '',
        pronouns: artist.pronouns || '',
        bio: artist.bio || '',
        website: artist.website || '',
        bandcamp: artist.bandcamp || '',
        soundcloud: artist.soundcloud || '',
        instagram: artist.instagram || '',
        subvert: artist.subvert || '',
        tiktok: artist.tiktok || '',
        youtube: artist.youtube || '',
        email: artist.email || '',
        profile_image: artist.profile_image || ''
      };
      
      return result;
    }).filter(artist => {
      // Filtrer seulement les artistes avec des coordonnées valides
      const hasValidCoords = artist.latitude != null && 
                            artist.longitude != null &&
                            !isNaN(artist.latitude) && 
                            !isNaN(artist.longitude) &&
                            artist.latitude !== '' &&
                            artist.longitude !== '';
      
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
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800', // Cache 30 minutes
      },
    });

  } catch (error: any) {
    console.error('❌ Error fetching approved artists:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Error loading artist data',
      error: error.message || 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};