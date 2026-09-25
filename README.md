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

Use the **repository root** as the Vercel project root (leave **Root Directory** empty). Root **`vercel.json`** runs:

- `npm run build:vercel` → Vite site in **`web/dist`** plus Expo **React Native Web** export in **`web/dist/m`**
- **Desktop / wide screens:** [https://apple-ui-recreated.vercel.app/](https://apple-ui-recreated.vercel.app/) — responsive React landing page  
- **Phones & narrow viewports:** `/` redirects to **`/m/`** — same UI as the Expo app (tab navigator: iPhone, Compare, Shop), rendered with React Native Web

Open the mobile experience directly: [https://apple-ui-recreated.vercel.app/m/](https://apple-ui-recreated.vercel.app/m/)

Do **not** set Vercel Root Directory to `web` only, or the `/m` React Native bundle will not be published.

After pushing changes, trigger **Redeploy** on the latest commit.

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
npm run web      # React Native Web in the browser (local)
npm run build:web  # static export → ../web/dist/m (used by Vercel)
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
