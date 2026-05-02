import { useApp } from '@/context/AppContext';
import { threeWaysContent } from '@/content/threeWays';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';

export function ThreeWaysSection() {
  const { lang } = useApp();
  const content = threeWaysContent[lang];

  return (
    <section className="bg-bg-surface py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{content.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.columns.map((col, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl border p-6 flex flex-col gap-4',
                col.highlighted
                  ? 'border-accent-500 bg-accent-surface'
                  : 'border-border-default bg-bg-elevated'
              )}
            >
              <Badge variant={col.badgeVariant}>{col.badge}</Badge>
              <h3
                className={cn(
                  'text-lg font-semibold',
                  col.highlighted ? 'text-text-primary' : 'text-text-secondary'
                )}
              >
                {col.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{col.description}</p>
              <ul className="flex flex-col gap-2 mt-auto pt-2 border-t border-border-muted">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span
                      className={cn(
                        'text-sm mt-0.5 shrink-0',
                        col.highlighted ? 'text-green' : 'text-red'
                      )}
                    >
                      {col.highlighted ? '✓' : '✗'}
                    </span>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
