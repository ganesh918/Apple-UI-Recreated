import { motion, useReducedMotion } from 'framer-motion';
import {
  easeAppleOut,
  heroEntrance,
  hoverImageZoom,
  revealFromLeft,
  revealFromRight,
  scrollRevealProps,
  transitionHero,
} from '../lib/motion';
import { images } from '../assets/images';
import { BuyButton } from '../components/ui/BuyButton';
import { LearnMoreLink } from '../components/ui/LearnMoreLink';
import { NewBadge } from '../components/ui/NewBadge';
import './HeroProducts.css';

function ProductCTA({ light }: { light?: boolean }) {
  return (
    <ul className="hero-cta">
      <li>
        <BuyButton />
      </li>
      <li>
        <LearnMoreLink variant={light ? 'light' : 'default'} hideIcon />
      </li>
    </ul>
  );
}

function heroImageEntrance(reduceMotion: boolean | null, delay: number) {
  if (reduceMotion) return { initial: false as const };
  return {
    initial: { opacity: 0, y: 56, scale: 0.97, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    transition: { ...transitionHero, delay },
  };
}

function heroScrollImage(reduceMotion: boolean | null, delay: number) {
  if (reduceMotion) return { initial: false as const };
  return {
    initial: { opacity: 0, y: 48, scale: 0.98, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-10%' },
    transition: { duration: 0.85, ease: easeAppleOut, delay },
  };
}

export function HeroProducts() {
  const reduceMotion = useReducedMotion();
  const heroImageHover = reduceMotion ? undefined : hoverImageZoom.whileHover;

  return (
    <section className="hero-products" aria-label="iPhone lineup">
      <article className="hero-product hero-product--14" id="iphone-14">
        <div className="hero-product__stage">
          <motion.div className="hero-product__copy" {...heroEntrance(reduceMotion, 0.05)}>
            <NewBadge variant="hero" />
            <img
              src={images.iphone14Logo}
              alt="iPhone 14"
              className="hero-product__logo figma-img"
              width={100}
              height={21}
            />
            <h1 className="hero-product__headline">
              Two great sizes.
              <br />
              Now with a splash of yellow.
            </h1>
            <p className="hero-product__price">
              From $799 or $33.29/mo. for 24 mo. before{' '}
              <span className="hero-product__footnote-group">
                trade‑in<span className="hero-product__footnote-mark">2</span>
              </span>
            </p>
            <ProductCTA />
          </motion.div>
          <motion.img
            src={images.iphone14Hero}
            alt="iPhone 14 in yellow"
            className="hero-product__image figma-img"
            width={981}
            height={496}
            {...heroImageEntrance(reduceMotion, 0.18)}
            whileHover={heroImageHover}
          />
        </div>
      </article>

      <article className="hero-product hero-product--14-pro" id="iphone-14-pro">
        <div className="hero-product__stage">
          <motion.div
            className="hero-product__copy hero-product__copy--light"
            variants={revealFromLeft}
            {...scrollRevealProps(reduceMotion)}
          >
            <img
              src={images.iphone14ProLogo}
              alt="iPhone 14 Pro"
              className="hero-product__logo figma-img"
              width={140}
              height={20}
            />
            <h2 className="hero-product__headline hero-product__headline--pro">
              Pro. Beyond.
            </h2>
            <p className="hero-product__price">
              From $999 or $41.62/mo. for 24 mo. before{' '}
              <span className="hero-product__footnote-group">
                trade‑in<span className="hero-product__footnote-mark">2</span>
              </span>
            </p>
            <ProductCTA light />
          </motion.div>
          <motion.img
            src={images.iphone14ProHero}
            alt="iPhone 14 Pro"
            className="hero-product__image figma-img"
            width={961}
            height={393}
            {...heroScrollImage(reduceMotion, 0.12)}
            whileHover={heroImageHover}
          />
        </div>
      </article>

      <article className="hero-product hero-product--se" id="iphone-se">
        <div className="hero-product__split">
          <motion.div
            className="hero-product__copy hero-product__copy--se"
            variants={revealFromLeft}
            {...scrollRevealProps(reduceMotion)}
          >
            <img
              src={images.iphoneSeLogo}
              alt="iPhone SE"
              className="hero-product__logo figma-img"
              width={96}
              height={22}
            />
            <h2 className="hero-product__headline hero-product__headline--gradient">
              Love the power.
              <br />
              Love the price.
            </h2>
            <p className="hero-product__price">
              From $429 or $17.87/mo. for 24 mo. before{' '}
              <span className="hero-product__footnote-group">
                trade‑in<span className="hero-product__footnote-mark">2</span>
              </span>
            </p>
            <ProductCTA />
          </motion.div>
          <motion.div
            className="hero-product__se-image-wrap"
            variants={revealFromRight}
            {...scrollRevealProps(reduceMotion)}
          >
            <motion.img
              src={images.iphoneSeHero}
              alt="iPhone SE"
              className="hero-product__se-image figma-img"
              width={494}
              height={830}
              whileHover={heroImageHover}
            />
          </motion.div>
        </div>
      </article>
    </section>
  );
}
