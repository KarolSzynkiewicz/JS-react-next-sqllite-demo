'use client';

import { StateLog } from './StateTracker';

interface ActionCommentProps {
  lastAction: StateLog | null;
}

// Helper function to generate technical explanations
function getTechnicalExplanation(action: StateLog) {
  const name = action.name.toLowerCase();
  const description = action.description.toLowerCase();
  
  // React State Updates
  if (name.includes('usestate') || name.includes('setstate') || name.includes('setnotes') || name.includes('settytul') || name.includes('settresc')) {
    return (
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">⚛️ React State Update Flow:</h4>
          <ol className="text-xs text-gray-700 dark:text-gray-300 space-y-2 ml-4 list-decimal">
            <li>
              <strong>setState() wywołane</strong> → React NIE zmienia state natychmiastowo!
            </li>
            <li>
              <strong>React schedules update</strong> → Dodaje do queue (batching dla performance)
            </li>
            <li>
              <strong>React wywołuje component function ponownie</strong> → Re-render z nowym state
            </li>
            <li>
              <strong>Virtual DOM diffing</strong> → React porównuje old vs new Virtual DOM
            </li>
            <li>
              <strong>Reconciliation</strong> → React oblicza minimum zmian potrzebnych w real DOM
            </li>
            <li>
              <strong>DOM updates</strong> → React update'uje tylko zmienione nodes (nie cały DOM!)
            </li>
            <li>
              <strong>Browser repaint/reflow</strong> → Przeglądarka renderuje zmiany na ekranie
            </li>
          </ol>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border-l-4 border-blue-400">
          <p className="text-xs text-blue-800 dark:text-blue-200">
            <strong>💡 Tailwind CSS:</strong> Klasy jak <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">bg-white</code> są kompilowane do CSS podczas build time. Browser otrzymuje gotowe style, nie musi parsować klas w runtime!
          </p>
        </div>
      </div>
    );
  }
  
  // React Component Render
  if (name.includes('render') || name.includes('mount') || name.includes('rerender')) {
    return (
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">⚛️ React Rendering Process:</h4>
          <ol className="text-xs text-gray-700 dark:text-gray-300 space-y-2 ml-4 list-decimal">
            <li>
              <strong>JSX → createElement()</strong> → JSX to syntactic sugar dla React.createElement()
            </li>
            <li>
              <strong>Virtual DOM creation</strong> → React tworzy lightweight representation w pamięci
            </li>
            <li>
              <strong>Component tree traversal</strong> → React przechodzi przez wszystkie komponenty
            </li>
            <li>
              <strong>Diffing algorithm</strong> → Porównuje previous Virtual DOM z new Virtual DOM
            </li>
            <li>
              <strong>Minimal DOM mutations</strong> → Update'uje tylko to co się zmieniło
            </li>
            <li>
              <strong>Browser paint</strong> → Przeglądarka renderuje finalne zmiany
            </li>
          </ol>
        </div>
      </div>
    );
  }
  
  // API/Fetch calls
  if (name.includes('fetch') || name.includes('api') || description.includes('http')) {
    return (
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">🌐 HTTP Request Flow:</h4>
          <ol className="text-xs text-gray-700 dark:text-gray-300 space-y-2 ml-4 list-decimal">
            <li>
              <strong>fetch() wywołane</strong> → Browser API, zwraca Promise
            </li>
            <li>
              <strong>HTTP request</strong> → Browser tworzy HTTP packet (method, headers, body)
            </li>
            <li>
              <strong>Network layer</strong> → TCP/IP → DNS lookup → Connection
            </li>
            <li>
              <strong>Next.js API Route</strong> → Server-side handler (Node.js runtime)
            </li>
            <li>
              <strong>Response</strong> → JSON serialization → HTTP response packet
            </li>
            <li>
              <strong>Browser receives</strong> → Parse JSON → JavaScript object
            </li>
            <li>
              <strong>React state update</strong> → setState() → Re-render → UI update
            </li>
          </ol>
        </div>
      </div>
    );
  }
  
  // Database operations
  if (name.includes('sqlite') || name.includes('database') || name.includes('insert') || name.includes('select') || name.includes('delete')) {
    return (
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">💾 Database Operation Flow:</h4>
          <ol className="text-xs text-gray-700 dark:text-gray-300 space-y-2 ml-4 list-decimal">
            <li>
              <strong>SQL Query prepared</strong> → better-sqlite3 prepare() z placeholders (?)
            </li>
            <li>
              <strong>Parameter binding</strong> → Automatyczne escaping (zapobiega SQL injection!)
            </li>
            <li>
              <strong>Transaction</strong> → ACID properties (Atomicity, Consistency, Isolation, Durability)
            </li>
            <li>
              <strong>File I/O</strong> → SQLite zapisuje do database.db file na dysku
            </li>
            <li>
              <strong>Result returned</strong> → JavaScript object/array z danymi
            </li>
            <li>
              <strong>JSON serialization</strong> → Konwersja do JSON string dla HTTP response
            </li>
          </ol>
        </div>
      </div>
    );
  }
  
  // Default explanation
  return (
    <div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Ta akcja wykonuje się w kontekście React component lifecycle. Wszystkie zmiany są śledzone przez React's reconciliation algorithm, który optymalizuje DOM updates dla najlepszej performance.
      </p>
    </div>
  );
}

