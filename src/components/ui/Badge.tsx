import { cn } from '@/lib/cn';

interface BadgeProps {
  children: string;
  variant?: 'neutral' | 'warning' | 'positive' | 'accent';
  className?: string;
}

const variants = {
  neutral: 'bg-bg-elevated text-text-secondary border border-border-default',
  warning: 'bg-amber/10 text-amber border border-amber/20',
  positive: 'bg-green/10 text-green border border-green/20',
  accent: 'bg-accent-surface text-accent-400 border border-accent-500/20',
};

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
