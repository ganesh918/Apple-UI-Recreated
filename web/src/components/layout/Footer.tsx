import { Reveal } from '../motion/Reveal';
import { images } from '../../assets/images';
import { footerDirectoryColumns, footerLegalLinks } from '../../data/footerData';
import {
  footerAsteriskNote,
  footerDoubleAsteriskParagraphs,
  footerNumberedNotes,
} from '../../data/footerFootnotes';
import { FooterNoteText } from './FooterNoteText';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer" id="ac-globalfooter" aria-labelledby="ac-globalfooter-label">
      <h2 id="ac-globalfooter-label" className="site-footer__sr-only">
        Apple Footer
      </h2>

      <Reveal as="div" variant="blurUp" className="site-footer__inner">
        <section className="site-footer__footnotes" aria-label="Footnotes">
          <ul className="site-footer__disclaimer-list">
            <li className="site-footer__disclaimer-item">
              <FooterNoteText text={footerAsteriskNote} />
            </li>
            <li className="site-footer__disclaimer-item site-footer__disclaimer-item--double">
              {footerDoubleAsteriskParagraphs.map((paragraph, index) => (
                <p key={paragraph.slice(0, 32)} className="site-footer__footnote">
                  {index === 0 ? (
                    <>
                      <span className="site-footer__disclaimer-marker-inline" aria-hidden="true">
                        **
                      </span>{' '}
                    </>
                  ) : null}
                  <FooterNoteText text={paragraph} />
                </p>
              ))}
            </li>
          </ul>

          <ul className="site-footer__note-list">
            {footerNumberedNotes.map((note) => (
              <li key={note.value} className="site-footer__note-item">
                {note.paragraphs.map((paragraph, index) => (
                  <p
                    key={`${note.value}-${index}`}
                    className={`site-footer__footnote${index > 0 ? ' site-footer__footnote--continued' : ''}`}
                  >
                    <FooterNoteText text={paragraph} />
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <nav className="site-footer__breadcrumbs" aria-label="Breadcrumb">
          <span className="site-footer__breadcrumb-sprite" aria-hidden="true">
            <img
              src={images.icons.iconLarge}
              alt=""
              width={14}
              height={76}
              className="site-footer__breadcrumb-sprite-img figma-img"
            />
          </span>
          <a href="#" className="site-footer__breadcrumb-home" aria-label="Apple" />
          <span className="site-footer__breadcrumb-current" aria-current="page">
            <span className="site-footer__breadcrumb-separator" aria-hidden="true">
              <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 4.5L5.5 9L2.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            iPhone
          </span>
        </nav>

        <nav className="site-footer__directory" aria-label="Apple Directory">
          {footerDirectoryColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="site-footer__directory-col"
              style={column.paddingBottom ? { paddingBottom: `${column.paddingBottom}px` } : undefined}
            >
              {column.sections.map((section) => (
                <div key={section.title} className="site-footer__directory-section">
                  <h3 className="site-footer__column-title">{section.title}</h3>
                  <ul className="site-footer__column-links">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </nav>

        <section className="site-footer__bottom" aria-label="Shop and legal">
          <div className="site-footer__shop">
            <p className="site-footer__shop-text">
              More ways to shop:{' '}
              <a href="#" className="site-footer__shop-link">
                Find an Apple Store
              </a>{' '}
              or{' '}
              <a href="#" className="site-footer__shop-link">
                other retailer
              </a>{' '}
              near you. Or call 1-800-MY-APPLE.
            </p>
          </div>

          <div className="site-footer__legal">
            <p className="site-footer__copyright">Copyright © 2023 Apple Inc. All rights reserved.</p>
            <ul className="site-footer__legal-links">
              {footerLegalLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <span className="site-footer__locale">United States</span>
          </div>
        </section>
      </Reveal>
    </footer>
  );
}
