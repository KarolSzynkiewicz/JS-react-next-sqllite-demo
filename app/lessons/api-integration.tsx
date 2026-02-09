import { Lesson } from '../components/LessonSlider';

export const apiIntegrationLesson: Lesson = {
  id: 'api-integration',
  title: 'Integracja z API - Fetch Data',
  description: 'Pobieranie danych z zewnętrznych API',
  icon: '🔌',
  slides: [
    {
      id: 'what-is-external-api',
      title: 'Co to znaczy "integracja z API"?',
      icon: '🔌',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-blue-400">Integracja z API</strong> to łączenie Twojej aplikacji 
            z <strong>zewnętrznymi serwisami</strong> - pogoda, mapy, płatności, social media...
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌍 Świat pełen API</h3>
            <div className="space-y-3">
              <p className="text-sm">
                Większość aplikacji nie działa w izolacji. Używają API innych serwisów żeby 
                dostarczyć lepsze doświadczenie:
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded p-3">
                  <span className="text-2xl">🌤️</span> <strong>OpenWeather API</strong>
                  <p className="text-xs mt-1 opacity-70">Pobierz pogodę dla miasta</p>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <span className="text-2xl">🗺️</span> <strong>Google Maps API</strong>
                  <p className="text-xs mt-1 opacity-70">Mapy, nawigacja, geocoding</p>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <span className="text-2xl">💳</span> <strong>Stripe API</strong>
                  <p className="text-xs mt-1 opacity-70">Płatności online</p>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <span className="text-2xl">🐦</span> <strong>Twitter API</strong>
                  <p className="text-xs mt-1 opacity-70">Pobierz tweets</p>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <span className="text-2xl">🎵</span> <strong>Spotify API</strong>
                  <p className="text-xs mt-1 opacity-70">Streaming muzyki</p>
                </div>
                <div className="bg-white/10 rounded p-3">
                  <span className="text-2xl">📧</span> <strong>SendGrid API</strong>
                  <p className="text-xs mt-1 opacity-70">Wysyłaj email</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Po co integrować?</h4>
            <ul className="space-y-2">
              <li>✓ <strong>Nie wymyślaj koła</strong> - użyj gotowych serwisów</li>
              <li>✓ <strong>Oszczędź czas</strong> - nie buduj wszystkiego od zera</li>
              <li>✓ <strong>Profesjonalne funkcje</strong> - np. płatności Stripe</li>
              <li>✓ <strong>Aktualne dane</strong> - pogoda, kursy walut, news...</li>
            </ul>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <p className="text-lg">
              <strong>💡 Praktycznie każda duża aplikacja</strong> używa przynajmniej kilku 
              zewnętrznych API!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'fetch-api',
      title: 'fetch() - Pobieranie danych',
      icon: '🎣',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">fetch()</strong> to funkcja JavaScript do wysyłania 
            HTTP requestów. Działa w przeglądarce i Node.js!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🎣 Podstawy fetch()</h3>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`// GET request - pobierz dane
fetch('https://api.example.com/users')
  .then(response => response.json())   // Parse JSON
  .then(data => console.log(data))     // Użyj danych
  .catch(error => console.error(error)); // Obsłuż błąd

// Lub z async/await (lepsze!)
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Błąd:', error);
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🔧 fetch() options</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-purple-400">{`fetch('https://api.example.com/users', {
  method: 'POST',           // GET, POST, PUT, DELETE
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN'
  },
  body: JSON.stringify({    // Dane do wysłania
    name: 'Anna',
    email: 'anna@mail.pl'
  })
});`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Kroki użycia fetch()</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">1</span>
                <span>Wywołaj <code className="bg-black/30 px-2 py-1 rounded">fetch(url)</code></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">2</span>
                <span>Czekaj na Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">3</span>
                <span>Parse JSON: <code className="bg-black/30 px-2 py-1 rounded">response.json()</code></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">4</span>
                <span>Użyj danych w komponencie</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'example-weather-api',
      title: 'Przykład: Weather API',
      icon: '🌤️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Stwórzmy komponent który <strong className="text-blue-400">pobiera pogodę</strong> z 
            OpenWeather API!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌤️ Weather Component</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`'use client';
import { useState, useEffect } from 'react';

export default function Weather({ city }: { city: string }) {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
        const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Błąd pobierania pogody:', error);
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (loading) return <div>Ładowanie...</div>;
  if (!weather) return <div>Brak danych</div>;

  return (
    <div>
      <h2>Pogoda w {city}</h2>
      <p>Temperatura: {weather.main.temp}°C</p>
      <p>Opis: {weather.weather[0].description}</p>
    </div>
  );
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Co tu się dzieje?</h4>
            <ul className="text-sm space-y-2">
              <li>• <code className="bg-black/30 px-1 rounded">useState</code> - przechowuj dane pogody</li>
              <li>• <code className="bg-black/30 px-1 rounded">useEffect</code> - fetch przy mount komponenta</li>
              <li>• <code className="bg-black/30 px-1 rounded">fetch(url)</code> - pobierz z API</li>
              <li>• <code className="bg-black/30 px-1 rounded">setWeather(data)</code> - zapisz dane</li>
              <li>• Renderuj dane (temperatura, opis)</li>
            </ul>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>🔑 API Key:</strong> Większość API wymaga klucza (rejestracja). 
            Przechowuj w <code className="bg-black/30 px-2 py-1 rounded">.env.local</code>!
          </div>
        </div>
      )
    },
    {
      id: 'error-handling',
      title: 'Obsługa błędów i loading states',
      icon: '⚠️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zawsze <strong className="text-red-400">obsługuj błędy</strong> i 
            <strong className="text-blue-400"> loading states</strong>. Sieć może zawieść!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✅ Dobre praktyki</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true);  // Start loading
      setError(null);    // Reset error
      
      const response = await fetch('https://api.example.com/data');
      
      // Sprawdź status
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const result = await response.json();
      setData(result);
      
    } catch (err) {
      setError(err.message || 'Coś poszło nie tak');
      console.error('Błąd:', err);
    } finally {
      setLoading(false);  // Zawsze wyłącz loading
    }
  }

  fetchData();
}, []);

