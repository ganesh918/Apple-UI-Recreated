# Requirements traceability (Apple-04 assignment)

This document maps assignment criteria to implementation evidence **without altering the visual UI**.

| Requirement | Implementation | Verification |
|-------------|----------------|--------------|
| Web: React.js | `web/` — Vite + React 19 + TypeScript | `npm run build --prefix web` |
| Mobile: React Native | `mobile/` — Expo + React Navigation | `npm start --prefix mobile` |
| Web follows Figma (layout, type, color, images, buttons) | Design tokens, Figma exports in `web/public/images/`, section CSS at 1440px | Manual + desktop E2E smoke |
| Mobile: custom Apple-style UI (no Figma mobile) | Tab app: Home, Compare, Shop — shared copy/assets | `mobile/src/screens/*` |
| Responsive web | Breakpoints 1068 / 734 / 480, `responsive.css`, `mobile-cards.css` | Playwright projects: desktop, tablet, mobile |
| Reusable components | `web/src/components/ui`, `motion`, `auth`; mobile `components/` | Unit tests on shared UI |
| Animations / transitions | `web/src/lib/motion.ts`, Framer Motion, CSS hovers | Visual QA; reduced-motion respected |
| UI testing & issue fixes | Vitest + Playwright + mobile Jest | `npm run test:all` (from repo root) |

## Test commands

```bash
# Web unit / component tests
npm run test --prefix web

# Web E2E (build + preview + Playwright; desktop + tablet + phone viewports)
npm run test:e2e --prefix web

# Mobile component tests
npm run test --prefix mobile

# Full suite
npm run test:all
```

## Notes for reviewers

- **Authentication** is an additive feature (not in Figma); it does not change Figma section markup on the landing page.
- **Mobile** intentionally simplifies the full desktop page into three focused tabs while reusing the same messaging and assets.
