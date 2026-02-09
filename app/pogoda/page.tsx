'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import LoadingSpinner from '../components/LoadingSpinner';

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

export default function APIIntegrationDemoPage() {
  const [miasto, setMiasto] = useState('');
  const [pogoda, setPogoda] = useState<PogodaData | null>(null);
  const [ladowanie, setLadowanie] = useState(false);
  const [blad, setBlad] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(true);

  async function sprawdzPogode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!miasto.trim()) {
      setBlad('Proszę wpisać nazwę miasta');
      return;
    }
    
    setPogoda(null);
    setBlad(null);
    setLadowanie(true);
    
    try {
      const response = await fetch(`/api/pogoda?miasto=${encodeURIComponent(miasto.trim())}`);
      
      if (!response.ok) {
        try {
          const errorData = await response.json();
          const bladTekst = errorData.error || errorData.details || `Błąd ${response.status}`;
          setBlad(bladTekst);
          if (errorData.details && errorData.details !== bladTekst) {
            console.error('Szczegóły:', errorData.details);
          }
        } catch {
          setBlad(`Błąd serwera: ${response.status}. Sprawdź konsolę (F12)`);
        }
        setPogoda(null);
        return;
      }
      
      const data: PogodaData = await response.json();
      
      if (data.success) {
        setPogoda(data);
        setBlad(null);
      } else {
        setBlad(data.error || 'Nie udało się pobrać pogody');
        setPogoda(null);
      }
      
    } catch (error) {
      console.error('Błąd:', error);
      setBlad('Błąd połączenia. Sprawdź internet.');
      setPogoda(null);
    } finally {
      setLadowanie(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            🌐 API Integration Demo
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Naucz się łączyć swoją aplikację z zewnętrznymi API
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all"
          >
            ← Powrót do strony głównej
          </Link>
        </div>

        {/* What is API Integration */}
        {showExplanation && (
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 mb-8 relative">
            <button
              onClick={() => setShowExplanation(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
            >
              ×
            </button>
            <div className="flex items-start gap-6">
              <span className="text-6xl">🌐</span>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-black mb-4">Co to jest integracja z API?</h2>
                <p className="text-lg mb-4 opacity-90">
                  <strong>API (Application Programming Interface)</strong> to sposób, w jaki aplikacje 
                  rozmawiają ze sobą przez internet.
                </p>
                <div className="bg-white/10 rounded-xl p-5 mb-4">
                  <h3 className="text-xl font-bold mb-3">🎭 Analogia: Restauracja</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Ty (aplikacja)</strong> → Chcesz dane o pogodzie</p>
                    <p><strong>Kelner (API)</strong> → Przekazuje Twoje zapytanie do kuchni</p>
                    <p><strong>Kuchnia (serwer)</strong> → OpenWeatherMap sprawdza pogodę</p>
                    <p><strong>Kelner (API)</strong> → Przynosi Ci dane w formacie JSON</p>
                    <p><strong>Ty (aplikacja)</strong> → Wyświetlasz pogodę użytkownikowi</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-xl mb-2">📤 <strong>Request (zapytanie)</strong></div>
                    <p className="text-sm opacity-80">
                      Wysyłasz: "Jaka pogoda w Warszawie?"
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-xl mb-2">📥 <strong>Response (odpowiedź)</strong></div>
                    <p className="text-sm opacity-80">
                      Otrzymujesz: JSON z temperaturą, wilgotnością, itp.
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
                  <p className="text-sm">
                    <strong>💡 Przykłady API:</strong> Google Maps, Twitter, Spotify, YouTube, 
                    PayPal - większość aplikacji używa dziesiątek API!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-5xl">🔍</span>
            <h2 className="text-3xl font-black text-white">
              Sprawdź Pogodę
            </h2>
          </div>
          <p className="text-white/70 mb-6">
            Wpisz nazwę miasta, aby pobrać aktualne dane pogodowe z OpenWeatherMap API
          </p>
          
          <form onSubmit={sprawdzPogode} className="flex gap-4">
            <input
              type="text"
              value={miasto}
              onChange={(e) => setMiasto(e.target.value)}
              placeholder="Np. Warszawa, London, Tokyo..."
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
              required
              disabled={ladowanie}
            />
            <button
              type="submit"
              disabled={ladowanie}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              {ladowanie ? '⏳' : '🔍'} {ladowanie ? 'Sprawdzam...' : 'Sprawdź'}
            </button>
          </form>

          {ladowanie && (
            <div className="mt-6 flex justify-center">
              <LoadingSpinner size="md" text="Pobieranie danych z API..." />
            </div>
          )}
        </div>

        {/* Error Display */}
        {blad && (
          <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl p-6 mb-8 animate-fadeIn">
            <h3 className="font-bold text-red-300 text-xl mb-3 flex items-center gap-2">
              <span>❌</span> Błąd
            </h3>
            <p className="text-red-200 mb-3">{blad}</p>
            
            {blad.includes('Nie znaleziono') && (
              <div className="mt-4 pt-4 border-t border-red-500/50">
                <p className="text-red-200 font-semibold mb-2">💡 Wskazówka dla polskich miast:</p>
                <p className="text-red-200 text-sm">Spróbuj bez polskich znaków:</p>
                <ul className="text-red-200 text-sm list-disc list-inside mt-2 space-y-1">
                  <li>"Gdańsk" → "Gdansk"</li>
                  <li>"Kraków" → "Krakow"</li>
                  <li>"Łódź" → "Lodz"</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Weather Display */}
        {pogoda && pogoda.success && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-white mb-2">
                📍 {pogoda.miasto}
                {pogoda.kraj && (
                  <span className="text-2xl text-white/70 ml-3">
                    {pogoda.kraj}
                  </span>
                )}
              </h2>
              
              {pogoda.ikonaUrl && (
                <img 
                  src={pogoda.ikonaUrl} 
                  alt={pogoda.opis}
                  className="mx-auto my-6 w-32 h-32"
                />
              )}
              
              <div className="text-7xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                {pogoda.temperatura}°C
              </div>
              
              <p className="text-2xl text-white/80 capitalize">
                {pogoda.opis}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl mb-2">🌡️</div>
                <div className="text-white/60 text-sm mb-1">Odczuwalna</div>
                <div className="text-2xl font-bold text-white">
                  {pogoda.temperaturaOdczuwalna}°C
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl mb-2">💧</div>
                <div className="text-white/60 text-sm mb-1">Wilgotność</div>
                <div className="text-2xl font-bold text-white">
                  {pogoda.wilgotnosc}%
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl mb-2">💨</div>
                <div className="text-white/60 text-sm mb-1">Wiatr</div>
                <div className="text-2xl font-bold text-white">
                  {pogoda.predkoscWiatru} m/s
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-white/60 text-sm mb-1">Ciśnienie</div>
                <div className="text-2xl font-bold text-white">
                  {pogoda.cisnienie} hPa
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technical Explanation */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
            <span>🔧</span> Jak to działa technicznie?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-500/20 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">🔄 Przepływ danych</h3>
              <div className="space-y-3 text-white/90">
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-bold">1</span>
                  <span><strong>Frontend:</strong> Użytkownik wpisuje miasto i klika "Sprawdź"</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-bold">2</span>
                  <span><strong>Request:</strong> Frontend wysyła GET do <code className="bg-black/30 px-2 py-1 rounded text-xs">/api/pogoda?miasto=Warszawa</code></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-bold">3</span>
                  <span><strong>API Route:</strong> Next.js przetwarza request i łączy się z OpenWeatherMap</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-bold">4</span>
                  <span><strong>External API:</strong> OpenWeatherMap zwraca JSON z danymi pogodowymi</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-bold">5</span>
                  <span><strong>Response:</strong> Nasze API przekazuje dane do frontendu</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-bold">6</span>
                  <span><strong>UI:</strong> React wyświetla pogodę użytkownikowi</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">📝 Przykład kodu</h3>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-green-400 font-mono">
{`// Frontend (React)
const response = await fetch('/api/pogoda?miasto=Warszawa');
const data = await response.json();

// Backend (Next.js API Route)
const apiKey = process.env.OPENWEATHER_API_KEY;
const weatherData = await fetch(
  \`https://api.openweathermap.org/data/2.5/weather?q=\${miasto}&appid=\${apiKey}\`
);
return Response.json(weatherData);`}
                </pre>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-500/50">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• <strong>API Key:</strong> Większość API wymaga klucza (token do autoryzacji)</li>
                <li>• <strong>Rate Limiting:</strong> API często limitują liczbę requestów (np. 60/min)</li>
                <li>• <strong>Error Handling:</strong> Zawsze obsługuj błędy (brak internetu, błędne dane, limit)</li>
                <li>• <strong>Caching:</strong> W produkcji cachuj odpowiedzi żeby oszczędzić requesty</li>
                <li>• <strong>Environment Variables:</strong> Przechowuj API keys w <code className="bg-black/30 px-1 rounded">.env</code> (bezpieczeństwo!)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
