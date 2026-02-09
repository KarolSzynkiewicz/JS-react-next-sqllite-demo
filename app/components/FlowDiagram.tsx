'use client';

export default function FlowDiagram() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        🔄 Przepływ danych w aplikacji
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">UI (React Component)</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Użytkownik wypełnia formularz, klika przycisk
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-2xl text-gray-400">↓</div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">React State (useState)</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              setState aktualizuje lokalny stan komponentu
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-2xl text-gray-400">↓</div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">API Route (Next.js)</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              fetch() wysyła request do /api/notatki
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-2xl text-gray-400">↓</div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            4
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">SQLite (better-sqlite3)</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              INSERT/UPDATE/DELETE w bazie danych
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-2xl text-gray-400">↓</div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
            5
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">UI Update (React)</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              useEffect wykrywa zmianę, rerender komponentu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
