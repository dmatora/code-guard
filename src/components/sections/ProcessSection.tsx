import { useApp } from '@/context/AppContext';
import { processContent } from '@/content/process';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';

export function ProcessSection() {
  const { lang } = useApp();
  const content = processContent[lang];

  return (
    <section id="process" className="bg-bg-surface py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{content.headline}</h2>
        </div>

        <div className="flex flex-col gap-0">
          {content.steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 relative">
              {/* Left: number + connector */}
              <div className="flex flex-col items-center w-10 shrink-0">
                <div className="w-8 h-8 rounded-full border border-accent-500/40 bg-accent-surface flex items-center justify-center">
                  <span className="font-mono text-[10px] text-accent-400">{step.number}</span>
                </div>
                {i < content.steps.length - 1 && (
                  <div className="flex-1 w-px bg-border-default mt-1 mb-1" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-10 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                  {step.duration && (
                    <Badge variant="neutral">{step.duration}</Badge>
                  )}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
