/** Shared Framer Motion presets — Apple-style easing and scroll reveals. */

export const easeApple = [0.25, 0.1, 0.25, 1] as const;
export const easeAppleOut = [0.16, 1, 0.3, 1] as const;

export const springSnappy = { type: 'spring' as const, stiffness: 420, damping: 28 };
export const springSoft = { type: 'spring' as const, stiffness: 260, damping: 32 };

export const defaultViewport = { once: true, margin: '-12% 0px -8% 0px' } as const;
export const tightViewport = { once: true, margin: '-40px' } as const;

export const transitionReveal = { duration: 0.72, ease: easeAppleOut };
export const transitionHero = { duration: 0.95, ease: easeAppleOut };
export const transitionQuick = { duration: 0.35, ease: easeApple };

export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: defaultViewport,
  transition: transitionReveal,
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: tightViewport,
  transition: { duration: 0.5, ease: easeApple },
};

export const staggerStep = (index: number, base = 0.08) => ({
  transition: { delay: index * base, duration: 0.58, ease: easeAppleOut },
});

/** Variant sets for staggered lists (use with initial="hidden" whileInView="visible"). */
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.04 },
  },
};

export const staggerItemBlur = {
  hidden: { opacity: 0, y: 32, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: transitionReveal,
  },
};

export const staggerItemUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeAppleOut },
  },
};

export const revealBlurUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: transitionReveal,
  },
};

export const revealScaleIn = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.68, ease: easeAppleOut },
  },
};

export const revealFromLeft = {
  hidden: { opacity: 0, x: -48, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: transitionReveal,
  },
};

export const revealFromRight = {
  hidden: { opacity: 0, x: 48, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: transitionReveal,
  },
};

export const hoverLift = {
  whileHover: {
    y: -8,
    transition: { duration: 0.28, ease: easeAppleOut },
  },
  whileTap: { scale: 0.988, transition: { duration: 0.12 } },
};

export const hoverImageZoom = {
  whileHover: { scale: 1.04, transition: { duration: 0.55, ease: easeAppleOut } },
};

export const hoverButton = {
  whileHover: {
    scale: 1.03,
    y: -1,
    transition: springSnappy,
  },
  whileTap: { scale: 0.97, y: 0, transition: { duration: 0.1 } },
};

export const hoverLink = {
  whileHover: { opacity: 0.78, x: 1, transition: transitionQuick },
  whileTap: { opacity: 0.58, x: 0 },
};

/** Props for scroll-triggered variant animations; no-op when reduced motion is on. */
export function scrollRevealProps(reduceMotion: boolean | null) {
  if (reduceMotion) {
    return { initial: false as const };
  }
  return {
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: defaultViewport,
  };
}

export function heroEntrance(reduceMotion: boolean | null, delay = 0) {
  if (reduceMotion) {
    return { initial: false as const };
  }
  return {
    initial: { opacity: 0, y: 44, filter: 'blur(14px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { ...transitionHero, delay },
  };
}
