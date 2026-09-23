import json
import re
from pathlib import Path

text = Path(
    r'C:\Users\GaneshReddy\.cursor\projects\c-Users-GaneshReddy-Desktop-figma-apple-ui\agent-tools\d67feeab-9372-45ac-b7cc-6a967498d31a.txt'
).read_text(encoding='utf-8')
chunk = text[text.find('Footnotes') : text.find('Apple Directory')]
items = []
for m in re.finditer(r'\[TEXT\] #0:(\d+) .*?text="(.*?)"', chunk):
    tid, body = m.group(1), m.group(2)
    body = body.replace('\\n', '\n').replace('\\(', '(').replace('\\)', ')')
    body = re.sub(r'\{ts\d+\}', '', body)
    body = re.sub(r'\{/ts\d+\}', '', body)
    items.append({'id': tid, 'text': body})

out = Path(__file__).resolve().parents[1] / 'src' / 'data' / 'footerFootnotes.generated.json'
out.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Wrote {len(items)} items to {out}')
