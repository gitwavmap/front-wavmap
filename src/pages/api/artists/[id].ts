import type { APIRoute } from 'astro';
import { createDirectus, rest, readItem } from '@directus/sdk';

export const prerender = false;

// Interface pour les détails complets d'un artiste
interface ArtistDetails {
  id: number;
  artistName: string;
  realName?: string;
  pronouns?: string;
  email: string;
  city: string;
  country: string;
  cityId?: string;
  latitude?: number;
  longitude?: number;
  activities: string[];
  genres: string[];
  soundcloud?: string;
  spotify?: string;
  instagram?: string;
  bio?: string;
  socialPolitical?: string[];
  themesDevelopment?: string;
  clubPolitics?: string;
  status: string;
  createdAt?: string;
}

// Client Directus réutilisable (connection pooling)
let globalClient: any = null;

function getDirectusClient(directusUrl: string) {
  if (!globalClient) {
    globalClient = createDirectus(directusUrl).with(rest());
  }
  return globalClient;
}

export const GET: APIRoute = async ({ params, locals }) => {
  try {
    const artistId = params.id;
    
    if (!artistId) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Artist ID is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';
    
    // Utiliser le client global pour éviter de recréer des connexions
    const client = getDirectusClient(directusUrl);
    
    // Récupérer les détails complets de l'artiste
    const artist = await client.request(
      readItem('form', artistId, {
        filter: {
          status: { _eq: 'approved' } // Seulement les artistes approuvés
        },
        fields: [
          'id',
          'artistname',
          'realname',
          'pronouns', 
          'email',
          'maincity',
          'country',
          'cityid',
          'latitude',
          'longitude',
          'activitydomains',
          'musicalstyles',
          'soundcloud',
          'spotify',
          'instagram',
          'bio',
          'socialtopics',
          'linksbetweenthemeandwork',
          'anyotherpoliticalapproach',
          'status',
          'date_created'
        ]
      })
    );

    if (!artist) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Artist not found or not approved'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Parser JSON de manière sécurisée
    let activities = [];
    let genres = [];
    let socialPolitical = [];
    
    // Parse activities/activitydomains
    if (artist.activitydomains) {
      if (Array.isArray(artist.activitydomains)) {
        // Déjà un array JavaScript
        activities = artist.activitydomains;
      } else if (typeof artist.activitydomains === 'string') {
        try {
          if (artist.activitydomains.startsWith('[') || artist.activitydomains.startsWith('{')) {
            // C'est du JSON
            activities = JSON.parse(artist.activitydomains);
          } else {
            // C'est une chaîne séparée par des virgules
            activities = artist.activitydomains.split(',').map(s => s.trim()).filter(s => s);
          }
        } catch (e) {
          console.warn(`⚠️ Invalid activities data for artist ${artist.id}:`, artist.activitydomains);
          activities = [];
        }
      }
    }
    
    // Parse genres/musicalstyles
    if (artist.musicalstyles) {
      if (Array.isArray(artist.musicalstyles)) {
        // Déjà un array JavaScript
        genres = artist.musicalstyles;
      } else if (typeof artist.musicalstyles === 'string') {
        try {
          if (artist.musicalstyles.startsWith('[') || artist.musicalstyles.startsWith('{')) {
            // C'est du JSON
            genres = JSON.parse(artist.musicalstyles);
          } else {
            // C'est une chaîne séparée par des virgules
            genres = artist.musicalstyles.split(',').map(s => s.trim()).filter(s => s);
          }
        } catch (e) {
          console.warn(`⚠️ Invalid genres data for artist ${artist.id}:`, artist.musicalstyles);
          genres = [];
        }
      }
    }
    
    // Parse social/political topics
    if (artist.socialtopics) {
      if (Array.isArray(artist.socialtopics)) {
        // Déjà un array JavaScript
        socialPolitical = artist.socialtopics;
      } else if (typeof artist.socialtopics === 'string') {
        try {
          if (artist.socialtopics.startsWith('[') || artist.socialtopics.startsWith('{')) {
            // C'est du JSON
            socialPolitical = JSON.parse(artist.socialtopics);
          } else {
            // C'est une chaîne séparée par des virgules
            socialPolitical = artist.socialtopics.split(',').map(s => s.trim()).filter(s => s);
          }
        } catch (e) {
          console.warn(`⚠️ Invalid social topics data for artist ${artist.id}:`, artist.socialtopics);
          socialPolitical = [];
        }
      }
    }

    // Transformer les données pour le frontend
    const artistDetails: ArtistDetails = {
      id: artist.id,
      artistName: artist.artistname,
      realName: artist.realname || '',
      pronouns: artist.pronouns || '',
      email: artist.email,
      city: artist.maincity,
      country: artist.country,
      cityId: artist.cityid || '',
      latitude: artist.latitude,
      longitude: artist.longitude,
      activities,
      genres,
      soundcloud: artist.soundcloud || '',
      spotify: artist.spotify || '',
      instagram: artist.instagram || '',
      bio: artist.bio || '',
      socialPolitical,
      themesDevelopment: artist.linksbetweenthemeandwork || '',
      clubPolitics: artist.anyotherpoliticalapproach || '',
      status: artist.status,
      createdAt: artist.date_created
    };


    return new Response(JSON.stringify({
      success: true,
      artist: artistDetails
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=600', // Cache 10 minutes
      },
    });

  } catch (error: any) {
    console.error('❌ Error fetching artist details:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Error loading artist details',
      error: error.message || 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};