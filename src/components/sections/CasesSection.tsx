import { useApp } from '@/context/AppContext';
import { casesContent } from '@/content/cases';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';

export function CasesSection() {
  const { lang } = useApp();
  const content = casesContent[lang];

  return (
    <section id="cases" className="bg-bg-base py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <CaseBlock cs={content.case1} accentBg="bg-bg-surface" />
          <CaseBlock cs={content.case2} accentBg="bg-bg-elevated" reversed />
        </div>
      </div>
    </section>
  );
}

interface CaseBlockProps {
  cs: (typeof casesContent)['ru']['case1'];
  accentBg: string;
  reversed?: boolean;
}

function CaseBlock({ cs, accentBg, reversed }: CaseBlockProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      {/* Text side — 3 cols */}
      <div className={`lg:col-span-3 flex flex-col gap-5 ${reversed ? 'lg:order-2' : ''}`}>
        <Badge variant="neutral">{cs.tag}</Badge>
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{cs.headline}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{cs.summary}</p>
        <ul className="flex flex-col gap-2">
          {cs.details.map((d, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-accent-500 shrink-0 mt-0.5 text-sm">→</span>
              <span className="text-sm text-text-secondary">{d}</span>
            </li>
          ))}
        </ul>
        {/* Outcome */}
        <div className="border-l-2 border-accent-500 pl-4 py-0.5 mt-2">
          <p className="text-sm text-text-secondary italic leading-relaxed">{cs.outcome}</p>
        </div>
      </div>

      {/* Metrics side — 2 cols */}
      <div className={`lg:col-span-2 ${reversed ? 'lg:order-1' : ''}`}>
        <div className={`rounded-2xl border border-border-default ${accentBg} p-6 h-full flex flex-col justify-center gap-5`}>
          {cs.metrics.map((m, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-mono text-3xl font-extrabold text-text-primary leading-none">
                {m.value}
              </span>
              <span className="text-xs text-text-secondary leading-snug">{m.label}</span>
              {i < cs.metrics.length - 1 && (
                <div className="border-t border-border-muted mt-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
