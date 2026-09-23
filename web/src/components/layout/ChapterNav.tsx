import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, type MouseEvent } from 'react';
import { images } from '../../assets/images';
import { easeAppleOut, staggerContainer, staggerItemUp } from '../../lib/motion';
import { scrollToHash } from '../../lib/scrollToHash';
import './ChapterNav.css';

const items = [
  { label: 'iPhone 14 Pro', hash: 'iphone-14-pro', icon: images.icons.chapter14Pro, width: 40, itemWidth: 76.19, isNew: true },
  { label: 'iPhone 14', hash: 'iphone-14', icon: images.icons.chapter14, width: 38, itemWidth: 54.19, isNew: true },
  { label: 'iPhone 13', hash: 'iphone-13', icon: images.icons.chapter13, width: 36, itemWidth: 53.98, isNew: false },
  { label: 'iPhone SE', hash: 'iphone-se', icon: images.icons.chapterSe, width: 19, itemWidth: 55.69, isNew: false },
  { label: 'iPhone 12', hash: 'compare', icon: images.icons.chapter12, width: 22, itemWidth: 53.7, isNew: false },
  { label: 'Compare', hash: 'compare', icon: images.icons.chapterCompare, width: 45, itemWidth: 50.49, isNew: false },
  { label: 'AirPods', hash: 'airpods', icon: images.icons.chapterAirpods, width: 39, itemWidth: 42.98, isNew: false },
  { label: 'AirTag', hash: 'airtag', icon: images.icons.chapterAirtag, width: 30, itemWidth: 34.58, isNew: false },
  { label: 'Accessories', hash: 'accessories', icon: images.icons.chapterAccessories, width: 40, itemWidth: 66.92, isNew: false },
  { label: 'Apple Card', hash: 'apple-card', icon: images.icons.chapterAppleCard, width: 36, itemWidth: 61.78, isNew: false },
  { label: 'iOS 16', hash: 'ios-16', icon: images.icons.chapterIos16, width: 32, itemWidth: 35.73, isNew: false },
  { label: 'Shop iPhone', hash: 'shop-iphone', icon: images.icons.chapterShop, width: 58, itemWidth: 69.78, isNew: false },
] as const;

function onChapterNavClick(event: MouseEvent<HTMLAnchorElement>, hash: string) {
  event.preventDefault();
  scrollToHash(hash);
}

export function ChapterNav() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => scrollToHash(hash, false));
  }, []);

  return (
    <motion.nav
      className="chapter-nav"
      aria-label="iPhone"
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeAppleOut, delay: 0.05 }}
    >
      <motion.ul
        className="chapter-nav__list"
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
      >
        {items.map((item) => (
          <motion.li
            key={item.label}
            className="chapter-nav__cell"
            style={{ width: item.itemWidth }}
            variants={reduceMotion ? undefined : staggerItemUp}
          >
            <a
              href={`#${item.hash}`}
              className={`chapter-nav__item ${item.isNew ? 'chapter-nav__item--new' : ''}`}
              onClick={(event) => onChapterNavClick(event, item.hash)}
            >
              <span className="chapter-nav__icon-wrap">
                <img
                  src={item.icon}
                  alt=""
                  width={item.width}
                  height={54}
                  className="figma-img chapter-nav__icon-img"
                  aria-hidden="true"
                />
              </span>
              <span className="chapter-nav__label">{item.label}</span>
              {item.isNew && <span className="chapter-nav__new">New</span>}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
