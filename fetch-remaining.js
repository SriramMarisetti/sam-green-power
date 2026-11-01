import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesDir = path.resolve('public/images');
const list = [
  { name: 'about-solar.jpg', id: 'photo-1508514177221-188b1cf16e9d' },
  { name: 'project-residential.jpg', id: 'photo-1548337138-e87d889cc369' },
  { name: 'project-industrial.jpg', id: 'photo-1563986768609-322da13575f3' },
  { name: 'solar-hero-bg.jpg', id: 'photo-1513836279014-a89f7a76ae86' },
  { name: 'green-energy.jpg', id: 'photo-1466611653911-95081537e5b7' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed: ${response.statusCode}`));
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
  for (const item of list) {
    const url = `https://images.unsplash.com/${item.id}?w=1200&q=85&auto=format&fit=crop`;
    const dest = path.join(imagesDir, item.name);
    console.log(`Downloading ${item.name}...`);
    await download(url, dest);
    console.log(`Saved ${item.name}`);
  }
}

run();

