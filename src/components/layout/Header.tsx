'use client';

import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { navigationContent } from '@/content/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Header() {
  const { role, lang, setLang, resetRole } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = navigationContent[lang];

  const otherLang = lang === 'ru' ? 'en' : 'ru';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border-default bg-bg-base/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <ShieldIcon className="w-5 h-5 text-accent-500" />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold text-text-primary tracking-tight">
                CodeGuard
              </span>
              <span className="text-[10px] text-text-tertiary tracking-wider hidden sm:block">
                {nav.logoTagline}
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Role indicator + reset */}
            {role && (
              <button
                type="button"
                onClick={resetRole}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border-default hover:border-accent-500 transition-colors"
              >
                <span className="text-xs text-text-secondary">{nav.roleLabel[role]}</span>
                <span className="text-[10px] text-text-tertiary">↩</span>
              </button>
            )}

            {/* Lang toggle */}
            <button
              type="button"
              onClick={() => setLang(otherLang)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border-default hover:border-accent-500 text-xs text-text-secondary hover:text-accent-400 transition-colors font-mono"
              aria-label={`Switch to ${otherLang.toUpperCase()}`}
            >
              <span className={cn(lang === 'ru' ? 'text-text-primary' : 'text-text-tertiary')}>RU</span>
              <span className="text-text-tertiary">/</span>
              <span className={cn(lang === 'en' ? 'text-text-primary' : 'text-text-tertiary')}>EN</span>
            </button>

            {/* CTA */}
            <Button variant="primary" size="sm" href="#final-cta" className="hidden sm:inline-flex">
              {nav.ctaLabel}
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden p-1.5 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-default bg-bg-surface">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-text-secondary hover:text-text-primary py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border-muted mt-1">
              <Button variant="primary" size="sm" href="#final-cta" className="w-full justify-center">
                {nav.ctaLabel}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
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
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
