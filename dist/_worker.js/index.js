globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C8e8paaU.mjs';
import { manifest } from './manifest_jDVDyWqV.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/artist/submit.astro.mjs');
const _page4 = () => import('./pages/api/artists/approved.astro.mjs');
const _page5 = () => import('./pages/api/artists/_id_.astro.mjs');
const _page6 = () => import('./pages/api/auth/forgot-password.astro.mjs');
const _page7 = () => import('./pages/api/auth/login.astro.mjs');
const _page8 = () => import('./pages/api/auth/logout.astro.mjs');
const _page9 = () => import('./pages/api/auth/refresh.astro.mjs');
const _page10 = () => import('./pages/api/auth/register.astro.mjs');
const _page11 = () => import('./pages/api/auth/reset-password.astro.mjs');
const _page12 = () => import('./pages/api/auth/verify-email.astro.mjs');
const _page13 = () => import('./pages/api/blog/articles.astro.mjs');
const _page14 = () => import('./pages/api/blog/_slug_.astro.mjs');
const _page15 = () => import('./pages/api/cities/european.astro.mjs');
const _page16 = () => import('./pages/artist/_id_.astro.mjs');
const _page17 = () => import('./pages/blog/_slug_.astro.mjs');
const _page18 = () => import('./pages/blog.astro.mjs');
const _page19 = () => import('./pages/confirm-email.astro.mjs');
const _page20 = () => import('./pages/forgot-password.astro.mjs');
const _page21 = () => import('./pages/map.astro.mjs');
const _page22 = () => import('./pages/reset-password.astro.mjs');
const _page23 = () => import('./pages/thank-you.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/artist/submit.ts", _page3],
    ["src/pages/api/artists/approved.ts", _page4],
    ["src/pages/api/artists/[id].ts", _page5],
    ["src/pages/api/auth/forgot-password.ts", _page6],
    ["src/pages/api/auth/login.ts", _page7],
    ["src/pages/api/auth/logout.ts", _page8],
    ["src/pages/api/auth/refresh.ts", _page9],
    ["src/pages/api/auth/register.ts", _page10],
    ["src/pages/api/auth/reset-password.ts", _page11],
    ["src/pages/api/auth/verify-email.ts", _page12],
    ["src/pages/api/blog/articles.ts", _page13],
    ["src/pages/api/blog/[slug].ts", _page14],
    ["src/pages/api/cities/european.ts", _page15],
    ["src/pages/artist/[id].astro", _page16],
    ["src/pages/blog/[slug].astro", _page17],
    ["src/pages/blog.astro", _page18],
    ["src/pages/confirm-email.astro", _page19],
    ["src/pages/forgot-password.astro", _page20],
    ["src/pages/map.astro", _page21],
    ["src/pages/reset-password.astro", _page22],
    ["src/pages/thank-you.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
