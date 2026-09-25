import { flattenFooterDirectorySections } from '../../data/footerData';
import './Footer.css';

export function FooterDirectoryAccordion() {
  const sections = flattenFooterDirectorySections();

  return (
    <nav
      className="site-footer__directory site-footer__directory--accordion"
      aria-label="Apple Directory"
    >
      {sections.map((section) => (
        <details key={section.title} className="site-footer__accordion-item">
          <summary className="site-footer__accordion-summary">
            <span className="site-footer__accordion-title">{section.title}</span>
            <span className="site-footer__accordion-icon" aria-hidden="true" />
          </summary>
          <ul className="site-footer__column-links site-footer__accordion-links">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </nav>
  );
}
