import './NewBadge.css';

interface NewBadgeProps {
  variant?: 'hero' | 'pill';
}

export function NewBadge({ variant = 'hero' }: NewBadgeProps) {
  return <span className={`new-badge new-badge--${variant}`}>New</span>;
}
