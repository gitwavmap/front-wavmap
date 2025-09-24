/**
 * Script pour remplir automatiquement les coordonnées manquantes
 * Usage: node scripts/fill-missing-coordinates.js
 */

import { createDirectus, rest, readItems, updateItem } from '@directus/sdk';
import fs from 'fs';
import path from 'path';

// Dataset des villes
const citiesDataPath = path.join(process.cwd(), 'src/data/european-cities.json');
const citiesData = JSON.parse(fs.readFileSync(citiesDataPath, 'utf-8'));

// Configuration Directus
const DIRECTUS_URL = process.env.DIRECTUS_URL || 'http://localhost:8055';
const client = createDirectus(DIRECTUS_URL).with(rest());

// Fonction pour trouver les coordonnées d'une ville
function findCityCoordinates(cityName, countryCode) {
  const city = citiesData.find(c => 
    c.name.toLowerCase() === cityName.toLowerCase() && 
    c.country === countryCode
  );
  
  return city ? {
    latitude: city.coordinates[1],
    longitude: city.coordinates[0],
    cityId: city.id
  } : null;
}

async function fillMissingCoordinates() {
  try {
    console.log('🔍 Recherche des artistes sans coordonnées...');
    
    // Récupérer tous les artistes sans coordonnées
    const artistsWithoutCoords = await client.request(
      readItems('form', {
        filter: {
          _or: [
            { latitude: { _null: true } },
            { longitude: { _null: true } },
            { latitude: { _eq: '' } },
            { longitude: { _eq: '' } }
          ]
        },
        fields: ['id', 'artistname', 'maincity', 'country', 'latitude', 'longitude']
      })
    );
    
    console.log(`📍 Trouvé ${artistsWithoutCoords.length} artistes sans coordonnées`);
    
    let updatedCount = 0;
    
    for (const artist of artistsWithoutCoords) {
      console.log(`\n🔍 Traitement: ${artist.artistname} - ${artist.maincity}, ${artist.country}`);
      
      const coordinates = findCityCoordinates(artist.maincity, artist.country);
      
      if (coordinates) {
        console.log(`✅ Coordonnées trouvées: ${coordinates.latitude}, ${coordinates.longitude}`);
        
        // Mettre à jour l'artiste
        await client.request(
          updateItem('form', artist.id, {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            cityid: coordinates.cityId
          })
        );
        
        updatedCount++;
        console.log(`💾 Mis à jour: ${artist.artistname}`);
      } else {
        console.log(`❌ Ville non trouvée: ${artist.maincity}, ${artist.country}`);
      }
    }
    
    console.log(`\n🎉 Migration terminée: ${updatedCount}/${artistsWithoutCoords.length} artistes mis à jour`);
    
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error);
  }
}

// Exécuter le script
fillMissingCoordinates();