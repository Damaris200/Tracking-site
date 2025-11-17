// TrackingForm: Accessible form to input tracking number and submit
import React from "react";
import Button from "./Button";

interface TrackingFormProps {
  trackingId: string;
  onTrackingIdChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

function TrackingForm({
  trackingId,
  onTrackingIdChange,
  onSubmit,
  loading,
}: TrackingFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="trackingId"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Tracking Number
          </label>
          <p id="trackingIdHelp" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Enter your tracking ID to view shipment details
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="trackingId"
            type="text"
            placeholder="ABC123"
            value={trackingId}
            onChange={(e) => onTrackingIdChange(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            disabled={loading}
            aria-describedby="trackingIdHelp"
            aria-label="Tracking number"
          />
          <Button
            type="submit"
            size="md"
            disabled={loading || !trackingId.trim()}
            className="w-full sm:w-auto"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Tracking...
              </span>
            ) : (
              "Track"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default TrackingForm;
