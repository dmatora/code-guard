import type { RoleSelectorContent } from '@/types/content';

export const roleSelectorContent: Record<'ru' | 'en', RoleSelectorContent> = {
  ru: {
    heading: 'Кто вы в этой истории?',
    dev: {
      icon: '👨‍💻',
      title: 'Я разработчик',
      description: 'Хочу безопасно работать с ИИ и предложить это команде',
    },
    cto: {
      icon: '👔',
      title: 'Я руководитель / CTO',
      description: 'Хочу контролировать качество кода при использовании ИИ',
    },
    investor: {
      icon: '📈',
      title: 'Я инвестор',
      description: 'Хочу понять, управляем ли AI-generated code как актив и риск',
    },
  },
  en: {
    heading: 'Who are you in this story?',
    dev: {
      icon: '👨‍💻',
      title: "I'm a Developer",
      description: 'I want to work safely with AI and propose it to my team',
    },
    cto: {
      icon: '👔',
      title: "I'm a Manager / CTO",
      description: 'I want to control code quality when using AI',
    },
    investor: {
      icon: '📈',
      title: "I'm an Investor",
      description: 'I want to assess whether AI-generated code is governed as an asset and a risk',
    },
  },
};
