import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { AppProvider } from '@/context/AppContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CodeGuard — AI Development Guardrails',
  description:
    'Внедряем AI-assisted development системно: аудит кода, guardrails для агентов, контроль когнитивного долга. Ваша команда ускоряется — архитектура остаётся управляемой.',
  keywords: [
    'AI development',
    'code audit',
    'guardrails',
    'Claude Code',
    'AI code review',
    'technical debt',
    'cognitive debt',
  ],
  openGraph: {
    title: 'CodeGuard — AI Development Guardrails',
    description: 'Скорость ИИ без контроля — это технический долг со скоростью ИИ.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
