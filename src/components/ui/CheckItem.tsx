import { cn } from '@/lib/cn';

interface CheckItemProps {
  text: string;
  variant?: 'positive' | 'negative' | 'neutral';
  className?: string;
}

const icons = {
  positive: (
    <svg className="w-4 h-4 text-green shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
      <path
        d="M3 8l3.5 3.5L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  negative: (
    <svg className="w-4 h-4 text-red shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  neutral: (
    <span className="text-accent-500 shrink-0 mt-0.5 text-sm font-mono leading-none">→</span>
  ),
};

export function CheckItem({ text, variant = 'positive', className }: CheckItemProps) {
  return (
    <li className={cn('flex items-start gap-2.5', className)}>
      {icons[variant]}
      <span className="text-sm text-text-secondary leading-relaxed">{text}</span>
    </li>
  );
}
