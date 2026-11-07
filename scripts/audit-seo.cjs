const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');

const checks = [
  { name: 'Title Tag', pass: html.includes('<title>SAM GREEN POWER SOLUTIONS | Solar Energy Solutions</title>') },
  { name: 'Meta Description', pass: html.includes('name="description"') },
  { name: 'Canonical Link', pass: html.includes('rel="canonical" href="https://www.samgreenpower.in/"') },
  { name: 'Meta Robots', pass: html.includes('name="robots" content="index, follow') },
  { name: 'Googlebot Meta', pass: html.includes('name="googlebot"') },
  { name: 'Favicon ICO Link', pass: html.includes('rel="icon" type="image/x-icon" href="/favicon.ico"') },
  { name: 'Favicon 48x48 Link (Google Standard)', pass: html.includes('href="/favicon-48x48.png"') },
  { name: 'Favicon SVG Link (Vector Tab)', pass: html.includes('rel="icon" type="image/svg+xml" href="/favicon.svg"') },
  { name: 'Apple Touch Icon Link', pass: html.includes('rel="apple-touch-icon"') },
  { name: 'Web Manifest Link', pass: html.includes('rel="manifest" href="/site.webmanifest"') },
  { name: 'OG Title', pass: html.includes('property="og:title"') },
  { name: 'OG Image', pass: html.includes('property="og:image"') },
  { name: 'OG Locale', pass: html.includes('property="og:locale" content="en_IN"') },
  { name: 'Twitter Card', pass: html.includes('name="twitter:card" content="summary_large_image"') },
  { name: 'Font Preconnect', pass: html.includes('rel="preconnect" href="https://fonts.googleapis.com"') },
  { name: 'Hero Preload', pass: html.includes('rel="preload" as="image" href="/images/solar-sky-hero.jpg"') },
  { name: 'JSON-LD Schema', pass: html.includes('type="application/ld+json"') && html.includes('SAM GREEN POWER SOLUTIONS PRIVATE LIMITED') },
];

console.log('=== HTML SEO AUDIT RESULTS ===');
checks.forEach(c => console.log((c.pass ? '✅' : '❌'), c.name));

// Validate JSON-LD inside HTML
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (match) {
  try {
    const parsed = JSON.parse(match[1]);
    console.log('✅ Base JSON-LD is valid JSON with', parsed['@graph'].length, 'entities:');
    parsed['@graph'].forEach(e => console.log('   - ' + e['@type'] + ' (' + (e.name || e['@id']) + ')'));
  } catch (err) {
    console.error('❌ JSON-LD parse error:', err.message);
  }
}

// Check robots.txt
const robots = fs.readFileSync('dist/robots.txt', 'utf8');
console.log('✅ dist/robots.txt verified: contains', robots.split('\n').filter(l => l.trim()).length, 'lines.');

// Check sitemap.xml
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const urlCount = (sitemap.match(/<loc>/g) || []).length;
console.log('✅ dist/sitemap.xml verified: contains', urlCount, 'canonical URLs.');

// Check physical favicon files in dist/
const favicons = [
  'favicon.ico',
  'favicon.svg',
  'favicon.png',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
  'favicon-96x96.png',
  'favicon-144x144.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'apple-touch-icon.png',
  'site.webmanifest'
];
console.log('\n=== PHYSICAL FAVICON ASSETS VERIFICATION ===');
favicons.forEach(file => {
  const p = `dist/${file}`;
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`✅ dist/${file} exists (${stat.size} bytes)`);
  } else {
    console.error(`❌ dist/${file} is MISSING!`);
  }
});
