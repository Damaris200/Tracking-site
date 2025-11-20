// TrackingCard: Modern card for shipment details, progress, and timeline
import type { TrackingData } from "../data/mockTrackingData";

interface TrackingCardProps {
  result: TrackingData | null;
}

function TrackingCard({ result }: TrackingCardProps) {
  if (!result) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-800">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-700">
          <svg
            className="h-10 w-10 text-slate-400 transition-colors group-hover:text-slate-500 dark:text-slate-600 dark:group-hover:text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
          No shipment selected
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
          Enter a tracking number above to view shipment details
        </p>
      </div>
    );
  }

  const { id, status, location, eta, lastUpdated, progress, origin, destination, carrier, weight, timeline } = result;

  const statusConfig = {
    Delivered: {
      color: "text-emerald-700 bg-emerald-100 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    "In Transit": {
      color: "text-blue-700 bg-blue-100 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/30",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    "Out for Delivery": {
      color: "text-purple-700 bg-purple-100 border-purple-200 dark:text-purple-400 dark:bg-purple-500/10 dark:border-purple-500/30",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    Delayed: {
      color: "text-amber-700 bg-amber-100 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/30",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    Processing: {
      color: "text-slate-700 bg-slate-100 border-slate-200 dark:text-slate-400 dark:bg-slate-500/10 dark:border-slate-500/30",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["In Transit"];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Main card with improved styling */}
      <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/60 dark:border-slate-800/50 dark:bg-slate-900/60 dark:shadow-slate-950/50 dark:backdrop-blur-xl dark:hover:border-slate-700/50">
        {/* Header with gradient */}
        <div className="border-b border-slate-200 bg-linear-to-r from-slate-50 via-white to-slate-50 px-6 py-5 dark:border-slate-800/50 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/80">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Tracking ID
              </p>
              <p className="mt-1.5 font-mono text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{id}</p>
            </div>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-sm transition-all duration-200 hover:scale-105 ${config.color}`}
            >
              {config.icon}
              {status}
            </span>
          </div>
        </div>

        {/* Details grid with improved spacing */}
        <div className="p-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group/item">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Origin
              </p>
              <p className="mt-2.5 text-sm font-semibold text-slate-900 transition-colors group-hover/item:text-blue-600 dark:text-slate-200 dark:group-hover/item:text-blue-400">{origin}</p>
            </div>
            <div className="group/item">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Destination
              </p>
              <p className="mt-2.5 text-sm font-semibold text-slate-900 transition-colors group-hover/item:text-blue-600 dark:text-slate-200 dark:group-hover/item:text-blue-400">{destination}</p>
            </div>
            <div className="group/item">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Carrier
              </p>
              <p className="mt-2.5 text-sm font-semibold text-slate-900 transition-colors group-hover/item:text-blue-600 dark:text-slate-200 dark:group-hover/item:text-blue-400">{carrier}</p>
            </div>
            <div className="group/item">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Weight
              </p>
              <p className="mt-2.5 text-sm font-semibold text-slate-900 transition-colors group-hover/item:text-blue-600 dark:text-slate-200 dark:group-hover/item:text-blue-400">{weight}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Current location
              </p>
              <p className="mt-2.5 text-sm font-semibold text-slate-900 dark:text-slate-200">{location}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Estimated delivery
              </p>
              <p className="mt-2.5 text-sm font-semibold text-slate-900 dark:text-slate-200">{eta}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Last updated
              </p>
              <p className="mt-2.5 text-sm font-semibold text-slate-900 dark:text-slate-200">{lastUpdated}</p>
            </div>
          </div>

          {/* Enhanced progress bar with animation */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Delivery progress</p>
              <p className="text-sm font-bold tabular-nums text-slate-900 dark:text-slate-300">{progress}%</p>
            </div>
            <div className="relative h-3 overflow-hidden rounded-full bg-slate-200 shadow-inner dark:bg-slate-800">
              <div
                className="absolute h-full rounded-full bg-linear-to-r from-blue-500 via-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-700 ease-out dark:shadow-blue-500/20"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline with improved styling */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800/50 dark:bg-slate-900/60">
        <h3 className="mb-6 flex items-center gap-2 text-base font-bold text-slate-900 dark:text-slate-50">
          <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Shipment Timeline
        </h3>
        <div className="space-y-5">
          {timeline.map((event, index) => (
            <div key={index} className="group/timeline relative flex gap-5">
              {/* Timeline line with gradient */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-2.5 top-10 h-full w-0.5 bg-linear-to-b from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-800" />
              )}
              
              {/* Enhanced dot with pulse animation for latest event */}
              <div className={`relative z-10 mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                index === 0 
                  ? "bg-blue-500 shadow-lg shadow-blue-500/50 ring-4 ring-blue-100 dark:ring-blue-500/20 dark:shadow-blue-500/30" 
                  : "bg-slate-300 ring-2 ring-slate-100 group-hover/timeline:bg-slate-400 dark:bg-slate-700 dark:ring-slate-800 dark:group-hover/timeline:bg-slate-600"
              }`}>
                {index === 0 && (
                  <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-75" />
                )}
              </div>

              {/* Content with hover effect */}
              <div className="flex-1 pb-6">
                <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg p-3 transition-colors group-hover/timeline:bg-slate-50 dark:group-hover/timeline:bg-slate-900/40">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{event.location}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{event.description}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs font-medium tabular-nums text-slate-500 dark:text-slate-500">{event.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info note with improved styling */}
      <div className="flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/20 dark:bg-blue-500/5">
        <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-xs leading-relaxed text-blue-900 dark:text-blue-200">
          <span className="font-bold">Demo Mode:</span> This is demonstration data from local state. 
          In production, integrate with your tracking API to fetch real-time shipment information.
        </p>
      </div>
    </div>
  );
}

export default TrackingCard;
