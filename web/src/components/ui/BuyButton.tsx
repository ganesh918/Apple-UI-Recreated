import { motion, useReducedMotion } from 'framer-motion';
import { hoverButton } from '../../lib/motion';
import './BuyButton.css';

interface BuyButtonProps {
  label?: string;
  variant?: 'primary' | 'small' | 'film';
  className?: string;
  onClick?: () => void;
}

export function BuyButton({
  label = 'Buy',
  variant = 'primary',
  className = '',
  onClick,
}: BuyButtonProps) {
  const reduceMotion = useReducedMotion();
  const mod = variant === 'small' ? 'small' : variant === 'film' ? 'film' : 'primary';

  return (
    <motion.button
      type="button"
      className={`buy-button buy-button--${mod} ${className}`.trim()}
      onClick={onClick}
      whileHover={reduceMotion ? undefined : hoverButton.whileHover}
      whileTap={reduceMotion ? undefined : hoverButton.whileTap}
    >
      {label}
    </motion.button>
  );
}
