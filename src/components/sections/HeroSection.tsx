import { useApp } from '@/context/AppContext';
import { heroContent, heroMetrics } from '@/content/hero';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/ui/MetricCard';
import { Badge } from '@/components/ui/Badge';

export function HeroSection() {
  const { role, lang } = useApp();
  const effectiveRole = role ?? 'cto';
  const content = heroContent[lang][effectiveRole];
  const metrics = heroMetrics[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-14">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="accent">{content.badge}</Badge>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
          {content.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
          {content.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <Button variant="primary" size="lg" href="#final-cta">
            {content.ctaPrimary}
          </Button>
          <Button variant="secondary" size="lg" href="#audit">
            {content.ctaSecondary}
          </Button>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-border-default mx-auto mb-8 opacity-50" />

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {metrics.map((m, i) => (
            <MetricCard key={i} value={m.value} unit={m.unit} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
