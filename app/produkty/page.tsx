'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingSpinner, { SkeletonLoader } from '../components/LoadingSpinner';

interface Produkt {
  id: number;
  nazwa: string;
  opis: string | null;
  cena: number;
  utworzono: string;
}

export default function CRUDDemoPage() {
  const [produkty, setProdukty] = useState<Produkt[]>([]);
  const [formData, setFormData] = useState({ nazwa: '', opis: '', cena: '' });
  const [edytowanyId, setEdytowanyId] = useState<number | null>(null);
  const [wiadomosc, setWiadomosc] = useState<{ typ: 'success' | 'error', tekst: string } | null>(null);
  const [ladowanie, setLadowanie] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  useEffect(() => {
    pobierzProdukty();
  }, []);

  async function pobierzProdukty() {
    try {
      setLadowanie(true);
      const response = await fetch('/api/produkty');
      const result = await response.json();
      if (result.success) {
        setProdukty(result.data);
      } else {
        pokazWiadomosc('error', 'Nie udało się pobrać danych');
      }
    } catch (error) {
      console.error('Błąd:', error);
      pokazWiadomosc('error', 'Błąd połączenia');
    } finally {
      setLadowanie(false);
    }
  }

  async function dodajProdukt(e: React.FormEvent) {
    e.preventDefault();
    try {
      setLadowanie(true);
      const response = await fetch('/api/produkty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nazwa: formData.nazwa,
          opis: formData.opis || null,
          cena: parseFloat(formData.cena)
        })
      });
      const result = await response.json();
      if (result.success) {
        pokazWiadomosc('success', '✅ CREATE: Produkt dodany do bazy!');
        setFormData({ nazwa: '', opis: '', cena: '' });
        pobierzProdukty();
      } else {
        pokazWiadomosc('error', result.error || 'Błąd');
      }
    } catch (error) {
      pokazWiadomosc('error', 'Błąd połączenia');
    } finally {
      setLadowanie(false);
    }
  }

  async function aktualizujProdukt(e: React.FormEvent) {
    e.preventDefault();
    if (!edytowanyId) return;
    try {
      setLadowanie(true);
      const response = await fetch(`/api/produkty/${edytowanyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nazwa: formData.nazwa,
          opis: formData.opis || null,
          cena: parseFloat(formData.cena)
        })
      });
      const result = await response.json();
      if (result.success) {
        pokazWiadomosc('success', '✅ UPDATE: Produkt zaktualizowany!');
        setFormData({ nazwa: '', opis: '', cena: '' });
        setEdytowanyId(null);
        pobierzProdukty();
      } else {
        pokazWiadomosc('error', result.error || 'Błąd');
      }
    } catch (error) {
      pokazWiadomosc('error', 'Błąd połączenia');
    } finally {
      setLadowanie(false);
    }
  }

  async function usunProdukt(id: number) {
    if (!confirm('Czy na pewno chcesz usunąć ten produkt?')) return;
    try {
      setLadowanie(true);
      const response = await fetch(`/api/produkty/${id}`, { method: 'DELETE' });
      const result = await response.json();
      if (result.success) {
        pokazWiadomosc('success', '✅ DELETE: Produkt usunięty!');
        pobierzProdukty();
      } else {
        pokazWiadomosc('error', result.error || 'Błąd');
      }
    } catch (error) {
      pokazWiadomosc('error', 'Błąd połączenia');
    } finally {
      setLadowanie(false);
    }
  }

  function rozpocznijEdycje(produkt: Produkt) {
    setFormData({
      nazwa: produkt.nazwa,
      opis: produkt.opis || '',
      cena: produkt.cena.toString()
    });
    setEdytowanyId(produkt.id);
  }

  function anulujEdycje() {
    setFormData({ nazwa: '', opis: '', cena: '' });
    setEdytowanyId(null);
  }

  function pokazWiadomosc(typ: 'success' | 'error', tekst: string) {
    setWiadomosc({ typ, tekst });
    setTimeout(() => setWiadomosc(null), 5000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            🗄️ CRUD Operations Demo
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Naucz się tworzyć, odczytywać, aktualizować i usuwać dane z bazy SQLite
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all"
          >
            ← Powrót do strony głównej
          </Link>
        </div>

        {/* What is CRUD Explanation */}
        {showExplanation && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-8 relative">
            <button
              onClick={() => setShowExplanation(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
            >
              ×
            </button>
            <div className="flex items-start gap-6">
              <span className="text-6xl">📚</span>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-black mb-4">Co to jest CRUD?</h2>
                <p className="text-lg mb-4 opacity-90">
                  <strong>CRUD</strong> to akronim od 4 podstawowych operacji na bazie danych:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl mb-2">✏️ <strong>C</strong>reate</div>
                    <p className="text-sm opacity-80">Dodaj nowy rekord do bazy</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl mb-2">👁️ <strong>R</strong>ead</div>
                    <p className="text-sm opacity-80">Odczytaj dane z bazy</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl mb-2">🔄 <strong>U</strong>pdate</div>
                    <p className="text-sm opacity-80">Zaktualizuj istniejący rekord</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl mb-2">🗑️ <strong>D</strong>elete</div>
                    <p className="text-sm opacity-80">Usuń rekord z bazy</p>
                  </div>
                </div>
                <p className="text-sm mt-4 opacity-80">
                  💡 <strong>Prawie każda aplikacja używa CRUD!</strong> Facebook, Instagram, Gmail - wszystkie wykonują te operacje.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Message Banner */}
        {wiadomosc && (
          <div className={`mb-6 p-4 rounded-2xl border-2 animate-fadeIn ${
            wiadomosc.typ === 'success' 
              ? 'bg-green-500/20 border-green-500 text-green-300' 
              : 'bg-red-500/20 border-red-500 text-red-300'
          }`}>
            {wiadomosc.tekst}
          </div>
        )}

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Form - CREATE & UPDATE */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{edytowanyId ? '🔄' : '✏️'}</span>
              <h2 className="text-3xl font-bold text-white">
                {edytowanyId ? 'UPDATE' : 'CREATE'}
              </h2>
            </div>
            <p className="text-white/70 mb-6">
              {edytowanyId 
                ? 'Zaktualizuj wybrany produkt w bazie danych' 
                : 'Dodaj nowy produkt do bazy danych SQLite'}
            </p>
            
            <form onSubmit={edytowanyId ? aktualizujProdukt : dodajProdukt} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  📝 Nazwa produktu *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nazwa}
                  onChange={(e) => setFormData({ ...formData, nazwa: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Np. Laptop Dell XPS"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  📄 Opis (opcjonalnie)
                </label>
                <textarea
                  value={formData.opis}
                  onChange={(e) => setFormData({ ...formData, opis: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Krótki opis produktu..."
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  💰 Cena (PLN) *
                </label>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  value={formData.cena}
                  onChange={(e) => setFormData({ ...formData, cena: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="99.99"
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={ladowanie}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 transition-all transform hover:scale-105"
                >
                  {ladowanie ? '⏳ Zapisywanie...' : (edytowanyId ? '💾 Zapisz zmiany (UPDATE)' : '➕ Dodaj produkt (CREATE)')}
                </button>
                
                {edytowanyId && (
                  <button
                    type="button"
                    onClick={anulujEdycje}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    ❌
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* List - READ & DELETE */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📋</span>
              <h2 className="text-3xl font-bold text-white">
                READ & DELETE
              </h2>
            </div>
            <p className="text-white/70 mb-6">
              Lista wszystkich produktów z bazy danych ({produkty.length})
            </p>
            
            {ladowanie && produkty.length === 0 ? (
              <SkeletonLoader count={3} />
            ) : produkty.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-white/70 text-lg mb-2">Brak produktów</p>
                <p className="text-white/50 text-sm">Dodaj pierwszy produkt używając formularza obok →</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {produkty.map((produkt) => (
                  <div
                    key={produkt.id}
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all animate-fadeIn"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white mb-1">
                          {produkt.nazwa}
                        </h3>
                        {produkt.opis && (
                          <p className="text-sm text-white/70">
                            {produkt.opis}
                          </p>
                        )}
                      </div>
                      <span className="text-2xl font-bold text-green-400 ml-4">
                        {produkt.cena.toFixed(2)} zł
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                      <span className="text-xs text-white/40">
                        ID: {produkt.id} • {new Date(produkt.utworzono).toLocaleString('pl-PL')}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => rozpocznijEdycje(produkt)}
                          className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105"
                        >
                          ✏️ Edytuj
                        </button>
                        <button
                          onClick={() => usunProdukt(produkt.id)}
                          className="px-4 py-1.5 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-all transform hover:scale-105"
                        >
                          🗑️ Usuń
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Technical Explanation */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
            <span>🔧</span> Jak to działa technicznie?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">✏️</span>
                <h3 className="text-xl font-bold text-purple-300">CREATE (POST)</h3>
              </div>
              <code className="text-sm text-white/70 block mb-2">
                POST /api/produkty
              </code>
              <p className="text-sm text-white/80">
                Frontend wysyła dane → API Route → SQLite INSERT → Nowy rekord w bazie
              </p>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👁️</span>
                <h3 className="text-xl font-bold text-blue-300">READ (GET)</h3>
              </div>
              <code className="text-sm text-white/70 block mb-2">
                GET /api/produkty
              </code>
              <p className="text-sm text-white/80">
                Frontend fetchuje → API Route → SQLite SELECT → Zwraca listę produktów
              </p>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔄</span>
                <h3 className="text-xl font-bold text-green-300">UPDATE (PUT)</h3>
              </div>
              <code className="text-sm text-white/70 block mb-2">
                PUT /api/produkty/[id]
              </code>
              <p className="text-sm text-white/80">
                Frontend wysyła zmiany → API Route → SQLite UPDATE → Rekord zaktualizowany
              </p>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🗑️</span>
                <h3 className="text-xl font-bold text-red-300">DELETE (DELETE)</h3>
              </div>
              <code className="text-sm text-white/70 block mb-2">
                DELETE /api/produkty/[id]
              </code>
              <p className="text-sm text-white/80">
                Frontend potwierdza → API Route → SQLite DELETE → Rekord usunięty
              </p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-500/20 rounded-xl p-5 border border-yellow-500/50">
            <strong className="text-yellow-300">💡 Pro Tip:</strong>
            <p className="text-white/80 mt-2">
              CRUD to fundament większości aplikacji webowych. Zrozumienie tych 4 operacji 
              pozwoli Ci budować prawie wszystko - od todo list po sklepy internetowe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
