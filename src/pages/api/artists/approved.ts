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
  instagram: string;
  soundcloud: string;
  spotify: string;
  profile_image: string;
}

// Client Directus réutilisable (connection pooling)
let globalClient: any = null;

function getDirectusClient(directusUrl: string) {
  if (!globalClient) {
    globalClient = createDirectus(directusUrl).with(rest());
  }
  return globalClient;
}

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    
    // Utiliser le client global pour éviter de recréer des connexions
    const client = getDirectusClient(directusUrl);
    
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
          'instagram',
          'soundcloud',
          'spotify',
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
          // Déjà un array JavaScript
          activities = artist.activitydomains;
        } else if (typeof artist.activitydomains === 'string') {
          try {
            if (artist.activitydomains.startsWith('[') || artist.activitydomains.startsWith('{')) {
              // String JSON
              activities = JSON.parse(artist.activitydomains);
            } else {
              // String séparée par virgules
              activities = artist.activitydomains.split(',').map(s => s.trim()).filter(s => s);
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
          // Déjà un array JavaScript
          genres = artist.musicalstyles;
        } else if (typeof artist.musicalstyles === 'string') {
          try {
            if (artist.musicalstyles.startsWith('[') || artist.musicalstyles.startsWith('{')) {
              // String JSON
              genres = JSON.parse(artist.musicalstyles);
            } else {
              // String séparée par virgules
              genres = artist.musicalstyles.split(',').map(s => s.trim()).filter(s => s);
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
        instagram: artist.instagram || '',
        soundcloud: artist.soundcloud || '',
        spotify: artist.spotify || '',
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