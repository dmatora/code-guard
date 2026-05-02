'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border-default rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg-surface transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-text-primary">{question}</span>
        <span
          className={cn(
            'text-accent-400 font-mono text-lg leading-none shrink-0 transition-transform duration-200',
            open && 'rotate-45'
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <p className="px-5 pb-5 pt-1 text-sm text-text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
