const fs = require('fs');
const path = require('path');

const showcaseDir = 'public/showcase';
const certsDir = 'public/certs';

// Rename Showcase Images
if (fs.existsSync(showcaseDir)) {
  const files = fs.readdirSync(showcaseDir).filter(f => !f.startsWith('.'));
  files.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `image-${String(index + 1).padStart(2, '0')}${ext}`;
    fs.renameSync(path.join(showcaseDir, file), path.join(showcaseDir, newName));
    console.log(`Renamed ${file} to ${newName}`);
  });
}

// Rename Certs PDFs (Manual mapping based on guesses/order, or just safe names)
// We will just clean the names for now to remove spaces and parens.
if (fs.existsSync(certsDir)) {
  const files = fs.readdirSync(certsDir).filter(f => f.endsWith('.pdf'));
  files.forEach(file => {
    const newName = file.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/_/g, '-')
      .replace(/-+/g, '-');
      
    if (file !== newName) {
      fs.renameSync(path.join(certsDir, file), path.join(certsDir, newName));
      console.log(`Renamed ${file} to ${newName}`);
    }
  });
}
