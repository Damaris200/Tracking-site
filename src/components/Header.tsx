// Header: Sticky top navigation with brand, links, theme toggle, and mobile menu
import { useState } from "react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-700 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Clean and minimal */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            TrackFlow
          </span>
        </button>

        {/* Navigation - Professional spacing */}
        <nav className="hidden items-center gap-8 md:flex" role="navigation" aria-label="Primary">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label="Go to Home"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label="View Features"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("tracking")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label="Open Tracking"
          >
            Track Shipment
          </button>
          <button
            onClick={() => scrollToSection("metrics")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label="View Analytics"
          >
            Analytics
          </button>
        </nav>

        {/* Actions - Clean alignment */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm" className="hidden md:inline-flex">Get started</Button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900 md:hidden" id="mobile-nav">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6 lg:px-8" role="navigation" aria-label="Mobile">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("tracking")}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Track Shipment
            </button>
            <button
              onClick={() => scrollToSection("metrics")}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Analytics
            </button>
            <div className="border-t border-gray-200 pt-3 dark:border-slate-700">
              <Button variant="ghost" size="sm" className="mb-2 w-full justify-center">
                Sign in
              </Button>
              <Button size="sm" className="w-full justify-center">Get started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
