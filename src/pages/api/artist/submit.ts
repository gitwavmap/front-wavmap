import type { APIRoute } from 'astro';
import { createDirectus, rest, createItem, updateItem, readItems, readMe } from '@directus/sdk';
import { withTokenRefresh } from '../../../lib/directus';
import citiesData from '../../../data/european-cities.json';

export const prerender = false;

// Fonction pour trouver les coordonnées d'une ville dans notre dataset local
function findCityCoordinates(cityName: string, countryCode: string) {
  const city = citiesData.find(c => 
    c.name.toLowerCase() === cityName.toLowerCase() && 
    c.country === countryCode.toUpperCase()
  );
  
  if (city && city.coordinates) {
    return {
      latitude: city.coordinates[1], // coordinates sont [lng, lat]
      longitude: city.coordinates[0],
      cityId: city.id
    };
  }
  
  return null;
}

// Interface pour les données du formulaire
interface ArtistFormData {
  artistName: string;
  pronouns?: string;
  city: string;
  country: string;
  cityId?: string;      // ID unique de la ville pour optimisation
  latitude?: number;    // Coordonnées pour placement Mapbox
  longitude?: number;   // Coordonnées pour placement Mapbox
  activities: string[];
  genres: string[];
  website?: string;
  bandcamp?: string;
  soundcloud?: string;
  instagram?: string;
  subvert?: string;
  tiktok?: string;
  youtube?: string;
  email?: string;
  bio?: string;
  socialPolitical?: string[];
  themesDevelopment?: string;
  clubPolitics?: string;
}

// Interface pour l'entrée Directus
interface ArtistSubmission {
  artistname: string;
  pronouns?: string;
  maincity: string;
  country: string;
  cityid?: string;        // ID unique pour référence rapide
  latitude?: number;      // Coordonnées pour carte Mapbox
  longitude?: number;     // Coordonnées pour carte Mapbox
  activitydomains: string[]; // Tableau des activités (champ JSON dans Directus)
  musicalstyles: string[]; // Tableau des genres (champ JSON dans Directus)
  website?: string;
  bandcamp?: string;
  soundcloud?: string;
  instagram?: string;
  subvert?: string;
  tiktok?: string;
  youtube?: string;
  email?: string;
  bio?: string;
  socialtopics?: string[]; // Tableau des sujets sociaux/politiques (champ JSON dans Directus)
  linksbetweenthemeandwork?: string;
  anyotherpoliticalapproach?: string;
  status?: string;        // pending/approved/rejected pour modération
}

// Validation des données
function validateFormData(data: ArtistFormData): string | null {
  if (!data.artistName?.trim()) {
    return 'Artist name is required';
  }

  if (!data.city?.trim()) {
    return 'Main city is required';
  }

  if (!data.country?.trim()) {
    return 'Country is required';
  }

  if (!data.activities || data.activities.length === 0) {
    return 'Please select at least one field of activity';
  }

  if (!data.genres || data.genres.length === 0) {
    return 'Please select at least one musical style';
  }

  return null; // No error
}

