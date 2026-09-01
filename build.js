/* Static site "build": copy all servable assets into dist/ */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// Copy public/ contents to dist root
const pub = path.join(root, 'public');
if (fs.existsSync(pub)) {
  fs.cpSync(pub, dist, { recursive: true });
}

// Copy top-level static files
for (const f of ['index.html', 'game.html', 'styles.css']) {
  const src = path.join(root, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dist, f));
}

console.log('built static site ->', dist);
