'use client';

import { RoleSelector } from '@/components/RoleSelector';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ThreeWaysSection } from '@/components/sections/ThreeWaysSection';
import { AuditGridSection } from '@/components/sections/AuditGridSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TechDebtSection } from '@/components/sections/TechDebtSection';
import { CognitiveDebtSection } from '@/components/sections/CognitiveDebtSection';
import { CasesSection } from '@/components/sections/CasesSection';
import { RolePrimarySection } from '@/components/sections/RolePrimarySection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { WhoNeedsSection, WhoDoesNotFitSection } from '@/components/sections/WhoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <RoleSelector />
      <Header />
      <main>
        <HeroSection />
        <ThreeWaysSection />
        <AuditGridSection />
        <ProcessSection />
        <TechDebtSection />
        <CognitiveDebtSection />
        <CasesSection />
        <RolePrimarySection />
        <ComparisonSection />
        <PricingSection />
        <WhoNeedsSection />
        <WhoDoesNotFitSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
