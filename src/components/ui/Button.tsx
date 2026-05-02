import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  className,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg';

  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-400 text-white',
    secondary:
      'border border-border-default hover:border-accent-500 text-text-primary bg-transparent hover:text-accent-400',
    ghost: 'text-accent-400 hover:text-accent-500 underline-offset-4 hover:underline bg-transparent',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
