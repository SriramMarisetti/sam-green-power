import fs from 'fs';
import path from 'path';
import https from 'https';

const dest = path.resolve('public/images/solar-sky-hero.jpg');
const url = 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=2400&q=88&auto=format&fit=crop';

function download(u, d) {
  return new Promise((resolve, reject) => {
    https.get(u, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, d).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(d);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(d, () => {});
      reject(err);
    });
  });
}

download(url, dest)
  .then(() => console.log('Successfully downloaded solar-sky-hero.jpg'))
  .catch(console.error);

