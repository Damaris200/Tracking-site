/**
 * ThemeToggle Component
 * Switch between light and dark themes with localStorage persistence
 * Uses custom useTheme hook and Lucide React icons
 */
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        console.log("Toggle clicked! Current:", theme);
        toggleTheme();
      }}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition-all hover:bg-gray-50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sun icon (show in dark mode) */}
      <Sun 
        className={`h-5 w-5 transition-all duration-300 ${
          theme === "dark" 
            ? "rotate-0 scale-100 opacity-100" 
            : "rotate-90 scale-0 opacity-0"
        } absolute text-yellow-400`}
      />

      {/* Moon icon (show in light mode) */}
      <Moon 
        className={`h-5 w-5 transition-all duration-300 ${
          theme === "light" 
            ? "rotate-0 scale-100 opacity-100" 
            : "-rotate-90 scale-0 opacity-0"
        } absolute text-gray-700 dark:text-gray-300`}
      />
    </button>
  );
}

export default ThemeToggle;

