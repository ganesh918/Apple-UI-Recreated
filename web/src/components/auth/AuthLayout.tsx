import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import { revealBlurUp, scrollRevealProps } from '../../lib/motion';
import './AuthLayout.css';

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="auth-layout">
      <header className="auth-layout__header">
        <Link to="/login" className="auth-layout__logo" aria-label="Apple">
          <img src={images.icons.appleLogo} alt="" width={17} height={20} className="figma-img" />
        </Link>
      </header>

      <motion.main
        className="auth-layout__main"
        variants={revealBlurUp}
        {...(reduceMotion ? { initial: false } : scrollRevealProps(reduceMotion))}
      >
        <div className="auth-layout__card">
          <h1 className="auth-layout__title">{title}</h1>
          {subtitle ? <p className="auth-layout__subtitle">{subtitle}</p> : null}
          {children}
        </div>
        {footer ? <div className="auth-layout__footer">{footer}</div> : null}
      </motion.main>
    </div>
  );
}
