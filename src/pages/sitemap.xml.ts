import { flatDocsNavigation } from '../data/navigation';

export async function GET() {
  const germanPages = ['/', ...flatDocsNavigation.map((item) => item.href), '/impressum/', '/datenschutz/'];
  const pages = [...germanPages, ...germanPages.map((path) => path === '/' ? '/en/' : `/en${path}`)];
  const urls = pages
    .map((path) => `<url><loc>https://nodesentinel.de${path}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
