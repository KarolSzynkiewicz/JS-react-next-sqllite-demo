'use client';

interface TechnologySectionProps {
  title: string;
  icon: string;
  description: string;
  features: string[];
  codeExample: string;
  componentType: 'server' | 'client';
}

export default function TechnologySection({
  title,
  icon,
  description,
  features,
  codeExample,
  componentType
}: TechnologySectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-full font-bold ${
            componentType === 'server'
              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
              : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
          }`}>
            {componentType === 'server' ? 'SERVER' : 'CLIENT'}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      
      <div className="mb-4">
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
          Kluczowe funkcje:
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
          <code>{codeExample}</code>
        </pre>
      </div>
    </div>
  );
}
