import { motion, useReducedMotion } from 'framer-motion';
import { hoverLink } from '../../lib/motion';
import './LearnMoreLink.css';

interface LearnMoreLinkProps {
  children?: React.ReactNode;
  label?: string;
  variant?: 'default' | 'light' | 'dark';
  size?: 'md' | 'lg' | 'sm';
  className?: string;
  href?: string;
  hideIcon?: boolean;
}

export function LearnMoreLink({
  children,
  label = 'Learn more',
  variant = 'default',
  size = 'md',
  className = '',
  href = '#',
  hideIcon = false,
}: LearnMoreLinkProps) {
  const reduceMotion = useReducedMotion();
  const text = children ?? label;
  const showIcon = !hideIcon && children == null;

  return (
    <motion.a
      href={href}
      className={`learn-more learn-more--${variant} learn-more--${size} ${className}`.trim()}
      whileHover={reduceMotion ? undefined : hoverLink.whileHover}
      whileTap={reduceMotion ? undefined : hoverLink.whileTap}
    >
      {text}
      {showIcon ? (
        <span className="learn-more__icon" aria-hidden="true">
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L6 6L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </motion.a>
  );
}
