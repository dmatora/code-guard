'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Lang, Role } from '@/types/content';

interface AppContextValue {
  role: Role | null;
  lang: Lang;
  setRole: (role: Role) => void;
  setLang: (lang: Lang) => void;
  resetRole: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const legacyInvestorDeckPath = /^\/downloads\/codeguard-investor-deck(?:-(?:ru|en))?\.pptx\/?$/i;

function isLegacyInvestorDeckUrl(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin && legacyInvestorDeckPath.test(url.pathname);
  } catch {
    return false;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role | null>(null);
  const [lang, setLangState] = useState<Lang>('ru');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('cg_lang') as Lang | null;
    const savedRole = localStorage.getItem('cg_role') as Role | null;

    if (savedLang) {
      setLangState(savedLang);
    } else {
      const browserLang = navigator.language || '';
      setLangState(browserLang.toLowerCase().startsWith('ru') ? 'ru' : 'en');
    }

    if (savedRole === 'dev' || savedRole === 'cto' || savedRole === 'investor') {
      setRoleState(savedRole);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLegacyInvestorDeckUrl(window.location.href)) {
      window.location.replace('/investor-deck/');
      return;
    }

    const rewriteLegacyLinks = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
        if (isLegacyInvestorDeckUrl(link.href)) {
          link.href = '/investor-deck/';
          link.removeAttribute('download');
        }
      });
    };

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link || !isLegacyInvestorDeckUrl(link.href)) return;

      event.preventDefault();
      window.location.assign('/investor-deck/');
    };

    rewriteLegacyLinks();

    const observer = new MutationObserver(rewriteLegacyLinks);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
    document.addEventListener('click', handleClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const setRole = (r: Role) => {
    setRoleState(r);
    localStorage.setItem('cg_role', r);
  };

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('cg_lang', l);
  };

  const resetRole = () => {
    setRoleState(null);
    localStorage.removeItem('cg_role');
  };

  if (!mounted) return null;

  return (
    <AppContext.Provider value={{ role, lang, setRole, setLang, resetRole }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
