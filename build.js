import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const filesToCopy = [
  'index.html',
  'bep-logo.js',
  'report-card-assets.js',
  'logo.svg',
  'logo.png',
  'favicon.png',
  'share-thumbnail.png',
  'share-thumbnail.svg',
  'og-image.png'
];

for (const file of filesToCopy) {
  const src = path.resolve(file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
  }
}

console.log('Build completed successfully.');
