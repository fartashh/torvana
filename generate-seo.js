import fs from 'fs';
import path from 'path';

// VERCEL_URL is provided by Vercel during the build step.
// We prepend https:// to it. If it doesn't exist, we fallback to localhost.
const rawDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const domain = rawDomain ? `https://${rawDomain}` : 'http://localhost:5173';

const topics = [
  'garbage',
  'potholes',
  'wildlife',
  'property',
  'tree',
  'water',
  'snow'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <priority>1.0</priority>
  </url>
`;

// Add divisional paths
topics.forEach(topic => {
  sitemap += `  <url>
    <loc>${domain}/${topic}</loc>
    <priority>0.8</priority>
  </url>\n`;
});

// Add 311 paths
topics.forEach(topic => {
  sitemap += `  <url>
    <loc>${domain}/311/kb/${topic}</loc>
    <priority>0.5</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

const robots = `User-agent: *
Allow: /
Disallow: /311/

User-agent: GPTBot
Allow: /
Disallow: /311/

User-agent: CCBot
Allow: /
Disallow: /311/

User-agent: Bingbot
Allow: /
Disallow: /311/

Sitemap: ${domain}/sitemap.xml
`;

const distPath = path.resolve(process.cwd(), 'dist');

// Ensure dist directory exists (Vite creates it, but just in case)
if (!fs.existsSync(distPath)){
    fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distPath, 'robots.txt'), robots);

console.log(`SEO files generated successfully for domain: ${domain}`);
