import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';
import { images } from '../assets/images';
import { easeAppleOut } from '../lib/motion';
import { LearnMoreLink } from '../components/ui/LearnMoreLink';
import { SectionTitle } from '../components/ui/SectionTitle';
import './FeaturedAccessories.css';

export function FeaturedAccessories() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="featured-accessories" id="accessories" aria-labelledby="accessories-heading">
      <SectionTitle id="accessories-heading" className="featured-accessories__heading">
        <span className="featured-accessories__heading-text">Featured accessories</span>
      </SectionTitle>

      <Reveal as="article" variant="blurUp" index={0} className="accessory-row accessory-row--magsafe interactive-surface">
        <div className="accessory-row__copy accessory-row__copy--magsafe">
          <h3 className="accessory-row__title accessory-row__title--magsafe">MagSafe</h3>
          <p className="accessory-row__body accessory-row__body--magsafe">
            Snap on a magnetic case,
            <br />
            wallet, or both. And get faster
            <br />
            wireless charging.
          </p>
          <LearnMoreLink
            label="Shop MagSafe accessories"
            size="lg"
            className="accessory-row__link--magsafe"
            hideIcon
          />
        </div>
        <motion.img
          src={images.magsafe}
          alt="MagSafe accessories"
          className="accessory-row__image figma-img"
          width={633}
          height={463}
          initial={reduceMotion ? false : { opacity: 0, x: 40, filter: 'blur(6px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.75, ease: easeAppleOut, delay: 0.1 }}
        />
      </Reveal>

      <Reveal
        as="article"
        variant="blurUp"
        index={1}
        id="airtag"
        className="accessory-row accessory-row--airtag interactive-surface"
      >
        <motion.img
          src={images.airtag}
          alt="AirTag"
          className="accessory-row__image figma-img"
          width={806}
          height={531}
          initial={reduceMotion ? false : { opacity: 0, x: -40, filter: 'blur(6px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.75, ease: easeAppleOut, delay: 0.08 }}
        />
        <div className="accessory-row__copy accessory-row__copy--airtag">
          <h3 className="accessory-row__title--airtag">AirTag</h3>
          <div className="accessory-row__body-wrap--airtag">
            <p className="accessory-row__body--airtag">
              Attach one to your keys. Put another in
              <br />
              your backpack. If they&rsquo;re misplaced, just
              <br />
              use the Find My app.
            </p>
          </div>
          <ul className="accessory-row__links--airtag">
            <li>
              <LearnMoreLink className="accessory-row__link--airtag-buy">Buy</LearnMoreLink>
            </li>
            <li>
              <LearnMoreLink className="accessory-row__link--airtag-learn">Learn more</LearnMoreLink>
            </li>
          </ul>
        </div>
      </Reveal>

      <Reveal
        as="article"
        variant="blurUp"
        index={2}
        id="airpods"
        className="accessory-row accessory-row--airpods interactive-surface"
      >
        <div className="accessory-row__copy accessory-row__copy--airpods">
          <h3 className="accessory-row__title--airpods">
            Magic runs
            <br />
            in the family.
          </h3>
        </div>
        <motion.img
          src={images.airpods}
          alt="AirPods family"
          className="accessory-row__airpods-img figma-img"
          width={1063}
          height={498}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: easeAppleOut, delay: 0.12 }}
        />
      </Reveal>

      <Reveal variant="blurUp" delay={0.1} className="featured-accessories__shop-all">
        <LearnMoreLink label="Shop all iPhone accessories" hideIcon />
      </Reveal>
    </section>
  );
}
