import { motion, useReducedMotion } from 'framer-motion';
import { scrollRevealProps, staggerContainer } from '../../lib/motion';

interface StaggerGroupProps {
  className?: string;
  children: React.ReactNode;
}

export function StaggerGroup({ className, children }: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      {...scrollRevealProps(reduceMotion)}
    >
      {children}
    </motion.div>
  );
}
