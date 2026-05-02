import { useApp } from '@/context/AppContext';
import { faqContent } from '@/content/faq';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FAQItem } from '@/components/ui/FAQItem';

export function FAQSection() {
  const { lang } = useApp();
  const content = faqContent[lang];

  const half = Math.ceil(content.items.length / 2);
  const left = content.items.slice(0, half);
  const right = content.items.slice(half);

  return (
    <section id="faq" className="bg-bg-base py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel className="mb-4 block">{content.label}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">{content.headline}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {left.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {right.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
