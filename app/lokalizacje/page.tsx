'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Lokalizacja {
  id: number;
  miasto: string;
  kraj: string;
  region: string | null;
  pogoda: string | null;
  data_sprawdzenia: string | null;
  utworzono: string;
}

export default function LokalizacjePage() {
  const [ladowanie, setLadowanie] = useState(false);
  const [lokalizacje, setLokalizacje] = useState<Lokalizacja[]>([]);
  const [wiadomosc, setWiadomosc] = useState<string>('');
  const [edytowanyId, setEdytowanyId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ miasto: '', kraj: '', region: '' });

  useEffect(() => {
    pobierzLokalizacje();
  }, []);

  async function pobierzLokalizacje() {
    try {
      const res = await fetch('/api/lokalizacje');
      const data = await res.json();
      if (data.success) {
        setLokalizacje(data.data || []);
      } else {
        console.error('Błąd pobierania:', data.error);
        setLokalizacje([]);
      }
    } catch (error) {
      console.error('Błąd:', error);
      setLokalizacje([]);
    }
  }

  async function uruchomSeeder() {
    setLadowanie(true);
    try {
      const res = await fetch('/api/lokalizacje/seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setWiadomosc(`✅ Seeder: dodano ${data.dodano} stałych lokalizacji`);
        await pobierzLokalizacje();
      } else {
        setWiadomosc(`❌ Błąd seeder: ${data.error || 'Nieznany błąd'}`);
      }
    } catch (error) {
      setWiadomosc(`❌ Błąd przy seeder: ${error instanceof Error ? error.message : 'Nieznany błąd'}`);
    } finally {
      setLadowanie(false);
    }
  }

  async function uruchomFactory() {
    setLadowanie(true);
    try {
      const res = await fetch('/api/lokalizacje/factory', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setWiadomosc(`✅ Factory: dodano ${data.dodano} losowych lokalizacji (Faker)`);
        await pobierzLokalizacje();
      } else {
        setWiadomosc(`❌ Błąd factory: ${data.error || 'Nieznany błąd'}`);
      }
    } catch (error) {
      setWiadomosc(`❌ Błąd przy factory: ${error instanceof Error ? error.message : 'Nieznany błąd'}`);
    } finally {
      setLadowanie(false);
    }
  }

  async function pobierzPogode() {
    setLadowanie(true);
    setWiadomosc('');
    try {
      const res = await fetch('/api/lokalizacje/pogoda', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setWiadomosc(`✅ Zaktualizowano pogodę dla ${data.zaktualizowano} lokalizacji`);
        await pobierzLokalizacje();
      } else {
        setWiadomosc(`❌ Błąd: ${data.error || 'Brak lokalizacji w bazie'}`);
      }
    } catch (error) {
      setWiadomosc(`❌ Błąd przy pobieraniu pogody: ${error instanceof Error ? error.message : 'Nieznany błąd'}`);
    } finally {
      setLadowanie(false);
    }
  }

  async function usun(id: number) {
    await fetch(`/api/lokalizacje/${id}`, { method: 'DELETE' });
    pobierzLokalizacje();
  }

  async function zapisz(e: React.FormEvent) {
    e.preventDefault();
    if (edytowanyId) {
      await fetch(`/api/lokalizacje/${edytowanyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          miasto: formData.miasto,
          kraj: formData.kraj,
          region: formData.region || null,
        }),
      });
    } else {
      await fetch('/api/lokalizacje', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          miasto: formData.miasto,
          kraj: formData.kraj,
          region: formData.region || null,
        }),
      });
    }
    setFormData({ miasto: '', kraj: '', region: '' });
    setEdytowanyId(null);
    pobierzLokalizacje();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📍 Lokalizacje i Pogoda
          </h1>
          <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            ← Powrót
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex gap-4 mb-4 flex-wrap">
            <button
              onClick={uruchomSeeder}
              disabled={ladowanie}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              🌱 Seeder (5 stałych)
            </button>
            <button
              onClick={uruchomFactory}
              disabled={ladowanie}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              🏭 Factory (Faker - 5 losowych)
            </button>
            <button
              onClick={pobierzPogode}
              disabled={ladowanie}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              🌤️ Pobierz Pogodę
            </button>
            <button
              onClick={async () => {
                if (confirm('Usunąć wszystkie lokalizacje?')) {
                  setLadowanie(true);
                  try {
                    const res = await fetch('/api/lokalizacje/clear', { method: 'POST' });
                    const data = await res.json();
                    setWiadomosc(`✅ Usunięto ${data.usunieto} lokalizacji`);
                    pobierzLokalizacje();
                  } catch (error) {
                    setWiadomosc('❌ Błąd przy usuwaniu');
                  } finally {
                    setLadowanie(false);
                  }
                }
              }}
              disabled={ladowanie}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
            >
              🗑️ Usuń Wszystkie
            </button>
          </div>
          {wiadomosc && (
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
              {wiadomosc}
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tabela Lokalizacje (CRUD)</h2>
          
          <form onSubmit={zapisz} className="mb-4 grid grid-cols-4 gap-2">
            <input
              type="text"
              placeholder="Miasto"
              value={formData.miasto}
              onChange={(e) => setFormData({ ...formData, miasto: e.target.value })}
              className="px-3 py-2 border rounded dark:bg-gray-700"
              required
            />
            <input
              type="text"
              placeholder="Kraj"
              value={formData.kraj}
              onChange={(e) => setFormData({ ...formData, kraj: e.target.value })}
              className="px-3 py-2 border rounded dark:bg-gray-700"
              required
            />
            <input
              type="text"
              placeholder="Region"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              className="px-3 py-2 border rounded dark:bg-gray-700"
            />
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                {edytowanyId ? '💾 Zapisz' : '➕ Dodaj'}
              </button>
              {edytowanyId && (
                <button
                  type="button"
                  onClick={() => { setEdytowanyId(null); setFormData({ miasto: '', kraj: '', region: '' }); }}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  ❌ Anuluj
                </button>
              )}
            </div>
          </form>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Miasto</th>
                  <th className="border p-2">Kraj</th>
                  <th className="border p-2">Region</th>
                  <th className="border p-2">Pogoda</th>
                  <th className="border p-2">Data sprawdzenia</th>
                  <th className="border p-2">Akcje</th>
                </tr>
              </thead>
              <tbody>
                {lokalizacje.map((loc) => (
                  <tr key={loc.id}>
                    <td className="border p-2">{loc.id}</td>
                    <td className="border p-2">{loc.miasto}</td>
                    <td className="border p-2">{loc.kraj}</td>
                    <td className="border p-2">{loc.region || '-'}</td>
                    <td className="border p-2">{loc.pogoda || '-'}</td>
                    <td className="border p-2 text-xs">
                      {loc.data_sprawdzenia ? new Date(loc.data_sprawdzenia).toLocaleString('pl-PL') : '-'}
                    </td>
                    <td className="border p-2">
                      <button
                        onClick={() => {
                          setEdytowanyId(loc.id);
                          setFormData({
                            miasto: loc.miasto,
                            kraj: loc.kraj,
                            region: loc.region || '',
                          });
                        }}
                        className="px-2 py-1 bg-blue-500 text-white rounded text-sm mr-1"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => usun(loc.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">📚 Szczegółowa Dokumentacja</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-3">🌱 Seeder - Co to jest?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Seeder</strong> to skrypt wypełniający bazę danych początkowymi danymi. W Laravel to klasa DatabaseSeeder, 
                w Next.js to API Route wykonujący operacje na bazie.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>Jak zakodowane:</strong> app/api/lokalizacje/seed/route.ts
              </p>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto mb-2">
{`// 1. Usuwa wszystkie istniejące rekordy
db.prepare('DELETE FROM lokalizacje').run();

// 2. Definiuje 5 stałych lokalizacji (hardcoded)
const lokalizacje = [
  { miasto: 'Warszawa', kraj: 'Poland', region: 'Mazowieckie' },
  ...
];

// 3. Wstawia do bazy w pętli
const stmt = db.prepare('INSERT INTO lokalizacje...');
for (const loc of lokalizacje) {
  stmt.run(loc.miasto, loc.kraj, loc.region);
}`}
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Użycie API:</strong> Frontend wysyła POST /api/lokalizacje/seed → Server wykonuje SQL → Zwraca JSON z liczbą dodanych rekordów
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold mb-3">🏭 Factory - Co to jest?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Factory</strong> to wzorzec generujący losowe dane testowe. W Laravel to ModelFactory, 
                w Next.js używamy Faker.js do generowania danych.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>Jak zakodowane:</strong> app/api/lokalizacje/factory/route.ts
              </p>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto mb-2">
{`// 1. Import Faker
import { faker } from '@faker-js/faker';

// 2. Generuj 5 losowych lokalizacji
const lokalizacje = Array.from({ length: 5 }, () => ({
  miasto: faker.location.city(),      // Losowe miasto
  kraj: faker.location.country(),       // Losowy kraj
  region: faker.location.state(),        // Losowy region
}));

// 3. Wstaw do bazy
const stmt = db.prepare('INSERT INTO lokalizacje...');
for (const loc of lokalizacje) {
  stmt.run(loc.miasto, loc.kraj, loc.region);
}`}
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Użycie API:</strong> POST /api/lokalizacje/factory → Faker generuje dane → Wstawia do bazy → Zwraca wygenerowane dane
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-3">🌤️ Bulk Action - Pobierz Pogodę</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Bulk Action</strong> to operacja wykonywana na wielu rekordach jednocześnie. 
                Zamiast aktualizować jeden rekord, aktualizujemy wszystkie.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>Jak zakodowane:</strong> app/api/lokalizacje/pogoda/route.ts
              </p>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto mb-2">
{`// 1. Pobierz wszystkie lokalizacje z bazy
const lokalizacje = db.prepare('SELECT * FROM lokalizacje').all();

// 2. Dla każdej lokalizacji pobierz pogodę (można równolegle z Promise.all)
for (const loc of lokalizacje) {
  const pogodaTekst = await getWeatherFromWttr(loc.miasto);
  
  // 3. Aktualizuj kolumny "pogoda" i "data_sprawdzenia"
  db.prepare('UPDATE lokalizacje SET pogoda = ?, data_sprawdzenia = ? WHERE id = ?')
    .run(pogodaTekst, new Date().toISOString(), loc.id);
}`}
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Użycie API:</strong> POST /api/lokalizacje/pogoda → Pobiera wszystkie → Dla każdej wywołuje zewnętrzne API → Aktualizuje w bazie → Zwraca liczbę zaktualizowanych
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold mb-3">🗑️ Bulk Delete - Usuń Wszystkie</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Bulk Delete</strong> to masowe usuwanie wszystkich rekordów z tabeli jednym zapytaniem SQL.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>Jak zakodowane:</strong> app/api/lokalizacje/clear/route.ts
              </p>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto mb-2">
{`// DELETE bez WHERE usuwa wszystkie rekordy
const result = db.prepare('DELETE FROM lokalizacje').run();

// result.changes zwraca liczbę usuniętych rekordów
return NextResponse.json({ 
  success: true, 
  usunieto: result.changes 
});`}
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Użycie API:</strong> POST /api/lokalizacje/clear → DELETE FROM lokalizacje → Zwraca liczbę usuniętych
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold mb-3">🔌 Jak używamy API w Next.js</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                W Next.js App Router, API Routes to pliki route.ts w katalogu app/api/.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>1. Struktura:</strong> app/api/lokalizacje/route.ts → endpoint /api/lokalizacje</p>
                <p><strong>2. Metody HTTP:</strong> Eksportujemy funkcje GET, POST, PUT, DELETE</p>
                <p><strong>3. Server-side:</strong> Wykonują się na serwerze (dostęp do DB, plików, zmiennych środowiskowych)</p>
                <p><strong>4. Frontend:</strong> Client Component używa fetch() do komunikacji</p>
              </div>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto mt-3">
{`// Frontend (Client Component)
const response = await fetch('/api/lokalizacje', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ miasto: 'Warszawa', kraj: 'Poland' })
});
const data = await response.json();

