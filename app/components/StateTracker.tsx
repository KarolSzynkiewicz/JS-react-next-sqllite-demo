'use client';

import { useEffect, useState } from 'react';

export interface StateLog {
  id: string;
  timestamp: number;
  type: 'state' | 'function';
  name: string;
  description: string;
  friendlyDescription?: string;
  currentStep?: 'form' | 'api' | 'database' | 'ui';
  technicalDetails?: string;
}

interface StateTrackerProps {
  logs: StateLog[];
}

export default function StateTracker({ logs }: StateTrackerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [logs]);

  if (logs.length === 0) {
    return (
      <div className="fixed top-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 z-50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            State & Function Tracker
          </h3>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isVisible ? '−' : '+'}
          </button>
        </div>
        {isVisible && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Brak aktywności. Wykonaj akcję, aby zobaczyć logi.
          </p>
        )}
      </div>
    );
  }

  const latestLog = logs[0];

  return (
    <div className="fixed top-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 z-50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          State & Function Tracker
        </h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      {isVisible && (
        <div className="space-y-3">
          <div
            key={latestLog.id}
            className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 animate-pulse"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  latestLog.type === 'state'
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                }`}
              >
                {latestLog.type === 'state' ? 'STATE' : 'FUNCTION'}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(latestLog.timestamp).toLocaleTimeString()}
              </span>
            </div>
            <div className="font-mono text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {latestLog.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {latestLog.description}
            </div>
          </div>
          {logs.length > 1 && (
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              +{logs.length - 1} więcej
            </div>
          )}
        </div>
      )}
    </div>
  );
}
