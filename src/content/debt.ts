interface TechDebtSection {
  label: string;
  headline: string;
  body: string[];
  transition: string;
}

interface CognitiveDebtSection {
  label: string;
  headline: string;
  description: string;
  selfCheckHeading: string;
  questions: string[];
  footerNote: string;
}

export const techDebtContent: Record<'ru' | 'en', TechDebtSection> = {
  ru: {
    label: 'Технический долг',
    headline: 'ИИ-код опасен не потому, что он плохой.',
    body: [
      'Он опасен потому, что выглядит готовым раньше, чем становится надёжным.',
      'Система компилируется. Интерфейс работает. Демо выглядит убедительно — но внутри уже появляются дубли, неочевидные зависимости, размытая архитектура и решения, которые через несколько месяцев будет дорого переделывать.',
      'Когда разработчик пишет код вручную и срезает угол — он обычно понимает, что делает. Когда ИИ генерирует код и его принимают без понимания — долг накапливается на уровне, который не виден в pull request.',
    ],
    transition: 'Наша задача — поймать эти проблемы до того, как они попадут в master.',
  },
  en: {
    label: 'Technical debt',
    headline: "AI-generated code isn't dangerous because it's bad.",
    body: [
      "It's dangerous because it looks ready before it becomes reliable.",
      'The system compiles. The interface works. The demo looks convincing — but underneath, duplications, non-obvious dependencies, blurred architecture, and decisions that will be expensive to redo in a few months are already appearing.',
      "When a developer writes code by hand and cuts corners — they usually know what they're doing. When AI generates code and it's accepted without understanding — debt accumulates at a level invisible in the pull request.",
    ],
    transition: 'Our job is to catch these problems before they reach master.',
  },
};

export const cognitiveDebtContent: Record<'ru' | 'en', CognitiveDebtSection> = {
  ru: {
    label: 'Когнитивный долг',
    headline: 'Когнитивный долг — тот, который не видно в PR',
    description:
      'У AI-разработки есть ещё одна проблема: разработчик может принять код, который сам до конца не понимает. Команда формально двигается быстрее, но фактически теряет контроль над системой.',
    selfCheckHeading: 'Проверьте сами — ответьте честно',
    questions: [
      'Если ваш ведущий разработчик уйдёт в отпуск — кто разберётся в его коде?',
      'Сколько времени уходит на онбординг нового разработчика?',
      'Есть ли в проекте модули, которые «лучше не трогать»?',
      'Как часто при правке бага появляется новый?',
      'Знаете ли вы, какой процент кода в репозитории написан ИИ?',
      'Есть ли у вас документация архитектурных решений?',
    ],
    footerNote: 'Три и более «нет» или «не знаю» — признак когнитивного долга.',
  },
  en: {
    label: 'Cognitive debt',
    headline: "Cognitive debt — the kind you can't see in a PR",
    description:
      "AI development has another problem: a developer may accept code they don't fully understand. The team formally moves faster but actually loses control of the system.",
    selfCheckHeading: 'Check yourself — answer honestly',
    questions: [
      "If your lead developer goes on vacation — who can make sense of their code?",
      'How long does onboarding a new developer take?',
      "Are there modules in the project that are 'better not to touch'?",
      'How often does fixing a bug create a new one?',
      'Do you know what percentage of the codebase was written by AI?',
      'Do you have documentation of architectural decisions?',
    ],
    footerNote: "Three or more 'no' or 'don't know' answers — signs of cognitive debt.",
  },
};
