import { useEffect } from 'react';
import { HomePage } from './HomePage';

/**
 * Public mobile marketing page — same full Figma landing as desktop,
 * matching apple.com-style /mobile/ layouts (chapter nav + long scroll).
 */
export function MobileLandingPage() {
  useEffect(() => {
    document.documentElement.classList.add('mobile-landing');
    return () => document.documentElement.classList.remove('mobile-landing');
  }, []);

  return <HomePage />;
}
