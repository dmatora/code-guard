import type { CaseStudy } from '@/types/content';

interface CasesSection {
  case1: CaseStudy;
  case2: CaseStudy;
}

export const casesContent: Record<'ru' | 'en', CasesSection> = {
  ru: {
    case1: {
      tag: 'Кейс 1',
      headline: 'Спасение ИИ-сгенерированного проекта',
      summary:
        'Клиент за несколько месяцев сгенерировал большой объём кода с помощью ИИ. Проект оказался разрозненным: отдельные части существовали, но ключевой функционал не работал как единая система.',
      metrics: [
        { value: '2.5M', label: 'токенов AI-generated code проанализировано' },
        { value: '1 день', label: 'первичный разбор и карта проблем' },
        { value: '1 месяц', label: 'стабилизация кодовой базы' },
      ],
      details: [
        'Выявлены ключевые проблемные зоны за первые сутки',
        'Устранены основные разрывы в логике компонентов',
        'Связаны разрозненные части в единую работающую систему',
        'Запущен ключевой функционал, который не работал как единое целое',
      ],
      outcome:
        'Даже когда AI-код уже вышел из-под контроля, его можно системно разобрать, стабилизировать и вернуть проекту управляемость. Но дешевле делать это до того, как проблема накопится.',
    },
    case2: {
      tag: 'Кейс 2',
      headline: 'Ускорение ×3 без потери качества',
      summary:
        'Заказчик настороженно относился к использованию ИИ и поставил жёсткое условие: код должен быть чистым, поддерживаемым и понятным разработчику, который сам ИИ не использует.',
      metrics: [
        { value: '×3', label: 'ускорение разработки по сравнению с предыдущим проектом' },
        { value: '100%', label: 'код признан заказчиком приемлемым по качеству' },
        { value: '0', label: 'нарушений guardrails после их формирования' },
      ],
      details: [
        'После первых итераций выявлены и устранены типовые ошибки',
        'Сформированы guardrails для дальнейшей разработки',
        'Код признан заказчиком приемлемым по качеству',
        'Новый AI-assisted код оказался лучше кода без ИИ на предыдущем проекте',
      ],
      outcome:
        'ИИ не обязан снижать качество. При правильных guardrails он может писать даже более дисциплинированный код, чем человек без формализованных правил.',
    },
  },
  en: {
    case1: {
      tag: 'Case 1',
      headline: 'Rescuing an AI-generated project',
      summary:
        'A client had generated a large volume of code using AI over several months. The project was fragmented: individual parts existed, but core functionality did not work as a unified system.',
      metrics: [
        { value: '2.5M', label: 'tokens of AI-generated code analyzed' },
        { value: '1 day', label: 'initial analysis and problem map' },
        { value: '1 month', label: 'codebase stabilization' },
      ],
      details: [
        'Key problem areas identified within the first day',
        'Major logic gaps between components resolved',
        'Disconnected parts connected into a single working system',
        'Core functionality that wasn\'t working as a whole was launched',
      ],
      outcome:
        'Even when AI-generated code has gotten out of control, it can be systematically analyzed, stabilized, and made manageable again. But it\'s cheaper to do this before the problem accumulates.',
    },
    case2: {
      tag: 'Case 2',
      headline: '3× faster without quality loss',
      summary:
        'The client was cautious about AI use and set a strict condition: code must be clean, maintainable, and understandable to developers who don\'t use AI themselves.',
      metrics: [
        { value: '×3', label: 'development speed compared to previous project' },
        { value: '100%', label: 'code accepted by client as meeting quality standards' },
        { value: '0', label: 'guardrail violations after rules were established' },
      ],
      details: [
        'Common errors identified and fixed after first iterations',
        'Guardrails formed for ongoing development',
        'Code accepted by client as meeting quality requirements',
        'New AI-assisted code was better than code written without AI on the previous project',
      ],
      outcome:
        "AI doesn't have to reduce quality. With the right guardrails, it can write even more disciplined code than a human without formalized rules.",
    },
  },
};
