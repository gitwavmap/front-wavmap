import type { APIRoute } from 'astro';
import citiesData from '../../../data/european-cities.json';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify({
      success: true,
      count: citiesData.length,
      cities: citiesData
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache 1 hour
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Error loading cities data',
      error: error.message || 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};