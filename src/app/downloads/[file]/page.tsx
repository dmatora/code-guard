import type { Metadata } from 'next';
import { LegacyDeckRedirect } from '@/components/investor/LegacyDeckRedirect';

const legacyInvestorDeckFiles = [
  'codeguard-investor-deck.pptx',
  'codeguard-investor-deck-ru.pptx',
  'codeguard-investor-deck-en.pptx',
];

export const dynamicParams = false;

export const metadata: Metadata = {
  title: 'CodeGuard Investor Deck Moved',
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return legacyInvestorDeckFiles.map((file) => ({ file }));
}

export default function LegacyDownloadPage() {
  return <LegacyDeckRedirect />;
}
