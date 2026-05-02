import { cn } from '@/lib/cn';

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'text-xs font-medium uppercase tracking-widest text-accent-400',
        className
      )}
    >
      {children}
    </span>
  );
}
