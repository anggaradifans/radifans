import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Docker's bind mount on macOS/Windows does not deliver filesystem events into
// the container, so the dev server never sees host edits. compose.yaml sets this
// to make the watcher poll instead; native `npm run dev` keeps using FS events.
const usePolling = process.env.WATCH_POLLING === 'true';

export default defineConfig({
  site: 'https://www.radifans.my.id',
  output: 'static', // Pre-render all pages. Purely static.
  integrations: [sitemap()],
  vite: {
    server: usePolling ? { watch: { usePolling: true, interval: 300 } } : {},
  },
});
