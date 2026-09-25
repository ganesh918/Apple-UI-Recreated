import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const appleMenuRef = useRef<HTMLDivElement>(null);
  const mobileSheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!accountMenuOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (appleMenuRef.current?.contains(event.target as Node)) return;
      setAccountMenuOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setAccountMenuOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [accountMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    }

    document.addEventListener('keydown', handleEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  function handleSignOut() {
    setAccountMenuOpen(false);
    setMobileMenuOpen(false);
    logout();
    navigate('/login', { replace: true });
  }

  function toggleAccountMenu() {
    setAccountMenuOpen((open) => !open);
  }

  function openMobileMenu() {
    setAccountMenuOpen(false);
    setMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <nav className="global-nav" aria-label="Global">
      <div className="global-nav__inner">
        <button
          type="button"
          className="global-nav__hamburger"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="global-nav-mobile-sheet"
          onClick={openMobileMenu}
        >
          <span className="global-nav__hamburger-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <Link to="/mobile" className="global-nav__mobile-apple" aria-label="Apple">
          <img src={images.icons.appleLogo} alt="" width={14} height={44} className="figma-img" />
        </Link>

        <div className="global-nav__apple-wrap global-nav__apple-wrap--desktop" ref={appleMenuRef}>
          <button
            type="button"
            className="global-nav__apple"
            aria-label="Apple account menu"
            aria-expanded={accountMenuOpen}
            aria-haspopup="menu"
            onClick={toggleAccountMenu}
          >
            <img src={images.icons.appleLogo} alt="" width={14} height={44} className="figma-img" />
          </button>
          {accountMenuOpen && user ? (
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

      {mobileMenuOpen ? (
        <div className="global-nav__mobile-layer" role="presentation">
          <button
            type="button"
            className="global-nav__mobile-backdrop"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          />
          <div
            id="global-nav-mobile-sheet"
            ref={mobileSheetRef}
            className="global-nav__mobile-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="global-nav__mobile-sheet-header">
              <span className="global-nav__mobile-sheet-title">Menu</span>
              <button type="button" className="global-nav__mobile-close" onClick={closeMobileMenu}>
                Close
              </button>
            </div>
            <ul className="global-nav__mobile-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href="#" className="global-nav__mobile-link" onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {user ? (
              <div className="global-nav__mobile-account">
                <p className="global-nav__mobile-account-name">{user.name}</p>
                <button type="button" className="global-nav__mobile-signout" onClick={handleSignOut}>
                  Sign out
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
