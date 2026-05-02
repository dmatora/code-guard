import { useApp } from '@/context/AppContext';
import { comparisonContent } from '@/content/comparison';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { cn } from '@/lib/cn';

export function ComparisonSection() {
  const { lang } = useApp();
  const content = comparisonContent[lang];

  return (
    <section className="bg-bg-base py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{content.headline}</h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border-default">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-border-default">
                <th className="text-left px-5 py-3 text-xs font-medium text-text-tertiary w-1/3">
                  {/* empty */}
                </th>
                <th className="text-left px-5 py-3 text-xs font-medium text-text-secondary">
                  {content.colLeft}
                </th>
                <th className="text-left px-5 py-3 text-xs font-medium text-accent-400">
                  {content.colRight}
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, i) => (
                <tr
                  key={i}
                  className={cn(
                    'border-b border-border-muted last:border-0',
                    i % 2 === 0 ? 'bg-bg-base' : 'bg-bg-surface'
                  )}
                >
                  <td className="px-5 py-3 text-xs text-text-secondary font-medium">
                    {row.criterion}
                  </td>
                  <td className="px-5 py-3 text-xs text-text-tertiary">{row.codeReview}</td>
                  <td className="px-5 py-3 text-xs text-accent-400 font-medium">{row.codeGuard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
