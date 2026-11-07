const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAllFavicons() {
  const sourcePath = path.resolve('public/brand/sam-logo-1024.png');
  const publicDir = path.resolve('public');

  if (!fs.existsSync(sourcePath)) {
    throw new Error('Source logo not found at: ' + sourcePath);
  }

  console.log('Generating production favicons from:', sourcePath);

  // 1. Generate individual PNG sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },   // Google Search Primary Standard
    { name: 'favicon-96x96.png', size: 96 },   // Google Search 2x Retina
    { name: 'favicon-144x144.png', size: 144 }, // Google Search 3x
    { name: 'apple-touch-icon.png', size: 180 }, // Apple iOS / Safari
    { name: 'favicon-192x192.png', size: 192 }, // Android Chrome / PWA
    { name: 'favicon-512x512.png', size: 512 }, // High-Res PWA
    { name: 'favicon.png', size: 96 },         // Standard fallback
  ];

  const pngBuffers = {};

  for (const { name, size } of sizes) {
    const buffer = await sharp(sourcePath)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(path.join(publicDir, name), buffer);
    pngBuffers[size] = buffer;
    console.log(`✅ Generated ${name} (${size}x${size})`);
  }

  // 2. Generate multi-resolution favicon.ico (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const count = icoSizes.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO format
  header.writeUInt16LE(count, 4); // Number of images

  const dirEntries = [];
  const imageBuffers = [];

  for (const s of icoSizes) {
    const buf = pngBuffers[s];
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(s === 256 ? 0 : s, 0); // Width
    entry.writeUInt8(s === 256 ? 0 : s, 1); // Height
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buf.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // File offset of image data

    dirEntries.push(entry);
    imageBuffers.push(buf);
    offset += buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...imageBuffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log(`✅ Generated favicon.ico (multi-resolution container with 16x16, 32x32, 48x48)`);

  // 3. Generate favicon.svg (replacing the old purple lightning bolt)
  // Embed crisp SAM logo data URI inside clean SVG
  const logo128Buffer = await sharp(sourcePath)
    .resize(128, 128, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  const base64Logo = logo128Buffer.toString('base64');

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <image href="data:image/png;base64,${base64Logo}" x="0" y="0" width="128" height="128" />
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
  console.log('✅ Generated favicon.svg (replaced purple bolt with official SAM logo)');

  // 4. Generate site.webmanifest for PWA & Google Android discovery
  const manifest = {
    name: 'SAM GREEN POWER SOLUTIONS PRIVATE LIMITED',
    short_name: 'SAM Green Power',
    description: 'Clean Energy. Better Future. Turnkey solar rooftop EPC and installation services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7FAF5',
    theme_color: '#063B18',
    icons: [
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('✅ Generated site.webmanifest');
}

generateAllFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});

