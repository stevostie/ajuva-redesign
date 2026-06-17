const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, 'public');
const galleryDir = path.join(publicDir, 'gallery');
const imagesDir = path.join(publicDir, 'images');

async function convertDir(dir) {
  const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    const input = path.join(dir, file);
    const outName = file.replace(/\.(jpe?g|png)$/i, '.webp');
    const output = path.join(dir, outName);
    if (fs.existsSync(output)) { console.log(`  skip: ${outName}`); continue; }
    await sharp(input).webp({ quality: 82 }).toFile(output);
    console.log(`  OK: ${outName}`);
  }
}

(async () => {
  console.log('Gallery → WebP:');
  await convertDir(galleryDir);
  console.log('Images → WebP:');
  if (fs.existsSync(imagesDir)) await convertDir(imagesDir);
  console.log('Done.');
})();
