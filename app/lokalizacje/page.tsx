'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingSpinner, { SkeletonLoader } from '../components/LoadingSpinner';

interface Lokalizacja {
  id: number;
  miasto: string;
  kraj: string;
  region: string | null;
  pogoda: string | null;
  data_sprawdzenia: string | null;
  utworzono: string;
}

export default function SeederFactoryDemoPage() {
  const [ladowanie, setLadowanie] = useState(false);
  const [lokalizacje, setLokalizacje] = useState<Lokalizacja[]>([]);
  const [wiadomosc, setWiadomosc] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(true);

  useEffect(() => {
    pobierzLokalizacje();
  }, []);

  async function pobierzLokalizacje() {
    try {
      const res = await fetch('/api/lokalizacje');
      const data = await res.json();
      if (data.success) {
        setLokalizacje(data.data || []);
      }
    } catch (error) {
      console.error('Błąd:', error);
    }
  }

  async function uruchomSeeder() {
    setLadowanie(true);
    setWiadomosc('');
    try {
      const res = await fetch('/api/lokalizacje/seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setWiadomosc(`✅ SEEDER: Dodano ${data.dodano} predefiniowanych lokalizacji (Warszawa, Kraków, itd.)`);
        await pobierzLokalizacje();
      } else {
        setWiadomosc(`❌ Błąd: ${data.error || 'Nieznany błąd'}`);
      }
    } catch (error) {
      setWiadomosc(`❌ Błąd: ${error instanceof Error ? error.message : 'Nieznany błąd'}`);
    } finally {
      setLadowanie(false);
    }
  }

  async function uruchomFactory() {
    setLadowanie(true);
    setWiadomosc('');
    try {
      const res = await fetch('/api/lokalizacje/factory', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setWiadomosc(`✅ FACTORY: Wygenerowano ${data.dodano} losowych lokalizacji używając @faker-js/faker`);
        await pobierzLokalizacje();
      } else {
        setWiadomosc(`❌ Błąd: ${data.error || 'Nieznany błąd'}`);
      }
    } catch (error) {
      setWiadomosc(`❌ Błąd: ${error instanceof Error ? error.message : 'Nieznany błąd'}`);
    } finally {
      setLadowanie(false);
    }
  }

  async function usunWszystkie() {
    if (!confirm('Czy na pewno chcesz usunąć WSZYSTKIE lokalizacje?')) return;
    setLadowanie(true);
    try {
      const res = await fetch('/api/lokalizacje/clear', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setWiadomosc(`✅ Usunięto wszystkie lokalizacje`);
        await pobierzLokalizacje();
      } else {
        setWiadomosc(`❌ Błąd: ${data.error}`);
      }
    } catch (error) {
      setWiadomosc(`❌ Błąd`);
    } finally {
      setLadowanie(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            🌱 Seeder & Factory Demo
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Automatyczne wypełnianie bazy danych testowymi danymi
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all"
          >
            ← Powrót do strony głównej
          </Link>
        </div>

        {/* What is Seeder & Factory */}
        {showExplanation && (
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 mb-8 relative">
            <button
              onClick={() => setShowExplanation(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
            >
              ×
            </button>
            <div className="flex items-start gap-6">
              <span className="text-6xl">🌱</span>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-black mb-4">Co to jest Seeder & Factory?</h2>
                <p className="text-lg mb-4 opacity-90">
                  Wyobraź sobie, że budujesz aplikację. Potrzebujesz danych testowych, żeby sprawdzić 
                  czy wszystko działa. Zamiast ręcznie dodawać 100 użytkowników przez formularz, używasz:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-xl p-5">
                    <div className="text-2xl mb-2 font-bold">🌱 SEEDER</div>
                    <p className="text-sm opacity-90 mb-3">
                      Dodaje <strong>konkretne, predefiniowane dane</strong> do bazy
                    </p>
                    <div className="bg-black/30 rounded p-2 text-xs font-mono">
                      Warszawa, Kraków, Gdańsk...<br/>
                      (zawsze te same miasta)
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5">
                    <div className="text-2xl mb-2 font-bold">🎲 FACTORY</div>
                    <p className="text-sm opacity-90 mb-3">
                      Generuje <strong>losowe, realistyczne dane</strong> używając Faker
                    </p>
                    <div className="bg-black/30 rounded p-2 text-xs font-mono">
                      Randomville, Faketown...<br/>
                      (za każdym razem inne)
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
                  <p className="text-sm">
                    <strong>💡 Kiedy używać?</strong> Podczas developmentu, testów, wypełniania demo aplikacji. 
                    Zamiast klikać 100 razy "dodaj" → jeden przycisk i masz pełną bazę!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message */}
        {wiadomosc && (
          <div className={`mb-6 p-5 rounded-2xl border-2 animate-fadeIn ${
            wiadomosc.startsWith('✅') 
              ? 'bg-green-500/20 border-green-500 text-green-300' 
              : 'bg-red-500/20 border-red-500 text-red-300'
          }`}>
            <div className="font-semibold">{wiadomosc}</div>
          </div>
        )}

        {/* Control Panel */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
            <span>🎮</span> Panel Kontrolny
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={uruchomSeeder}
              disabled={ladowanie}
              className="group relative overflow-hidden px-6 py-8 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl font-bold hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <div className="text-5xl mb-3">🌱</div>
              <div className="text-xl mb-2">URUCHOM SEEDER</div>
              <div className="text-sm opacity-80">Dodaj 5 predefiniowanych lokalizacji</div>
            </button>

            <button
              onClick={uruchomFactory}
              disabled={ladowanie}
              className="group relative overflow-hidden px-6 py-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <div className="text-5xl mb-3">🎲</div>
              <div className="text-xl mb-2">URUCHOM FACTORY</div>
              <div className="text-sm opacity-80">Generuj 10 losowych lokalizacji (Faker)</div>
            </button>

            <button
              onClick={usunWszystkie}
              disabled={ladowanie}
              className="group relative overflow-hidden px-6 py-8 bg-gradient-to-br from-red-600 to-rose-600 text-white rounded-2xl font-bold hover:from-red-700 hover:to-rose-700 disabled:opacity-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <div className="text-5xl mb-3">🗑️</div>
              <div className="text-xl mb-2">USUŃ WSZYSTKIE</div>
              <div className="text-sm opacity-80">Wyczyść bazę danych</div>
            </button>
          </div>

          {ladowanie && (
            <div className="mt-6 flex justify-center">
              <LoadingSpinner size="md" text="Przetwarzanie..." />
            </div>
          )}
        </div>

        {/* Results List */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center justify-between">
            <span className="flex items-center gap-3">
              <span>📍</span> Lokalizacje w bazie
            </span>
            <span className="text-2xl bg-purple-500 px-4 py-2 rounded-full">
              {lokalizacje.length}
            </span>
          </h2>
          
          {lokalizacje.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-8xl mb-4">🌍</div>
              <p className="text-white/70 text-xl mb-2">Baza jest pusta</p>
              <p className="text-white/50">Kliknij przycisk powyżej żeby dodać dane testowe!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lokalizacje.map((lok) => (
                <div
                  key={lok.id}
                  className="p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all animate-fadeIn"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        📍 {lok.miasto}
                      </h3>
                      <p className="text-white/70 text-sm">
                        🌍 {lok.kraj}
                        {lok.region && ` • ${lok.region}`}
                      </p>
                    </div>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">
                      ID: {lok.id}
                    </span>
                  </div>
                  
                  <div className="text-xs text-white/40 pt-3 border-t border-white/10">
                    Utworzono: {new Date(lok.utworzono).toLocaleString('pl-PL')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Technical Explanation */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
            <span>🔧</span> Jak to działa technicznie?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🌱</span>
                <h3 className="text-2xl font-bold text-green-300">Seeder</h3>
              </div>
              <code className="text-sm text-white/70 block mb-3">
                POST /api/lokalizacje/seed
              </code>
              <p className="text-white/90 mb-2">
                <strong>Co robi:</strong> Dodaje predefiniowaną listę lokalizacji (array z konkretnymi miastami)
              </p>
              <div className="bg-black/30 rounded p-3 text-xs font-mono text-green-400">
{`const cities = [
  { miasto: 'Warszawa', kraj: 'Polska', region: 'Mazowieckie' },
  { miasto: 'Kraków', kraj: 'Polska', region: 'Małopolskie' },
  // ...
];
cities.forEach(city => db.insert(city));`}
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎲</span>
                <h3 className="text-2xl font-bold text-purple-300">Factory (Faker.js)</h3>
              </div>
              <code className="text-sm text-white/70 block mb-3">
                POST /api/lokalizacje/factory
              </code>
              <p className="text-white/90 mb-2">
                <strong>Co robi:</strong> Używa biblioteki <code className="bg-white/20 px-1 rounded">@faker-js/faker</code> do generowania losowych, realistycznych danych
              </p>
              <div className="bg-black/30 rounded p-3 text-xs font-mono text-purple-400">
{`import { faker } from '@faker-js/faker';

for (let i = 0; i < 10; i++) {
  const location = {
    miasto: faker.location.city(),      // "Smithville"
    kraj: faker.location.country(),      // "United States"
    region: faker.location.state()       // "California"
  };
  db.insert(location);
}`}
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-blue-300 mb-3">🎯 Kiedy używać Seeder vs Factory?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 rounded p-3">
                  <strong className="text-green-400">✓ Seeder - gdy:</strong>
                  <ul className="mt-2 space-y-1 text-white/80">
                    <li>• Potrzebujesz konkretnych danych</li>
                    <li>• Demo dla klienta (realne miasta)</li>
                    <li>• Testy jednostkowe (przewidywalne)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <strong className="text-purple-400">✓ Factory - gdy:</strong>
                  <ul className="mt-2 space-y-1 text-white/80">
                    <li>• Potrzebujesz dużo danych (100+)</li>
                    <li>• Testowanie wydajności</li>
                    <li>• Nie zależy Ci na konkretnych wartościach</li>
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
