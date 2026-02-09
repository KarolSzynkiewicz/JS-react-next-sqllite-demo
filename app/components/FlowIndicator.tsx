'use client';

import { StateLog } from './StateTracker';

interface FlowIndicatorProps {
  currentStep: 'form' | 'api' | 'database' | 'ui' | null;
}

export default function FlowIndicator({ currentStep }: FlowIndicatorProps) {
  const steps = [
    { id: 'form' as const, label: '📝 Formularz', emoji: '📝' },
    { id: 'api' as const, label: '🚀 API', emoji: '🚀' },
    { id: 'database' as const, label: '💾 Baza', emoji: '💾' },
    { id: 'ui' as const, label: '✨ UI', emoji: '✨' },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
        🔄 Przepływ danych
      </h3>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div
              className={`flex items-center justify-center rounded-full px-3 py-2 transition-all duration-300 ${
                currentStep === step.id
                  ? 'bg-blue-500 text-white shadow-lg scale-110 animate-pulse'
                  : currentStep && steps.findIndex((s) => s.id === currentStep) > index
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
              }`}
            >
              <span className="text-sm font-semibold">{step.emoji}</span>
              <span className="ml-1 text-xs hidden sm:inline">{step.label.split(' ')[1]}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                  currentStep && steps.findIndex((s) => s.id === currentStep) > index
                    ? 'bg-green-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
