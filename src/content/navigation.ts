interface NavContent {
  logoTagline: string;
  items: Array<{ label: string; href: string }>;
  ctaLabel: string;
  langToggle: { ru: string; en: string };
  roleLabel: { dev: string; cto: string };
  changeRole: string;
}

export const navigationContent: Record<'ru' | 'en', NavContent> = {
  ru: {
    logoTagline: 'AI Development Guardrails',
    items: [
      { label: 'Аудит', href: '#audit' },
      { label: 'Процесс', href: '#process' },
      { label: 'Кейсы', href: '#cases' },
      { label: 'Форматы', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaLabel: 'Обсудить проект',
    langToggle: { ru: 'RU', en: 'EN' },
    roleLabel: { dev: 'Разработчик', cto: 'Руководитель' },
    changeRole: 'Сменить роль',
  },
  en: {
    logoTagline: 'AI Development Guardrails',
    items: [
      { label: 'Audit', href: '#audit' },
      { label: 'Process', href: '#process' },
      { label: 'Cases', href: '#cases' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaLabel: 'Discuss project',
    langToggle: { ru: 'RU', en: 'EN' },
    roleLabel: { dev: 'Developer', cto: 'Manager' },
    changeRole: 'Change role',
  },
};

export const finalCtaContent: Record<'ru' | 'en', { headline: string; subheadline: string; ctaPrimary: string; ctaSecondary: string }> = {
  ru: {
    headline: 'Готовы разобраться, что происходит в вашем проекте?',
    subheadline: 'Первая консультация — бесплатно. 30 минут. Без обязательств.',
    ctaPrimary: 'Обсудить проект',
    ctaSecondary: 'Написать нам',
  },
  en: {
    headline: 'Ready to find out what\'s happening in your project?',
    subheadline: 'First consultation — free. 30 minutes. No obligations.',
    ctaPrimary: 'Discuss project',
    ctaSecondary: 'Write to us',
  },
};

export const footerContent: Record<'ru' | 'en', { copyright: string; privacy: string; contact: string }> = {
  ru: {
    copyright: '© 2026 CodeGuard. AI Development Guardrails.',
    privacy: 'Политика конфиденциальности',
    contact: 'hello@codeguard.dev',
  },
  en: {
    copyright: '© 2026 CodeGuard. AI Development Guardrails.',
    privacy: 'Privacy Policy',
    contact: 'hello@codeguard.dev',
  },
};
