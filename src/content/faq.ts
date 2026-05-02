import type { FAQItem } from '@/types/content';

interface FAQSection {
  label: string;
  headline: string;
  items: FAQItem[];
}

export const faqContent: Record<'ru' | 'en', FAQSection> = {
  ru: {
    label: 'FAQ',
    headline: 'Вопросы, которые обычно задают',
    items: [
      {
        question: 'Это заменяет обычный code review?',
        answer:
          'Нет. Это усиливает code review и добавляет слой правил для AI-агентов. Code review проверяет конкретный PR. Наш аудит отвечает на вопрос: почему ИИ снова сгенерировал эту проблему, и как сделать так, чтобы она не повторялась.',
      },
      {
        question: 'Можно ли использовать это, если команда уже работает с ИИ?',
        answer:
          'Да. Особенно если команда уже видит рост скорости, но беспокоится о скрытом техническом долге. Мы начинаем с аудита текущего состояния и формируем guardrails под ваш конкретный проект.',
      },
      {
        question: 'Можно ли начать с малого?',
        answer:
          'Да. Лучший старт — аудит одного PR или одной фичи. Вы получаете понятную картину: где ИИ уже помогает, где создаёт риски и какие guardrails нужны вашей команде.',
      },
      {
        question: 'Что такое Project Guardrails?',
        answer:
          'Это файл правил и ограничений для AI-агентов, адаптированный под конкретный проект: архитектура, стиль, паттерны, запреты, предпочтительные решения и типовые ошибки. Агент читает его перед каждой генерацией и учитывает при написании кода.',
      },
      {
        question: 'А если разработчики не пользуются ИИ?',
        answer:
          'Тогда можно начать с пилота: показать, где ИИ ускоряет работу без потери качества. Аудит также полезен как независимая оценка состояния кодовой базы — вне зависимости от использования ИИ.',
      },
      {
        question: 'Как понять, что разработчик понимает AI-generated код?',
        answer:
          'Для этого используется self-check по PR: короткий набор вопросов, который помогает выявить непонимание до merge. Это дополнительный механизм контроля, который внедряется поверх аудита технического качества — не как замена.',
      },
    ],
  },
  en: {
    label: 'FAQ',
    headline: 'Questions we get asked',
    items: [
      {
        question: 'Does this replace regular code review?',
        answer:
          "No. It strengthens code review and adds a guardrails layer for AI agents. Code review checks a specific PR. Our audit answers the question: why did AI generate this problem again, and how do we prevent it from recurring?",
      },
      {
        question: "Can we use this if our team already works with AI?",
        answer:
          "Yes. Especially if the team already sees speed gains but worries about hidden technical debt. We start with an audit of the current state and form guardrails tailored to your specific project.",
      },
      {
        question: 'Can we start small?',
        answer:
          "Yes. The best start is an audit of one PR or one feature. You get a clear picture: where AI already helps, where it creates risks, and what guardrails your team needs.",
      },
      {
        question: 'What are Project Guardrails?',
        answer:
          "A file of rules and constraints for AI agents, adapted to a specific project: architecture, style, patterns, prohibitions, preferred solutions, and common errors. The agent reads it before each generation and applies it when writing code.",
      },
      {
        question: "What if our developers don't use AI?",
        answer:
          "Then we can start with a pilot: show where AI accelerates work without quality loss. The audit is also useful as an independent assessment of the codebase state — regardless of AI usage.",
      },
      {
        question: 'How do we know if a developer understands AI-generated code?',
        answer:
          "A PR self-check is used for this: a short set of questions that helps surface misunderstanding before merge. It's an additional control mechanism layered on top of technical quality audits — not a replacement.",
      },
    ],
  },
};
