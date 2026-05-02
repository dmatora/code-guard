import type { RolePrimaryContent } from '@/types/content';

export const rolePrimaryContent: Record<'ru' | 'en', Record<'dev' | 'cto', RolePrimaryContent>> = {
  ru: {
    cto: {
      tag: 'Для руководителя разработки',
      headline: 'Скорость без потери контроля',
      description:
        'Вы не обязаны выбирать между медленной ручной разработкой и хаотичным AI-кодом. Можно дать команде ИИ-инструменты, но оставить контроль качества, архитектуры и поддержки на человеческой стороне.',
      benefits: [
        {
          title: 'Быстрее выпускать фичи',
          description: 'Команда использует ИИ, но в рамках проектных правил, а не хаотично.',
        },
        {
          title: 'Управляемый технический долг',
          description: 'Каждый PR проходит аудит. Ошибки становятся правилами, а не накапливаются.',
        },
        {
          title: 'Не теряете контроль над архитектурой',
          description: 'Guardrails фиксируют архитектурные решения и не дают ИИ их нарушать.',
        },
        {
          title: 'Быстрее онбординг',
          description: 'Понятный код с правилами проще передать новому разработчику.',
        },
        {
          title: 'Стандарты AI-разработки внутри команды',
          description: 'Не зависите от «магии» конкретного сотрудника — знания формализованы.',
        },
        {
          title: 'Прозрачность для руководства',
          description: 'Структурированные отчёты вместо ощущений из разговора с командой.',
        },
      ],
      ctaLabel: 'Обсудить внедрение',
    },
    dev: {
      tag: 'Для разработчика',
      headline: 'ИИ не заменит вас. Если вы умеете им управлять.',
      description:
        'Разработчик, который не умеет работать с ИИ, постепенно становится менее конкурентоспособным. Но разработчик, который просто генерирует код без понимания, тоже создаёт риск для команды. Самая сильная позиция — у разработчика, который умеет ускоряться с ИИ, но сохраняет качество, понимание и ответственность за результат.',
      benefits: [
        {
          title: 'Работаете в чистой кодовой базе',
          description: 'Guardrails создают предсказуемую среду — не нужно разгадывать чужой код каждый раз.',
        },
        {
          title: 'Повышаете ценность для компании',
          description: 'Вы не просто используете ИИ — вы умеете делать это правильно.',
        },
        {
          title: 'Есть что предложить руководству',
          description: 'Конкретный подход вместо «давайте попробуем». Снижает сопротивление изменениям.',
        },
        {
          title: 'Понимаете, что создаёте',
          description: 'Self-check по PR помогает осознанно принимать AI-generated код, а не просто копировать.',
        },
      ],
      ctaLabel: 'Показать руководителю',
    },
  },
  en: {
    cto: {
      tag: 'For engineering managers',
      headline: 'Speed without losing control',
      description:
        "You don't have to choose between slow manual development and chaotic AI-generated code. Give the team AI tools, but keep quality, architecture, and maintainability control on the human side.",
      benefits: [
        {
          title: 'Ship features faster',
          description: 'The team uses AI, but within project rules — not chaotically.',
        },
        {
          title: 'Managed technical debt',
          description: 'Every PR goes through an audit. Errors become rules, not accumulations.',
        },
        {
          title: 'Keep control of architecture',
          description: "Guardrails lock architectural decisions and prevent AI from violating them.",
        },
        {
          title: 'Faster onboarding',
          description: 'Clean code with documented rules is easier to hand off to new developers.',
        },
        {
          title: 'AI development standards inside the team',
          description: "You're not dependent on one person's 'magic' — knowledge is formalized.",
        },
        {
          title: 'Transparency for leadership',
          description: 'Structured reports instead of impressions from a conversation with the team.',
        },
      ],
      ctaLabel: 'Discuss implementation',
    },
    dev: {
      tag: 'For developers',
      headline: "AI won't replace you. If you know how to manage it.",
      description:
        "A developer who can't work with AI gradually becomes less competitive. But a developer who just generates code without understanding it also creates risk for the team. The strongest position belongs to a developer who can accelerate with AI while maintaining quality, understanding, and accountability for the result.",
      benefits: [
        {
          title: 'Work in a clean codebase',
          description: "Guardrails create a predictable environment — you don't need to decode someone else's code every time.",
        },
        {
          title: 'Increase your value to the company',
          description: "You don't just use AI — you know how to do it right.",
        },
        {
          title: 'Something concrete to propose to management',
          description: "A specific approach instead of 'let's try it.' Reduces resistance to change.",
        },
        {
          title: 'Understand what you create',
          description: 'PR self-checks help you consciously accept AI-generated code, not just copy it.',
        },
      ],
      ctaLabel: 'Show to my manager',
    },
  },
};
