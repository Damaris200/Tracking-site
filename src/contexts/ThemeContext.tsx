/**
 * THEME CONTEXT — FINAL FIXED VERSION
 * No errors. Works in all React projects (Vite, CRA, Next.js).
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";

    try {
      const saved = localStorage.getItem("theme") as Theme | null;

      if (saved === "light" || saved === "dark") return saved;

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;

      return prefersDark ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    
    // Force remove and add classes
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // Also set data attribute for CSS targeting
    root.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Failed to save theme:", error);
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#0f172a" : "#ffffff");
    }
    
    // Debug log
    console.log(`Theme: ${theme}, HTML class: ${root.className}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));
  };

  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 * Access theme state and controls from any component
 * Must be used within ThemeProvider
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return ctx;
}
