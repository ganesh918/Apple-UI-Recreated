/**
 * Mirrors @media (max-width) blocks as html.mobile-landing rules for /mobile on desktop.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stylesDir = path.join(__dirname, '../src/styles');

function extractMediaBlocks(css, maxWidth) {
  const blocks = [];
  const needle = `@media (max-width: ${maxWidth}px)`;
  let i = 0;
  while ((i = css.indexOf(needle, i)) !== -1) {
    const braceStart = css.indexOf('{', i);
    let depth = 0;
    let j = braceStart;
    for (; j < css.length; j++) {
      if (css[j] === '{') depth++;
      else if (css[j] === '}') {
        depth--;
        if (depth === 0) {
          blocks.push(css.slice(braceStart + 1, j));
          break;
        }
      }
    }
    i = j + 1;
  }
  return blocks;
}

function prefixRuleSelectors(selectors, prefix) {
  return selectors
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => `${prefix} ${s}`)
    .join(',\n');
}

function prefixBlock(block, prefix) {
  const cleaned = block.replace(/\/\*[\s\S]*?\*\//g, '');
  const ruleRe = /([^{]+)\{([^}]*)\}/g;
  let out = '';
  let match;
  while ((match = ruleRe.exec(cleaned)) !== null) {
    const selectors = match[1].trim();
    if (!selectors) continue;
    out += `${prefixRuleSelectors(selectors, prefix)} {${match[2]}}\n\n`;
  }
  return out;
}

const sources = [
  { file: 'mobile-cards.css', widths: [734, 480] },
  { file: 'responsive.css', widths: [1068, 734, 480] },
  { file: '../sections/GuidedTour.css', widths: [734] },
  { file: '../components/layout/Footer.css', widths: [734, 480] },
];

let generated = '/* Auto-generated — npm run css:mobile-route */\n\n';

for (const { file, widths } of sources) {
  const cssPath = file.startsWith('..')
    ? path.join(stylesDir, file)
    : path.join(stylesDir, file);
  const css = fs.readFileSync(cssPath, 'utf8');
  for (const w of widths) {
    for (const block of extractMediaBlocks(css, w)) {
      generated += `/* from ${file} @media (max-width: ${w}px) */\n`;
      generated += prefixBlock(block, 'html.mobile-landing');
      generated += '\n';
    }
  }
}

fs.writeFileSync(path.join(stylesDir, 'mobile-route-layout.css'), generated);
console.log('Wrote src/styles/mobile-route-layout.css');
