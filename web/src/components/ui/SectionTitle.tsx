import { motion, useReducedMotion } from 'framer-motion';
import { revealBlurUp, scrollRevealProps } from '../../lib/motion';
import './SectionTitle.css';

interface SectionTitleProps {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  id?: string;
}

export function SectionTitle({
  children,
  size = 'lg',
  className = '',
  id,
}: SectionTitleProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <h2 id={id} className={`section-title section-title--${size} ${className}`.trim()}>
        {children}
      </h2>
    );
  }

  return (
    <motion.h2
      id={id}
      className={`section-title section-title--${size} ${className}`.trim()}
      variants={revealBlurUp}
      {...scrollRevealProps(reduceMotion)}
    >
      {children}
    </motion.h2>
  );
}
