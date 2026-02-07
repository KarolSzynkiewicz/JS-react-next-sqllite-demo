/**
 * STRONA PRODUKTÓW - app/produkty/page.tsx
 * 
 * Ta strona demonstruje operacje CRUD z bazą danych SQLite.
 * 
 * Jak działa komunikacja z API w Next.js:
 * 1. Frontend (Client Component) wysyła requesty do API Routes
 * 2. API Routes (Server-side) komunikują się z bazą danych
 * 3. API zwraca dane jako JSON
 * 4. Frontend aktualizuje UI na podstawie odpowiedzi
 * 
 * CRUD Operations:
 * - CREATE: POST /api/produkty - dodaj nowy produkt
 * - READ: GET /api/produkty - pobierz wszystkie produkty
 * - UPDATE: PUT /api/produkty/[id] - zaktualizuj produkt
 * - DELETE: DELETE /api/produkty/[id] - usuń produkt
 * 
 * "use client" - ten komponent musi być Client Component,
 * ponieważ używa useState, useEffect i event handlers
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Typ dla produktu (zgodny ze schematem bazy danych)
 */
interface Produkt {
  id: number;
  nazwa: string;
  opis: string | null;
  cena: number;
  utworzono: string;
}

export default function ProduktyPage() {
  // State dla listy produktów
  const [produkty, setProdukty] = useState<Produkt[]>([]);
  
  // State dla formularza (dodawanie/edycja)
  const [formData, setFormData] = useState({
    nazwa: '',
    opis: '',
    cena: ''
  });
  
  // State dla edycji
  const [edytowanyId, setEdytowanyId] = useState<number | null>(null);
  
  // State dla komunikatu
  const [wiadomosc, setWiadomosc] = useState<{ typ: 'success' | 'error', tekst: string } | null>(null);
  
  // State dla ładowania
  const [ladowanie, setLadowanie] = useState(false);

  /**
   * useEffect - wykonuje się po zamontowaniu komponentu
   * Pobiera produkty z API przy pierwszym załadowaniu strony
   */
  useEffect(() => {
    pobierzProdukty();
  }, []);

  /**
   * Funkcja do pobierania wszystkich produktów
   * GET /api/produkty
   */
  async function pobierzProdukty() {
    try {
      setLadowanie(true);
      const response = await fetch('/api/produkty');
      const result = await response.json();
      
      if (result.success) {
        setProdukty(result.data);
      } else {
        pokazWiadomosc('error', 'Nie udało się pobrać produktów');
      }
    } catch (error) {
      console.error('Błąd:', error);
      pokazWiadomosc('error', 'Błąd połączenia z serwerem');
    } finally {
      setLadowanie(false);
    }
  }

  /**
   * Funkcja do dodawania nowego produktu
   * POST /api/produkty
   */
  async function dodajProdukt(e: React.FormEvent) {
    e.preventDefault();
    
    try {
      setLadowanie(true);
      const response = await fetch('/api/produkty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nazwa: formData.nazwa,
          opis: formData.opis || null,
          cena: parseFloat(formData.cena)
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        pokazWiadomosc('success', 'Produkt został dodany pomyślnie!');
        setFormData({ nazwa: '', opis: '', cena: '' });
        pobierzProdukty(); // Odśwież listę
      } else {
        pokazWiadomosc('error', result.error || 'Nie udało się dodać produktu');
      }
    } catch (error) {
      console.error('Błąd:', error);
      pokazWiadomosc('error', 'Błąd połączenia z serwerem');
    } finally {
      setLadowanie(false);
    }
  }

  /**
   * Funkcja do aktualizacji produktu
   * PUT /api/produkty/[id]
   */
  async function aktualizujProdukt(e: React.FormEvent) {
    e.preventDefault();
    
    if (!edytowanyId) return;
    
    try {
      setLadowanie(true);
      const response = await fetch(`/api/produkty/${edytowanyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nazwa: formData.nazwa,
          opis: formData.opis || null,
          cena: parseFloat(formData.cena)
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        pokazWiadomosc('success', 'Produkt został zaktualizowany pomyślnie!');
        setFormData({ nazwa: '', opis: '', cena: '' });
        setEdytowanyId(null);
        pobierzProdukty(); // Odśwież listę
      } else {
        pokazWiadomosc('error', result.error || 'Nie udało się zaktualizować produktu');
      }
    } catch (error) {
      console.error('Błąd:', error);
      pokazWiadomosc('error', 'Błąd połączenia z serwerem');
    } finally {
      setLadowanie(false);
    }
  }

  /**
   * Funkcja do usuwania produktu
   * DELETE /api/produkty/[id]
   */
  async function usunProdukt(id: number) {
    if (!confirm('Czy na pewno chcesz usunąć ten produkt?')) {
      return;
    }
    
    try {
      setLadowanie(true);
      const response = await fetch(`/api/produkty/${id}`, {
        method: 'DELETE'
      });
      
      const result = await response.json();
      
      if (result.success) {
        pokazWiadomosc('success', 'Produkt został usunięty pomyślnie!');
        pobierzProdukty(); // Odśwież listę
      } else {
        pokazWiadomosc('error', result.error || 'Nie udało się usunąć produktu');
      }
    } catch (error) {
      console.error('Błąd:', error);
      pokazWiadomosc('error', 'Błąd połączenia z serwerem');
    } finally {
      setLadowanie(false);
    }
  }

  /**
   * Funkcja do rozpoczęcia edycji produktu
   * Wypełnia formularz danymi produktu
   */
  function rozpocznijEdycje(produkt: Produkt) {
    setFormData({
      nazwa: produkt.nazwa,
      opis: produkt.opis || '',
      cena: produkt.cena.toString()
    });
    setEdytowanyId(produkt.id);
  }

  /**
   * Funkcja do anulowania edycji
   */
  function anulujEdycje() {
    setFormData({ nazwa: '', opis: '', cena: '' });
    setEdytowanyId(null);
  }

  /**
   * Funkcja pomocnicza do wyświetlania wiadomości
   */
  function pokazWiadomosc(typ: 'success' | 'error', tekst: string) {
    setWiadomosc({ typ, tekst });
    setTimeout(() => setWiadomosc(null), 5000);
  }

  /**
   * STRUKTURA LAYOUTU STRONY - PODZIAŁ NA SEKCJE
   * 
   * Ta strona jest podzielona na wyraźne sekcje wizualne:
   * 
   * ┌─────────────────────────────────────────────────┐
   * │ SEKCJA 1: Kontener główny (tło z gradientem)   │
   * │   ┌───────────────────────────────────────────┐ │
   * │   │ SEKCJA 2: Kontener treści (max-width)    │ │
   * │   │   ┌─────────────────────────────────────┐ │ │
   * │   │   │ SEKCJA 3: Nagłówek + link powrotny │ │ │
   * │   │   └─────────────────────────────────────┘ │ │
   * │   │   ┌─────────────────────────────────────┐ │ │
   * │   │   │ SEKCJA 4: Wiadomość (opcjonalna)   │ │ │
   * │   │   └─────────────────────────────────────┘ │ │
   * │   │   ┌─────────────────────────────────────┐ │ │
   * │   │   │ SEKCJA 5: Grid 2-kolumnowy         │ │ │
   * │   │   │   ┌──────────┐  ┌──────────┐       │ │ │
   * │   │   │   │ Formularz│  │ Lista    │       │ │ │
   * │   │   │   │ (CREATE) │  │ (READ)   │       │ │ │
   * │   │   │   └──────────┘  └──────────┘       │ │ │
   * │   │   └─────────────────────────────────────┘ │ │
   * │   │   ┌─────────────────────────────────────┐ │ │
   * │   │   │ SEKCJA 6: Dokumentacja/opis         │ │ │
   * │   │   └─────────────────────────────────────┘ │ │
   * │   └───────────────────────────────────────────┘ │
   * └─────────────────────────────────────────────────┘
   * 
   * Każda sekcja ma swoje zadanie i jest wyraźnie oddzielona wizualnie.
   */
  
  return (
    /* 
      SEKCJA 1: KONTENER GŁÓWNY (Outer Container)
      - min-h-screen: minimalna wysokość = wysokość ekranu (pełna strona)
      - bg-gradient-to-br: gradient tła od lewego górnego do prawego dolnego rogu
      - py-12 px-4: padding pionowy i poziomy (odstępy od krawędzi)
      - dark:... - style dla trybu ciemnego
    */
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      {/* 
        SEKCJA 2: KONTENER TREŚCI (Content Container)
        - max-w-6xl: maksymalna szerokość (ogranicza szerokość na dużych ekranach)
        - mx-auto: wyśrodkowanie (margin auto po lewej i prawej)
        Ten kontener ogranicza szerokość treści dla lepszej czytelności
      */}
      <div className="max-w-6xl mx-auto">
        
        {/* 
          SEKCJA 3: NAGŁÓWEK I NAWIGACJA
          - text-center: wyśrodkowanie tekstu
          - mb-8: margin-bottom (odstęp na dole)
          - Zawiera tytuł, opis i link powrotny do strony głównej
        */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🗄️ CRUD z SQLite - Produkty
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Demonstracja operacji CRUD (Create, Read, Update, Delete) z bazą danych SQLite
          </p>
          {/* 
            Link nawigacyjny - powrót do strony głównej
            href="/" - prowadzi do app/page.tsx (strona startowa)
          */}
          <Link 
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ← Powrót do strony głównej
          </Link>
        </div>

        {/* 
          SEKCJA 4: WIADOMOŚĆ (Message Banner)
          - Warunkowo renderowana (tylko gdy wiadomosc !== null)
          - Dynamiczne style w zależności od typu (success/error)
          - mb-6: margin-bottom (odstęp przed następną sekcją)
          - Wyświetla komunikaty o sukcesie lub błędzie operacji CRUD
        */}
        {wiadomosc && (
          <div className={`mb-6 p-4 rounded-lg ${
            wiadomosc.typ === 'success' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {wiadomosc.tekst}
          </div>
        )}

        {/* 
          SEKCJA 5: GŁÓWNA SEKCJA Z GRIDEM (Main Content Grid)
          
          Grid Layout - system siatki Tailwind CSS:
          - grid: włącza CSS Grid
          - grid-cols-1: 1 kolumna na małych ekranach (mobile-first)
          - lg:grid-cols-2: 2 kolumny na dużych ekranach (≥1024px)
          - gap-8: odstęp między kolumnami/wierszami (2rem = 32px)
          
          Ten grid dzieli stronę na dwie równe kolumny:
          - Lewa kolumna: Formularz (CREATE/UPDATE)
          - Prawa kolumna: Lista produktów (READ)
          
          Na małych ekranach kolumny układają się jedna pod drugą (responsive design)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 
            KOLUMNA 1: FORULARZ (Form Section)
            - bg-white: białe tło (szare w trybie ciemnym)
            - rounded-lg: zaokrąglone rogi
            - shadow-lg: duży cień (efekt "uniesienia" karty)
            - p-6: padding wewnętrzny (odstępy od krawędzi)
            
            Ten formularz obsługuje dwie operacje:
            1. CREATE - dodawanie nowego produktu (gdy edytowanyId === null)
            2. UPDATE - edycja istniejącego produktu (gdy edytowanyId !== null)
          */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {edytowanyId ? '✏️ Edytuj produkt' : '➕ Dodaj nowy produkt'}
            </h2>
            
            <form onSubmit={edytowanyId ? aktualizujProdukt : dodajProdukt} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nazwa produktu *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nazwa}
                  onChange={(e) => setFormData({ ...formData, nazwa: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Np. Laptop Dell"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Opis
                </label>
                <textarea
                  value={formData.opis}
                  onChange={(e) => setFormData({ ...formData, opis: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Opis produktu..."
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Cena (PLN) *
                </label>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  value={formData.cena}
                  onChange={(e) => setFormData({ ...formData, cena: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="99.99"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={ladowanie}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {ladowanie ? '⏳ Przetwarzanie...' : (edytowanyId ? '💾 Zapisz zmiany' : '➕ Dodaj produkt')}
                </button>
                
                {edytowanyId && (
                  <button
                    type="button"
                    onClick={anulujEdycje}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 dark:bg-gray-600 dark:text-white"
                  >
                    ❌ Anuluj
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* 
            KOLUMNA 2: LISTA PRODUKTÓW (Products List Section)
            - Te same style co formularz dla spójności wizualnej
            - max-h-96: maksymalna wysokość (scroll gdy za dużo produktów)
            - overflow-y-auto: pionowy scroll gdy zawartość przekracza max-h-96
            
            Ta sekcja wyświetla wszystkie produkty z bazy danych (operacja READ)
            Każdy produkt ma przyciski do edycji (UPDATE) i usunięcia (DELETE)
          */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📋 Lista produktów ({produkty.length})
            </h2>
            
            {ladowanie && produkty.length === 0 ? (
              <div className="text-center py-8 text-gray-500">⏳ Ładowanie...</div>
            ) : produkty.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Brak produktów. Dodaj pierwszy produkt!
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {produkty.map((produkt) => (
                  <div
                    key={produkt.id}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {produkt.nazwa}
                        </h3>
                        {produkt.opis && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {produkt.opis}
                          </p>
                        )}
                      </div>
                      <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                        {produkt.cena.toFixed(2)} PLN
                      </span>
                    </div>
                    
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => rozpocznijEdycje(produkt)}
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                      >
                        ✏️ Edytuj
                      </button>
                      <button
                        onClick={() => usunProdukt(produkt.id)}
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                      >
                        🗑️ Usuń
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-2">
                      ID: {produkt.id} | Utworzono: {new Date(produkt.utworzono).toLocaleString('pl-PL')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 
          SEKCJA 6: DOKUMENTACJA/WYJAŚNIENIA (Documentation Section)
          - mt-8: margin-top (odstęp od sekcji powyżej)
          - Te same style co poprzednie sekcje dla spójności
          
          Ta sekcja zawiera wyjaśnienia jak działa CRUD w praktyce.
          Jest umieszczona na dole strony, poniżej głównego gridu.
          Pomaga zrozumieć jak działają operacje na bazie danych.
        */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            📚 Jak działa CRUD w tym przykładzie?
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>CREATE (Utwórz):</strong> Formularz wyżej wysyła POST request do <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/produkty</code>
            </p>
            <p>
              <strong>READ (Odczytaj):</strong> Lista produktów pobiera dane przez GET request do <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/produkty</code>
            </p>
            <p>
              <strong>UPDATE (Aktualizuj):</strong> Przycisk "Edytuj" wypełnia formularz, a zapisanie wysyła PUT request do <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/produkty/[id]</code>
            </p>
            <p>
              <strong>DELETE (Usuń):</strong> Przycisk "Usuń" wysyła DELETE request do <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/produkty/[id]</code>
            </p>
            <p className="mt-4 text-sm">
              💡 Wszystkie operacje są wykonywane na bazie danych SQLite (plik <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">database.db</code> w katalogu projektu)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
