/**
 * STRONA "O NAS" - app/o-nas/page.tsx
 * 
 * Ta strona jest dostępna pod adresem: http://localhost:3000/o-nas
 * 
 * Jak działa routing dla tej strony:
 * 1. Folder "o-nas" w katalogu app/ tworzy segment URL-a: /o-nas
 * 2. Plik page.tsx wewnątrz tego folderu definiuje zawartość strony
 * 3. Next.js automatycznie rozpoznaje tę strukturę i tworzy trasę
 * 
 * Hierarchia routingu:
 * - app/page.tsx → /
 * - app/o-nas/page.tsx → /o-nas
 * - app/blog/page.tsx → /blog
 * - app/kontakt/page.tsx → /kontakt
 * 
 * Wszystko działa automatycznie - nie trzeba konfigurować routingu ręcznie!
 */

// Import komponentu Link do nawigacji
import Link from "next/link";

/**
 * Komponent About - strona "O nas"
 * 
 * To jest również Server Component (domyślnie w Next.js)
 * Server Components:
 * - Renderują się na serwerze
 * - Mają dostęp do baz danych i API bezpośrednio
 * - Nie mogą używać useState, useEffect, event handlers
 * - Są szybsze i lepsze dla SEO
 * 
 * Jeśli potrzebujesz interaktywności (onClick, useState), dodaj "use client" na górze
 */
export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8">
        
        {/* Nagłówek strony */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            📖 O Nas
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            To jest druga strona w naszej aplikacji!
          </p>
        </div>

        {/* Sekcja wyjaśniająca routing dla tej strony */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            🔍 Analiza routingu dla tej strony:
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <p className="font-mono text-sm mb-2">
                <strong>Struktura plików:</strong>
              </p>
              <pre className="text-xs bg-gray-100 dark:bg-gray-600 p-3 rounded overflow-x-auto">
{`app/
  ├── page.tsx          → / (strona główna)
  └── o-nas/
      └── page.tsx      → /o-nas (ta strona)`}
              </pre>
            </div>
            
            <p>
              <strong>1. Folder "o-nas":</strong> Nazwa folderu staje się segmentem URL-a.
            </p>
            <p>
              <strong>2. Plik page.tsx:</strong> Ten plik definiuje zawartość strony dla tego segmentu.
            </p>
            <p>
              <strong>3. Automatyczny routing:</strong> Next.js automatycznie tworzy trasę bez konfiguracji!
            </p>
            <p>
              <strong>4. Client-side navigation:</strong> Link poniżej używa client-side navigation (szybkie, bez przeładowania).
            </p>
          </div>
        </div>

        {/* Sekcja z przykładami routingu */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            🎯 Przykłady routingu w Next.js:
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📁</span>
              <div>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">app/kontakt/page.tsx</code>
                <span className="ml-2">→ URL: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">/kontakt</code></span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📁</span>
              <div>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">app/blog/page.tsx</code>
                <span className="ml-2">→ URL: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">/blog</code></span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📁</span>
              <div>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">app/produkty/[id]/page.tsx</code>
                <span className="ml-2">→ URL: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">/produkty/123</code> (dynamiczny)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Przycisk powrotu do strony głównej */}
        <div className="flex gap-4">
          {/* 
            Link z powrotem do strony głównej
            href="/" oznacza główną stronę (app/page.tsx)
            
            Różnica między Link a zwykłym <a>:
            - Link: Client-side navigation (szybkie, bez przeładowania całej strony)
            - <a>: Pełne przeładowanie strony (wolniejsze)
            
            Next.js automatycznie prefetchuje strony Link w tle dla lepszej wydajności
          */}
          <Link 
            href="/"
            className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
          >
            🏠 Powrót do strony głównej
          </Link>
        </div>

        {/* Dodatkowe informacje */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm mb-2">
            ✅ Widzisz jak działa nawigacja? To jest client-side routing!
          </p>
          <p className="text-xs">
            Strona załadowała się szybko bez pełnego przeładowania przeglądarki.
          </p>
        </div>
      </main>
    </div>
  );
}
