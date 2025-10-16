# Performance Analysis - Wavmap.org
> Rapport généré à partir de Google PageSpeed Insights

## 📊 Métriques Principales

| Métrique | Valeur | Impact |
|----------|--------|--------|
| **Thread Principal Bloqué** | 2.6s | 🔴 Critique |
| **Code Tiers (Mapbox)** | 880ms de blocage | 🔴 Critique |
| **Ressources Bloquant le Rendu** | 730ms | 🟠 Important |
| **LCP (Largest Contentful Paint)** | 1650ms | 🟠 Important |

---

## 🔴 Problèmes Critiques

### 1. **Mapbox bloque massivement le thread principal**
**Impact** : 880ms de blocage + 9 tâches longues

**Problème** :
- `mapbox-gl.js` : 329 KiB qui bloque pendant 878ms
- 185.6 KiB de JavaScript Mapbox inutilisé
- Plus longue tâche : 703ms (tâche bloquante)

**Solutions recommandées** :
```javascript
// ✅ Option 1 : Charger Mapbox en lazy (uniquement quand visible)
const loadMapbox = async () => {
  const mapboxgl = await import('https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js');
  // Initialiser la carte seulement après
};

// Déclencher au scroll ou après le chargement initial
window.addEventListener('load', () => {
  setTimeout(loadMapbox, 500); // Délai de 500ms
});

// ✅ Option 2 : Utiliser un CDN avec defer/async
<script defer src="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js"></script>

// ✅ Option 3 : Code splitting pour la page /map uniquement
// Ne charger Mapbox QUE sur /map, pas sur les autres pages
```

**Gains estimés** : -800ms de blocage thread principal

---

### 2. **Google Fonts bloque le rendu (730ms)**
**Impact** : Bloque le First Paint

**Problème** :
- Font Inter chargée de manière synchrone (750ms)
- 4 polices custom (Delight) sans `font-display`

**Solutions recommandées** :
```html
<!-- ✅ Option 1 : Précharger + font-display -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" media="print" onload="this.media='all'">

<!-- ✅ Option 2 : Self-host les fonts (recommandé) -->
<!-- Héberger Inter localement au lieu de Google Fonts -->
```

```css
/* Ajouter font-display à toutes les @font-face */
@font-face {
  font-family: 'Delight';
  src: url('/_astro/delight-regular.FE1MhLKI.otf');
  font-display: swap; /* ← Affiche le texte immédiatement */
}
```

**Gains estimés** : -500ms de rendu bloqué

---

## 🟠 Problèmes Importants

### 3. **Images sans dimensions explicites (CLS)**
**Impact** : Décalages de mise en page (CLS élevé)

**Problème** : 12 images sans `width`/`height`

**Solutions** :
```astro
<!-- ❌ Avant -->
<img src="/_astro/logo.Dz9pmR-f.svg" alt="logo">

<!-- ✅ Après -->
<img src="/_astro/logo.Dz9pmR-f.svg" alt="logo" width="120" height="40">
```

**Images concernées** :
- Logo (header)
- EU Logo
- Livemix Logo
- Tous les boutons de filtres (shuffle, pol, country, city, style, role)
- Images du loader

**Gains estimés** : Amélioration significative du CLS

---

### 4. **LCP à 1650ms - Trop lent**
**Décomposition** :
- TTFB : 600ms (36%) ← **Serveur lent**
- Load Time : 570ms (35%) ← Image loader
- Render Delay : 280ms (17%)
- Load Delay : 200ms (12%)

**Élément LCP** : Logo du loader `<img src="/_astro/logo.Dz9pmR-f.svg" alt="Loading">`

**Solutions** :
```html
<!-- ✅ 1. Précharger l'image LCP -->
<link rel="preload" as="image" href="/_astro/logo.Dz9pmR-f.svg">

<!-- ✅ 2. Inline le SVG du loader (évite la requête) -->
<div class="loader-logo">
  <svg><!-- SVG inline --></svg>
</div>
```

**Pour le TTFB (600ms)** :
- Vérifier la latence Cloudflare
- Activer le cache Edge pour `/map`
- Optimiser les requêtes Directus

**Gains estimés** : LCP < 1200ms

---

### 5. **JavaScript inutilisé (186 KiB)**
**Impact** : Bande passante gaspillée

