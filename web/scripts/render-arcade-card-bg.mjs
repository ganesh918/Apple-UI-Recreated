import { createWriteStream } from 'node:fs';
import { PNG } from 'pngjs';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

const A = 3.3251230716705322;
const TX = -1.1625615358352661;
const D = 3.2765958309173584;
const TY = -1.5531915426254272;

const CARD_W = 675;
const CARD_H = 616;
const SCALE = 2;
const OUT_W = CARD_W * SCALE;
const OUT_H = CARD_H * SCALE;

const src = PNG.sync.read(readFileSync(path.join(imagesDir, 'apple-arcade-card-full-2x.png')));
const out = new PNG({ width: OUT_W, height: OUT_H });

for (let y = 0; y < OUT_H; y += 1) {
  const v = y / OUT_H;
  for (let x = 0; x < OUT_W; x += 1) {
    const u = x / OUT_W;
    const iu = A * u + TX;
    const iv = D * v + TY;
    const idx = (OUT_W * y + x) << 2;
    if (iu >= 0 && iu <= 1 && iv >= 0 && iv <= 1) {
      const sx = Math.min(src.width - 1, Math.max(0, Math.round(iu * (src.width - 1))));
      const sy = Math.min(src.height - 1, Math.max(0, Math.round(iv * (src.height - 1))));
      const sidx = (src.width * sy + sx) << 2;
      out.data[idx] = src.data[sidx];
      out.data[idx + 1] = src.data[sidx + 1];
      out.data[idx + 2] = src.data[sidx + 2];
      out.data[idx + 3] = 255;
    } else {
      out.data[idx] = 255;
      out.data[idx + 1] = 255;
      out.data[idx + 2] = 255;
      out.data[idx + 3] = 255;
    }
  }
}

const outPath = path.join(imagesDir, 'apple-arcade-card-bg-2x.png');
writePng(out, outPath);
console.log(`Wrote ${outPath} (${OUT_W}x${OUT_H})`);

function writePng(png, filePath) {
  return new Promise((resolve, reject) => {
    png
      .pack()
      .pipe(createWriteStream(filePath))
      .on('finish', resolve)
      .on('error', reject);
  });
}
