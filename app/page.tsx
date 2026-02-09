/**
 * STRONA STARTOWA - app/page.tsx
 * 
 * W Next.js App Router, plik page.tsx w katalogu app/ automatycznie staje się stroną główną.
 * Ta strona jest dostępna pod adresem: http://localhost:3000/
 * 
 * Jak działa routing w Next.js App Router:
 * 1. Każdy folder w katalogu app/ reprezentuje segment URL-a
 * 2. Plik page.tsx wewnątrz folderu definiuje stronę dla tego segmentu
 * 3. Przykład: app/o-nas/page.tsx → URL: /o-nas
 * 4. Przykład: app/blog/[id]/page.tsx → URL: /blog/123 (dynamiczny routing)
 * 
 * Komponenty w Next.js:
 * - Muszą być eksportowane jako "default export"
 * - Mogą być Server Components (domyślnie) lub Client Components (z "use client")
 * - Server Components renderują się na serwerze (szybsze, lepsze SEO)
 */

// Import komponentu Link z Next.js - używamy go do nawigacji między stronami
// Link zapewnia client-side navigation (szybkie przełączanie bez przeładowania strony)
import Link from "next/link";

/**
 * Komponent Home - główna strona aplikacji
 * Jest to Server Component (domyślnie w Next.js 13+)
 * Renderuje się na serwerze przed wysłaniem do przeglądarki
 */
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8">
        
        {/* Sekcja nagłówkowa */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Lekcja Next.js - Routing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Witaj na stronie startowej! To jest strona główna aplikacji.
          </p>
        </div>

        {/* Sekcja wyjaśniająca routing */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            📚 Jak działa routing w Next.js?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong>1. File-based Routing:</strong> Struktura folderów w katalogu <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/</code> automatycznie tworzy trasy.
            </p>
            <p>
              <strong>2. Ta strona:</strong> Plik <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/page.tsx</code> odpowiada adresowi <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/</code>
            </p>
            <p>
              <strong>3. Inne strony:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/o-nas/page.tsx</code> → <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/o-nas</code>
            </p>
            <p>
              <strong>4. Link Component:</strong> Używamy <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Link</code> zamiast <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">a</code> dla client-side navigation.
            </p>
          </div>
        </div>

        {/* Przyciski nawigacyjne - przykład użycia Link */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* 
            Link z Next.js - to jest kluczowy komponent do nawigacji
            Właściwości:
            - href: ścieżka do strony (zgodna ze strukturą folderów)
            - className: style Tailwind CSS
            - Prefetch: automatycznie pobiera stronę w tle (domyślnie true)
          */}
          <Link 
            href="/o-nas"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            👉 Przejdź do strony "O nas"
          </Link>
          
          <Link 
            href="/produkty"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
          >
            🗄️ CRUD z SQLite - Produkty
          </Link>
          
          <Link 
            href="/stack"
            className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
          >
            📚 Dokumentacja Stacku
          </Link>
          
          <Link 
            href="/pogoda"
            className="px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-colors shadow-md hover:shadow-lg"
          >
            🌤️ Sprawdź Pogodę
          </Link>
          
          <Link 
            href="/cykl-requestu"
            className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
          >
            🔄 Cykl Życia Requestu
          </Link>
          
          <Link 
            href="/lokalizacje"
            className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
          >
            📍 Lokalizacje + Seeder
          </Link>
          
          <Link 
            href="/demo"
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-colors shadow-md hover:shadow-lg"
          >
            🎯 Stack Demo - Pełna demonstracja
          </Link>
        </div>

        {/* Dodatkowe informacje */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            💡 Kliknij przycisk powyżej, aby zobaczyć jak działa nawigacja między stronami!
          </p>
        </div>
      </main>
    </div>
  );
}
