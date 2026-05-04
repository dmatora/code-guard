import type { Metadata } from 'next';
import { InvestorDeckPage } from '@/components/investor/InvestorDeckPage';

export const metadata: Metadata = {
  title: 'CodeGuard Investor Deck',
  description:
    'CodeGuard как независимая аудиторская фирма для AI-built software: conflict of interest, Project Immunization, defensibility и tech-enabled unit economics.',
};

export default function InvestorDeck() {
  return <InvestorDeckPage />;
}
