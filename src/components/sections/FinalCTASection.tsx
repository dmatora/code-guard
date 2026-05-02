import { useApp } from '@/context/AppContext';
import { finalCtaContent, footerContent } from '@/content/navigation';
import { Button } from '@/components/ui/Button';

export function FinalCTASection() {
  const { lang } = useApp();
  const content = finalCtaContent[lang];
  const footer = footerContent[lang];

  return (
    <section id="final-cta" className="bg-bg-elevated py-28 lg:py-36">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-5 leading-tight">
          {content.headline}
        </h2>
        <p className="text-base text-text-secondary mb-10">{content.subheadline}</p>
        <div className="flex justify-center">
          <Button variant="primary" size="lg" href={footer.telegram} target="_blank" rel="noopener noreferrer">
            {content.ctaPrimary} {footer.telegramLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
