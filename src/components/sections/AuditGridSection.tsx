import { useApp } from '@/context/AppContext';
import { auditContent } from '@/content/audit';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function AuditGridSection() {
  const { lang } = useApp();
  const content = auditContent[lang];

  return (
    <section id="audit" className="bg-bg-base py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            {content.headline}
          </h2>
          <p className="text-text-secondary">{content.subheadline}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {content.directions.map((dir) => (
            <div
              key={dir.number}
              className="rounded-xl border border-border-default bg-bg-surface p-5 hover:border-accent-500/40 transition-colors duration-150"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-accent-500 opacity-60 mt-0.5 shrink-0">
                  {dir.number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1.5">{dir.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{dir.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
