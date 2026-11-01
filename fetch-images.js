import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesDir = path.resolve('public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  {
    name: 'about-solar.jpg',
    url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'project-residential.jpg',
    url: 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'project-commercial.jpg',
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'project-industrial.jpg',
    url: 'https://images.unsplash.com/photo-1545208942-e1c25143a530?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'project-large-scale.jpg',
    url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'maintenance.jpg',
    url: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80',
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status ${response.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of images) {
    const dest = path.join(imagesDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, dest);
      console.log(`Saved ${item.name}`);
    } catch (e) {
      console.warn(`Could not download ${item.name}: ${e.message}`);
    }
  }
}

run();

