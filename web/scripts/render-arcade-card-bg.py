"""Bake Apple Arcade card background using Figma #0:2113 cropTransform."""
from PIL import Image

A, B, TX = 3.3251230716705322, 0.0, -1.1625615358352661
C, D, TY = 0.0, 3.2765958309173584, -1.5531915426254272

CARD_W, CARD_H = 675, 616
SCALE = 2
OUT_W, OUT_H = CARD_W * SCALE, CARD_H * SCALE

SRC = r'C:\Users\GaneshReddy\Desktop\figma-apple-ui\web\public\images\apple-arcade-card-full-2x.png'
OUT = r'C:\Users\GaneshReddy\Desktop\figma-apple-ui\web\public\images\apple-arcade-card-bg-2x.png'

src = Image.open(SRC).convert('RGBA')
sw, sh = src.size
src_arr = src.load()

canvas = Image.new('RGBA', (OUT_W, OUT_H), (255, 255, 255, 255))
arr = canvas.load()

for y in range(OUT_H):
    v = y / OUT_H
    for x in range(OUT_W):
        u = x / OUT_W
        iu = A * u + B * v + TX
        iv = C * u + D * v + TY
        if 0 <= iu <= 1 and 0 <= iv <= 1:
            sx = int(iu * (sw - 1))
            sy = int(iv * (sh - 1))
            arr[x, y] = src_arr[sx, sy]

canvas.save(OUT)
print(f'Wrote {OUT} ({OUT_W}x{OUT_H})')
