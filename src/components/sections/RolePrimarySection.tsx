import { useApp } from '@/context/AppContext';
import { rolePrimaryContent } from '@/content/rolePrimary';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export function RolePrimarySection() {
  const { role, lang } = useApp();
  const effectiveRole = role ?? 'cto';
  const content = rolePrimaryContent[lang][effectiveRole];

  return (
    <section className="bg-bg-surface py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <SectionLabel className="mb-4 block">{content.tag}</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
              {content.headline}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              {content.description}
            </p>
            <Button
              variant="primary"
              size="md"
              href={content.ctaHref ?? '#final-cta'}
              target={content.ctaTarget}
              rel={content.ctaRel}
            >
              {content.ctaLabel}
            </Button>
          </div>

          {/* Right: benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-xl border border-border-default bg-bg-elevated p-4 hover:border-accent-500/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-text-primary mb-1.5">{b.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
