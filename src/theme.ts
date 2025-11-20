/**
 * Theme Initialization
 * Synchronous theme setup to prevent flash of unstyled content (FOUC)
 */

export function initTheme(): void {
  if (typeof window === "undefined") return;

  try {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "dark" || savedTheme === "light" 
      ? savedTheme 
      : prefersDark ? "dark" : "light";

    // Apply theme class immediately
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  } catch {
    // Fallback to light theme if anything fails
    document.documentElement.classList.add("light");
  }
}
