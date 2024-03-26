import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        db(),
        vue(),
        tailwind({
            applyBaseStyles: false,
        })
    ]
});
