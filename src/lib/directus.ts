import { createDirectus, rest, authentication, staticToken } from '@directus/sdk';

// Create a function to get Directus client with runtime URL
export function createDirectusClient(directusUrl: string) {
  const client = createDirectus(directusUrl)
    .with(rest())
    .with(authentication('cookie', { credentials: 'include' }));
  
  return client;
}

// Create a function to make authenticated requests with a specific token
export function createTokenClient(token: string, directusUrl: string) {
  
  const tokenClient = createDirectus(directusUrl)
    .with(rest())
    .with(staticToken(token));
    
  return tokenClient;
}

// Fallback for backward compatibility (will be removed)
export default createDirectusClient;
