declare module 'astro:env/client' {
	export const PUBLIC_DIRECTUS_URL: string;	
	export const MAPBOX_ACCESS_TOKEN: string;	
}declare module 'astro:env/server' {
	export const DIRECTUS_URL: string;	
	export const BREVO_API_KEY: string | undefined;	
	export const BREVO_LIST_ID: string | undefined;	
}