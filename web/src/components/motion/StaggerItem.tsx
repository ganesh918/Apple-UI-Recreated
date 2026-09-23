import { motion, useReducedMotion } from 'framer-motion';
import { staggerItemBlur } from '../../lib/motion';

interface StaggerItemProps {
  className?: string;
  children: React.ReactNode;
}

export function StaggerItem({ className, children }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemBlur}>
      {children}
    </motion.div>
  );
}
