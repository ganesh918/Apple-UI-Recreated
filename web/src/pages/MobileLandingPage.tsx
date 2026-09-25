import { useEffect } from 'react';
import {
  applyMobileLandingViewport,
  isLikelyMobileDevice,
} from '../utils/mobileLandingViewport';
import { HomePage } from './HomePage';

/**
 * Public mobile marketing page — same full Figma landing as desktop,
 * matching apple.com-style /mobile/ layouts (chapter nav + long scroll).
 * On desktop browsers, pins layout viewport width so mobile styles apply.
 */
export function MobileLandingPage() {
  useEffect(() => {
    document.documentElement.classList.add('mobile-landing');
    const desktopPreview = !isLikelyMobileDevice();
    if (desktopPreview) {
      document.documentElement.classList.add('mobile-landing--desktop-preview');
    }
    const restoreViewport = applyMobileLandingViewport();
    return () => {
      restoreViewport();
      document.documentElement.classList.remove('mobile-landing', 'mobile-landing--desktop-preview');
    };
  }, []);

  return <HomePage />;
}
