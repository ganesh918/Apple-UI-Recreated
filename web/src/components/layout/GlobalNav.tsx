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
  return (
    <nav className="global-nav" aria-label="Global">
      <div className="global-nav__inner">
        <a href="#" className="global-nav__apple" aria-label="Apple">
          <img src={images.icons.appleLogo} alt="" width={14} height={44} className="figma-img" />
        </a>
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
