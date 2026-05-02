import { useApp } from '@/context/AppContext';
import { cognitiveDebtContent } from '@/content/debt';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function CognitiveDebtSection() {
  const { lang } = useApp();
  const content = cognitiveDebtContent[lang];

  return (
    <section className="bg-bg-surface py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
              {content.headline}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">{content.description}</p>
          </div>

          {/* Right: self-check */}
          <div className="rounded-2xl border border-border-default bg-bg-elevated p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-amber mb-5">
              {content.selfCheckHeading}
            </p>
            <ul className="flex flex-col gap-4">
              {content.questions.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-text-tertiary mt-0.5 shrink-0 w-4">
                    {i + 1}.
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-border-muted">
              <p className="text-xs text-amber leading-relaxed">{content.footerNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
