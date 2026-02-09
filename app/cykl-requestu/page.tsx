/**
 * STRONA CYKLU ŻYCIA REQUESTU - app/cykl-requestu/page.tsx
 * 
 * Ta strona szczegółowo opisuje jak działa cykl życia requestu w Next.js App Router.
 * 
 * Dostępna pod adresem: http://localhost:3000/cykl-requestu
 * 
 * Zawiera:
 * - Opis pełnego cyklu życia requestu
 * - Różnice między Server Components a Client Components
 * - Jak działają API Routes
 * - Przykłady z diagramami
 * - Szczegółowe wyjaśnienia każdego etapu
 */

import Link from 'next/link';

export default function CyklRequestuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🔄 Cykl Życia Requestu w Next.js
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Kompleksowy przewodnik po tym, jak działa request od przeglądarki do serwera i z powrotem
          </p>
          <Link 
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg"
          >
            ← Powrót do strony głównej
          </Link>
        </div>

        {/* SEKCJA 1: Wprowadzenie */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📖 Wprowadzenie
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              W Next.js App Router, każdy request przechodzi przez określony cykl życia.
              Zrozumienie tego cyklu jest kluczowe do efektywnego programowania w Next.js.
            </p>
            <p>
              <strong>Request</strong> to żądanie wysłane z przeglądarki do serwera (np. otwarcie strony, kliknięcie linku, wysłanie formularza).
            </p>
            <p>
              <strong>Response</strong> to odpowiedź serwera z danymi (HTML, JSON, itp.).
            </p>
          </div>
        </section>

        {/* SEKCJA 2: Podstawowy cykl życia */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Podstawowy Cykl Życia Requestu
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Diagram przepływu:
            </h3>
            <div className="space-y-4 text-sm font-mono">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Przeglądarka:</strong> Użytkownik wpisuje URL lub klika link
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1 text-gray-600 dark:text-gray-400">↓ HTTP Request</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Next.js Server:</strong> Odbiera request, identyfikuje route
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1 text-gray-600 dark:text-gray-400">↓ Renderowanie</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Server Components:</strong> Renderują się na serwerze (dostęp do DB, API)
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1 text-gray-600 dark:text-gray-400">↓ Generowanie HTML</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Response:</strong> HTML + JavaScript wysyłany do przeglądarki
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1 text-gray-600 dark:text-gray-400">↓ Hydration</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded">
                  <strong>Client Components:</strong> Aktywują się w przeglądarce (interaktywność)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 3: Szczegółowy opis każdego etapu */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🔍 Szczegółowy Opis Każdego Etapu
          </h2>

          <div className="space-y-8">
            {/* Etap 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                1️⃣ Przeglądarka - Inicjacja Requestu
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Co się dzieje:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Użytkownik wpisuje URL w pasku adresu (np. <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">http://localhost:3000/produkty</code>)</li>
                  <li>Lub klika link używając komponentu <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Link</code> z Next.js</li>
                  <li>Przeglądarka tworzy HTTP request (GET, POST, PUT, DELETE)</li>
                  <li>Request zawiera: URL, metodę HTTP, nagłówki, cookies, body (dla POST/PUT)</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold mb-2">💡 Przykład:</p>
                  <pre className="text-xs bg-white dark:bg-gray-700 p-3 rounded overflow-x-auto">
{`GET /produkty HTTP/1.1
Host: localhost:3000
Accept: text/html
Cookie: session=abc123`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Etap 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                2️⃣ Next.js Server - Routing i Identyfikacja
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Co się dzieje:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Next.js serwer (Node.js) odbiera request</li>
                  <li><strong>File-based Routing:</strong> Analizuje URL i znajduje odpowiedni plik</li>
                  <li>Przykład: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/produkty</code> → <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/produkty/page.tsx</code></li>
                  <li>Sprawdza czy to Server Component czy Client Component</li>
                  <li>Ładuje layout (jeśli istnieje) i komponenty</li>
                </ul>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold mb-2">📁 Mapowanie URL → Plik:</p>
                  <ul className="text-sm space-y-1">
                    <li><code>/</code> → <code>app/page.tsx</code></li>
                    <li><code>/produkty</code> → <code>app/produkty/page.tsx</code></li>
                    <li><code>/api/produkty</code> → <code>app/api/produkty/route.ts</code></li>
                    <li><code>/api/produkty/123</code> → <code>app/api/produkty/[id]/route.ts</code></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Etap 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                3️⃣ Server Components - Renderowanie po Stronie Serwera
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Co się dzieje (dla Server Components - domyślnie):</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Komponent renderuje się <strong>na serwerze</strong> (w Node.js)</li>
                  <li>Ma dostęp do: bazy danych, plików, API, zmiennych środowiskowych</li>
                  <li>Wykonuje zapytania SQL, wywołania API, itp.</li>
                  <li>Generuje HTML (bez JavaScript dla interaktywności)</li>
                  <li>Wynik jest statyczny - gotowy HTML do wysłania</li>
                </ul>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold mb-2">💻 Przykład Server Component:</p>
                  <pre className="text-xs bg-white dark:bg-gray-700 p-3 rounded overflow-x-auto">
{`// app/page.tsx - Server Component (domyślnie)
import { getDatabase } from '@/lib/db';

export default async function Home() {
  // To wykonuje się NA SERWERZE
  const db = getDatabase();
  const produkty = db.prepare('SELECT * FROM produkty').all();
  
  // Renderuje HTML na serwerze
  return (
    <div>
      <h1>Produkty: {produkty.length}</h1>
    </div>
  );
}`}
                  </pre>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold mb-2">✅ Zalety Server Components:</p>
                  <ul className="text-sm space-y-1">
                    <li>✅ Szybsze (mniej JavaScript do przeglądarki)</li>
                    <li>✅ Lepsze SEO (HTML jest gotowy)</li>
                    <li>✅ Bezpieczne (klucze API nie trafiają do przeglądarki)</li>
                    <li>✅ Dostęp do baz danych bezpośrednio</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Etap 4 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                4️⃣ Response - Wysyłanie HTML do Przeglądarki
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Co się dzieje:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Serwer wysyła gotowy HTML do przeglądarki</li>
                  <li>HTML zawiera: strukturę strony, style CSS, linki do JavaScript</li>
                  <li>JavaScript jest ładowany osobno (React, Next.js runtime)</li>
                  <li>Przeglądarka parsuje HTML i wyświetla stronę</li>
                </ul>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold mb-2">📦 Co jest wysyłane:</p>
                  <ul className="text-sm space-y-1">
                    <li>HTML - struktura strony</li>
                    <li>CSS - style (Tailwind, globalne style)</li>
                    <li>JavaScript - React, Next.js runtime (dla Client Components)</li>
                    <li>Metadata - title, description, itp.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Etap 5 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                5️⃣ Client Components - Hydration i Interaktywność
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Co się dzieje (dla Client Components - "use client"):</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Hydration:</strong> React "ożywia" statyczny HTML</li>
                  <li>JavaScript łączy się z HTML (dodaje event listeners, state)</li>
                  <li>Komponent staje się interaktywny (onClick, useState, useEffect)</li>
                  <li>Działa w przeglądarce użytkownika</li>
                </ul>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold mb-2">💻 Przykład Client Component:</p>
                  <pre className="text-xs bg-white dark:bg-gray-700 p-3 rounded overflow-x-auto">
{`// app/produkty/page.tsx - Client Component
'use client';

import { useState } from 'react';

export default function Produkty() {
  // useState działa TYLKO w przeglądarce
  const [count, setCount] = useState(0);
  
  // onClick działa TYLKO w przeglądarce
  return (
    <button onClick={() => setCount(count + 1)}>
      Kliknięto: {count}
    </button>
  );
}`}
                  </pre>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold mb-2">⚠️ Kiedy używać Client Components:</p>
                  <ul className="text-sm space-y-1">
                    <li>Gdy potrzebujesz useState, useEffect</li>
                    <li>Gdy potrzebujesz event handlers (onClick, onChange)</li>
                    <li>Gdy potrzebujesz interaktywności</li>
                    <li>Gdy używasz bibliotek działających tylko w przeglądarce</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 4: Cykl życia API Route */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🔌 Cykl Życia API Route
          </h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4">
                API Routes działają inaczej niż strony:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold mb-1">Client Component wysyła fetch request</p>
                    <pre className="text-xs bg-white dark:bg-gray-700 p-2 rounded mt-2">
{`fetch('/api/produkty', {
  method: 'POST',
  body: JSON.stringify({ nazwa: 'Laptop' })
})`}
                    </pre>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold mb-1">Next.js Server odbiera request</p>
                    <p className="text-sm">Route: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/produkty</code> → <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/api/produkty/route.ts</code></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold mb-1">Funkcja POST() wykonuje się na serwerze</p>
                    <p className="text-sm">Ma dostęp do: bazy danych, plików, zewnętrznych API</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold mb-1">Serwer zwraca JSON response</p>
                    <pre className="text-xs bg-white dark:bg-gray-700 p-2 rounded mt-2">
{`{
  "success": true,
  "data": { id: 1, nazwa: "Laptop" }
}`}
                    </pre>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <p className="font-semibold mb-1">Client Component otrzymuje dane</p>
                    <p className="text-sm">Aktualizuje UI na podstawie odpowiedzi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Przykład pełnego cyklu API:
              </h3>
              <pre className="text-xs bg-white dark:bg-gray-700 p-4 rounded overflow-x-auto">
{`// 1. Client Component (app/produkty/page.tsx)
'use client';
async function dodajProdukt() {
  // Wysyła request do API
  const response = await fetch('/api/produkty', {
    method: 'POST',
    body: JSON.stringify({ nazwa: 'Laptop', cena: 999 })
  });
  const data = await response.json();
  // Aktualizuje UI
}

// 2. API Route (app/api/produkty/route.ts)
export async function POST(request: NextRequest) {
  // Wykonuje się NA SERWERZE
  const body = await request.json();
  const db = getDatabase();
  db.prepare('INSERT INTO produkty...').run(body);
  
  // Zwraca JSON
  return NextResponse.json({ success: true });
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* SEKCJA 5: Porównanie Server vs Client */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ⚖️ Server Components vs Client Components - Cykl Requestu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                Server Component (domyślnie)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span>Request → Serwer</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span>Renderowanie na serwerze</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span>Dostęp do DB/API</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">4.</span>
                  <span>Generowanie HTML</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">5.</span>
                  <span>Wysłanie HTML do przeglądarki</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">6.</span>
                  <span>Wyświetlenie (bez JavaScript)</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-300 mb-4">
                Client Component ("use client")
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span>Request → Serwer</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span>Renderowanie na serwerze (pierwszy raz)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span>Wysłanie HTML + JavaScript</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">4.</span>
                  <span>Hydration w przeglądarce</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">5.</span>
                  <span>Aktywacja interaktywności</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">6.</span>
                  <span>useState, useEffect działają</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 6: Przykłady z projektu */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            💡 Przykłady z Naszego Projektu
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Przykład 1: Strona główna (Server Component)
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Plik:</strong> <code>app/page.tsx</code>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Cykl:</strong> Request → Serwer renderuje HTML → Wysyła do przeglądarki → Wyświetla się (bez JavaScript)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Przykład 2: Strona produktów (Client Component)
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Plik:</strong> <code>app/produkty/page.tsx</code>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Cykl:</strong>
                </p>
                <ol className="text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside space-y-1 ml-4">
                  <li>Request → Serwer renderuje początkowy HTML</li>
                  <li>HTML + JavaScript wysłane do przeglądarki</li>
                  <li>Hydration - React aktywuje komponent</li>
                  <li>useEffect wykonuje się → fetch('/api/produkty')</li>
                  <li>API Route zwraca dane → UI się aktualizuje</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Przykład 3: API Route - Dodawanie produktu
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Plik:</strong> <code>app/api/produkty/route.ts</code>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Cykl:</strong>
                </p>
                <ol className="text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside space-y-1 ml-4">
                  <li>Client Component: fetch('/api/produkty', {'{'} method: 'POST', body: ... {'}'})</li>
                  <li>Request trafia do serwera</li>
                  <li>Funkcja POST() wykonuje się (ma dostęp do DB)</li>
                  <li>Dodaje produkt do bazy danych</li>
                  <li>Zwraca JSON: {'{'} success: true, data: ... {'}'}</li>
                  <li>Client Component otrzymuje odpowiedź i aktualizuje UI</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 7: Najlepsze praktyki */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ✅ Najlepsze Praktyki
          </h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold mb-1">Używaj Server Components domyślnie</p>
                <p className="text-sm">Są szybsze, bezpieczniejsze i lepsze dla SEO. Używaj Client Components tylko gdy potrzebujesz interaktywności.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔌</span>
              <div>
                <p className="font-semibold mb-1">API Routes dla operacji na danych</p>
                <p className="text-sm">Używaj API Routes do CRUD, komunikacji z zewnętrznymi API, operacji wymagających bezpieczeństwa.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold mb-1">Minimalizuj Client Components</p>
                <p className="text-sm">Im mniej JavaScript w przeglądarce, tym szybsza strona. Przenieś logikę na serwer gdy to możliwe.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <p className="font-semibold mb-1">Zrozum cykl życia</p>
                <p className="text-sm">Wiedza o tym, kiedy co się wykonuje (serwer vs przeglądarka) pomaga w debugowaniu i optymalizacji.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
