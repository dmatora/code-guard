'use client';

import { useApp } from '@/context/AppContext';
import { roleSelectorContent } from '@/content/roleSelector';
import type { Role } from '@/types/content';
import { cn } from '@/lib/cn';

export function RoleSelector() {
  const { role, lang, setRole } = useApp();

  if (role !== null) return null;

  const content = roleSelectorContent[lang];

  const handleSelect = (r: Role) => {
    setRole(r);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-base">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <ShieldIcon className="w-6 h-6 text-accent-500" />
            <span className="text-xl font-semibold text-text-primary tracking-tight">
              CodeGuard
            </span>
          </div>
          <span className="text-xs text-text-tertiary tracking-widest uppercase">
            AI Development Guardrails
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-10 leading-snug">
          {content.heading}
        </h1>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RoleCard
            icon={content.dev.icon}
            title={content.dev.title}
            description={content.dev.description}
            onClick={() => handleSelect('dev')}
          />
          <RoleCard
            icon={content.cto.icon}
            title={content.cto.title}
            description={content.cto.description}
            onClick={() => handleSelect('cto')}
          />
        </div>
      </div>
    </div>
  );
}

interface RoleCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

function RoleCard({ icon, title, description, onClick }: RoleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group text-left p-6 rounded-2xl border border-border-default bg-bg-surface',
        'hover:border-accent-500 hover:bg-bg-elevated',
        'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500'
      )}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <div className="font-semibold text-text-primary text-base mb-2 group-hover:text-accent-400 transition-colors">
        {title}
      </div>
      <div className="text-sm text-text-secondary leading-relaxed">{description}</div>
    </button>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
