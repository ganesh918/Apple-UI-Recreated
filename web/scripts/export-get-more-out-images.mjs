/**
 * Export Get More Out section images from Figma (node renders, not external URLs).
 * Usage: node scripts/export-get-more-out-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

if (!FIGMA_TOKEN) {
  console.error('Missing FIGMA_TOKEN. Set it in your environment before running this script.');
  console.error('Example (PowerShell): $env:FIGMA_TOKEN = "your-token"; node scripts/export-get-more-out-images.mjs');
  process.exit(1);
}
const FILE_KEY = 'bBtwVBCYZLdlvRwUMrkpDI';
const SCALE = 2;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/images');

/** Figma node id -> output filename */
const EXPORTS = {
  '0:2048': 'apple-tv-showcase-2x.png',
  '0:2038': 'apple-tv-card-full-2x.png',
  '0:2113': 'apple-arcade-card-full-2x.png',
  '0:2105': 'apple-news-card-full-2x.png',
  '0:2151': 'apple-research-card-full-2x.png',
};

async function figmaExport(ids) {
  const query = new URLSearchParams({
    ids: ids.join(','),
    format: 'png',
    scale: String(SCALE),
  });
  const res = await fetch(`https://api.figma.com/v1/images/${FILE_KEY}?${query}`, {
    headers: { 'X-Figma-Token': FIGMA_TOKEN },
  });
  const body = await res.json();
  if (!res.ok) {
    throw new Error(body.err ?? body.message ?? `Figma API ${res.status}`);
  }
  return body.images;
}

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${dest}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const ids = Object.keys(EXPORTS);
  console.log('Requesting Figma exports for:', ids.join(', '));
  const images = await figmaExport(ids);
  for (const [id, fileName] of Object.entries(EXPORTS)) {
    const url = images[id];
    if (!url) {
      console.error(`No URL for node ${id}`);
      continue;
    }
    const dest = path.join(OUT_DIR, fileName);
    await downloadFile(url, dest);
    console.log(`Saved ${fileName}`);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
