import { useApp } from '@/context/AppContext';
import { footerContent } from '@/content/navigation';

export function Footer() {
  const { lang } = useApp();
  const content = footerContent[lang];

  return (
    <footer className="border-t border-border-default bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-4 h-4 text-accent-500" />
            <span className="text-sm text-text-secondary">{content.copyright}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            >
              {content.privacy}
            </a>
            <a
              href={content.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent-400 hover:text-accent-500 transition-colors font-mono"
            >
              {content.telegramLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
