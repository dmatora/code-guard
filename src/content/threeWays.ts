import type { ThreeWayColumn } from '@/types/content';

interface ThreeWaysSection {
  label: string;
  headline: string;
  columns: ThreeWayColumn[];
}

export const threeWaysContent: Record<'ru' | 'en', ThreeWaysSection> = {
  ru: {
    label: 'Три стратегии',
    headline: 'Два популярных пути. И третий — рабочий.',
    columns: [
      {
        badge: 'Не работает',
        badgeVariant: 'neutral',
        title: 'Запретить ИИ',
        description:
          'Компания запрещает Copilot и ChatGPT. Разработчики используют их через личные устройства. Контроля нет — только иллюзия.',
        items: [
          'Разработчики всё равно используют ИИ',
          'Лучшие уходят туда, где можно',
          'Запрет не решает проблему качества',
        ],
        highlighted: false,
      },
      {
        badge: 'Опасно',
        badgeVariant: 'warning',
        title: 'Разрешить всё',
        description:
          'ИИ используется без правил. Каждый по-своему. Кодовая база начинает расходиться. Никто не понимает, кто написал что и почему.',
        items: [
          'Дублирование паттернов и архитектуры',
          'Нет единого стиля и подхода',
          'Когнитивный долг растёт незаметно',
        ],
        highlighted: false,
      },
      {
        badge: 'Работает',
        badgeVariant: 'positive',
        title: 'ИИ с правилами',
        description:
          'Чёткие guardrails для агентов, аудит того, что генерируется, обучение команды. ИИ работает в рамках архитектуры — ускоряет, не разрушая.',
        items: [
          'Единые guardrails для всех агентов',
          'Понятный код, который можно поддерживать',
          'Скорость разработки без потери качества',
        ],
        highlighted: true,
      },
    ],
  },
  en: {
    label: 'Three strategies',
    headline: 'Two popular paths. And a third one that actually works.',
    columns: [
      {
        badge: "Doesn't work",
        badgeVariant: 'neutral',
        title: 'Ban AI',
        description:
          'The company bans Copilot and ChatGPT. Developers use them on personal devices. No control — just an illusion of it.',
        items: [
          'Developers use AI anyway',
          'Best engineers leave for places that allow it',
          'Banning doesn\'t solve the quality problem',
        ],
        highlighted: false,
      },
      {
        badge: 'Dangerous',
        badgeVariant: 'warning',
        title: 'Allow everything',
        description:
          'AI is used without rules. Everyone in their own way. The codebase starts diverging. Nobody knows who wrote what or why.',
        items: [
          'Duplicated patterns and architecture',
          'No consistent style or approach',
          'Cognitive debt grows invisibly',
        ],
        highlighted: false,
      },
      {
        badge: 'Works',
        badgeVariant: 'positive',
        title: 'AI with guardrails',
        description:
          'Clear guardrails for agents, audits of generated code, team training. AI works within your architecture — accelerates without breaking it.',
        items: [
          'Unified guardrails for all agents',
          'Readable code that humans can maintain',
          'Development speed without quality loss',
        ],
        highlighted: true,
      },
    ],
  },
};
