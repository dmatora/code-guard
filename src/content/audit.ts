import type { AuditDirection } from '@/types/content';

interface AuditSection {
  label: string;
  headline: string;
  subheadline: string;
  directions: AuditDirection[];
}

export const auditContent: Record<'ru' | 'en', AuditSection> = {
  ru: {
    label: 'Аудит',
    headline: 'Что мы проверяем',
    subheadline: '11 направлений комплексного анализа кодовой базы.',
    directions: [
      {
        number: '01',
        title: 'Архитектурная целостность',
        description: 'Соответствие выбранных решений реальным задачам. Оверинжиниринг и недоинжиниринг.',
      },
      {
        number: '02',
        title: 'Читаемость и поддерживаемость',
        description: 'Качество именования, структура кода, принципы SOLID, отсутствие дублирования.',
      },
      {
        number: '03',
        title: 'Дублирование логики',
        description: 'Повторяющиеся паттерны, скопированные блоки, функции с одинаковым поведением.',
      },
      {
        number: '04',
        title: 'Следы ИИ-генерации',
        description: 'Паттерны, характерные для LLM-кода: избыточные комментарии, нелогичная структура, галлюцинации.',
      },
      {
        number: '05',
        title: 'Тестируемость',
        description: 'Покрытие тестами, изолируемость компонентов, наличие тестовой инфраструктуры.',
      },
      {
        number: '06',
        title: 'Безопасность',
        description: 'Уязвимости в зависимостях, открытые endpoints, хранение секретов, input validation.',
      },
      {
        number: '07',
        title: 'Скрытые зависимости',
        description: 'Неявные связи между модулями, глобальный стейт, жёсткая связанность компонентов.',
      },
      {
        number: '08',
        title: 'Чрезмерная сложность',
        description: 'Overengineering, абстракции ради абстракций, паттерны не по размеру задачи.',
      },
      {
        number: '09',
        title: 'Бизнес-логика',
        description: 'Ошибки в реализации требований, неверные предположения, несоответствие домену.',
      },
      {
        number: '10',
        title: 'Несоответствие стилю команды',
        description: 'Отклонения от принятых соглашений, нарушение проектных паттернов, непоследовательность.',
      },
      {
        number: '11',
        title: 'Когнитивный долг',
        description: 'Участки, которые разработчик мог сгенерировать, но не понять. WTF-минуты, неявная магия.',
      },
    ],
  },
  en: {
    label: 'Audit',
    headline: 'What we review',
    subheadline: '11 areas of comprehensive codebase analysis.',
    directions: [
      {
        number: '01',
        title: 'Architectural integrity',
        description: 'Whether chosen solutions match real requirements. Over-engineering and under-engineering.',
      },
      {
        number: '02',
        title: 'Readability & maintainability',
        description: 'Naming quality, code structure, SOLID principles, absence of duplication.',
      },
      {
        number: '03',
        title: 'Logic duplication',
        description: 'Repeated patterns, copied blocks, functions with identical behavior.',
      },
      {
        number: '04',
        title: 'AI generation artifacts',
        description: 'Patterns typical of LLM-generated code: excessive comments, illogical structure, hallucinations.',
      },
      {
        number: '05',
        title: 'Testability',
        description: 'Test coverage, component isolatability, test infrastructure.',
      },
      {
        number: '06',
        title: 'Security',
        description: 'Dependency vulnerabilities, exposed endpoints, secrets storage, input validation.',
      },
      {
        number: '07',
        title: 'Hidden dependencies',
        description: 'Implicit module coupling, global state, tightly coupled components.',
      },
      {
        number: '08',
        title: 'Excessive complexity',
        description: 'Over-engineering, abstractions for their own sake, patterns too large for the task.',
      },
      {
        number: '09',
        title: 'Business logic errors',
        description: 'Misimplemented requirements, wrong assumptions, domain model mismatches.',
      },
      {
        number: '10',
        title: 'Style inconsistency',
        description: 'Deviations from team conventions, pattern violations, inconsistency across codebase.',
      },
      {
        number: '11',
        title: 'Cognitive debt',
        description: 'Code the developer generated but may not understand. WTF moments, implicit magic.',
      },
    ],
  },
};