// Renderowanie z loading/error states
if (loading) return <Spinner />;
if (error) return <Error message={error} />;
if (!data) return <div>Brak danych</div>;
return <div>{/* Renderuj dane */}</div>;`}</code>
            </pre>
          </div>

          <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
            <h4 className="text-xl font-bold mb-3 text-red-400">❌ Częste błędy</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Brak sprawdzenia response.ok</strong> - 404/500 nie rzuca error!</li>
              <li>• <strong>Brak loading state</strong> - użytkownik widzi "brak danych"</li>
              <li>• <strong>Brak error handling</strong> - app crashuje</li>
              <li>• <strong>Nie używaj try/catch</strong> - błędy są niezauważalne</li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-4">
            <strong>💡 Pro Tip:</strong> Używaj bibliotek jak <strong>React Query</strong> lub 
            <strong> SWR</strong> - automatyczna obsługa loading/error/cache!
          </div>
        </div>
      )
    },
    {
      id: 'cors',
      title: 'CORS - Cross-Origin Requests',
      icon: '🚧',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-orange-400">CORS</strong> (Cross-Origin Resource Sharing) to 
            zabezpieczenie przeglądarki. Czasem blokuje Twoje requesty!
          </p>

          <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-500/50">
            <h3 className="text-2xl font-bold mb-4">🚧 Problem CORS</h3>
            <p className="text-sm mb-3">
              Przeglądarka blokuje requesty do innych domen (np. localhost → api.example.com) 
              ze względów bezpieczeństwa.
            </p>
            <div className="bg-red-500/20 rounded p-4">
              <strong className="text-red-400">❌ Błąd w konsoli:</strong>
              <pre className="text-xs mt-2 text-red-300">
{`Access to fetch at 'https://api.example.com' from origin 
'http://localhost:3000' has been blocked by CORS policy`}
              </pre>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✅ Rozwiązania</h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded p-4">
                <strong>1. API zwraca CORS headers</strong>
                <p className="text-xs mt-2 opacity-80">
                  Serwer musi dodać: <code className="bg-black/30 px-2 py-1 rounded">Access-Control-Allow-Origin: *</code>
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong>2. Proxy w Next.js (rewrites)</strong>
                <pre className="bg-black/50 rounded p-2 text-xs mt-2">
                  <code className="text-green-400">{`// next.config.ts
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*'
      }
    ];
  }
}`}</code>
                </pre>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong>3. API Route jako proxy</strong>
                <p className="text-xs mt-2 opacity-80">
                  Frontend → Next.js API Route → External API (omija CORS!)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-4">
            <strong>💡 Best Practice:</strong> Używaj API Routes jako proxy - ukrywa API keys i omija CORS!
          </div>
        </div>
      )
    },
    {
      id: 'authentication',
      title: 'Autoryzacja API (Bearer Token)',
      icon: '🔐',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Większość płatnych API wymaga <strong className="text-blue-400">autoryzacji</strong>. 
            Najczęściej: <strong>Bearer Token</strong> w header!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔑 Bearer Token</h3>
            <p className="text-sm mb-3">Dodaj token do header <code className="bg-black/30 px-2 py-1 rounded">Authorization</code>:</p>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

fetch('https://api.example.com/data', {
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔐 Inne metody autoryzacji</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>API Key in Query</strong>
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">
                  ?api_key=YOUR_KEY
                </code>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>API Key in Header</strong>
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">
                  headers: {`{ 'X-API-Key': 'YOUR_KEY' }`}
                </code>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>OAuth 2.0</strong>
                <p className="text-xs mt-1 opacity-70">Dla Google, Facebook, GitHub login</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Basic Auth</strong>
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">
                  Authorization: Basic base64(username:password)
                </code>
              </div>
            </div>
          </div>

          <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
            <h4 className="text-lg font-bold mb-2 text-red-400">⚠️ Bezpieczeństwo!</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>NIGDY</strong> nie commituj API keys do repozytorium!</li>
              <li>• Używaj <code className="bg-black/30 px-1 rounded">.env.local</code> (gitignore!)</li>
              <li>• Dla secret keys: używaj Server Components / API Routes</li>
              <li>• <code className="bg-black/30 px-1 rounded">NEXT_PUBLIC_*</code> → widoczne w przeglądarce!</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'popular-apis',
      title: 'Popularne darmowe API',
      icon: '🎁',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Lista <strong className="text-green-400">darmowych API</strong> do nauki i projektów osobistych:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">🌤️</div>
              <h4 className="text-lg font-bold mb-2">OpenWeather API</h4>
              <p className="text-xs opacity-80 mb-2">Pogoda, forecast, mapy pogodowe</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                openweathermap.org/api
              </code>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">🎬</div>
              <h4 className="text-lg font-bold mb-2">TMDB API</h4>
              <p className="text-xs opacity-80 mb-2">Filmy, seriale, aktorzy, oceny</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                themoviedb.org/api
              </code>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">😺</div>
              <h4 className="text-lg font-bold mb-2">Cat/Dog API</h4>
              <p className="text-xs opacity-80 mb-2">Losowe zdjęcia kotów/psów</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                thecatapi.com / dog.ceo/api
              </code>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="text-lg font-bold mb-2">ExchangeRate API</h4>
              <p className="text-xs opacity-80 mb-2">Kursy walut (EUR, USD, PLN...)</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                exchangerate-api.com
              </code>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">📰</div>
              <h4 className="text-lg font-bold mb-2">NewsAPI</h4>
              <p className="text-xs opacity-80 mb-2">Wiadomości z całego świata</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                newsapi.org
              </code>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">🎮</div>
              <h4 className="text-lg font-bold mb-2">RAWG API</h4>
              <p className="text-xs opacity-80 mb-2">Baza gier, screenshoty, oceny</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                rawg.io/apidocs
              </code>
            </div>

            <div className="bg-cyan-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="text-lg font-bold mb-2">SpaceX API</h4>
              <p className="text-xs opacity-80 mb-2">Loty, rakiety, starty SpaceX</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                github.com/r-spacex/SpaceX-API
              </code>
            </div>

            <div className="bg-pink-500/20 rounded-xl p-5">
              <div className="text-3xl mb-2">🍕</div>
              <h4 className="text-lg font-bold mb-2">TheMealDB API</h4>
              <p className="text-xs opacity-80 mb-2">Przepisy kulinarne, składniki</p>
              <code className="text-xs bg-black/30 px-2 py-1 rounded block">
                themealdb.com/api.php
              </code>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5 text-center">
            <strong>🔍 Więcej:</strong> <a href="https://github.com/public-apis/public-apis" 
              className="text-blue-400 underline">github.com/public-apis/public-apis</a>
            <p className="text-sm mt-2 opacity-80">Lista 1400+ darmowych API!</p>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices',
      title: 'Best Practices - Integracja API',
      icon: '⭐',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Profesjonalne <strong className="text-green-400">podejście do integracji API</strong>:
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <strong className="text-xl text-green-400">1. Używaj Environment Variables</strong>
              <pre className="bg-black/50 rounded p-3 text-xs mt-2">
                <code className="text-green-400">{`// .env.local (NIE COMMITUJ!)
