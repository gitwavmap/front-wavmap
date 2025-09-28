globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BB4k16uX.mjs';
import { $ as $$Layout } from '../chunks/Layout_C97wbnVE.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thank You - wavmap", "data-astro-cid-reykoxrt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="thank-you-main" data-astro-cid-reykoxrt> <div class="thank-you-container" data-astro-cid-reykoxrt> <!-- Header avec divider style blog --> <div class="thank-you-header" data-astro-cid-reykoxrt> <div class="divider-container" data-astro-cid-reykoxrt> <div class="divider" data-astro-cid-reykoxrt></div> <div class="count" data-astro-cid-reykoxrt> <span data-astro-cid-reykoxrt>001</span> </div> </div> <h1 class="thank-you-title" data-astro-cid-reykoxrt>MERCI !</h1> </div> <!-- Content --> <div class="thank-you-content" data-astro-cid-reykoxrt> <!-- Success Icon --> <div class="success-icon-container" data-astro-cid-reykoxrt> <div class="success-icon" data-astro-cid-reykoxrt> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-astro-cid-reykoxrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-astro-cid-reykoxrt></path> </svg> </div> </div> <!-- Thank you message --> <div class="message-section" data-astro-cid-reykoxrt> <p class="main-message" data-astro-cid-reykoxrt>
Votre candidature pour rejoindre la communauté wavmap a été soumise avec succès.
</p> <div class="info-box" data-astro-cid-reykoxrt> <div class="info-header" data-astro-cid-reykoxrt> <span data-astro-cid-reykoxrt>PROCHAINES ÉTAPES</span> </div> <p class="info-content" data-astro-cid-reykoxrt>
Notre équipe va examiner votre profil et vous contacter sous peu.
              Vous recevrez un email de confirmation avec tous les détails.
</p> </div> </div> <!-- Action buttons --> <div class="action-buttons" data-astro-cid-reykoxrt> <a href="/map" class="btn btn-primary" data-astro-cid-reykoxrt>
DÉCOUVRIR LA MAP
</a> <a href="/blog" class="btn btn-secondary" data-astro-cid-reykoxrt>
LIRE LE BLOG
</a> <a href="/about" class="btn btn-outline" data-astro-cid-reykoxrt>
EN SAVOIR PLUS
</a> </div> <!-- Social sharing --> <div class="social-section" data-astro-cid-reykoxrt> <div class="social-divider" data-astro-cid-reykoxrt></div> <p class="social-text" data-astro-cid-reykoxrt>
PARTAGEZ WAVMAP AVEC VOS AMIS ARTISTES !
</p> <div class="social-links" data-astro-cid-reykoxrt></div> </div> </div> </div> </main> ` })} `;
}, "/home/glm/front-wavmap/src/pages/thank-you.astro", void 0);

const $$file = "/home/glm/front-wavmap/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