// Backend (API Route)
export async function POST(request: NextRequest) {
  const body = await request.json();
  const db = getDatabase();
  // ... operacje na bazie
  return NextResponse.json({ success: true, data: ... });
}`}
              </pre>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold mb-3">📦 Komponenty na stronie</h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">LokalizacjePage (Client Component - 'use client')</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>useState</strong> - stan: lokalizacje[], wiadomosc, formData, edytowanyId</li>
                    <li><strong>useEffect</strong> - przy mount wywołuje pobierzLokalizacje()</li>
                    <li><strong>Funkcje async</strong> - wszystkie używają fetch() do komunikacji z API</li>
                    <li><strong>Formularz</strong> - onSubmit wywołuje zapisz() → POST/PUT do API</li>
                    <li><strong>Tabela</strong> - map() renderuje lokalizacje, przyciski wywołują usun() → DELETE</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">API Routes (Server Components)</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>GET /api/lokalizacje</strong> - pobiera wszystkie (SELECT * FROM lokalizacje)</li>
                    <li><strong>POST /api/lokalizacje</strong> - dodaje nową (INSERT INTO lokalizacje)</li>
                    <li><strong>PUT /api/lokalizacje/[id]</strong> - aktualizuje (UPDATE lokalizacje SET ... WHERE id = ?)</li>
                    <li><strong>DELETE /api/lokalizacje/[id]</strong> - usuwa (DELETE FROM lokalizacje WHERE id = ?)</li>
                    <li><strong>POST /api/lokalizacje/seed</strong> - seeder (DELETE + INSERT)</li>
                    <li><strong>POST /api/lokalizacje/factory</strong> - factory z Faker (INSERT z losowymi danymi)</li>
                    <li><strong>POST /api/lokalizacje/pogoda</strong> - bulk update (UPDATE dla wszystkich)</li>
                    <li><strong>POST /api/lokalizacje/clear</strong> - bulk delete (DELETE bez WHERE)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
