import { useApp } from '@/context/AppContext';
import { whoNeedsContent, whoDoesNotFitContent } from '@/content/whoNeeds';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CheckItem } from '@/components/ui/CheckItem';

export function WhoNeedsSection() {
  const { lang } = useApp();
  const content = whoNeedsContent[lang];

  return (
    <section className="bg-bg-base py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
            <h2 className="text-2xl font-bold text-text-primary">{content.headline}</h2>
          </div>
          <ul className="lg:col-span-2 flex flex-col gap-3">
            {content.items.map((item, i) => (
              <CheckItem key={i} text={item} variant="neutral" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WhoDoesNotFitSection() {
  const { lang } = useApp();
  const content = whoDoesNotFitContent[lang];

  return (
    <section className="bg-bg-surface py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
            <h2 className="text-2xl font-bold text-text-primary mb-3">{content.headline}</h2>
            <p className="text-sm text-text-secondary">{content.description}</p>
          </div>
          <div className="lg:col-span-2">
            <ul className="flex flex-col gap-3 mb-6">
              {content.items.map((item, i) => (
                <CheckItem key={i} text={item} variant="negative" />
              ))}
            </ul>
            <div className="rounded-xl border border-green/20 bg-green/5 px-5 py-4">
              <p className="text-sm text-green leading-relaxed">{content.trustNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