**Problème** :
- 185.6 KiB de Mapbox non utilisé
- Fonctionnalités terrain, 3D extrusion jamais utilisées

**Solutions** :
```javascript
// ✅ Importer seulement les modules nécessaires (si possible)
// Vérifier si Mapbox propose un build custom

// ✅ Utiliser une alternative plus légère ?
// Leaflet.js (~40 KiB) au lieu de Mapbox (~329 KiB)
// Ou MapLibre GL JS (fork open-source de Mapbox)
```

**Gains estimés** : -180 KiB de JS

---

## 🟡 Optimisations Mineures

### 6. **Lazy loading des images offscreen**
**Économies** : 10 KiB

```html
<!-- Images hors écran au chargement -->
<img src="/_astro/close_bg.B47gA4Wg.svg" loading="lazy" width="24" height="24">
<img src="/_astro/send_flat.CmIJnwHY.svg" loading="lazy" width="32" height="32">
```

---

### 7. **Cache statique insuffisant**
**Problème** : `email-decode.min.js` cache de seulement 47min

**Solution** :
```javascript
// Dans astro.config.mjs ou via Cloudflare
// Configurer des headers de cache pour les assets statiques
{
  headers: {
    '/_astro/*': {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
}
```

---

### 8. **Passive listeners pour le scroll**
**Problème** : Mapbox utilise des event listeners non-passifs

**Solution** :
```javascript
// Fichier : ../src/ui/control/navigation_control.js:197:16
// Ajouter { passive: true } aux event listeners
element.addEventListener('touchstart', handler, { passive: true });
```

---

### 9. **Animation non composée (visibility)**
**Problème** : Animation `visibility` sur le loader

**Solution** :
```css
/* ❌ Éviter */
.map-loader {
  visibility: hidden;
  transition: visibility 0.3s;
}

/* ✅ Utiliser opacity + pointer-events */
.map-loader {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.map-loader.visible {
  opacity: 1;
  pointer-events: auto;
}
```

---

### 10. **JavaScript legacy (polyfills)**
**Problème** : Mapbox utilise `Math.hypot` polyfill (6.9 KiB)

**Solution** :
- Mettre à jour Mapbox vers une version plus récente
- Ou accepter de ne pas supporter les vieux navigateurs

---

## 📋 Plan d'Action Recommandé

### Phase 1 : Quick Wins (1-2h)
1. ✅ Ajouter `width`/`height` à toutes les images
2. ✅ Ajouter `font-display: swap` aux polices custom
3. ✅ Inline le SVG du loader
4. ✅ Ajouter `loading="lazy"` aux images offscreen
5. ✅ Précharger l'image LCP

**Gains estimés** : LCP -300ms, CLS -30%

---

### Phase 2 : Optimisations Moyennes (1 jour)
6. ✅ Self-host Google Fonts (Inter)
7. ✅ Charger Mapbox en différé (defer ou lazy)
8. ✅ Configurer cache statique Cloudflare
9. ✅ Optimiser TTFB (cache Edge)

**Gains estimés** : LCP -500ms, Thread principal -400ms

---

### Phase 3 : Refactoring (2-3 jours)
10. ✅ Envisager MapLibre GL JS au lieu de Mapbox
11. ✅ Code splitting : Mapbox seulement sur /map
12. ✅ Optimiser les requêtes Directus (SSR cache)

**Gains estimés** : Thread principal -800ms, JS -180 KiB

---

## 🎯 Objectifs Cibles

| Métrique | Actuel | Cible | Priorité |
|----------|--------|-------|----------|
| LCP | 1650ms | < 1200ms | 🔴 Haute |
| Thread Principal | 2600ms | < 1500ms | 🔴 Haute |
| CLS | Non mesuré | < 0.1 | 🟠 Moyenne |
| TBT | Non noté | < 300ms | 🟠 Moyenne |

---

## 📌 Notes

- **Mapbox est le principal problème** : 60% de l'impact performance
- Envisager sérieusement **MapLibre GL JS** (fork gratuit, plus léger)
- La page `/map` ne devrait charger Mapbox que si nécessaire
- TTFB de 600ms suggère un problème serveur/CDN à investiguer

---

**Dernière mise à jour** : $(date)
