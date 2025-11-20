/**
 * FeatureSection Component
 * Showcase product features with icons and descriptions
 * Professional layout with proper spacing and dark mode support
 */

const features = [
  {
    title: "Real-time Tracking",
    description:
      "Monitor shipments with live updates, GPS positioning, and intelligent notifications for every milestone in the delivery journey.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Component Architecture",
    description:
      "Built with reusable React components following best practices. Clean separation of concerns makes the codebase maintainable and scalable.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
  },
  {
    title: "Responsive Design",
    description:
      "Perfectly optimized for all screen sizes using Tailwind's mobile-first approach. Beautiful on desktop, tablet, and mobile devices.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "API Ready",
    description:
      "Structured for easy backend integration. Replace mock data with real API calls without touching your UI components or design system.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Type Safety",
    description:
      "Full TypeScript support with proper interfaces and type definitions. Catch errors early and improve developer experience with IntelliSense.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Performance Optimized",
    description:
      "Built on Vite for lightning-fast hot module replacement. Optimized bundle sizes and efficient rendering for production deployments.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

function FeatureSection() {
  return (
    <section id="features" className="w-full border-b border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section header with better typography */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Everything you need for modern tracking
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:mt-6">
            A complete, production-ready tracking interface with clean component architecture, 
            responsive design, and seamless API integration capabilities.
          </p>
        </div>

        {/* Features grid with improved cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-500/50"
            >
              {/* Icon with improved styling */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 group-hover:shadow-md dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500/20">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

              {/* Subtle hover effect decoration */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-blue-500/5" />
            </div>
          ))}
        </div>

        {/* CTA section with improved design */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-linear-to-br from-gray-50 to-white p-8 shadow-lg dark:border-slate-700 dark:from-slate-800/50 dark:to-slate-800/30 sm:p-12 lg:mt-20">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ready to deploy
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Ready to integrate with your backend?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
              This UI is designed to work seamlessly with your existing API infrastructure. 
              Simply swap the mock data with real endpoints and you're ready to go.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 dark:bg-blue-500 dark:shadow-blue-500/20 dark:hover:bg-blue-600">
                Get Started
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-slate-500 dark:hover:bg-slate-700">
                View Documentation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