// Transformation des données pour Directus avec validation serveur
function transformFormData(formData: ArtistFormData): ArtistSubmission {
  // Approche hybride : valider/compléter les coordonnées côté serveur
  let finalLatitude = formData.latitude || null;
  let finalLongitude = formData.longitude || null;
  let finalCityId = formData.cityId || '';
  
  // Si pas de coordonnées du client OU coordonnées invalides → calcul serveur
  if (!finalLatitude || !finalLongitude || isNaN(finalLatitude) || isNaN(finalLongitude)) {
    console.log(`🔍 Missing coordinates for: ${formData.city}, ${formData.country}`);
    console.log(`📍 Received cityId: ${formData.cityId}, lat: ${formData.latitude}, lng: ${formData.longitude}`);

    const serverCoords = findCityCoordinates(formData.city, formData.country);
    if (serverCoords) {
      console.log(`✅ Server found coordinates:`, serverCoords);
      finalLatitude = serverCoords.latitude;
      finalLongitude = serverCoords.longitude;
      finalCityId = serverCoords.cityId || '';
    } else {
      console.warn(`⚠️ No coordinates found for: ${formData.city}, ${formData.country}`);
      console.warn(`Available cities in database:`, citiesData.filter(c => c.country === formData.country).map(c => c.name));
    }
  } else {
    console.log(`✅ Using client coordinates: ${finalLatitude}, ${finalLongitude}, cityId: ${finalCityId}`);
  }

  return {
    artistname: formData.artistName,
    pronouns: formData.pronouns || '',
    maincity: formData.city,
    country: formData.country,
    cityid: finalCityId,                    // ID validé/complété par serveur
    latitude: finalLatitude,                // Coordonnées validées/complétées
    longitude: finalLongitude,              // Coordonnées validées/complétées
    activitydomains: formData.activities,   // Envoyer le tableau directement (champ JSON dans Directus)
    musicalstyles: formData.genres,         // Envoyer le tableau directement (champ JSON dans Directus)
    website: formData.website || '',
    bandcamp: formData.bandcamp || '',
    soundcloud: formData.soundcloud || '',
    instagram: formData.instagram || '',
    subvert: formData.subvert || '',
    tiktok: formData.tiktok || '',
    youtube: formData.youtube || '',
    email: formData.email || '',
    bio: formData.bio || '',
    socialtopics: formData.socialPolitical || [],  // Envoyer le tableau directement (champ JSON dans Directus)
    linksbetweenthemeandwork: formData.themesDevelopment || '',
    anyotherpoliticalapproach: formData.clubPolitics || '',
    status: 'pending'                       // Status par défaut = en attente de validation
  };
}

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  try {
    const formData = await request.formData();
    
    // Extraire les données du formulaire
    const data: ArtistFormData = {
      artistName: formData.get('artistName')?.toString() || '',
      pronouns: formData.get('pronouns')?.toString() || '',
      city: formData.get('city')?.toString() || '',
      country: formData.get('country')?.toString() || '',
      cityId: formData.get('cityId')?.toString() || '',
      latitude: formData.get('latitude') ? parseFloat(formData.get('latitude')!.toString()) : undefined,
      longitude: formData.get('longitude') ? parseFloat(formData.get('longitude')!.toString()) : undefined,
      activities: formData.getAll('activities') as string[],
      genres: formData.getAll('genres') as string[],
      website: formData.get('website')?.toString() || '',
      bandcamp: formData.get('bandcamp')?.toString() || '',
      soundcloud: formData.get('soundcloud')?.toString() || '',
      instagram: formData.get('instagram')?.toString() || '',
      subvert: formData.get('subvert')?.toString() || '',
      tiktok: formData.get('tiktok')?.toString() || '',
      youtube: formData.get('youtube')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      bio: formData.get('bio')?.toString() || '',
      socialPolitical: formData.getAll('socialPolitical') as string[],
      themesDevelopment: formData.get('themesDevelopment')?.toString() || '',
      clubPolitics: formData.get('clubPolitics')?.toString() || '',
    };
    
    // Valider les données
    const validationError = validateFormData(data);
    if (validationError) {
      return new Response(JSON.stringify({
        success: false,
        message: validationError,
        error: validationError
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Transformer les données pour Directus
    const directusData = transformFormData(data);

    // LOG COMPLET POUR DEBUG
    console.log('🔍 === ARTIST FORM SUBMISSION DEBUG ===');
    console.log('📝 Raw form data:', JSON.stringify(data, null, 2));
    console.log('📤 Directus payload:', JSON.stringify(directusData, null, 2));
    console.log('=====================================');

    // Get DIRECTUS_URL from Cloudflare runtime environment
    const directusUrl = locals.runtime?.env?.DIRECTUS_URL || 'https://directus-production-1f5c.up.railway.app/';

    // Execute with automatic token refresh
    const result = await withTokenRefresh(cookies, directusUrl, async (client) => {
      // Get current user ID
      const me = await client.request(
        readMe({
          fields: ['id']
        })
      );

      if (!me || !me.id) {
        throw new Error('User not found');
      }

      const userId = me.id;

      // Check if user already has a submission
      const existingSubmissions = await client.request(
        readItems('form', {
          filter: {
            user_created: { _eq: userId }
          },
          fields: ['id'],
          limit: 1
        })
      );

      let response;
      let isUpdate = false;

      if (existingSubmissions && existingSubmissions.length > 0) {
        // UPDATE existing submission
        const submissionId = existingSubmissions[0].id;
        console.log(`🔄 Updating existing submission ${submissionId} for user ${userId}`);

        response = await client.request(
          updateItem('form', submissionId, directusData)
        );
        isUpdate = true;
      } else {
        // CREATE new submission
        console.log(`✨ Creating new submission for user ${userId}`);

        response = await client.request(
          createItem('form', directusData)
        );
        isUpdate = false;
      }

      return { response, isUpdate };
    });

    // Handle authentication failure
    if (!result.success) {
      return new Response(JSON.stringify({
        success: false,
        message: result.requiresLogin
          ? 'Your session has expired. Please log in again.'
          : result.error,
        error: result.error,
        requiresLogin: result.requiresLogin
      }), {
        status: result.requiresLogin ? 401 : 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: result.data.isUpdate
        ? '✅ Your profile has been updated successfully!'
        : '🎉 Thank you for your registration! We will review your profile and contact you soon.',
      redirect: '/thank-you',
      data: result.data.response,
      isUpdate: result.data.isUpdate
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error: any) {
    console.error('❌ Error submitting artist form:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    console.error('❌ Error response:', error?.response);
    console.error('❌ Error errors array:', error?.errors);

    // Gestion des erreurs Directus
    let errorMessage = 'An error occurred while submitting the form. Please try again.';

    if (error?.response?.status === 403) {
      errorMessage = 'Permission denied. Please check your access rights.';
    } else if (error?.response?.status === 422) {
      errorMessage = 'Invalid data provided. Please check your inputs.';
    } else if (error?.errors?.[0]?.message) {
      errorMessage = error.errors[0].message;
    } else if (error?.message) {
      errorMessage = error.message;
    }

    console.error('❌ Final error message sent to user:', errorMessage);
    
    return new Response(JSON.stringify({
      success: false,
      message: errorMessage,
      error: errorMessage
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};