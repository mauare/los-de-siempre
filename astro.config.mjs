// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio definitivo antes de desplegar (necesario para sitemap y URLs absolutas de SEO/OG).
  site: 'https://www.losdesiempre.com.ar',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
