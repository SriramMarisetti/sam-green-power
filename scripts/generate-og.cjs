const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // SVG overlay with brand typography and badges
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#063B18" stop-opacity="0.94"/>
          <stop offset="50%" stop-color="#09471d" stop-opacity="0.88"/>
          <stop offset="100%" stop-color="#042810" stop-opacity="0.95"/>
        </linearGradient>
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#55B51F"/>
          <stop offset="50%" stop-color="#84D653"/>
          <stop offset="100%" stop-color="#F5A000"/>
        </linearGradient>
      </defs>

      <!-- Semi-transparent brand overlay over the hero solar photo -->
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Accent Top Bar -->
      <rect x="0" y="0" width="${width}" height="8" fill="url(#brandGrad)"/>

      <!-- Pill Badge -->
      <rect x="80" y="70" width="380" height="40" rx="20" fill="#55B51F" fill-opacity="0.2" stroke="#55B51F" stroke-width="1.5"/>
      <text x="270" y="95" font-family="sans-serif" font-size="14" font-weight="800" fill="#55B51F" text-anchor="middle" letter-spacing="2">
        CLEAN ENERGY • BETTER FUTURE
      </text>

      <!-- Main Headline -->
      <text x="80" y="190" font-family="sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" letter-spacing="-1.5">
        SAM GREEN POWER
      </text>
      <text x="80" y="260" font-family="sans-serif" font-size="52" font-weight="900" fill="url(#brandGrad)" letter-spacing="-1">
        SOLUTIONS PVT. LTD.
      </text>

      <!-- Subtitle Description -->
      <text x="80" y="330" font-family="sans-serif" font-size="24" font-weight="600" fill="#E2EBE4">
        Turnkey Rooftop Solar Installations • Residential, Commercial &amp; Industrial
      </text>
      <text x="80" y="370" font-family="sans-serif" font-size="20" font-weight="400" fill="#94A3B8">
        Serving 28 Operating Hubs Across Andhra Pradesh &amp; Telangana
      </text>

      <!-- Offer Badge Box -->
      <rect x="80" y="430" width="700" height="80" rx="18" fill="#04220d" stroke="#55B51F" stroke-width="2" stroke-opacity="0.6"/>
      <text x="110" y="478" font-family="sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">
        PM Surya Ghar Subsidy: <tspan fill="#55B51F" font-weight="900">₹78,000</tspan> + SAM Offer: <tspan fill="#F5A000" font-weight="900">₹22,000</tspan>
      </text>
      <text x="690" y="478" font-family="sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">
        = ₹ 1,00,000
      </text>

      <!-- Website URL & Official Tag -->
      <text x="80" y="575" font-family="sans-serif" font-size="18" font-weight="700" fill="#55B51F" letter-spacing="1">
        www.samgreenpower.in
      </text>
      <text x="320" y="575" font-family="sans-serif" font-size="16" font-weight="600" fill="#94A3B8">
        • MNRE Compliant Tier-1 PV • 30-Year Performance Warranty
      </text>
    </svg>
  `);

  const heroPath = path.resolve('public/images/solar-sky-hero.jpg');
  const outPath = path.resolve('public/og-image.jpg');

  await sharp(heroPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .composite([{ input: svgOverlay, blend: 'over' }])
    .jpeg({ quality: 90 })
    .toFile(outPath);

  console.log('✅ Generated public/og-image.jpg (1200x630)');
}

createOgImage().catch(console.error);
