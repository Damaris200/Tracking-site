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
            className="h-8 w-8 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          No shipment selected
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Enter a tracking number to view details
        </p>
      </div>
    );
  }

  const { id, status, location, eta, lastUpdated, progress, origin, destination, carrier, weight, timeline } = result;

  const statusConfig = {
    Delivered: {
      color: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    "In Transit": {
      color: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    "Out for Delivery": {
      color: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-500/10 dark:border-purple-500/20",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    Delayed: {
      color: "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    Processing: {
      color: "text-gray-700 bg-gray-50 border-gray-200 dark:text-gray-400 dark:bg-gray-500/10 dark:border-gray-500/20",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["In Transit"];

  return (
    <div className="space-y-6">
      {/* Main shipment card */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        {/* Header */}
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tracking ID
              </p>
              <p className="mt-1 font-mono text-lg font-semibold text-gray-900 dark:text-white">{id}</p>
            </div>
            <span
              className={`inline-flex w-fit items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium ${config.color}`}
            >
              {config.icon}
              {status}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Origin
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{origin}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Destination
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{destination}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Carrier
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{carrier}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Weight
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{weight}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Current location
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{location}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Estimated delivery
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{eta}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Last updated
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{lastUpdated}</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Delivery progress</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{progress}%</p>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500 dark:bg-blue-500"
                style={{ width: `${progress}%` } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-5 text-sm font-semibold text-gray-900 dark:text-white">Timeline</h3>
        <div className="space-y-4">
          {timeline.map((event, index) => (
            <div key={index} className="relative flex gap-4">
              {/* Timeline line */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-2 top-6 h-full w-px bg-gray-200 dark:bg-slate-700" />
              )}
              
              {/* Dot */}
              <div className={`relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                index === 0 
                  ? "bg-blue-600 ring-4 ring-blue-100 dark:bg-blue-500 dark:ring-blue-500/20" 
                  : "bg-gray-300 dark:bg-slate-600"
              }`} />

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{event.location}</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{event.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrackingCard;
