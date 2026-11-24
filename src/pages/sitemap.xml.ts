import { localizedRoutes } from '../data/routes';

export async function GET() {
  const alternates = (german: string, english: string) =>
    `<xhtml:link rel="alternate" hreflang="de" href="https://nodesentinel.de${german}"/>` +
    `<xhtml:link rel="alternate" hreflang="en" href="https://nodesentinel.de${english}"/>` +
    `<xhtml:link rel="alternate" hreflang="x-default" href="https://nodesentinel.de${german}"/>`;
  const urls = localizedRoutes
    .flatMap(([german, english]) => [
      `<url><loc>https://nodesentinel.de${german}</loc>${alternates(german, english)}</url>`,
      `<url><loc>https://nodesentinel.de${english}</loc>${alternates(german, english)}</url>`,
    ])
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
