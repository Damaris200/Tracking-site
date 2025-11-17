// HeroSection: Landing hero with badge, feature highlights, tracking form, and metrics
import MetricsGrid from "./MetricsGrid";

interface HeroSectionProps {
  children?: React.ReactNode;
}

function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:border-slate-700 dark:from-slate-900 dark:to-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-20">
        {/* Hero content with staggered animations */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge with slide-in animation */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            </span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Real-time Tracking
            </span>
          </div>

          {/* Main heading with fade-in-up animation */}
          <h1 className="animate-delay-100 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Enterprise Shipment <br className="hidden sm:inline" />
            Tracking Platform
          </h1>

          {/* Subheading with delayed fade-in */}
          <p className="animate-delay-200 mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Track and manage your shipments with precision. Real-time updates, 
            intelligent routing, and comprehensive analytics for modern logistics.
          </p>

          {/* Feature cards - 3 cards in a row */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="animate-delay-300 group rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Real-time Updates</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Live tracking with instant notifications
              </p>
            </div>

            {/* Card 2 */}
            <div className="animate-delay-400 group rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover:bg-green-100 dark:bg-green-500/10 dark:text-green-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Accurate ETAs</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                AI-powered delivery predictions
              </p>
            </div>

            {/* Card 3 */}
            <div className="animate-delay-500 group rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-100 dark:bg-purple-500/10 dark:text-purple-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Analytics</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Comprehensive shipment insights
              </p>
            </div>
          </div>
        </div>

        {/* Tracking Form with animation */}
        <div className="animate-delay-600 mx-auto mt-12 max-w-2xl">
          {children}
        </div>

        {/* Metrics with animation */}
        <div id="metrics" className="animate-delay-700 mt-16">
          <MetricsGrid />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
