import { Link } from 'react-router-dom';

/** Open the full mobile marketing page (chapter nav + scroll), like apple.com mobile web. */
export function MobileAppLink() {
  return (
    <p className="mobile-app-link">
      Prefer the mobile web layout?{' '}
      <Link to="/mobile">Open mobile iPhone page</Link>
      {' · '}
      <Link to="/login">Sign in (desktop)</Link>
    </p>
  );
}
