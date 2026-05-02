export type Lang = 'ru' | 'en';
export type Role = 'dev' | 'cto';

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface HeroMetric {
  value: string;
  unit?: string;
  label: string;
}

export interface RoleSelectorContent {
  heading: string;
  dev: { icon: string; title: string; description: string };
  cto: { icon: string; title: string; description: string };
}

export interface ThreeWayColumn {
  badge: string;
  badgeVariant: 'neutral' | 'warning' | 'positive';
  title: string;
  description: string;
  items: string[];
  highlighted: boolean;
}

export interface AuditDirection {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
}

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  tag: string;
  headline: string;
  summary: string;
  metrics: CaseMetric[];
  details: string[];
  outcome: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface RolePrimaryContent {
  tag: string;
  headline: string;
  description: string;
  benefits: BenefitItem[];
  ctaLabel: string;
}

export interface ComparisonRow {
  criterion: string;
  codeReview: string;
  codeGuard: string;
  codeGuardPositive: boolean;
}

export interface PricingTier {
  tag: string;
  headline: string;
  duration: string;
  deliverables: string[];
  forWhom: string;
  highlighted: boolean;
  ctaLabel: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
