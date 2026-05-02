import type { ComparisonRow } from '@/types/content';

interface ComparisonSection {
  label: string;
  headline: string;
  colLeft: string;
  colRight: string;
  rows: ComparisonRow[];
}

export const comparisonContent: Record<'ru' | 'en', ComparisonSection> = {
  ru: {
    label: 'Сравнение',
    headline: 'Почему обычного code review недостаточно',
    colLeft: 'Code Review',
    colRight: 'CodeGuard Audit',
    rows: [
      {
        criterion: 'Охват',
        codeReview: 'Отдельные PR',
        codeGuard: 'Вся кодовая база целиком',
        codeGuardPositive: true,
      },
      {
        criterion: 'Контекст',
        codeReview: 'Один разработчик',
        codeGuard: 'Системный взгляд снаружи',
        codeGuardPositive: true,
      },
      {
        criterion: 'ИИ-специфика',
        codeReview: 'Не учитывается',
        codeGuard: 'Отдельное направление аудита',
        codeGuardPositive: true,
      },
      {
        criterion: 'Когнитивный долг',
        codeReview: 'Не измеряется',
        codeGuard: 'Явная оценка и метрики',
        codeGuardPositive: true,
      },
      {
        criterion: 'Архитектурный анализ',
        codeReview: 'Редко, поверхностно',
        codeGuard: 'Всегда, в деталях',
        codeGuardPositive: true,
      },
      {
        criterion: 'Результат',
        codeReview: 'Комментарий в PR',
        codeGuard: 'Структурированный отчёт',
        codeGuardPositive: true,
      },
      {
        criterion: 'Приоритизация',
        codeReview: 'На усмотрение ревьюера',
        codeGuard: 'Критично / Важно / Рекомендация',
        codeGuardPositive: true,
      },
      {
        criterion: 'Guardrails для агентов',
        codeReview: 'Не входит',
        codeGuard: 'Включено',
        codeGuardPositive: true,
      },
      {
        criterion: 'Повторяемость',
        codeReview: 'Зависит от человека',
        codeGuard: 'Структурированный процесс',
        codeGuardPositive: true,
      },
      {
        criterion: 'Снижение будущих ошибок',
        codeReview: 'Нет',
        codeGuard: 'Да — через накопление правил',
        codeGuardPositive: true,
      },
    ],
  },
  en: {
    label: 'Comparison',
    headline: 'Why regular code review is not enough',
    colLeft: 'Code Review',
    colRight: 'CodeGuard Audit',
    rows: [
      {
        criterion: 'Coverage',
        codeReview: 'Individual PRs',
        codeGuard: 'Entire codebase',
        codeGuardPositive: true,
      },
      {
        criterion: 'Context',
        codeReview: 'Single developer',
        codeGuard: 'Systemic outside view',
        codeGuardPositive: true,
      },
      {
        criterion: 'AI-specific analysis',
        codeReview: 'Not considered',
        codeGuard: 'Dedicated audit direction',
        codeGuardPositive: true,
      },
      {
        criterion: 'Cognitive debt',
        codeReview: 'Not measured',
        codeGuard: 'Explicit assessment and metrics',
        codeGuardPositive: true,
      },
      {
        criterion: 'Architectural analysis',
        codeReview: 'Rarely, superficially',
        codeGuard: 'Always, in detail',
        codeGuardPositive: true,
      },
      {
        criterion: 'Output',
        codeReview: 'Comment in PR',
        codeGuard: 'Structured report',
        codeGuardPositive: true,
      },
      {
        criterion: 'Prioritization',
        codeReview: "Reviewer's discretion",
        codeGuard: 'Critical / Important / Recommendation',
        codeGuardPositive: true,
      },
      {
        criterion: 'Guardrails for agents',
        codeReview: 'Not included',
        codeGuard: 'Included',
        codeGuardPositive: true,
      },
      {
        criterion: 'Repeatability',
        codeReview: 'Depends on the person',
        codeGuard: 'Structured process',
        codeGuardPositive: true,
      },
      {
        criterion: 'Reducing future errors',
        codeReview: 'No',
        codeGuard: 'Yes — through accumulated rules',
        codeGuardPositive: true,
      },
    ],
  },
};
