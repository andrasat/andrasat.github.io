'use client';
import { createContext, useState, useEffect } from 'react';

export type ThemeType = 'dark' | 'light';

export interface ThemeProviderContextProps {
  toggleTheme: (val: ThemeType) => void;
}

export const ThemeProviderContext = createContext<ThemeProviderContextProps>({
  toggleTheme: (_: ThemeType) => {},
});

export function ThemeProvider({ children, value }: { children: React.ReactNode; value?: string }) {
  const toggleTheme = (val: ThemeType) => {
    switch (val) {
      case 'dark':
        document.documentElement.classList.add('dark');
        break;
      case 'light':
        document.documentElement.classList.remove('dark');
        break;
    }
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches || value === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [value]);

  return (
    <ThemeProviderContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
