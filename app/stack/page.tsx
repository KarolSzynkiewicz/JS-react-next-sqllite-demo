/**
 * STRONA DOKUMENTACJI STACKU - app/stack/page.tsx
 * 
 * Ta strona zawiera kompleksową dokumentację całego stacku technologicznego projektu.
 * 
 * Dostępna pod adresem: http://localhost:3000/stack
 * 
 * Zawiera:
 * - Opis wszystkich technologii używanych w projekcie
 * - Podstawowe funkcje i koncepcje
 * - Przykłady kodu
 * - Mapę struktury plików i repozytorium
 * - Wyjaśnienia co gdzie się znajduje
 */

import Link from 'next/link';

export default function StackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            📚 Dokumentacja Stacku Technologicznego
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Kompleksowy przewodnik po technologiach użytych w projekcie
          </p>
          <Link 
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg"
          >
            ← Powrót do strony głównej
          </Link>
        </div>

        {/* SEKCJA 1: STACK TECHNOLOGICZNY */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🛠️ Stack Technologiczny
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Next.js */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                ⚡ Next.js 16.1.6
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Framework React do budowy aplikacji webowych z App Router.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Server Components (domyślnie)</li>
                <li>Client Components (z "use client")</li>
                <li>File-based Routing</li>
                <li>API Routes</li>
                <li>Automatyczna optymalizacja</li>
              </ul>
            </div>

            {/* React */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                ⚛️ React 19.2.3
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Biblioteka JavaScript do budowy interfejsów użytkownika.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Komponenty funkcyjne</li>
                <li>Hooks (useState, useEffect)</li>
                <li>JSX syntax</li>
                <li>Virtual DOM</li>
                <li>Reactive updates</li>
              </ul>
            </div>

            {/* TypeScript */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                📘 TypeScript 5
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Typowany nadzbiór JavaScript z kompilacją do JS.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Typy statyczne</li>
                <li>Interfejsy</li>
                <li>Type inference</li>
                <li>Lepsze IDE support</li>
                <li>Wykrywanie błędów w czasie kompilacji</li>
              </ul>
            </div>

            {/* SQLite */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🗄️ SQLite (better-sqlite3)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lekka, plikowa baza danych relacyjna.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Plikowa baza danych</li>
                <li>Synchroniczne API</li>
                <li>SQL queries</li>
                <li>CRUD operations</li>
                <li>Brak potrzeby serwera</li>
              </ul>
            </div>

            {/* Tailwind CSS */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🎨 Tailwind CSS 4
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Utility-first CSS framework.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Utility classes</li>
                <li>Responsive design</li>
                <li>Dark mode</li>
                <li>Customization</li>
                <li>Purge unused CSS</li>
              </ul>
            </div>

            {/* Node.js */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🟢 Node.js
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Środowisko wykonawcze JavaScript po stronie serwera.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Server-side rendering</li>
                <li>API routes</li>
                <li>File system access</li>
                <li>Database connections</li>
                <li>npm package manager</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEKCJA 2: STRUKTURA PROJEKTU */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📁 Struktura Projektu
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Mapa Repozytorium
            </h3>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`moj-projekt/
├── app/                          # Główny katalog aplikacji (Next.js App Router)
│   ├── page.tsx                  # Strona główna (/)
│   ├── layout.tsx                # Root layout (obejmuje wszystkie strony)
│   ├── globals.css               # Globalne style CSS
│   ├── o-nas/
│   │   └── page.tsx              # Strona "O nas" (/o-nas)
│   ├── produkty/
│   │   └── page.tsx              # Strona produktów z CRUD (/produkty)
│   ├── stack/
│   │   └── page.tsx              # Ta strona - dokumentacja (/stack)
│   └── api/                      # API Routes (endpointy backend)
│       └── produkty/
│           ├── route.ts           # GET, POST /api/produkty
│           └── [id]/
│               └── route.ts       # GET, PUT, DELETE /api/produkty/[id]
├── lib/                          # Biblioteki pomocnicze
│   └── db.ts                     # Inicjalizacja bazy danych SQLite
├── public/                       # Pliki statyczne (obrazy, ikony)
├── node_modules/                 # Zależności npm (ignorowane w git)
├── database.db                   # Plik bazy danych SQLite (ignorowany w git)
├── package.json                  # Konfiguracja projektu i zależności
├── tsconfig.json                 # Konfiguracja TypeScript
├── next.config.ts                # Konfiguracja Next.js
├── tailwind.config.js            # Konfiguracja Tailwind CSS
└── .gitignore                    # Pliki ignorowane przez git`}
            </pre>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                📂 app/ - Katalog główny aplikacji
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                W Next.js App Router, katalog <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/</code> jest sercem aplikacji.
                Każdy folder i plik <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">page.tsx</code> automatycznie tworzy route.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                <li><strong>page.tsx</strong> - definiuje stronę dla danego route</li>
                <li><strong>layout.tsx</strong> - definiuje layout (obejmuje wiele stron)</li>
                <li><strong>route.ts</strong> - definiuje API endpoint (tylko w api/)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🔌 app/api/ - API Routes
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Wszystkie pliki w <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/api/</code> stają się endpointami API.
                Działają tylko po stronie serwera (Server-side).
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                <li><strong>app/api/produkty/route.ts</strong> → <code>/api/produkty</code></li>
                <li><strong>app/api/produkty/[id]/route.ts</strong> → <code>/api/produkty/123</code></li>
                <li>Eksportujemy funkcje: GET, POST, PUT, DELETE</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🗄️ lib/ - Biblioteki pomocnicze
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Katalog na funkcje pomocnicze, które są używane w wielu miejscach.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                <li><strong>lib/db.ts</strong> - inicjalizacja i konfiguracja bazy danych SQLite</li>
                <li>Można dodać więcej: utils, helpers, constants</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEKCJA 3: PODSTAWOWE KONCEPCJE */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            💡 Podstawowe Koncepcje
          </h2>

          <div className="space-y-8">
            {/* File-based Routing */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🗺️ File-based Routing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                W Next.js App Router, struktura folderów automatycznie tworzy routes.
                Nie trzeba konfigurować routingu ręcznie!
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-mono">
                  Struktura folderów → URL
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><code>app/page.tsx</code> → <code className="text-indigo-600">/</code></li>
                  <li><code>app/o-nas/page.tsx</code> → <code className="text-indigo-600">/o-nas</code></li>
                  <li><code>app/produkty/page.tsx</code> → <code className="text-indigo-600">/produkty</code></li>
                  <li><code>app/produkty/[id]/page.tsx</code> → <code className="text-indigo-600">/produkty/123</code> (dynamiczny)</li>
                </ul>
              </div>
            </div>

            {/* Server vs Client Components */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🖥️ Server Components vs Client Components
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                    Server Components (domyślnie)
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>✅ Renderują się na serwerze</li>
                    <li>✅ Szybsze (mniej JS do przeglądarki)</li>
                    <li>✅ Lepsze SEO</li>
                    <li>✅ Dostęp do baz danych</li>
                    <li>❌ Nie mogą używać useState, useEffect</li>
                    <li>❌ Nie mogą używać event handlers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                    Client Components ("use client")
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>✅ Renderują się w przeglądarce</li>
                    <li>✅ Mogą używać useState, useEffect</li>
                    <li>✅ Mogą używać event handlers</li>
                    <li>✅ Interaktywność</li>
                    <li>❌ Więcej JS do przeglądarki</li>
                    <li>❌ Gorsze SEO</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-mono">
                  Przykład Server Component:
                </p>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`// app/page.tsx - Server Component (domyślnie)
export default function Home() {
  return <div>Witaj!</div>;
}`}
                </pre>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 mt-4 font-mono">
                  Przykład Client Component:
                </p>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`// app/produkty/page.tsx - Client Component
'use client';

import { useState } from 'react';

export default function Produkty() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}
                </pre>
              </div>
            </div>

            {/* API Routes */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                🔌 API Routes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                API Routes w Next.js to endpointy backend działające po stronie serwera.
                Używamy ich do komunikacji z bazą danych, zewnętrznymi API, itp.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-mono">
                  Przykład API Route:
                </p>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`// app/api/produkty/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

// GET /api/produkty
export async function GET(request: NextRequest) {
  const db = getDatabase();
  const produkty = db.prepare('SELECT * FROM produkty').all();
  return NextResponse.json({ success: true, data: produkty });
}

// POST /api/produkty
export async function POST(request: NextRequest) {
  const body = await request.json();
  // ... logika dodawania produktu
  return NextResponse.json({ success: true });
}`}
                </pre>
              </div>
            </div>

            {/* CRUD Operations */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                📝 CRUD Operations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                CRUD = Create, Read, Update, Delete - podstawowe operacje na danych.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2">Operacja</th>
                      <th className="px-4 py-2">HTTP Method</th>
                      <th className="px-4 py-2">Endpoint</th>
                      <th className="px-4 py-2">Opis</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 font-semibold">Create</td>
                      <td className="px-4 py-2"><code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">POST</code></td>
                      <td className="px-4 py-2"><code>/api/produkty</code></td>
                      <td className="px-4 py-2">Dodaj nowy produkt</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 font-semibold">Read</td>
                      <td className="px-4 py-2"><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">GET</code></td>
                      <td className="px-4 py-2"><code>/api/produkty</code></td>
                      <td className="px-4 py-2">Pobierz wszystkie produkty</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 font-semibold">Read (one)</td>
                      <td className="px-4 py-2"><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">GET</code></td>
                      <td className="px-4 py-2"><code>/api/produkty/[id]</code></td>
                      <td className="px-4 py-2">Pobierz jeden produkt</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 font-semibold">Update</td>
                      <td className="px-4 py-2"><code className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">PUT</code></td>
                      <td className="px-4 py-2"><code>/api/produkty/[id]</code></td>
                      <td className="px-4 py-2">Zaktualizuj produkt</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 font-semibold">Delete</td>
                      <td className="px-4 py-2"><code className="bg-red-100 dark:bg-red-900 px-2 py-1 rounded">DELETE</code></td>
                      <td className="px-4 py-2"><code>/api/produkty/[id]</code></td>
                      <td className="px-4 py-2">Usuń produkt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 4: PRZYKŁADY KODU */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            💻 Przykłady Kodu
          </h2>

          <div className="space-y-6">
            {/* Przykład 1: Podstawowy komponent */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                1. Podstawowy Server Component
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Plik:</strong> <code>app/page.tsx</code>
                </p>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`// Server Component - renderuje się na serwerze
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Witaj!</h1>
      <Link href="/o-nas">O nas</Link>
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            {/* Przykład 2: Client Component z state */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                2. Client Component z useState
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Plik:</strong> <code>app/produkty/page.tsx</code>
                </p>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`'use client'; // Musi być Client Component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Zwiększ
      </button>
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            {/* Przykład 3: API Route */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                3. API Route z bazą danych
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Plik:</strong> <code>app/api/produkty/route.ts</code>
                </p>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    const produkty = db.prepare('SELECT * FROM produkty').all();
    
    return NextResponse.json({
      success: true,
      data: produkty
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Błąd serwera' },
      { status: 500 }
    );
  }
}`}
                </pre>
              </div>
            </div>

            {/* Przykład 4: Fetch z API */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                4. Fetch danych z API w Client Component
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Plik:</strong> <code>app/produkty/page.tsx</code>
                </p>
                <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`'use client';

import { useState, useEffect } from 'react';

export default function Produkty() {
  const [produkty, setProdukty] = useState([]);
  
  useEffect(() => {
    // Pobierz dane przy załadowaniu komponentu
    fetch('/api/produkty')
      .then(res => res.json())
      .then(data => setProdukty(data.data));
  }, []);
  
  return (
    <div>
      {produkty.map(p => (
        <div key={p.id}>{p.nazwa}</div>
      ))}
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 5: CO GDZIE SIĘ WYŚWIETLA */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🗺️ Co Gdzie Się Wyświetla?
          </h2>

          <div className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4">
                Strony (Pages)
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">/</code>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Strona główna</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/page.tsx</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Wyświetla: Routing w Next.js, linki do innych stron</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">/o-nas</code>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Strona "O nas"</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/o-nas/page.tsx</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Wyświetla: Wyjaśnienia routingu, link powrotny</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">/produkty</code>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Strona produktów</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/produkty/page.tsx</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Wyświetla: Formularz CRUD, lista produktów z bazy danych</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">/stack</code>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Dokumentacja stacku</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/stack/page.tsx</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Wyświetla: Ta strona - pełna dokumentacja projektu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-4">
                API Endpoints
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-48">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">GET /api/produkty</code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/api/produkty/route.ts</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Zwraca: Lista wszystkich produktów z bazy danych</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-48">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">POST /api/produkty</code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/api/produkty/route.ts</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Dodaje: Nowy produkt do bazy danych</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-48">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">GET /api/produkty/[id]</code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/api/produkty/[id]/route.ts</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Zwraca: Jeden produkt o danym ID</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-48">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">PUT /api/produkty/[id]</code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/api/produkty/[id]/route.ts</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Aktualizuje: Produkt o danym ID</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-48">
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm">DELETE /api/produkty/[id]</code>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Plik: <code>app/api/produkty/[id]/route.ts</code></p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Usuwa: Produkt o danym ID z bazy danych</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-4">
                Layout i Style
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">app/layout.tsx</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Root layout - obejmuje WSZYSTKIE strony. Definiuje strukturę HTML (html, body), ładuje czcionki i globalne style.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">app/globals.css</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Globalne style CSS - importowane w layout.tsx. Zawiera style Tailwind i zmienne CSS.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCJA 6: NAWIGACJA */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🔗 Nawigacja w Projekcie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/"
              className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">🏠 Strona główna</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">/</p>
            </Link>
            <Link 
              href="/o-nas"
              className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">📖 O nas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">/o-nas</p>
            </Link>
            <Link 
              href="/produkty"
              className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
            >
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-1">🗄️ Produkty (CRUD)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">/produkty</p>
            </Link>
            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-1">📚 Dokumentacja Stacku</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">/stack (ta strona)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
