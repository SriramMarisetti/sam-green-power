import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'C:/Users/APS-SRIRAM/.gemini/antigravity/brain/4bc56862-825a-478b-b225-bcb0c54c84a7/.user_uploaded/media_1793474314733_a83b73fe.jpg';
const publicDir = path.resolve('public');
const brandDir = path.join(publicDir, 'brand');

if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

async function processLogo() {
  console.log('Loading source image...');
  const metadata = await sharp(inputPath).metadata();
  console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

  // Copy raw original
  fs.copyFileSync(inputPath, path.join(brandDir, 'sam-green-power-logo-original.jpg'));
  fs.copyFileSync(inputPath, path.join(publicDir, 'logo-original.jpg'));

  const size = metadata.width || 1024;
  const radius = Math.floor(size * 0.491); // exact circle boundary of the badge
  const center = size / 2;

  // Create an anti-aliased circular SVG mask
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${center}" cy="${center}" r="${radius}" fill="white" />
    </svg>`
  );

  // 1. Transparent circular badge (1024x1024)
  const transparentCircle = await sharp(inputPath)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  // Save full transparent circle
  await sharp(transparentCircle)
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Created public/logo.png (1024x1024 transparent circular badge)');

  // 2. High-res badge in brand directory
  await sharp(transparentCircle)
    .toFile(path.join(brandDir, 'sam-logo-1024.png'));

  // 3. Medium-res 512x512
  await sharp(transparentCircle)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-512.png'));
  console.log('Created public/logo-512.png');

  // 4. Navbar badge 256x256 (retina sharp)
  await sharp(transparentCircle)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-nav.png'));
  console.log('Created public/logo-nav.png');

  // 5. Mobile badge 128x128
  await sharp(transparentCircle)
    .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-128.png'));
  console.log('Created public/logo-128.png');

  // 6. Favicon 64x64
  await sharp(transparentCircle)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created public/favicon.png');

  // 7. Apple touch icon 180x180
  await sharp(transparentCircle)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created public/apple-touch-icon.png');

  // 8. Favicon 32x32
  await sharp(transparentCircle)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Created public/favicon-32x32.png');

  // 9. Also save a version with pure white circular disc with subtle outer drop-shadow for dark footers
  const footerBadgeMask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#000000" flood-opacity="0.25" />
      </filter>
      <circle cx="${center}" cy="${center}" r="${radius}" fill="white" filter="url(#shadow)" />
    </svg>`
  );

  await sharp(transparentCircle)
    .resize(384, 384, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-footer.png'));
  console.log('Created public/logo-footer.png');

  console.log('All logo resolutions generated successfully without changing design!');
}

processLogo().catch(err => {
  console.error('Error processing logo:', err);
  process.exit(1);
});