export default function ActionComment({ lastAction }: ActionCommentProps) {
  if (!lastAction) {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎯</span>
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            Co się teraz dzieje?
          </h3>
        </div>
        <p className="text-blue-800 dark:text-blue-200 text-lg leading-relaxed">
          👆 Kliknij przycisk poniżej lub wypełnij formularz, a zobaczysz krok po kroku jak dane
          wędrują przez cały stack! Każda akcja jest śledzona i wyświetlana tutaj.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mb-8">
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">✅</span>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">
            Akcja zakończona!
          </h3>
          <span className="text-sm text-green-700 dark:text-green-300 bg-white dark:bg-gray-700 px-2 py-1 rounded">
            {new Date(lastAction.timestamp).toLocaleTimeString('pl-PL')}
          </span>
        </div>
        {lastAction.friendlyDescription ? (
          <p className="text-green-800 dark:text-green-200 text-lg font-medium mb-3">
            {lastAction.friendlyDescription}
          </p>
        ) : (
          <p className="text-green-800 dark:text-green-200 text-lg font-medium mb-3">
            {lastAction.description}
          </p>
        )}
        <details className="mt-3" open>
          <summary className="text-sm text-green-700 dark:text-green-300 cursor-pointer font-semibold hover:text-green-800 dark:hover:text-green-200">
            🔍 Co się dzieje pod spodem? (Szczegóły techniczne)
          </summary>
          <div className="mt-2 bg-white dark:bg-gray-800 rounded p-4 border border-green-200 dark:border-green-800 space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-2 py-1 text-xs font-bold rounded ${
                  lastAction.type === 'state'
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                }`}
              >
                {lastAction.type === 'state' ? 'STATE' : 'FUNCTION'}
              </span>
              <span className="font-mono text-xs font-semibold text-gray-700 dark:text-gray-300">
                {lastAction.name}
              </span>
            </div>
            
            {/* Technical explanation based on action type */}
            {getTechnicalExplanation(lastAction)}
            
            {/* Original description */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Opis akcji:</p>
              <code className="text-xs text-gray-600 dark:text-gray-400 block whitespace-pre-wrap">
                {lastAction.description}
              </code>
            </div>
            
            {lastAction.technicalDetails && (
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Dodatkowe szczegóły:</p>
                <code className="text-xs text-gray-600 dark:text-gray-400 block whitespace-pre-wrap">
                  {lastAction.technicalDetails}
                </code>
              </div>
            )}
          </div>
        </details>
      </div>
    </div>
  );
}
