import type { PricingTier } from '@/types/content';

interface PricingSection {
  label: string;
  headline: string;
  note: string;
  tiers: PricingTier[];
}

export const pricingContent: Record<'ru' | 'en', PricingSection> = {
  ru: {
    label: 'Форматы работы',
    headline: 'Три формата — один принцип: конкретный результат',
    note: 'Стоимость обсуждается индивидуально. Зависит от размера проекта и команды.',
    tiers: [
      {
        tag: 'Старт',
        headline: 'Пилотный аудит',
        duration: '5–10 рабочих дней',
        deliverables: [
          'Анализ архитектуры и кодовой базы',
          'Отчёт с приоритизированными находками',
          'Оценка технического и когнитивного долга',
          'Первые guardrails для проекта',
          'Сессия разбора с командой (2 часа)',
        ],
        forWhom: 'Для команды, которая хочет проверить подход на одном PR или фиче',
        highlighted: false,
        ctaLabel: 'Обсудить аудит',
      },
      {
        tag: 'Наиболее популярно',
        headline: 'Сопровождение команды',
        duration: '1–3 месяца',
        deliverables: [
          'Всё из пилотного аудита',
          'Аудит каждого PR или фичи',
          'Регулярное обновление Project Guardrails',
          'Контроль технического долга',
          'Рекомендации разработчикам',
          'Ежемесячные отчёты для руководства',
        ],
        forWhom: 'Для проекта, где ИИ уже используется или планируется внедрение',
        highlighted: true,
        ctaLabel: 'Обсудить формат',
      },
      {
        tag: 'Глубокая работа',
        headline: 'Внедрение под ключ',
        duration: '3–6 месяцев',
        deliverables: [
          'Всё из сопровождения',
          'Диагностика и настройка процесса',
          'Обучение разработчиков Claude Code / Codex',
          'Self-check по PR для контроля понимания',
          'Регулярные отчёты для руководства',
          'Передача знаний и документация',
        ],
        forWhom: 'Для компании, которая хочет системно перевести команду на AI-assisted development',
        highlighted: false,
        ctaLabel: 'Обсудить проект',
      },
    ],
  },
  en: {
    label: 'Work formats',
    headline: 'Three formats — one principle: concrete results',
    note: 'Pricing is discussed individually. Depends on project size and team.',
    tiers: [
      {
        tag: 'Start',
        headline: 'Pilot audit',
        duration: '5–10 business days',
        deliverables: [
          'Architecture and codebase analysis',
          'Report with prioritized findings',
          'Technical and cognitive debt assessment',
          'First guardrails for the project',
          'Debrief session with the team (2 hours)',
        ],
        forWhom: 'For a team that wants to test the approach on one PR or feature',
        highlighted: false,
        ctaLabel: 'Discuss audit',
      },
      {
        tag: 'Most popular',
        headline: 'Team support',
        duration: '1–3 months',
        deliverables: [
          'Everything from pilot audit',
          'Audit of each PR or feature',
          'Regular Project Guardrails updates',
          'Technical debt monitoring',
          'Recommendations for developers',
          'Monthly reports for management',
        ],
        forWhom: 'For a project where AI is already in use or being introduced',
        highlighted: true,
        ctaLabel: 'Discuss format',
      },
      {
        tag: 'Deep engagement',
        headline: 'Full implementation',
        duration: '3–6 months',
        deliverables: [
          'Everything from team support',
          'Process diagnostics and setup',
          'Developer training on Claude Code / Codex',
          'PR self-checks for understanding verification',
          'Regular management reports',
          'Knowledge transfer and documentation',
        ],
        forWhom: 'For a company that wants to systematically transition to AI-assisted development',
        highlighted: false,
        ctaLabel: 'Discuss project',
      },
    ],
  },
};
