import type { APIRoute } from 'astro';

// Generated rather than kept as a static public/robots.txt so the host comes
// from `site` in astro.config.mjs, the same single source as the canonical
// tags and the sitemap.
//
// Deliberately permissive: this is a portfolio whose purpose is to be found,
// including by AI assistants that fetch and cite pages when answering. The
// file's real job here is advertising the sitemap.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
