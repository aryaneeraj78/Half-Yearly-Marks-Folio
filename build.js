import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
fs.copyFileSync(path.resolve('index.html'), path.join(distDir, 'index.html'));
if (fs.existsSync(path.resolve('bep-logo.js'))) {
  fs.copyFileSync(path.resolve('bep-logo.js'), path.join(distDir, 'bep-logo.js'));
}
if (fs.existsSync(path.resolve('report-card-assets.js'))) {
  fs.copyFileSync(path.resolve('report-card-assets.js'), path.join(distDir, 'report-card-assets.js'));
}
console.log('Build completed successfully.');
