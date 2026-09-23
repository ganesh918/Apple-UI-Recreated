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
```

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
```

### Mobile screens

- **iPhone** — Hero products + guided tour
- **Compare** — Horizontal iPhone comparison cards
- **Shop** — Trade-in, services, accessories

## Design source

Figma: [Apple UI - Recreated](https://www.figma.com/design/bBtwVBCYZLdlvRwUMrkpDI/) — node `0:1838` (Apple - 04)

Images exported via Figma MCP at `@2x` scale into `web/public/images/`.
