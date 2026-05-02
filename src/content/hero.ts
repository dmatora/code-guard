import type { HeroContent, HeroMetric } from '@/types/content';

export const heroContent: Record<'ru' | 'en', Record<'dev' | 'cto', HeroContent>> = {
  ru: {
    cto: {
      badge: 'AI Development Guardrails',
      headline: 'Скорость ИИ без контроля — это технический долг со скоростью ИИ.',
      subheadline:
        'Помогаем внедрять ИИ-разработку системно: аудит кода, guardrails для агентов, контроль когнитивного долга. Ваша команда ускоряется — архитектура остаётся управляемой.',
      ctaPrimary: 'Обсудить внедрение',
      ctaSecondary: 'Заказать аудит PR',
    },
    dev: {
      badge: 'Для разработчика',
      headline:
        'ИИ уже меняет разработку. Покажите руководству, как внедрить его правильно — до того, как конкуренты сделают это быстрее.',
      subheadline:
        'Разработчик, умеющий управлять ИИ и сохранять качество кода — самая сильная позиция на рынке. Мы поможем вам стать таким и предложить команде безопасный путь.',
      ctaPrimary: 'Показать руководителю',
      ctaSecondary: 'Узнать о пилотном аудите',
    },
  },
  en: {
    cto: {
      badge: 'AI Development Guardrails',
      headline: 'AI speed without control is technical debt at AI speed.',
      subheadline:
        'We help teams implement AI-assisted development systematically: code audits, guardrails for agents, cognitive debt control. Your team accelerates — architecture stays manageable.',
      ctaPrimary: 'Discuss implementation',
      ctaSecondary: 'Request a PR audit',
    },
    dev: {
      badge: 'For Developers',
      headline:
        'AI is already changing development. Show your manager how to do it right — before competitors do it faster.',
      subheadline:
        'A developer who can work with AI while maintaining code quality is the strongest position in today\'s market. We\'ll help you get there and propose a safe path for your team.',
      ctaPrimary: 'Show to my manager',
      ctaSecondary: 'Learn about pilot audit',
    },
  },
};

export const heroMetrics: Record<'ru' | 'en', HeroMetric[]> = {
  ru: [
    { value: '2.5M', unit: 'токенов', label: 'Крупнейший аудит проекта' },
    { value: '1', unit: 'день', label: 'Первичный разбор кодовой базы' },
    { value: '3×', label: 'Ускорение разработки с guardrails' },
  ],
  en: [
    { value: '2.5M', unit: 'tokens', label: 'Largest codebase audit' },
    { value: '1', unit: 'day', label: 'Initial codebase analysis' },
    { value: '3×', label: 'Development speed with guardrails' },
  ],
};
