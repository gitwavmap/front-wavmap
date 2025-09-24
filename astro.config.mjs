// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import paraglide from '@inlang/paraglide-astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
    integrations: [
        tailwind(),
        paraglide({
            project: './project.inlang',
            outdir: './src/paraglide',
        }),
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr', 'es'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    env: {
        schema: {
            DIRECTUS_URL: envField.string({
                context: 'server',
                access: 'public',
            }),
            PUBLIC_DIRECTUS_URL: envField.string({
                context: 'client',
                access: 'public',
            }),
            MAPBOX_ACCESS_TOKEN: envField.string({
                context: 'client',
                access: 'public',
            }),
        },
    },
});
