// Auth Interceptor - Gère automatiquement le refresh des tokens
class AuthInterceptor {
  constructor() {
    this.isRefreshing = false;
    this.failedRequests = [];
    this.setupInterceptor();
  }

  setupInterceptor() {
    // Intercepter les fetch requests pour gérer les 401 automatiquement
    const originalFetch = window.fetch;

    window.fetch = async (url, options = {}) => {
      try {
        const response = await originalFetch(url, options);

        // Si 401 et que c'est une requête vers notre API
        if (response.status === 401 && url.includes('/api/')) {
          console.log('🔄 Token expired, attempting refresh...');

          const refreshed = await this.handleTokenRefresh();
          if (refreshed) {
            // Retry la requête originale
            console.log('✅ Token refreshed, retrying request...');
            return originalFetch(url, options);
          } else {
            // Redirect vers login
            console.log('❌ Refresh failed, redirecting to login...');
            this.redirectToLogin();
            return response;
          }
        }

        return response;
      } catch (error) {
        console.error('Fetch interceptor error:', error);
        throw error;
      }
    };
  }

  async handleTokenRefresh() {
    // Éviter les appels multiples simultanés
    if (this.isRefreshing) {
      return new Promise((resolve) => {
        this.failedRequests.push(resolve);
      });
    }

    this.isRefreshing = true;

    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // Important pour les cookies
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('✅ Token refresh successful');

        // Résoudre toutes les requêtes en attente
        this.failedRequests.forEach(resolve => resolve(true));
        this.failedRequests = [];

        return true;
      } else {
        console.log('❌ Token refresh failed:', result.error);

        // Résoudre toutes les requêtes en attente avec échec
        this.failedRequests.forEach(resolve => resolve(false));
        this.failedRequests = [];

        return false;
      }
    } catch (error) {
      console.error('Token refresh error:', error);

      // Résoudre toutes les requêtes en attente avec échec
      this.failedRequests.forEach(resolve => resolve(false));
      this.failedRequests = [];

      return false;
    } finally {
      this.isRefreshing = false;
    }
  }

  redirectToLogin() {
    // Émettre un événement pour que l'UI puisse réagir
    window.dispatchEvent(new CustomEvent('authExpired', {
      detail: { message: 'Your session has expired. Please log in again.' }
    }));

    // Optionnel : redirection automatique
    // window.location.href = '/login';
  }
}

// Initialiser l'intercepteur dès que possible
let authInterceptor;

function initAuthInterceptor() {
  if (!authInterceptor) {
    authInterceptor = new AuthInterceptor();
    console.log('🔐 Auth interceptor initialized');
  }
}

// Initialiser sur DOMContentLoaded
document.addEventListener('DOMContentLoaded', initAuthInterceptor);

// Initialiser immédiatement si le DOM est déjà chargé
if (document.readyState !== 'loading') {
  initAuthInterceptor();
}

// Export pour utilisation dans d'autres scripts
window.AuthInterceptor = AuthInterceptor;