export const DEFAULT_VIEWPORT_META =
  'width=device-width, initial-scale=1.0, viewport-fit=cover';

/** Layout viewport width so mobile @media rules apply on desktop /mobile. */
export const DESKTOP_MOBILE_LAYOUT_VIEWPORT_META =
  'width=430, initial-scale=1.0, viewport-fit=cover';

export function isLikelyMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const narrow = window.matchMedia('(max-width: 768px)').matches;
  const mobileUa = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
  return narrow || mobileUa;
}

export function applyMobileLandingViewport(): () => void {
  const meta = document.querySelector('meta[name="viewport"]');
  const previous = meta?.getAttribute('content') ?? DEFAULT_VIEWPORT_META;

  if (!isLikelyMobileDevice()) {
    meta?.setAttribute('content', DESKTOP_MOBILE_LAYOUT_VIEWPORT_META);
  }

  return () => {
    meta?.setAttribute('content', previous);
  };
}
