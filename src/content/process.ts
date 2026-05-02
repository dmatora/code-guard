import type { ProcessStep } from '@/types/content';

interface ProcessSection {
  label: string;
  headline: string;
  steps: ProcessStep[];
}

export const processContent: Record<'ru' | 'en', ProcessSection> = {
  ru: {
    label: 'Как работаем',
    headline: 'Шесть шагов от запроса до результата',
    steps: [
      {
        number: '01',
        title: 'Диагностика проекта',
        description:
          'Смотрим текущий код, workflow команды, типовые PR и уровень использования ИИ. Обсуждаем реальные боли, а не симптомы.',
        duration: '30 минут',
      },
      {
        number: '02',
        title: 'Первый аудит',
        description:
          'Получаем read-only доступ к репозиторию. Находим повторяющиеся проблемы, архитектурные риски и места, где ИИ ухудшает качество.',
        duration: '1–3 дня',
      },
      {
        number: '03',
        title: 'Создание Project Guardrails',
        description:
          'Формируем файл правил для AI-агентов: как писать код именно в этом проекте, какие паттерны использовать, чего избегать.',
        duration: '1–2 дня',
      },
      {
        number: '04',
        title: 'Аудит каждого PR или фичи',
        description:
          'Перед merge код проходит проверку. Ошибки не просто исправляются — они превращаются в новые правила для AI-агента.',
        duration: 'Постоянно',
      },
      {
        number: '05',
        title: 'Снижение количества ошибок',
        description:
          'Чем дольше проект развивается с guardrails, тем меньше повторяющихся проблем. ИИ постепенно начинает работать в стиле вашей команды.',
        duration: 'Со временем',
      },
      {
        number: '06',
        title: 'Контроль когнитивного долга',
        description:
          'Для важных PR можно генерировать короткий self-check: разработчик отвечает на вопросы по изменениям и подтверждает понимание сгенерированного кода.',
        duration: 'Опционально',
      },
    ],
  },
  en: {
    label: 'How we work',
    headline: 'Six steps from request to result',
    steps: [
      {
        number: '01',
        title: 'Project diagnostics',
        description:
          "We look at the current code, team workflow, typical PRs, and AI usage level. We discuss real pain points, not just symptoms.",
        duration: '30 minutes',
      },
      {
        number: '02',
        title: 'First audit',
        description:
          'We get read-only access to the repository. We find recurring issues, architectural risks, and places where AI degrades quality.',
        duration: '1–3 days',
      },
      {
        number: '03',
        title: 'Creating Project Guardrails',
        description:
          'We form a rules file for AI agents: how to write code in this specific project, which patterns to use, what to avoid.',
        duration: '1–2 days',
      },
      {
        number: '04',
        title: 'Auditing each PR or feature',
        description:
          "Code is reviewed before merge. Errors aren't just fixed — they become new rules for the AI agent.",
        duration: 'Ongoing',
      },
      {
        number: '05',
        title: 'Reducing recurring errors',
        description:
          'The longer a project develops with guardrails, the fewer recurring issues appear. AI gradually starts working in your team\'s style.',
        duration: 'Over time',
      },
      {
        number: '06',
        title: 'Cognitive debt control',
        description:
          'For important PRs, a short self-check can be generated: the developer answers questions about the changes and confirms understanding of the generated code.',
        duration: 'Optional',
      },
    ],
  },
};
