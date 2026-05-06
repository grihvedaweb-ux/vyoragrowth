import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'dark' | 'light' | 'sand';

type Ctx = { theme: Theme; setTheme: (t: Theme) => void; cycle: () => void };
const ThemeContext = createContext<Ctx>({ theme: 'dark', setTheme: () => {}, cycle: () => {} });

const KEY = 'vyora-theme';
const ORDER: Theme[] = ['dark', 'light', 'sand'];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem(KEY) as Theme) || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
  }, [theme]);

  const cycle = () => setTheme(ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length]);

  return <ThemeContext.Provider value={{ theme, setTheme, cycle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
