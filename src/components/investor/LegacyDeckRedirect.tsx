'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export function LegacyDeckRedirect() {
  useEffect(() => {
    window.location.replace('/investor-deck/');
  }, []);

  return (
    <main className="min-h-screen bg-bg-base px-6 py-20 text-text-primary">
      <div className="mx-auto max-w-2xl rounded-lg border border-border-default bg-bg-surface p-8">
        <p className="text-xs font-semibold uppercase text-text-tertiary">CodeGuard investor deck</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight">Investor deck moved to a web page.</h1>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          The PowerPoint download is no longer published. Use the current web version instead.
        </p>
        <div className="mt-8">
          <Button href="/investor-deck/" size="lg">
            Open investor deck
          </Button>
        </div>
      </div>
    </main>
  );
}
