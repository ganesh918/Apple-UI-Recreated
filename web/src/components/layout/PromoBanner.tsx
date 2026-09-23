import { motion, useReducedMotion } from 'framer-motion';
import { easeAppleOut } from '../../lib/motion';
import './PromoBanner.css';

export function PromoBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="promo-banner"
      id="shop-iphone"
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeAppleOut, delay: 0.15 }}
    >
      <p className="promo-banner__text">
        Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.{' '}
        <span className="promo-banner__link-group">
          <span className="promo-banner__footnote">1</span>{' '}
          <a href="#" className="promo-banner__link">
            Shop iPhone
          </a>
        </span>
      </p>
    </motion.div>
  );
}
