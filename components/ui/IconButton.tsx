'use client';

import { LucideIcon } from 'lucide-react';
import styles from './IconButton.module.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  variant?: 'ghost' | 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  iconSize?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  variant = 'ghost',
  size = 'md',
  iconSize,
  className = '',
  ...props
}) => {
  const getSize = () => {
    if (iconSize) return iconSize;
    return size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
  };

  return (
    <button
      aria-label={label}
      title={label}
      className={`${styles.iconButton} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${className}`}
      {...props}
    >
      <Icon size={getSize()} strokeWidth={1.5} />
    </button>
  );
};
