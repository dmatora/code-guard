'use client';

import type { ReactNode } from 'react';
import { useApp } from '@/context/AppContext';
import { footerContent } from '@/content/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type Lang = 'ru' | 'en';

interface Metric {
  value: string;
  label: string;
  note: string;
}

interface TextBlock {
  title: string;
  body: string;
}

const content: Record<Lang, {
  back: string;
  langLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: Metric[];
  sections: {
    market: {
      eyebrow: string;
      title: string;
      body: string;
      signals: Metric[];
      sources: Array<{ label: string; href: string }>;
    };
    problem: {
      eyebrow: string;
      title: string;
      body: string;
      code: string;
      comprehension: string;
      gap: string;
      stages: Array<{ label: string; code: number; comprehension: number }>;
    };
    failure: {
      eyebrow: string;
      title: string;
      rows: Array<{ criterion: string; current: string; codeguard: string }>;
    };
    choices: {
      eyebrow: string;
      title: string;
      items: Array<{ label: string; title: string; body: string; tone: 'neutral' | 'risk' | 'control' }>;
    };
    solution: {
      eyebrow: string;
      title: string;
      layers: TextBlock[];
      loop: string[];
    };
    immunization: {
      eyebrow: string;
      title: string;
      body: string;
      stages: Array<{ label: string; effort: number; coverage: number }>;
    };
    proof: {
      eyebrow: string;
      title: string;
      cases: Array<{ title: string; body: string; metrics: Metric[] }>;
    };
    authority: {
      eyebrow: string;
      title: string;
      body: string;
      items: Array<{ label: string; x: string; y: string; active?: boolean }>;
    };
    economics: {
      eyebrow: string;
      title: string;
      body: string;
      classical: number[];
      codeguard: number[];
    };
    gtm: {
      eyebrow: string;
      title: string;
      steps: TextBlock[];
      buyers: string[];
    };
    close: {
      title: string;
      body: string;
    };
  };
}> = {
  ru: {
    back: 'Вернуться на сайт',
    langLabel: 'Язык',
    eyebrow: 'CodeGuard для инвестора',
    title: 'CodeGuard строит независимую аудиторскую фирму для эпохи AI-кода.',
    intro:
      'AI — главный магнит венчурного капитала, а AI coding — самый очевидный application-layer wedge. Но вкладываться в ещё одну фабрику кода значит идти против Microsoft, OpenAI и Anthropic. CodeGuard даёт инвестору вход в ту же волну через защищённую нишу независимого аудита.',
    primaryCta: 'Обсудить тезис',
    secondaryCta: 'Смотреть доказательства',
    metrics: [
      { value: '$25k', label: 'target audit', note: 'первичный аудит как вход в аккаунт' },
      { value: '$10k/mo', label: 'target retainer', note: 'поддержание Project Immunization' },
      { value: '$145k', label: 'year-1 LTV', note: 'audit + 12 месяцев retainer' },
      { value: '80%+', label: 'audit GM target', note: 'за счёт AI-экзоскелета архитектора' },
    ],
    sections: {
      market: {
        eyebrow: 'Market Timing',
        title: 'AI забирает венчурный капитал. AI coding стал самым очевидным application-layer wedge.',
        body:
          'Инвестор, который хочет экспозицию к AI coding, не должен финансировать ещё один Codex или Claude Code: этот рынок уже стал полем гигантов. CodeGuard даёт другой вход в ту же волну — не конкурировать с фабриками кода, а стать независимым аудитором их output.',
        signals: [
          { value: '61%', label: 'global VC', note: 'доля AI-компаний во всём VC deal value в 2025' },
          { value: '$170.9B', label: 'GenAI private investment', note: 'глобальные частные инвестиции в generative AI в 2025' },
          { value: '90%', label: 'developers using AI at work', note: 'JetBrains AI Pulse, январь 2026' },
          { value: '74%', label: 'specialized AI dev tools', note: 'coding assistants, AI editors и agents уже в рабочем toolchain' },
        ],
        sources: [
          { label: 'OECD AI VC 2026', href: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/venture-capital-investments-in-artificial-intelligence-through-2025_3bcb227f/a13752f5-en.pdf' },
          { label: 'Stanford AI Index 2026', href: 'https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf' },
          { label: 'JetBrains AI Pulse 2026', href: 'https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/' },
          { label: 'GitHub Octoverse 2025', href: 'https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/' },
        ],
      },
      problem: {
        eyebrow: 'The Inevitable Mess',
        title: 'AI сделал генерацию кода дешёвой. Понимание архитектуры дешевле не стало.',
        body:
          'Кодовая база растёт быстрее, чем команда способна поддерживать целостную ментальную модель системы. Проблема не в том, что AI пишет плохой код. Проблема в том, что бизнес начинает владеть активом, архитектуру которого уже никто полностью не понимает.',
        code: 'AI-code throughput',
        comprehension: 'human comprehension',
        gap: 'разрыв = когнитивный долг, который бьёт по капитализации',
        stages: [
          { label: 'до AI', code: 20, comprehension: 18 },
          { label: 'AI assist', code: 44, comprehension: 24 },
          { label: 'multi-agent', code: 70, comprehension: 30 },
          { label: 'AI-first', code: 96, comprehension: 35 },
        ],
      },
      failure: {
        eyebrow: 'Conflict of Interest',
        title: 'Фабрика кода не может быть независимым аудитором собственного output.',
        rows: [
          { criterion: 'Экономический стимул', current: 'продавать больше генерации и IDE-usage', codeguard: 'снижать риск AI-generated code как независимый арбитр' },
          { criterion: 'Доверие покупателя', current: 'ещё один инструмент от поставщика code factory', codeguard: 'человеческая подпись и внешнее expert judgement' },
          { criterion: 'Сфера контроля', current: 'ускорение developer workflow', codeguard: 'архитектура, когнитивный долг, правила и управляемость актива' },
          { criterion: 'Ответственность', current: 'вероятностический review без accountable владельца', codeguard: 'отчёт, приоритизация рисков и решение архитектора' },
          { criterion: 'Будущие ошибки', current: 'скорость растёт, entropy переносится в кодовую базу', codeguard: 'находки превращаются в Project Guardrails' },
        ],
      },
      choices: {
        eyebrow: 'Market Opening',
        title: 'Чем больше рынок покупает “фабрики кода”, тем сильнее ему нужен независимый аудит.',
        items: [
          {
            label: 'Спрос создан',
            title: 'AI coding уже внутри компаний',
            body: 'Запретить Claude Code, Codex, Cursor или Copilot практически невозможно. Вопрос сместился с adoption на governance.',
            tone: 'neutral',
          },
          {
            label: 'Риск накоплен',
            title: 'Код выглядит быстрее, чем становится надёжным',
            body: 'Скорость merge растёт, но архитектурная дисциплина не появляется автоматически. Это риск для valuation, diligence и key-person continuity.',
            tone: 'risk',
          },
          {
            label: 'Категория открыта',
            title: 'Нужен внешний стандарт',
            body: 'Как финансовому рынку нужны аудиторы, AI-heavy software нужен независимый слой архитектурной дисциплины.',
            tone: 'control',
          },
        ],
      },
      solution: {
        eyebrow: 'Solution',
        title: 'CodeGuard — McKinsey / Big Four слой для AI-built software.',
        layers: [
          {
            title: 'Независимый аудит',
            body: 'Мы не продаём генерацию кода, поэтому можем честно ограничивать её там, где она разрушает архитектуру.',
          },
          {
            title: 'Эксперт с AI-экзоскелетом',
            body: 'Один архитектор получает throughput senior-команды: code map, risk triage, cognitive-debt diagnosis и executive-ready report.',
          },
          {
            title: 'Операционный стандарт проекта',
            body: 'Результат аудита превращается в Project Guardrails — правила, по которым работают люди, AI-агенты и review workflow.',
          },
        ],
        loop: ['Audit finding', 'Risk decision', 'Project Guardrail', 'Lower future entropy'],
      },
      immunization: {
        eyebrow: 'The Retainer Flywheel',
        title: 'Мы не продаём часы. Мы продаём Project Immunization.',
        body:
          'Первый аудит концентрирует дорогое экспертное внимание. Затем найденные риски становятся guardrails, self-checks и management reporting. Потребность в ручном внимании падает, но ценность retainer сохраняется: клиент платит за иммунитет проекта, а не за количество часов.',
        stages: [
          { label: 'аудит', effort: 90, coverage: 20 },
          { label: 'guardrails', effort: 70, coverage: 42 },
          { label: 'governance', effort: 50, coverage: 66 },
          { label: 'зрелость', effort: 36, coverage: 88 },
        ],
      },
      proof: {
        eyebrow: 'Tech-Enabled Throughput',
        title: 'AI-экзоскелет превращает 1 день архитектора в месяц традиционного аудита.',
        cases: [
          {
            title: '2.5M-token AI codebase',
            body:
              'Клиент несколько месяцев генерировал большой объём кода с помощью AI. Внутренний инструмент позволил быстро собрать карту проблем, приоритизировать зоны риска и вернуть проект к системной стабилизации.',
            metrics: [
              { value: '2.5M', label: 'токенов', note: 'проанализировано' },
              { value: '1 день', label: 'expert triage', note: 'карта ключевых рисков' },
              { value: '~1 мес.', label: 'classic equivalent', note: 'ориентир традиционного аудита' },
            ],
          },
          {
            title: 'Guardrails как reusable asset',
            body:
              'После первых итераций типовые ошибки были превращены в проектные правила. Новый AI-assisted output стал дисциплинированнее, потому что агент начал работать внутри архитектурного стандарта.',
            metrics: [
              { value: '3x', label: 'быстрее', note: 'по сравнению с прошлым проектом' },
              { value: '100%', label: 'принято', note: 'качество подтверждено заказчиком' },
              { value: '0', label: 'нарушений', note: 'после стабилизации правил' },
            ],
          },
        ],
      },
      authority: {
        eyebrow: 'Defensibility',
        title: 'Наш “медленный” найм архитекторов — это ров, а не слабость.',
        body:
          'Чисто софтверные компании могут скопировать чеклист или IDE-кнопку. Они не могут быстро скопировать бренд независимого арбитра, сеть senior architects, методологию judgement и willingness поставить человеческую подпись под выводом. Ограниченная масштабируемость защищает категорию от commodity software.',
        items: [
          { label: 'Internal review', x: '24%', y: '66%' },
          { label: 'AI reviews AI', x: '52%', y: '48%' },
          { label: 'IDE copilots', x: '78%', y: '76%' },
          { label: 'CodeGuard', x: '74%', y: '24%', active: true },
        ],
      },
      economics: {
        eyebrow: 'Tech-Enabled Margin',
        title: '$25k audit с ~$4k COGS — консалтинговая цена при software-like leverage.',
        body:
          'Target-модель: первичный аудит продаётся за $25k, занимает 12-16 часов архитектора и даёт 80-85% gross margin. Retainer $10k/month требует 6-10 часов в месяц после guardrails и формирует $145k year-1 LTV. Традиционный proxy: 2 senior architects x 20 дней x 6h x $200/h = ~$48k себестоимости результата.',
        classical: [48, 48, 48],
        codeguard: [4, 3, 3],
      },
      gtm: {
        eyebrow: 'Go-To-Market',
        title: 'Зайти через риск. Остаться как операционная система архитектурной дисциплины.',
        steps: [
          { title: 'Trigger audit', body: '$25k target: diligence, архитектурный риск, AI-generated code cleanup или подготовка к scale.' },
          { title: 'Immunization retainer', body: '$10k/month target: регулярный audit loop, обновление guardrails и executive reporting.' },
          { title: 'Standardization', body: 'Методология становится стандартом проекта: onboarding, PR policy, AI-agent rules и board-level quality signal.' },
        ],
        buyers: [
          'AI-heavy startups перед seed/Series A diligence',
          'CTO, у которых AI adoption уже обогнал governance',
          'фонды и advisors, оценивающие software asset risk',
          'команды, где Claude Code, Codex, Cursor или Copilot уже меняют delivery velocity',
        ],
      },
      close: {
        title: 'Кто-то должен стать независимым аудитором AI-built software. Мы строим эту категорию.',
        body:
          'AI-фабрики будут производить всё больше кода. CodeGuard забирает маржу у хаоса, который они создают: архитектурная дисциплина как актив, человеческая ответственность как доверие, AI-экзоскелет как margin engine.',
      },
    },
  },
  en: {
    back: 'Back to site',
    langLabel: 'Language',
    eyebrow: 'CodeGuard for investors',
    title: 'CodeGuard is building the independent audit firm for the age of AI code.',
    intro:
      'AI is the capital magnet, and AI coding is the clearest application-layer wedge. But funding another code factory means competing with Microsoft, OpenAI, and Anthropic. CodeGuard gives investors exposure to the same wave through the defensible niche of independent audit.',
    primaryCta: 'Discuss the thesis',
    secondaryCta: 'View proof',
    metrics: [
      { value: '$25k', label: 'target audit', note: 'initial audit as account entry' },
      { value: '$10k/mo', label: 'target retainer', note: 'maintaining Project Immunization' },
      { value: '$145k', label: 'year-1 LTV', note: 'audit + 12 months of retainer' },
      { value: '80%+', label: 'audit GM target', note: 'enabled by the architect AI exoskeleton' },
    ],
    sections: {
      market: {
        eyebrow: 'Market Timing',
        title: 'AI is absorbing venture capital. AI coding is the clearest application-layer wedge.',
        body:
          'An investor seeking exposure to AI coding should not fund another Codex or Claude Code competitor: that market is already a giants’ battleground. CodeGuard offers a different entry into the same wave — do not compete with code factories; become the independent auditor of their output.',
        signals: [
          { value: '61%', label: 'global VC', note: 'AI companies’ share of all VC deal value in 2025' },
          { value: '$170.9B', label: 'GenAI private investment', note: 'global private investment in generative AI in 2025' },
          { value: '90%', label: 'developers using AI at work', note: 'JetBrains AI Pulse, January 2026' },
          { value: '74%', label: 'specialized AI dev tools', note: 'coding assistants, AI editors, and agents already in the work toolchain' },
        ],
        sources: [
          { label: 'OECD AI VC 2026', href: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/venture-capital-investments-in-artificial-intelligence-through-2025_3bcb227f/a13752f5-en.pdf' },
          { label: 'Stanford AI Index 2026', href: 'https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf' },
          { label: 'JetBrains AI Pulse 2026', href: 'https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/' },
          { label: 'GitHub Octoverse 2025', href: 'https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/' },
        ],
      },
      problem: {
        eyebrow: 'The Inevitable Mess',
        title: 'AI made code generation cheap. Architectural understanding did not get cheaper.',
        body:
          'The codebase grows faster than the team can preserve a complete mental model of the system. The problem is not that AI writes bad code. The problem is that the business starts owning an asset whose architecture no one fully understands anymore.',
        code: 'AI-code throughput',
        comprehension: 'human comprehension',
        gap: 'gap = cognitive debt that impacts valuation',
        stages: [
          { label: 'pre-AI', code: 20, comprehension: 18 },
          { label: 'AI assist', code: 44, comprehension: 24 },
          { label: 'multi-agent', code: 70, comprehension: 30 },
          { label: 'AI-first', code: 96, comprehension: 35 },
        ],
      },
      failure: {
        eyebrow: 'Conflict of Interest',
        title: 'A code factory cannot be the independent auditor of its own output.',
        rows: [
          { criterion: 'Economic incentive', current: 'sell more generation and IDE usage', codeguard: 'reduce AI-generated code risk as an independent arbiter' },
          { criterion: 'Buyer trust', current: 'another tool from the code-factory vendor', codeguard: 'human signature and external expert judgment' },
          { criterion: 'Control surface', current: 'developer workflow acceleration', codeguard: 'architecture, cognitive debt, rules, and asset governability' },
          { criterion: 'Accountability', current: 'probabilistic review without an accountable owner', codeguard: 'report, risk prioritization, and architect decision' },
          { criterion: 'Future errors', current: 'speed grows and entropy moves into the codebase', codeguard: 'findings become Project Guardrails' },
        ],
      },
      choices: {
        eyebrow: 'Market Opening',
        title: 'The more the market buys code factories, the more it needs independent audit.',
        items: [
          { label: 'Demand is created', title: 'AI coding is already inside companies', body: 'Banning Claude Code, Codex, Cursor, or Copilot is not a durable policy. The question moved from adoption to governance.', tone: 'neutral' },
          { label: 'Risk is accumulating', title: 'Code looks faster than it becomes reliable', body: 'Merge velocity rises, but architectural discipline does not appear automatically. That is a valuation, diligence, and key-person continuity risk.', tone: 'risk' },
          { label: 'Category is open', title: 'The market needs an external standard', body: 'Just as financial markets need auditors, AI-heavy software needs an independent architectural discipline layer.', tone: 'control' },
        ],
      },
      solution: {
        eyebrow: 'Solution',
        title: 'CodeGuard is the McKinsey / Big Four layer for AI-built software.',
        layers: [
          { title: 'Independent audit', body: 'We do not sell code generation, so we can honestly constrain it where it damages architecture.' },
          { title: 'Expert with an AI exoskeleton', body: 'One architect gets senior-team throughput: code map, risk triage, cognitive-debt diagnosis, and executive-ready reporting.' },
          { title: 'Project operating standard', body: 'The audit output becomes Project Guardrails: rules used by humans, AI agents, and the review workflow.' },
        ],
        loop: ['Audit finding', 'Risk decision', 'Project Guardrail', 'Lower future entropy'],
      },
      immunization: {
        eyebrow: 'The Retainer Flywheel',
        title: 'We do not sell hours. We sell Project Immunization.',
        body:
          'The first audit concentrates expensive expert attention. Then the findings become guardrails, self-checks, and management reporting. Manual attention declines, but retainer value remains high: the client pays for project immunity, not hours.',
        stages: [
          { label: 'audit', effort: 90, coverage: 20 },
          { label: 'guardrails', effort: 70, coverage: 42 },
          { label: 'governance', effort: 50, coverage: 66 },
          { label: 'mature', effort: 36, coverage: 88 },
        ],
      },
      proof: {
        eyebrow: 'Tech-Enabled Throughput',
        title: 'The AI exoskeleton turns one architect-day into a month of traditional audit work.',
        cases: [
          {
            title: '2.5M-token AI codebase',
            body:
              'A client generated a large volume of code with AI over several months. Internal tooling made it possible to build a problem map, prioritize risk zones, and move the project back toward systemic stability.',
            metrics: [
              { value: '2.5M', label: 'tokens', note: 'analyzed' },
              { value: '1 day', label: 'expert triage', note: 'map of key risks' },
              { value: '~1 mo.', label: 'classic equivalent', note: 'traditional audit reference point' },
            ],
          },
          {
            title: 'Guardrails as reusable asset',
            body:
              'After initial iterations, recurring mistakes became project rules. New AI-assisted output became more disciplined because the agent started operating inside an architectural standard.',
            metrics: [
              { value: '3x', label: 'faster', note: 'versus previous project' },
              { value: '100%', label: 'accepted', note: 'client quality approval' },
              { value: '0', label: 'violations', note: 'after rules stabilized' },
            ],
          },
        ],
      },
      authority: {
        eyebrow: 'Defensibility',
        title: 'Our “slow” architect hiring is a moat, not a weakness.',
        body:
          'Pure software companies can copy a checklist or an IDE button. They cannot quickly copy the brand of an independent arbiter, a network of senior architects, a methodology of judgment, and the willingness to put a human signature under the conclusion. Limited scalability protects the category from commodity software.',
        items: [
          { label: 'Internal review', x: '24%', y: '66%' },
          { label: 'AI reviews AI', x: '52%', y: '48%' },
          { label: 'IDE copilots', x: '78%', y: '76%' },
          { label: 'CodeGuard', x: '74%', y: '24%', active: true },
        ],
      },
      economics: {
        eyebrow: 'Tech-Enabled Margin',
        title: '$25k audit with ~$4k COGS: consulting price with software-like leverage.',
        body:
          'Target model: the initial audit sells for $25k, takes 12-16 architect hours, and produces 80-85% gross margin. A $10k/month retainer takes 6-10 hours per month after guardrails and creates $145k year-1 LTV. Traditional proxy: 2 senior architects x 20 days x 6h x $200/h = ~$48k cost of equivalent output.',
        classical: [48, 48, 48],
        codeguard: [4, 3, 3],
      },
      gtm: {
        eyebrow: 'Go-To-Market',
        title: 'Enter through risk. Remain as the operating system for architectural discipline.',
        steps: [
          { title: 'Trigger audit', body: '$25k target: diligence, architectural risk, AI-generated code cleanup, or pre-scale readiness.' },
          { title: 'Immunization retainer', body: '$10k/month target: recurring audit loop, guardrail updates, and executive reporting.' },
          { title: 'Standardization', body: 'The methodology becomes the project standard: onboarding, PR policy, AI-agent rules, and board-level quality signal.' },
        ],
        buyers: [
          'AI-heavy startups before seed or Series A diligence',
          'CTOs whose AI adoption has already outrun governance',
          'funds and advisors evaluating software asset risk',
          'teams where Claude Code, Codex, Cursor, or Copilot already change delivery velocity',
        ],
      },
      close: {
        title: 'Someone will become the independent auditor for AI-built software. We are building that category.',
        body:
          'AI factories will produce more and more code. CodeGuard captures margin from the chaos they create: architectural discipline as an asset, human accountability as trust, and the AI exoskeleton as the margin engine.',
      },
    },
  },
};

export function InvestorDeckPage() {
  const { lang, setLang } = useApp();
  const data = content[lang];
  const footer = footerContent[lang];
  const otherLang = lang === 'ru' ? 'en' : 'ru';

  return (
    <main className="min-h-screen overflow-x-hidden bg-bg-base text-text-primary">
      <DeckNav
        back={data.back}
        langLabel={data.langLabel}
        lang={lang}
        otherLang={otherLang}
        onLangToggle={() => setLang(otherLang)}
      />

      <section className="relative overflow-hidden border-b border-border-default">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Kicker>{data.eyebrow}</Kicker>
            <h1 className="mt-5 max-w-4xl break-words text-3xl font-semibold leading-tight tracking-normal text-text-primary sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-text-secondary">{data.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={footer.telegram} target="_blank" rel="noopener noreferrer" size="lg">
                {data.primaryCta}
              </Button>
              <Button href="#proof" variant="secondary" size="lg">
                {data.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.metrics.map((metric) => (
              <MetricTile key={`${metric.value}-${metric.label}`} metric={metric} />
            ))}
          </div>
        </div>
      </section>

      <DeckSection eyebrow={data.sections.market.eyebrow} title={data.sections.market.title}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {data.sections.market.signals.map((signal) => (
              <MetricTile key={`${signal.value}-${signal.label}`} metric={signal} />
            ))}
          </div>
          <div className="rounded-lg border border-border-default bg-bg-elevated p-6">
            <p className="text-base leading-8 text-text-secondary">{data.sections.market.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.sections.market.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-border-default px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent-500 hover:text-accent-400"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.problem.eyebrow} title={data.sections.problem.title}>
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.8fr]">
          <DebtChart
            stages={data.sections.problem.stages}
            codeLabel={data.sections.problem.code}
            comprehensionLabel={data.sections.problem.comprehension}
            gapLabel={data.sections.problem.gap}
          />
          <p className="text-base leading-8 text-text-secondary lg:pt-10">{data.sections.problem.body}</p>
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.failure.eyebrow} title={data.sections.failure.title} compact>
        <div className="overflow-hidden rounded-lg border border-border-default">
          <div className="hidden border-b border-border-default bg-bg-elevated text-xs font-semibold uppercase text-text-secondary sm:grid sm:grid-cols-[0.8fr_1fr_1fr]">
            <div className="p-4">{lang === 'ru' ? 'Критерий' : 'Criterion'}</div>
            <div className="p-4">{lang === 'ru' ? 'Фабрики кода' : 'Code factories'}</div>
            <div className="p-4 text-accent-400">CodeGuard</div>
          </div>
          {data.sections.failure.rows.map((row) => (
            <div
              key={row.criterion}
              className="grid min-w-0 grid-cols-1 border-b border-border-muted last:border-b-0 sm:grid-cols-[0.8fr_1fr_1fr]"
            >
              <div className="bg-bg-surface p-4 text-sm font-semibold text-text-primary">{row.criterion}</div>
              <div className="p-4 text-sm leading-6 text-text-secondary">{row.current}</div>
              <div className="p-4 text-sm font-medium leading-6 text-text-primary">{row.codeguard}</div>
            </div>
          ))}
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.choices.eyebrow} title={data.sections.choices.title}>
        <div className="grid gap-4 md:grid-cols-3">
          {data.sections.choices.items.map((item) => (
            <article
              key={item.title}
              className={cn(
                'rounded-lg border p-6',
                item.tone === 'risk' && 'border-red/40 bg-red/10',
                item.tone === 'control' && 'border-green/40 bg-green/10',
                item.tone === 'neutral' && 'border-border-default bg-bg-surface'
              )}
            >
              <span className="text-xs font-semibold uppercase text-text-tertiary">{item.label}</span>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{item.body}</p>
            </article>
          ))}
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.solution.eyebrow} title={data.sections.solution.title}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-3">
            {data.sections.solution.layers.map((layer, index) => (
              <div key={layer.title} className={cn('rounded-lg border p-5', index === 1 ? 'border-accent-500 bg-accent-surface/40' : 'border-border-default bg-bg-surface')}>
                <div className="text-xs font-semibold uppercase text-text-tertiary">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">{layer.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{layer.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border-default bg-bg-elevated p-6">
            <div className="text-xs font-semibold uppercase text-text-tertiary">Operating loop</div>
            <div className="mt-6 space-y-4">
              {data.sections.solution.loop.map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-accent-500 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium text-text-primary">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.immunization.eyebrow} title={data.sections.immunization.title}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ImmunizationChart stages={data.sections.immunization.stages} lang={lang} />
          <p className="text-base leading-8 text-text-secondary lg:pt-10">{data.sections.immunization.body}</p>
        </div>
      </DeckSection>

      <DeckSection id="proof" eyebrow={data.sections.proof.eyebrow} title={data.sections.proof.title}>
        <div className="grid gap-5 lg:grid-cols-2">
          {data.sections.proof.cases.map((caseItem) => (
            <article key={caseItem.title} className="rounded-lg border border-border-default bg-bg-surface p-6">
              <h3 className="text-2xl font-semibold text-text-primary">{caseItem.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{caseItem.body}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {caseItem.metrics.map((metric) => (
                  <MetricTile key={`${caseItem.title}-${metric.value}`} metric={metric} dense />
                ))}
              </div>
            </article>
          ))}
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.authority.eyebrow} title={data.sections.authority.title}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr]">
          <AuthorityMap items={data.sections.authority.items} lang={lang} />
          <p className="text-base leading-8 text-text-secondary lg:pt-10">{data.sections.authority.body}</p>
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.economics.eyebrow} title={data.sections.economics.title}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr]">
          <EconomicsChart classical={data.sections.economics.classical} codeguard={data.sections.economics.codeguard} />
          <p className="text-base leading-8 text-text-secondary lg:pt-10">{data.sections.economics.body}</p>
        </div>
      </DeckSection>

      <DeckSection eyebrow={data.sections.gtm.eyebrow} title={data.sections.gtm.title}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div className="space-y-4">
            {data.sections.gtm.steps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-border-default bg-bg-surface p-5">
                <div className="text-xs font-semibold uppercase text-accent-400">0{index + 1}</div>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border-default bg-bg-elevated p-6">
            <div className="text-xs font-semibold uppercase text-text-tertiary">
              {lang === 'ru' ? 'Кто уже чувствует боль' : 'Who already feels the pain'}
            </div>
            <ul className="mt-6 space-y-4">
              {data.sections.gtm.buyers.map((buyer) => (
                <li key={buyer} className="flex gap-3 text-sm leading-7 text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span>{buyer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DeckSection>

      <section className="border-t border-border-default bg-bg-elevated">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="max-w-4xl break-words text-3xl font-semibold leading-tight text-text-primary sm:text-5xl">
            {data.sections.close.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">{data.sections.close.body}</p>
          <div className="mt-10">
            <Button href={footer.telegram} target="_blank" rel="noopener noreferrer" size="lg">
              {data.primaryCta}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function DeckNav({
  back,
  langLabel,
  lang,
  otherLang,
  onLangToggle,
}: {
  back: string;
  langLabel: string;
  lang: Lang;
  otherLang: Lang;
  onLangToggle: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border-default bg-bg-base/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="text-sm font-semibold text-text-primary">
          CodeGuard
        </a>
        <div className="flex items-center gap-3">
          <a href="/" className="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:inline">
            {back}
          </a>
          <button
            type="button"
            onClick={onLangToggle}
            className="rounded-lg border border-border-default px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent-500 hover:text-accent-400"
            aria-label={`${langLabel}: ${otherLang.toUpperCase()}`}
          >
            {lang.toUpperCase()} / {otherLang.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-5 w-1 bg-accent-500" />
      <span className="text-xs font-semibold uppercase text-text-tertiary">{children}</span>
    </div>
  );
}

function DeckSection({
  id,
  eyebrow,
  title,
  children,
  compact = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <section id={id} className="border-b border-border-default">
      <div className={cn('mx-auto max-w-6xl px-4 sm:px-6 lg:px-8', compact ? 'py-16 lg:py-20' : 'py-20 lg:py-28')}>
        <Kicker>{eyebrow}</Kicker>
        <h2 className="mt-5 max-w-4xl break-words text-2xl font-semibold leading-tight text-text-primary sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function MetricTile({ metric, dense = false }: { metric: Metric; dense?: boolean }) {
  return (
    <div className={cn('rounded-lg border border-border-default bg-bg-surface', dense ? 'p-4' : 'p-5')}>
      <div className={cn('font-semibold text-text-primary', dense ? 'text-2xl' : 'text-3xl')}>{metric.value}</div>
      <div className="mt-2 text-sm font-medium text-accent-400">{metric.label}</div>
      <div className="mt-2 text-xs leading-5 text-text-secondary">{metric.note}</div>
    </div>
  );
}

function DebtChart({
  stages,
  codeLabel,
  comprehensionLabel,
  gapLabel,
}: {
  stages: Array<{ label: string; code: number; comprehension: number }>;
  codeLabel: string;
  comprehensionLabel: string;
  gapLabel: string;
}) {
  return (
    <div className="rounded-lg border border-border-default bg-bg-surface p-5 sm:p-7">
      <div className="flex flex-wrap gap-4 text-xs font-medium text-text-secondary">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded bg-red" />{codeLabel}</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded bg-green" />{comprehensionLabel}</span>
      </div>
      <div className="mt-8 grid h-72 grid-cols-4 items-end gap-4 border-b border-l border-border-default px-2 pb-4 sm:gap-8 sm:px-6">
        {stages.map((stage) => (
          <div key={stage.label} className="flex h-full items-end justify-center gap-2">
            <div className="relative h-full w-7 sm:w-10">
              <div className="absolute bottom-0 w-full rounded-t bg-red/80" style={{ height: `${stage.code}%` }} />
            </div>
            <div className="relative h-full w-7 sm:w-10">
              <div className="absolute bottom-0 w-full rounded-t bg-green/80" style={{ height: `${stage.comprehension}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs text-text-secondary">
        {stages.map((stage) => <div key={stage.label}>{stage.label}</div>)}
      </div>
      <div className="mt-6 rounded-lg border border-amber/40 bg-amber/10 p-4 text-sm font-medium text-text-primary">{gapLabel}</div>
    </div>
  );
}

function ImmunizationChart({ stages, lang }: { stages: Array<{ label: string; effort: number; coverage: number }>; lang: Lang }) {
  return (
    <div className="rounded-lg border border-border-default bg-bg-surface p-5 sm:p-7">
      <div className="grid h-72 grid-cols-4 items-end gap-4 border-b border-border-default pb-4 sm:gap-8">
        {stages.map((stage) => (
          <div key={stage.label} className="flex h-full items-end justify-center gap-2">
            <div className="relative h-full w-7 sm:w-10">
              <div className="absolute bottom-0 w-full rounded-t bg-red/80" style={{ height: `${stage.effort}%` }} />
            </div>
            <div className="relative h-full w-7 sm:w-10">
              <div className="absolute bottom-0 w-full rounded-t bg-accent-500/90" style={{ height: `${stage.coverage}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs text-text-secondary">
        {stages.map((stage) => <div key={stage.label}>{stage.label}</div>)}
      </div>
      <div className="mt-6 grid gap-3 text-xs text-text-secondary sm:grid-cols-2">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded bg-red" />{lang === 'ru' ? 'время эксперта' : 'expert time'}</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded bg-accent-500" />{lang === 'ru' ? 'покрытие правилами' : 'guardrail coverage'}</span>
      </div>
    </div>
  );
}

function AuthorityMap({ items, lang }: { items: Array<{ label: string; x: string; y: string; active?: boolean }>; lang: Lang }) {
  return (
    <div className="relative h-[420px] rounded-lg border border-border-default bg-bg-surface p-6">
      <div className="absolute bottom-14 left-12 right-8 h-px bg-border-default" />
      <div className="absolute bottom-14 left-12 top-8 w-px bg-border-default" />
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase text-text-tertiary">
        {lang === 'ru' ? 'Автоматизация' : 'Automation'}
      </div>
      <div className="absolute left-5 top-8 max-w-24 text-xs font-semibold uppercase text-text-tertiary">
        {lang === 'ru' ? 'Доверие' : 'Trust'}
      </div>
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            'absolute max-w-44 rounded-lg border px-4 py-3 text-center text-sm font-semibold shadow-sm',
            item.active ? 'border-accent-500 bg-accent-surface text-text-primary' : 'border-border-default bg-bg-elevated text-text-secondary'
          )}
          style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

function EconomicsChart({ classical, codeguard }: { classical: number[]; codeguard: number[] }) {
  const labels = ['Audit', 'Month 2', 'Month 3'];

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <CostPanel title="Classical audit" values={classical} labels={labels} tone="risk" />
      <CostPanel title="CodeGuard" values={codeguard} labels={labels} tone="control" />
    </div>
  );
}

function CostPanel({ title, values, labels, tone }: { title: string; values: number[]; labels: string[]; tone: 'risk' | 'control' }) {
  return (
    <div className="rounded-lg border border-border-default bg-bg-surface p-5">
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <div className="mt-8 grid h-64 grid-cols-3 items-end gap-4 border-b border-border-default pb-4">
        {values.map((value, index) => (
          <div key={`${title}-${index}-${value}`} className="flex h-full flex-col items-center justify-end">
            <div className="mb-2 text-xs font-semibold text-text-secondary">${value}k</div>
            <div
              className={cn('w-14 rounded-t', tone === 'risk' ? 'bg-red/80' : 'bg-green/80')}
              style={{ height: `${Math.max(value * 2, 8)}%` }}
            />
            <div className="mt-3 text-xs text-text-secondary">{labels[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
