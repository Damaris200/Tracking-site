
import MetricsGrid from "./MetricsGrid";

interface HeroSectionProps {
  children?: React.ReactNode;
}

function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-slate-900">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-background"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/90" />
      
      {/* Optional gradient overlay for extra sophistication */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-slate-900/50 dark:via-transparent dark:to-slate-800/50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.08]" />
      
      {/* Decorative gradient orbs - subtle and professional */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-100 opacity-20 blur-3xl dark:bg-blue-500 dark:opacity-10" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-100 opacity-20 blur-3xl dark:bg-purple-500 dark:opacity-10" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        {/* Main content container with improved structure */}
        <div className="mx-auto max-w-4xl">
          
          {/* Status Badge - Professional indicator */}
          <div className="animate-fade-in mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 shadow-sm backdrop-blur-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-blue-500/30 dark:bg-blue-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              </span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                Live Tracking System
              </span>
              <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Hero Headline - Improved typography and spacing */}
          <div className="animate-delay-100 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Enterprise Shipment
              <span className="mt-2 block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                Tracking Platform
              </span>
            </h1>
            
            {/* Value Proposition - Clear and concise */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              Monitor shipments in real-time with AI-powered insights, intelligent routing, 
              and enterprise-grade analytics for modern logistics management.
            </p>
          </div>

          {/* Value Propositions - Professional feature highlights */}
          <div className="animate-delay-200 mt-12 grid gap-6 sm:grid-cols-3">
            {/* Feature 1: Real-time Updates */}
            <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-500/50">
              {/* Icon container */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110 dark:shadow-blue-500/20">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Real-time Updates
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Live tracking with instant push notifications for every milestone
              </p>
              
              {/* Decorative element */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-blue-500/10" />
            </div>

            {/* Feature 2: Accurate ETAs */}
            <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-green-500/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25 transition-transform group-hover:scale-110 dark:shadow-green-500/20">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Accurate ETAs
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                AI-powered predictions with 95% accuracy for delivery times
              </p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-green-500/10" />
            </div>

            {/* Feature 3: Advanced Analytics */}
            <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-purple-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-purple-500/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25 transition-transform group-hover:scale-110 dark:shadow-purple-500/20">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Advanced Analytics
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Comprehensive insights and performance metrics dashboard
              </p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-purple-500/10" />
            </div>
          </div>

          {/* Call-to-Action Section - Tracking Form */}
          <div className="animate-delay-300 mt-16">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-800/50 sm:p-10">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  Track Your Shipment
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Enter your tracking number to get real-time updates
                </p>
              </div>
              {children}
            </div>
          </div>
        </div>

        {/* Performance Metrics Section - Separated for clarity */}
        <div id="metrics" className="animate-delay-400 mt-20">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Platform Performance
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Real-time statistics and operational metrics
            </p>
          </div>
          <MetricsGrid />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
