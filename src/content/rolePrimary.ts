import type { RolePrimaryContent } from '@/types/content';

export const rolePrimaryContent: Record<'ru' | 'en', Record<'dev' | 'cto' | 'investor', RolePrimaryContent>> = {
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
    investor: {
      tag: 'Для инвестора',
      headline: 'Войти в AI coding без риска быть вытесненным фабриками кода',
      description:
        'AI забирает венчурный капитал, а AI coding стал самой понятной application-layer ставкой. Но прямой конкурент Codex, Claude Code или Copilot будет воевать с гигантами. CodeGuard занимает другую позицию: независимый quality and governance layer над AI-generated code.',
      benefits: [
        {
          title: 'Видите риск до того, как он ударит по valuation',
          description: 'Когнитивный и архитектурный долг можно диагностировать раньше, чем он проявится в срывах сроков, росте burn или проблемах diligence.',
        },
        {
          title: 'Независимый сигнал качества',
          description: 'Не только слова основателя или CTO, а внешний структурированный аудит с приоритизацией находок.',
        },
        {
          title: 'Меньше key-person risk',
          description: 'Guardrails и формализованные решения снижают зависимость проекта от одного “магического” разработчика.',
        },
        {
          title: 'Быстрее due diligence по коду',
          description: 'Один эксперт с внутренним инструментом может быстро собрать карту архитектурных рисков и зон нестабильности.',
        },
        {
          title: 'Понятная логика удержания качества',
          description: 'Ошибки превращаются в правила, а не в бесконечный ручной контроль каждой новой итерации.',
        },
        {
          title: 'Арбитраж, а не ещё один copilot',
          description: 'CodeGuard добавляет accountable слой контроля там, где AI-инструменты и их поставщики экономически заинтересованы в росте генерации.',
        },
      ],
      ctaLabel: 'Открыть страницу для инвестора',
      ctaHref: '/investor-deck/',
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
    investor: {
      tag: 'For investors',
      headline: 'Enter AI coding without being displaced by code factories',
      description:
        'AI is absorbing venture capital, and AI coding has become the clearest application-layer bet. But a direct Codex, Claude Code, or Copilot competitor has to fight the giants. CodeGuard takes a different position: the independent quality and governance layer above AI-generated code.',
      benefits: [
        {
          title: 'See risk before it hits valuation',
          description: 'Cognitive and architectural debt can be diagnosed before it shows up as delivery slippage, rising burn, or diligence risk.',
        },
        {
          title: 'Get an independent quality signal',
          description: 'Not just the founder or CTO narrative, but an external structured audit with prioritized findings.',
        },
        {
          title: 'Reduce key-person risk',
          description: 'Guardrails and formalized decisions make the project less dependent on one “magic” developer.',
        },
        {
          title: 'Accelerate code diligence',
          description: 'One expert with internal tooling can rapidly build a map of architectural risk and unstable zones.',
        },
        {
          title: 'Understand the quality flywheel',
          description: 'Errors become rules, rather than recurring manual review burden on every new iteration.',
        },
        {
          title: 'Buy arbitration, not another copilot',
          description: 'CodeGuard adds an accountable control layer where AI tools and their vendors are economically rewarded for more generation.',
        },
      ],
      ctaLabel: 'Open investor page',
      ctaHref: '/investor-deck/',
    },
  },
};
