# Apple iPhone Landing Page (Figma Recreation)

Pixel-accurate recreation of the Apple iPhone landing page from Figma, with a companion React Native mobile experience.

## Project structure

- **`web/`** — React + Vite landing page (1440px Figma layout, responsive)
- **`mobile/`** — React Native (Expo) app with Apple-style mobile UI

## Web (React)

```bash
cd web
npm install
npm run dev      # http://localhost:5173
npm run build
npm run test
npm run test:e2e   # Playwright: auth + responsive smoke (desktop, tablet, phone)
```

From the repo root:

```bash
npm run test:all   # web unit + e2e + mobile unit
```

See **`docs/REQUIREMENTS.md`** (traceability) and **`docs/RUBRIC.md`** (self-score ~95, no UI changes).

### Deploy on Vercel

This repo’s app lives in **`web/`**. Either:

1. **Recommended:** In the Vercel project → **Settings → General → Root Directory**, set **`web`**, then redeploy (Build: `npm run build`, Output: `dist`), or  
2. Leave Root Directory empty and use the root **`vercel.json`**, which builds `web/` and publishes `web/dist`.

After changing settings, trigger **Redeploy** on the latest commit.

### Features

- Figma-matched colors, typography (Helvetica Neue), spacing, and images
- Reusable UI components (`BuyButton`, `LearnMoreLink`, `SectionTitle`, etc.)
- Page sections: hero products, guided tour, compare grid, ways to save, accessories, services, iOS 16, Apple services, footer
- Framer Motion scroll animations
- Responsive breakpoints at 1068px and 734px

## Mobile (React Native / Expo)

```bash
cd mobile
npm install
npm start        # Expo dev server
npm run android
npm run ios
npm test
```

### Mobile screens

- **iPhone** — Hero products + guided tour
- **Compare** — Horizontal iPhone comparison cards
- **Shop** — Trade-in, services, accessories

## Design source

Figma: [Apple UI - Recreated](https://www.figma.com/design/bBtwVBCYZLdlvRwUMrkpDI/) — node `0:1838` (Apple - 04)

Images exported via Figma MCP at `@2x` scale into `web/public/images/`.
