const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');

const checks = [
  { name: 'Title Tag', pass: html.includes('<title>SAM GREEN POWER SOLUTIONS | Solar Energy Solutions</title>') },
  { name: 'Meta Description', pass: html.includes('name="description"') },
  { name: 'Canonical Link', pass: html.includes('rel="canonical" href="https://www.samgreenpower.in/"') },
  { name: 'Meta Robots', pass: html.includes('name="robots" content="index, follow') },
  { name: 'Googlebot Meta', pass: html.includes('name="googlebot"') },
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

