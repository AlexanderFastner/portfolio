import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all project slugs
// Using a comprehensive list of all project slugs
const slugs = [
  'rosalind-challenges',
  'bachelors-thesis',
  'masters-thesis',
  'cantata',
  'cyclistic-case-study',
  'dysregnetweb',
  'protein-embeddings-phylogenies',
  'machine-strike',
  'arduino-volume-control',
  'raspberry-pi-web-hosting',
  'neon-escape',
  'othello',
  'spongedb-v2',
  '3d-printing',
];

const baseUrl = 'https://portfolio-3fef6.web.app';
const now = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: baseUrl, priority: '1.0', changefreq: 'monthly' },
  { url: `${baseUrl}/projects`, priority: '0.9', changefreq: 'weekly' },
  { url: `${baseUrl}/education`, priority: '0.8', changefreq: 'monthly' },
];

const projectPages = slugs.map(slug => ({
  url: `${baseUrl}/projects/${slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}));

const allPages = [...staticPages, ...projectPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const outDir = path.join(__dirname, '../out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
console.log(`✅ Sitemap generated with ${allPages.length} URLs`);

