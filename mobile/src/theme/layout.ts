/** Shared spacing & radii — aligned with Apple marketing mobile patterns */
export const layout = {
  screenPaddingX: 20,
  sectionGap: 12,
  cardRadius: 18,
  pillRadius: 980,
  tabBarClearance: 24,
  maxContentWidth: 680,
} as const;

export const type = {
  heroHeadline: { fontSize: 32, lineHeight: 38, fontWeight: '700' as const },
  sectionTitle: { fontSize: 28, lineHeight: 34, fontWeight: '700' as const },
  body: { fontSize: 17, lineHeight: 25, fontWeight: '400' as const },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '400' as const },
  eyebrow: { fontSize: 14, lineHeight: 20, fontWeight: '600' as const },
} as const;
