import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { images } from '../assets/images';
import { BuyButton } from '../components/ui/BuyButton';
import { revealBlurUp, scrollRevealProps, staggerContainer, staggerItemUp } from '../lib/motion';
import './GuidedTour.css';

export function GuidedTour() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isCompact = useMediaQuery('(max-width: 734px)');
  const disableParallax = reduceMotion || isCompact;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-28, 28]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.02, 1.06]);

  return (
    <section className="guided-tour" aria-label="Guided tour" ref={sectionRef}>
      <motion.div
        className="guided-tour__card"
        variants={revealBlurUp}
        {...(reduceMotion ? { initial: false } : scrollRevealProps(reduceMotion))}
      >
        <motion.img
          src={images.guidedTourBg}
          alt=""
          className="guided-tour__bg figma-img"
          width={1410}
          height={814}
          aria-hidden="true"
          style={disableParallax ? undefined : { y: bgY, scale: bgScale }}
        />
        <motion.div
          className="guided-tour__content"
          variants={staggerContainer}
          {...(reduceMotion ? { initial: false } : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-20%' } })}
        >
          <motion.h2 className="guided-tour__heading" variants={staggerItemUp}>
            <span className="guided-tour__eyebrow">A Guided Tour of</span>
            <span className="guided-tour__title">
              iPhone 14 &amp;
              <br />
              iPhone 14 Pro
            </span>
          </motion.h2>
          <motion.div variants={staggerItemUp}>
            <BuyButton label="Watch the film" variant="film" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
