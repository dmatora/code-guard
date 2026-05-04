interface WhoNeedsSection {
  label: string;
  headline: string;
  items: string[];
}

interface WhoDoesNotFitSection {
  label: string;
  headline: string;
  description: string;
  items: string[];
  trustNote: string;
}

export const whoNeedsContent: Record<'ru' | 'en', WhoNeedsSection> = {
  ru: {
    label: 'Кому подходит',
    headline: 'Кому это нужно',
    items: [
      'Командам, которые уже используют Claude Code, Codex, Cursor, Copilot или другие AI-инструменты',
      'Компаниям, где разработчики начали приносить много AI-generated code',
      'Стартапам, которым нужно быстро выпускать фичи, но нельзя разрушить архитектуру',
      'CTO, которые хотят разрешить ИИ, но боятся потери качества',
      'Инвесторам и advisors, которым нужен независимый сигнал о качестве AI-heavy кодовой базы',
      'Агентствам и аутсорс-командам',
      'Командам перед масштабированием или привлечением инвестиций',
      'Разработчикам, которые хотят безопасно внедрить ИИ в своей команде',
    ],
  },
  en: {
    label: 'Who it fits',
    headline: 'Who needs this',
    items: [
      'Teams already using Claude Code, Codex, Cursor, Copilot, or other AI tools',
      'Companies where developers have started bringing in a lot of AI-generated code',
      'Startups that need to ship features fast but cannot afford to break their architecture',
      'CTOs who want to allow AI but fear quality loss',
      'Investors and advisors who need an independent signal on AI-heavy codebase quality',
      'Agencies and outsourcing teams',
      'Teams before scaling or raising investment',
      'Developers who want to safely introduce AI to their team',
    ],
  },
};

export const whoDoesNotFitContent: Record<'ru' | 'en', WhoDoesNotFitSection> = {
  ru: {
    label: 'Честно',
    headline: 'Кому это не подойдёт',
    description: 'Мы говорим это прямо, чтобы не тратить ваше время.',
    items: [
      'Если качество кода не важно — мы не для вас',
      'Если нет code review и команда не готова его вводить',
      'Если цель — быстро сделать демо и выбросить',
      'Если никто не будет отвечать за поддержку проекта',
    ],
    trustNote:
      'Если мы не сможем вам помочь — скажем об этом на первой консультации. Бесплатно.',
  },
  en: {
    label: 'Honest',
    headline: "Who this doesn't fit",
    description: "We say this directly so we don't waste your time.",
    items: [
      "If code quality doesn't matter — we're not for you",
      "If there's no code review and the team isn't ready to introduce it",
      'If the goal is to quickly build a demo and throw it away',
      "If nobody will be responsible for maintaining the project",
    ],
    trustNote:
      "If we can't help you — we'll say so in the first consultation. Free of charge.",
  },
};
