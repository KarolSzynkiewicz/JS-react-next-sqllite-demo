/**
 * STRONA POGODY - app/pogoda/page.tsx
 * 
 * Ta strona pozwala sprawdzić aktualną pogodę dla dowolnego miasta.
 * 
 * Jak to działa:
 * 1. Użytkownik wpisuje nazwę miasta w formularzu
 * 2. Formularz wysyła request do /api/pogoda?miasto=Warszawa
 * 3. API route łączy się z OpenWeatherMap API
 * 4. Dane pogodowe są wyświetlane na stronie
 * 
 * "use client" - Client Component, ponieważ używa:
 * - useState do przechowywania stanu formularza i danych pogody
 * - event handlers (onSubmit, onChange)
 * - fetch do komunikacji z API
 */

'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

/**
 * Typ dla danych pogodowych zwracanych z API
 */
interface PogodaData {
  success: boolean;
  miasto?: string;
  kraj?: string;
  temperatura?: number;
  temperaturaOdczuwalna?: number;
  wilgotnosc?: number;
  opis?: string;
  ikona?: string;
  predkoscWiatru?: number;
  cisnienie?: number;
  ikonaUrl?: string | null;
  error?: string;
  instrukcja?: {
    krok1: string;
    krok2: string;
    krok3: string;
    krok4: string;
  };
}

