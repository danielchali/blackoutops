// Build script: copy static site files into dist/ for deployment.
const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const entries = ['index.html', 'game.html', 'styles.css', 'public'];

for (const entry of entries) {
  const src = path.join(root, entry);
  if (!fs.existsSync(src)) continue;
  fs.cpSync(src, path.join(dist, entry), { recursive: true });
}

console.log('build OK -> dist/');
