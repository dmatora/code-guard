import { useApp } from '@/context/AppContext';
import { pricingContent } from '@/content/pricing';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function PricingSection() {
  const { lang } = useApp();
  const content = pricingContent[lang];

  return (
    <section id="pricing" className="bg-bg-surface py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            {content.headline}
          </h2>
        </div>
        <p className="text-center text-xs text-text-tertiary mb-10">{content.note}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.tiers.map((tier, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl border p-6 flex flex-col gap-5',
                tier.highlighted
                  ? 'border-accent-500 bg-bg-elevated relative'
                  : 'border-border-default bg-bg-elevated'
              )}
            >
              <div className="flex flex-col gap-2">
                <Badge variant={tier.highlighted ? 'accent' : 'neutral'}>{tier.tag}</Badge>
                <h3 className="text-lg font-bold text-text-primary">{tier.headline}</h3>
                <span className="text-xs text-text-tertiary font-mono">{tier.duration}</span>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {tier.deliverables.map((d, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="text-accent-500 shrink-0 mt-0.5 text-sm leading-none">✓</span>
                    <span className="text-xs text-text-secondary leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border-muted pt-4 flex flex-col gap-3">
                <p className="text-xs text-text-tertiary italic">{tier.forWhom}</p>
                <Button
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  size="sm"
                  href="#final-cta"
                  className="w-full justify-center"
                >
                  {tier.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
