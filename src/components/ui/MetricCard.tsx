import { cn } from '@/lib/cn';

interface MetricCardProps {
  value: string;
  unit?: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, unit, label, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1 px-6 py-4 border border-border-default rounded-xl bg-bg-surface',
        className
      )}
    >
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-3xl font-extrabold text-text-primary leading-none">
          {value}
        </span>
        {unit && (
          <span className="font-mono text-sm text-text-secondary">{unit}</span>
        )}
      </div>
      <span className="text-xs text-text-secondary leading-snug">{label}</span>
    </div>
  );
}