export default function PogodaPage() {
  // State dla nazwy miasta w formularzu
  const [miasto, setMiasto] = useState('');
  
  // State dla danych pogodowych
  const [pogoda, setPogoda] = useState<PogodaData | null>(null);
  
  // State dla ładowania (pokazuje spinner podczas pobierania danych)
  const [ladowanie, setLadowanie] = useState(false);
  
  // State dla błędów
  const [blad, setBlad] = useState<string | null>(null);

  /**
   * Funkcja obsługująca wysłanie formularza
   * 
   * @param e - event formularza (FormEvent)
   */
  async function sprawdzPogode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Zapobiega domyślnemu przeładowaniu strony
    
    // Walidacja - sprawdź czy miasto zostało wpisane
    if (!miasto.trim()) {
      setBlad('Proszę wpisać nazwę miasta');
      return;
    }
    
    // Resetuj poprzednie dane i błędy
    setPogoda(null);
    setBlad(null);
    setLadowanie(true);
    
    try {
      /**
       * Wykonaj request do naszego API route
       * 
       * fetch() - wbudowana funkcja przeglądarki do wykonywania HTTP requests
       * - Pierwszy parametr: URL endpointu
       * - encodeURIComponent() - koduje nazwę miasta dla URL (obsługuje polskie znaki)
       */
      const response = await fetch(`/api/pogoda?miasto=${encodeURIComponent(miasto.trim())}`);
      
      // Sprawdź czy response jest OK przed parsowaniem JSON
      if (!response.ok) {
        // Jeśli response nie jest OK, spróbuj sparsować błąd
        try {
          const errorData = await response.json();
          // Wyświetl szczegółowy błąd z API
          const bladTekst = errorData.error || errorData.details || `Błąd ${response.status}: ${response.statusText}`;
          setBlad(bladTekst);
          
          // Jeśli jest szczegółowy opis, pokaż go
          if (errorData.details && errorData.details !== bladTekst) {
            console.error('Szczegóły błędu:', errorData.details);
          }
        } catch (parseError) {
          // Jeśli nie można sparsować JSON, użyj domyślnego komunikatu
          setBlad(`Błąd serwera: ${response.status} ${response.statusText}. Sprawdź konsolę przeglądarki (F12) dla szczegółów.`);
          console.error('Błąd parsowania odpowiedzi:', parseError);
        }
        setPogoda(null);
        return;
      }
      
      // Parsuj odpowiedź JSON tylko jeśli response jest OK
      const data: PogodaData = await response.json();
      
      // Sprawdź czy request się powiódł
      if (data.success) {
        setPogoda(data);
        setBlad(null);
      } else {
        // Jeśli API zwróciło błąd
        setBlad(data.error || 'Nie udało się pobrać danych pogodowych');
        setPogoda(null);
      }
      
    } catch (error) {
      // Obsługa błędów sieciowych (np. brak internetu)
      console.error('Błąd:', error);
      setBlad('Błąd połączenia z serwerem. Sprawdź połączenie internetowe.');
      setPogoda(null);
    } finally {
      // Zawsze wyłącz loading, niezależnie od wyniku
      setLadowanie(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🌤️ Sprawdź Pogodę
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Wpisz nazwę miasta, aby zobaczyć aktualną pogodę
          </p>
          <Link 
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ← Powrót do strony głównej
          </Link>
        </div>

        {/* Formularz */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            📍 Wpisz nazwę miasta
          </h2>
          
          <form onSubmit={sprawdzPogode} className="space-y-4">
            <div className="flex gap-4">
              {/* 
                Input do wpisania nazwy miasta
                - value={miasto} - kontrolowany input (wartość z state)
                - onChange - aktualizuje state przy każdej zmianie
                - required - walidacja HTML5
              */}
              <input
                type="text"
                value={miasto}
                onChange={(e) => setMiasto(e.target.value)}
                placeholder="Np. Warszawa, Kraków, Gdańsk..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white text-lg"
                required
                disabled={ladowanie}
              />
              
              {/* 
                Przycisk do wysłania formularza
                - type="submit" - wysyła formularz przy kliknięciu
                - disabled={ladowanie} - wyłączony podczas ładowania
              */}
              <button
                type="submit"
                disabled={ladowanie}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg"
              >
                {ladowanie ? '⏳ Sprawdzam...' : '🔍 Sprawdź pogodę'}
              </button>
            </div>
          </form>
        </div>

        {/* Wyświetlanie błędów */}
        {blad && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-800 dark:text-red-300 px-6 py-4 rounded-lg mb-8">
            <h3 className="font-semibold mb-2">❌ Błąd</h3>
            <p className="mb-2">{blad}</p>
            
            {/* Wskazówka dla polskich miast */}
            {blad.includes('Nie znaleziono') && (
              <div className="mt-3 pt-3 border-t border-red-300 dark:border-red-700">
                <p className="text-sm font-semibold mb-1">💡 Wskazówka:</p>
                <p className="text-sm">
                  Dla polskich miast spróbuj użyć angielskiej nazwy:
                </p>
                <ul className="text-sm list-disc list-inside mt-1 space-y-1">
                  <li>"Gdańsk" → "Gdansk"</li>
                  <li>"Kraków" → "Krakow"</li>
                  <li>"Łódź" → "Lodz"</li>
                  <li>"Wrocław" → "Wroclaw"</li>
                </ul>
              </div>
            )}
            
            {/* Jeśli błąd dotyczy konfiguracji API key, pokaż instrukcję */}
            {pogoda?.instrukcja && (
              <div className="mt-4 pt-4 border-t border-red-300 dark:border-red-700">
                <h4 className="font-semibold mb-2">📝 Instrukcja konfiguracji:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>{pogoda.instrukcja.krok1}</li>
                  <li>{pogoda.instrukcja.krok2}</li>
                  <li>{pogoda.instrukcja.krok3}</li>
                  <li>{pogoda.instrukcja.krok4}</li>
                </ol>
              </div>
            )}
          </div>
        )}

        {/* Wyświetlanie danych pogodowych */}
        {pogoda && pogoda.success && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {pogoda.miasto}
                {pogoda.kraj && (
                  <span className="text-xl text-gray-600 dark:text-gray-400 ml-2">
                    ({pogoda.kraj})
                  </span>
                )}
              </h2>
              
              {/* Ikona pogody */}
              {pogoda.ikonaUrl && (
                <img 
                  src={pogoda.ikonaUrl} 
                  alt={pogoda.opis || 'Ikona pogody'}
                  className="mx-auto my-4"
                />
              )}
              
              {/* Temperatura - najważniejsza informacja */}
              <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {pogoda.temperatura}°C
              </div>
              
              {/* Opis pogody */}
              <p className="text-xl text-gray-600 dark:text-gray-400 capitalize mb-6">
                {pogoda.opis}
              </p>
            </div>

            {/* Szczegółowe informacje - grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  🌡️ Odczuwalna
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pogoda.temperaturaOdczuwalna}°C
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  💧 Wilgotność
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pogoda.wilgotnosc}%
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  💨 Wiatr
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pogoda.predkoscWiatru} m/s
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  📊 Ciśnienie
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pogoda.cisnienie} hPa
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sekcja wyjaśniająca */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            📚 Jak to działa?
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>1. Formularz:</strong> Wpisujesz nazwę miasta i klikasz "Sprawdź pogodę"
            </p>
            <p>
              <strong>2. Request:</strong> Frontend wysyła GET request do <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/pogoda?miasto=Warszawa</code>
            </p>
            <p>
              <strong>3. API Route:</strong> Nasz endpoint (<code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/api/pogoda/route.ts</code>) łączy się z OpenWeatherMap API
            </p>
            <p>
              <strong>4. Dane:</strong> API zwraca dane pogodowe, które są wyświetlane na stronie
            </p>
            <p className="mt-4 text-sm">
              💡 <strong>Uwaga:</strong> Aby działało, musisz skonfigurować API key z OpenWeatherMap (zobacz instrukcję w błędzie powyżej, jeśli się pojawi)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
