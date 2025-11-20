/**
 * MetricsGrid Component
 * Dashboard-style KPI cards with statistics and trends
 * Fully responsive grid layout with smooth animations
 */
function MetricsGrid() {
  const metrics = [
    {
      label: "Active Shipments",
      value: "2,847",
      change: "+12.5%",
      trend: "up" as const,
      description: "Currently in transit",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      color: "blue",
    },
    {
      label: "Delivered Today",
      value: "1,243",
      change: "+8.2%",
      trend: "up" as const,
      description: "Successfully completed",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      color: "emerald",
    },
    {
      label: "In Transit",
      value: "1,597",
      change: "+5.1%",
      trend: "up" as const,
      description: "On the way",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "purple",
    },
    {
      label: "Delayed",
      value: "7",
      change: "-2.3%",
      trend: "down" as const,
      description: "Behind schedule",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "amber",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500/20",
      emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20",
      purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:group-hover:bg-purple-500/20",
      amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:group-hover:bg-amber-500/20",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600"
        >
          {/* Content */}
          <div className="relative z-10">
            {/* Icon and Label */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {metric.value}
                </p>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 ${getColorClasses(metric.color)}`}>
                {metric.icon}
              </div>
            </div>

            {/* Trend and Description */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-slate-700">
              <div className="flex items-center gap-1.5">
                {metric.trend === "up" ? (
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
                <span className={`text-sm font-bold ${
                  metric.trend === "up" 
                    ? "text-emerald-600 dark:text-emerald-400" 
                    : "text-red-600 dark:text-red-400"
                }`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {metric.description}
              </p>
            </div>
          </div>

          {/* Subtle background decoration */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-gray-100 to-transparent opacity-50 transition-opacity group-hover:opacity-70 dark:from-slate-700 dark:to-transparent" />
        </div>
      ))}
    </div>
  );
}

export default MetricsGrid;