NEXT_PUBLIC_WEATHER_API=abc123
DATABASE_URL=postgresql://...

// Użycie
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;`}</code>
              </pre>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <strong className="text-xl text-blue-400">2. Stwórz API Service</strong>
              <pre className="bg-black/50 rounded p-3 text-xs mt-2">
                <code className="text-blue-400">{`// lib/weatherService.ts
export async function getWeather(city: string) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
  const url = \`https://api.openweathermap.org/...\`;
  const res = await fetch(url);
  return res.json();
}

// Użycie w komponencie
import { getWeather } from '@/lib/weatherService';
const data = await getWeather('Warsaw');`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-80">Wszystkie API calls w jednym miejscu!</p>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <strong className="text-xl text-purple-400">3. Cache & Rate Limiting</strong>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Nie fetchuj za każdym razem - użyj cache (SWR, React Query)</li>
                <li>• Respektuj rate limits API (np. 1000 req/dzień)</li>
                <li>• Rozważ własne API Route jako proxy z cache</li>
              </ul>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <strong className="text-xl text-yellow-400">4. Type Safety (TypeScript)</strong>
              <pre className="bg-black/50 rounded p-3 text-xs mt-2">
                <code className="text-yellow-400">{`interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
}

const data: WeatherResponse = await fetchWeather();
// Autocomplete działa! 🎉`}</code>
              </pre>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <strong className="text-xl text-red-400">5. Error Handling & Retry</strong>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Zawsze obsługuj błędy (try/catch)</li>
                <li>• Pokaż użytkownikowi co się stało</li>
                <li>• Retry logic dla temporary failures</li>
                <li>• Fallback UI (cached data, placeholder)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 text-center border-2 border-purple-500/50">
            <p className="text-2xl font-bold mb-3">🎉 Gratulacje!</p>
            <p className="text-lg">
              Potrafisz już integrować zewnętrzne API w swoich projektach! 
              Możesz budować aplikacje z prawdziwymi danymi 🚀
            </p>
          </div>
        </div>
      )
    }
  ]
};
