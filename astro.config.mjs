import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://radifans.my.id',
  output: 'static', // Pre-render all pages. Purely static.
  integrations: [sitemap()],
});
