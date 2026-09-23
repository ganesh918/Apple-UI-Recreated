import rawFootnotes from './footerFootnotes.generated.json';

function byId(id: string): string {
  const item = rawFootnotes.find((entry) => entry.id === id);
  if (!item) return '';
  return item.text
    .replace(/\\\\/g, '')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/\\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\(?=\r?\n)/g, '')
    .replace(/^\s*\\+\s*(?:\r?\n|$)/gm, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

function paragraphsById(...ids: string[]): string[] {
  return ids.flatMap((id) => splitParagraphs(byId(id)));
}

export const footerAsteriskNote = byId('2399');

export const footerDoubleAsteriskParagraphs = [
  byId('2403'),
  byId('2404'),
  byId('2406'),
  byId('2407'),
  byId('2408'),
  byId('2409'),
];

export interface FooterNumberedNote {
  value: number;
  paragraphs: string[];
}

export const footerNumberedNotes: FooterNumberedNote[] = [
  { value: 1, paragraphs: paragraphsById('2411') },
  { value: 4, paragraphs: paragraphsById('2413', '2415') },
  { value: 5, paragraphs: paragraphsById('2416') },
  { value: 6, paragraphs: paragraphsById('2418') },
  { value: 7, paragraphs: paragraphsById('2419') },
  { value: 8, paragraphs: paragraphsById('2421') },
  { value: 9, paragraphs: paragraphsById('2423') },
  { value: 10, paragraphs: paragraphsById('2425') },
  { value: 11, paragraphs: paragraphsById('2426') },
  { value: 12, paragraphs: paragraphsById('2428') },
  { value: 13, paragraphs: paragraphsById('2429') },
  { value: 14, paragraphs: paragraphsById('2431') },
  { value: 15, paragraphs: paragraphsById('2433') },
  { value: 16, paragraphs: paragraphsById('2435') },
];
