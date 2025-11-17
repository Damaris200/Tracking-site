import { useState } from "react";
import HeroSection from "../components/HeroSection";
import TrackingForm from "../components/TrackingForm";
import TrackingCard from "../components/TrackingCard";
import FeatureSection from "../components/FeatureSection";
import { mockTrackingData } from "../data/mockTrackingData";
import type { TrackingData } from "../data/mockTrackingData";

function Home() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const trimmed = trackingId.trim();
    if (!trimmed) return;

    setLoading(true);
    setNotFound(false);

    // Simulate API delay
    setTimeout(() => {
      const found = mockTrackingData[trimmed.toUpperCase()];
      if (found) {
        setResult(found);
        setNotFound(false);
      } else {
        setResult(null);
        setNotFound(true);
      }
      setLoading(false);
    }, 600);
  }

  return (
    <div className="w-full">
      {/* Hero Section with Tracking Form */}
      <HeroSection>
        <TrackingForm
          trackingId={trackingId}
          onTrackingIdChange={setTrackingId}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </HeroSection>

      {/* Tracking Results Section */}
      <section id="tracking" className="w-full border-b border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
              Shipment Details
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              View real-time tracking information for your shipment
            </p>
          </div>

          {notFound && (
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                    Tracking number not found
                  </p>
                  <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
                    Try <span className="font-mono font-semibold">ABC123</span>,{" "}
                    <span className="font-mono font-semibold">XYZ789</span>,{" "}
                    <span className="font-mono font-semibold">DEF456</span>,{" "}
                    <span className="font-mono font-semibold">GHI012</span>,{" "}
                    <span className="font-mono font-semibold">JKL345</span>,{" "}
                    <span className="font-mono font-semibold">MNO678</span>,{" "}
                    <span className="font-mono font-semibold">PQR901</span>, or{" "}
                    <span className="font-mono font-semibold">STU234</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          <TrackingCard result={result} />
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />
    </div>
  );
}

export default Home;
