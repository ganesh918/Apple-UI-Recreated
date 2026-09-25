import { Link } from 'react-router-dom';

/** Desktop web: open the React Native (Expo) experience served at /m */
export function MobileAppLink() {
  return (
    <p className="mobile-app-link">
      Prefer the mobile app layout?{' '}
      <a href="/m/">Open React Native UI</a>
      {' · '}
      <Link to="/login">Sign in (web)</Link>
    </p>
  );
}
