import { useApp } from '@/context/AppContext';
import { techDebtContent } from '@/content/debt';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function TechDebtSection() {
  const { lang } = useApp();
  const content = techDebtContent[lang];

  return (
    <section className="bg-bg-base py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8">
          {content.headline}
        </h2>

        <div className="space-y-4 mb-10">
          {content.body.map((paragraph, i) => (
            <p key={i} className="text-base text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Transition callout */}
        <div className="border-l-2 border-accent-500 pl-5 py-1">
          <p className="text-base font-medium text-text-primary">{content.transition}</p>
        </div>
      </div>
    </section>
  );
}
