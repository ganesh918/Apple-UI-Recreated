import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { images } from '../../assets/images';
import './GlobalNav.css';

const navItems = [
  { label: 'Store', icon: images.icons.navStore, width: 30 },
  { label: 'Mac', icon: images.icons.navMac, width: 23 },
  { label: 'iPad', icon: images.icons.navIpad, width: 24 },
  { label: 'iPhone', icon: images.icons.navIphone, width: 38 },
  { label: 'Watch', icon: images.icons.navWatch, width: 35 },
  { label: 'AirPods', icon: images.icons.navAirpods, width: 43 },
  { label: 'TV & Home', icon: images.icons.navTvHome, width: 65 },
  { label: 'Entertainment', icon: images.icons.navEntertainment, width: 77 },
  { label: 'Accessories', icon: images.icons.navAccessories, width: 67 },
  { label: 'Support', icon: images.icons.navSupport, width: 44 },
];

export function GlobalNav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const appleMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (appleMenuRef.current?.contains(event.target as Node)) return;
      setMenuOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  function handleSignOut() {
    setMenuOpen(false);
    logout();
    navigate('/login', { replace: true });
  }

  function toggleAppleMenu() {
    setMenuOpen((open) => !open);
  }

  return (
    <nav className="global-nav" aria-label="Global">
      <div className="global-nav__inner">
        <div className="global-nav__apple-wrap" ref={appleMenuRef}>
          <button
            type="button"
            className="global-nav__apple"
            aria-label="Apple account menu"
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            onClick={toggleAppleMenu}
          >
            <img src={images.icons.appleLogo} alt="" width={14} height={44} className="figma-img" />
          </button>
          {menuOpen && user ? (
            <div className="global-nav__account-menu" role="menu" aria-label="Account">
              <p className="global-nav__account-menu-user">{user.name}</p>
              <p className="global-nav__account-menu-email">{user.email}</p>
              <button
                type="button"
                className="global-nav__account-menu-signout"
                role="menuitem"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          ) : null}
        </div>
        <ul className="global-nav__list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href="#" className="global-nav__link" aria-label={item.label}>
                <img
                  src={item.icon}
                  alt=""
                  width={item.width}
                  height={44}
                  className="figma-img global-nav__icon-img"
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="global-nav__actions">
          <button type="button" className="global-nav__icon" aria-label="Search">
            <img src={images.icons.search} alt="" width={15} height={44} className="figma-img" />
          </button>
          <button type="button" className="global-nav__icon" aria-label="Shopping bag">
            <img src={images.icons.bag} alt="" width={14} height={44} className="figma-img" />
          </button>
        </div>
      </div>
    </nav>
  );
}
