import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const texturesDir = path.resolve('public/textures');
if (!fs.existsSync(texturesDir)) {
  fs.mkdirSync(texturesDir, { recursive: true });
}

// Create an SVG of a realistic monocrystalline solar panel face
// 6 columns x 10 rows of solar cells with diamond cut corners, thin silver busbars
const width = 1024;
const height = 1600;
const cols = 6;
const rows = 10;
const margin = 24;
const cellSpacing = 8;

const cellW = (width - margin * 2 - (cols - 1) * cellSpacing) / cols;
const cellH = (height - margin * 2 - (rows - 1) * cellSpacing) / rows;

let svgCells = '';

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const x = margin + c * (cellW + cellSpacing);
    const y = margin + r * (cellH + cellSpacing);
    
    // Cell base - dark rich solar blue with slight chamfer
    const corner = 8;
    const pathD = `
      M ${x + corner} ${y}
      L ${x + cellW - corner} ${y}
      L ${x + cellW} ${y + corner}
      L ${x + cellW} ${y + cellH - corner}
      L ${x + cellW - corner} ${y + cellH}
      L ${x + corner} ${y + cellH}
      L ${x} ${y + cellH - corner}
      L ${x} ${y + corner}
      Z
    `;

    // 5 thin vertical busbars per cell
    let busbars = '';
    for (let b = 1; b <= 4; b++) {
      const bx = x + (cellW / 5) * b;
      busbars += `<line x1="${bx}" y1="${y}" x2="${bx}" y2="${y + cellH}" stroke="#B8D5E5" stroke-width="1.5" opacity="0.8" />`;
    }

    // 20 ultra-fine horizontal fingers
    let fingers = '';
    for (let f = 1; f <= 16; f++) {
      const fy = y + (cellH / 17) * f;
      fingers += `<line x1="${x}" y1="${fy}" x2="${x + cellW}" y2="${fy}" stroke="#7AA9CC" stroke-width="0.75" opacity="0.35" />`;
    }

    svgCells += `
      <path d="${pathD}" fill="url(#cellGrad)" stroke="#092B4F" stroke-width="1" />
      ${fingers}
      ${busbars}
    `;
  }
}

const fullSvg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dark deep solar blue gradient inspired by brand #1762A5 -->
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1969B0" />
      <stop offset="50%" stop-color="#145591" />
      <stop offset="100%" stop-color="#0E3D69" />
    </linearGradient>
    <linearGradient id="panelBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0B1C2D" />
      <stop offset="100%" stop-color="#06121E" />
    </linearGradient>
  </defs>

  <!-- Panel Backsheet / Substrate -->
  <rect width="${width}" height="${height}" fill="url(#panelBg)" />

  <!-- Solar Cells Grid -->
  ${svgCells}

  <!-- Anti-reflective subtle glass gloss overlay -->
  <rect width="${width}" height="${height}" fill="white" opacity="0.03" />
</svg>
`;

async function generate() {
  await sharp(Buffer.from(fullSvg))
    .png({ quality: 100 })
    .toFile(path.join(texturesDir, 'solar-cell-texture.png'));
  console.log('Created public/textures/solar-cell-texture.png');
}

generate().catch(console.error);

