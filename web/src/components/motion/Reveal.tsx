import { motion, useReducedMotion } from 'framer-motion';
import {
  revealBlurUp,
  revealFromLeft,
  revealFromRight,
  revealScaleIn,
  scrollRevealProps,
  staggerStep,
} from '../../lib/motion';

type RevealVariant = 'blurUp' | 'scale' | 'left' | 'right';

const variantMap = {
  blurUp: revealBlurUp,
  scale: revealScaleIn,
  left: revealFromLeft,
  right: revealFromRight,
} as const;

type RevealElement = 'div' | 'article' | 'section' | 'figure' | 'h2' | 'p';

const motionTags = {
  div: motion.div,
  article: motion.article,
  section: motion.section,
  figure: motion.figure,
  h2: motion.h2,
  p: motion.p,
} as const;

export interface RevealProps {
  as?: RevealElement;
  variant?: RevealVariant;
  delay?: number;
  index?: number;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export function Reveal({
  as = 'div',
  variant = 'blurUp',
  delay = 0,
  index,
  className,
  id,
  children,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motionTags[as];
  const staggerDelay = index != null ? staggerStep(index, 0.07).transition.delay : delay;

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <Component
      className={className}
      id={id}
      variants={variantMap[variant]}
      {...scrollRevealProps(reduceMotion)}
      transition={{ delay: staggerDelay }}
    >
      {children}
    </Component>
  );
}
