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
        </div>
      )
    },
    {
      id: 'fetch-basics',
      title: 'fetch() - Podstawy',
      icon: '🎣',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">fetch()</strong> to funkcja JavaScript do wysyłania 
            HTTP requestów. Działa w przeglądarce i Node.js!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🎣 Najprostszy przykład</h3>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`// 1. Wywołaj fetch z URL
fetch('https://api.example.com/users')`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              <strong>Linia 1:</strong> fetch() wysyła request do podanego URL
            </p>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📥 Co zwraca fetch()?</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-purple-400">{`// fetch() zwraca Promise<Response>
fetch('https://api.example.com/users')
  .then(response => {
    // response to obiekt Response
    // Musimy wywołać .json() żeby dostać dane
    return response.json();
  })
  .then(data => {
    // data to już nasze dane (JSON)
    console.log(data);
  });`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              <strong>Krok 1:</strong> fetch() → Promise z Response<br/>
              <strong>Krok 2:</strong> response.json() → Promise z danymi<br/>
              <strong>Krok 3:</strong> .then() → używamy danych
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'fetch-async-await',
      title: 'fetch() z async/await',
      icon: '⚡',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">async/await</strong> jest czytelniejsze niż .then()!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">⚡ Przykład z async/await</h3>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`async function getUsers() {
  // 1. Czekamy na Response
  const response = await fetch('https://api.example.com/users');
  
  // 2. Parsujemy JSON
  const data = await response.json();
  
  // 3. Używamy danych
  console.log(data);
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie linia po linii:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">async function getUsers()</code>
                <p className="text-xs mt-1 opacity-70">Funkcja async - możemy użyć await</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">const response = await fetch(...)</code>
                <p className="text-xs mt-1 opacity-70">Czekamy na Response z serwera</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">const data = await response.json()</code>
                <p className="text-xs mt-1 opacity-70">Parsujemy JSON → JavaScript obiekt</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">console.log(data)</code>
                <p className="text-xs mt-1 opacity-70">Używamy danych!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fetch-options',
      title: 'fetch() - Opcje (POST, headers)',
      icon: '🔧',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            fetch() może wysyłać <strong className="text-blue-400">POST, PUT, DELETE</strong> i 
            dodawać <strong>headers</strong>!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔧 POST request</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`fetch('https://api.example.com/users', {
  method: 'POST',  // GET, POST, PUT, DELETE
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Anna',
    email: 'anna@mail.pl'
  })
});`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">method: 'POST'</code>
                <p className="text-xs mt-1 opacity-70">Wysyłamy dane (nie pobieramy)</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'headers: { \'Content-Type\': \'application/json\' }'}</code>
                <p className="text-xs mt-1 opacity-70">Mówimy serwerowi: "wysyłam JSON"</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">body: JSON.stringify(...)</code>
                <p className="text-xs mt-1 opacity-70">Konwertujemy obiekt → JSON string</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'weather-component-1',
      title: 'Przykład: Weather Component - Setup',
      icon: '🌤️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Stwórzmy komponent który <strong className="text-blue-400">pobiera pogodę</strong>! 
            Zacznijmy od setupu.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌤️ Krok 1: Import i setup</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`'use client';
import { useState, useEffect } from 'react';

export default function Weather({ city }: { city: string }) {
  // 1. State dla danych pogody
  const [weather, setWeather] = useState<any>(null);
  
  // 2. State dla loading
  const [loading, setLoading] = useState(true);
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">'use client'</code>
                <p className="text-xs mt-1 opacity-70">Next.js: to jest Client Component (używa hooks)</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">useState(null)</code>
                <p className="text-xs mt-1 opacity-70">Początkowo brak danych (null)</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">useState(true)</code>
                <p className="text-xs mt-1 opacity-70">Początkowo loading = true (pobieramy dane)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'weather-component-2',
      title: 'Przykład: Weather Component - Fetch',
      icon: '🌤️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Teraz <strong className="text-blue-400">pobieramy dane</strong> z API!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌤️ Krok 2: useEffect i fetch</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`useEffect(() => {
  async function fetchWeather() {
    // 1. Pobierz API key ze zmiennych środowiskowych
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
    
    // 2. Zbuduj URL
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`;
    
    // 3. Pobierz dane
    const response = await fetch(url);
    const data = await response.json();
    
    // 4. Zapisz dane
    setWeather(data);
    setLoading(false);
  }

  fetchWeather();
}, [city]);`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie linia po linii:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'useEffect(() => { ... }, [city])'}</code>
                <p className="text-xs mt-1 opacity-70">Uruchamia się gdy komponent się montuje lub zmienia się city</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API</code>
                <p className="text-xs mt-1 opacity-70">Pobierz klucz z .env.local (bezpieczeństwo!)</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'const url = `...?q=${city}&appid=${API_KEY}`'}</code>
                <p className="text-xs mt-1 opacity-70">Template string - wstawia zmienne do URL</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">await fetch(url)</code>
                <p className="text-xs mt-1 opacity-70">Wyślij request do API</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">await response.json()</code>
                <p className="text-xs mt-1 opacity-70">Parsuj JSON → JavaScript obiekt</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">setWeather(data)</code>
                <p className="text-xs mt-1 opacity-70">Zapisz dane w state</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">setLoading(false)</code>
                <p className="text-xs mt-1 opacity-70">Wyłącz loading (dane są gotowe)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'weather-component-3',
      title: 'Przykład: Weather Component - Render',
      icon: '🌤️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Na końcu <strong className="text-blue-400">renderujemy dane</strong>!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌤️ Krok 3: Renderowanie</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// Jeśli loading - pokaż spinner
if (loading) return <div>Ładowanie...</div>;

// Jeśli brak danych - pokaż komunikat
if (!weather) return <div>Brak danych</div>;

// Renderuj dane
return (
  <div>
    <h2>Pogoda w {city}</h2>
    <p>Temperatura: {weather.main.temp}°C</p>
    <p>Opis: {weather.weather[0].description}</p>
  </div>
);`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">if (loading) return ...</code>
                <p className="text-xs mt-1 opacity-70">Early return - jeśli loading, nie renderuj dalej</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">if (!weather) return ...</code>
                <p className="text-xs mt-1 opacity-70">Sprawdź czy dane istnieją</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'{weather.main.temp}'}</code>
                <p className="text-xs mt-1 opacity-70">Dostęp do zagnieżdżonych właściwości obiektu</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>🔑 API Key:</strong> Większość API wymaga klucza (rejestracja). 
            Przechowuj w <code className="bg-black/30 px-2 py-1 rounded">.env.local</code>!
          </div>
        </div>
      )
    },
    {
      id: 'error-handling-1',
      title: 'Obsługa błędów - Setup',
      icon: '⚠️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zawsze <strong className="text-red-400">obsługuj błędy</strong>! Sieć może zawieść!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">⚠️ Krok 1: Dodaj error state</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              <strong>3 stany:</strong> data (dane), loading (ładowanie), error (błąd)
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">useState(null)</code>
                <p className="text-xs mt-1 opacity-70">Początkowo brak danych</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">useState(true)</code>
                <p className="text-xs mt-1 opacity-70">Początkowo loading = true</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">useState(null)</code>
                <p className="text-xs mt-1 opacity-70">Początkowo brak błędu (null)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'error-handling-2',
      title: 'Obsługa błędów - Try/Catch',
      icon: '⚠️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Użyj <strong className="text-blue-400">try/catch</strong> żeby złapać błędy!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">⚠️ Krok 2: Try/Catch w fetch</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`useEffect(() => {
  async function fetchData() {
    try {
      // 1. Reset error i włącz loading
      setLoading(true);
      setError(null);
      
      // 2. Pobierz dane
      const response = await fetch('https://api.example.com/data');
      
      // 3. Sprawdź status (WAŻNE!)
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      // 4. Parsuj JSON
      const result = await response.json();
      setData(result);
      
    } catch (err) {
      // 5. Złap błąd i zapisz
      setError(err.message || 'Coś poszło nie tak');
      console.error('Błąd:', err);
    } finally {
      // 6. Zawsze wyłącz loading
      setLoading(false);
    }
  }

  fetchData();
}, []);`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie linia po linii:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'try { ... }'}</code>
                <p className="text-xs mt-1 opacity-70">Spróbuj wykonać kod - jeśli błąd, przejdź do catch</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">setLoading(true); setError(null)</code>
                <p className="text-xs mt-1 opacity-70">Reset stanów przed nowym requestem</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">if (!response.ok)</code>
                <p className="text-xs mt-1 opacity-70">WAŻNE! 404/500 nie rzuca error - musimy sprawdzić ręcznie!</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'throw new Error(...)'}</code>
                <p className="text-xs mt-1 opacity-70">Rzuć błąd żeby catch go złapał</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'catch (err) { ... }'}</code>
                <p className="text-xs mt-1 opacity-70">Złap błąd i zapisz w state</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">{'finally { setLoading(false) }'}</code>
                <p className="text-xs mt-1 opacity-70">Zawsze wykonaj - nawet jeśli był błąd</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'error-handling-3',
      title: 'Obsługa błędów - Render',
      icon: '⚠️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Na końcu <strong className="text-blue-400">renderuj stany</strong>!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">⚠️ Krok 3: Renderowanie stanów</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// 1. Jeśli loading - pokaż spinner
if (loading) return <Spinner />;

// 2. Jeśli błąd - pokaż komunikat
if (error) return <Error message={error} />;

// 3. Jeśli brak danych - pokaż komunikat
if (!data) return <div>Brak danych</div>;

// 4. Renderuj dane
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
      id: 'cors-what-is',
      title: 'CORS - Co to jest?',
      icon: '🚧',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-orange-400">CORS</strong> (Cross-Origin Resource Sharing) to 
            zabezpieczenie przeglądarki. Czasem blokuje Twoje requesty!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌐 Co to jest "Origin"?</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Origin</strong> = protokół + domena + port
              </p>
              <div className="bg-white/10 rounded p-3">
                <code className="text-green-400">http://localhost:3000</code>
                <p className="text-xs mt-1 opacity-70">Origin 1: lokalna aplikacja</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <code className="text-green-400">https://api.example.com</code>
                <p className="text-xs mt-1 opacity-70">Origin 2: zewnętrzne API</p>
              </div>
              <p className="mt-3">
                <strong>Cross-Origin</strong> = request z jednego origin do drugiego
              </p>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-500/50">
            <h3 className="text-2xl font-bold mb-4">🚧 Problem CORS</h3>
            <p className="text-sm mb-3">
              Przeglądarka <strong>automatycznie blokuje</strong> requesty do innych domen 
              ze względów bezpieczeństwa.
            </p>
            <div className="bg-red-500/20 rounded p-4">
              <strong className="text-red-400">❌ Błąd w konsoli:</strong>
              <pre className="text-xs mt-2 text-red-300">
{`Access to fetch at 'https://api.example.com' 
from origin 'http://localhost:3000' 
has been blocked by CORS policy`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cors-why',
      title: 'CORS - Dlaczego istnieje?',
      icon: '🔒',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            CORS chroni przed <strong className="text-red-400">atakami</strong>!
          </p>

          <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
            <h3 className="text-2xl font-bold mb-4 text-red-400">⚠️ Co może zrobić zły user?</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white/10 rounded p-4">
                <strong>1. Kradzież danych</strong>
                <p className="text-xs mt-2 opacity-80">
                  Zły user może stworzyć stronę która wysyła requesty do Twojego API 
                  i kradnie dane (np. bank, social media).
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong>2. CSRF (Cross-Site Request Forgery)</strong>
                <p className="text-xs mt-2 opacity-80">
                  Zły user może wysłać request z innej strony (np. email z linkiem) 
                  i wykonać akcję w Twoim imieniu (np. zmiana hasła, płatność).
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong>3. Wykorzystanie sesji</strong>
                <p className="text-xs mt-2 opacity-80">
                  Jeśli jesteś zalogowany na stronie A, zła strona B może wysłać request 
                  do API strony A używając Twoich cookies/sesji.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-500/50">
            <h3 className="text-2xl font-bold mb-4">🛡️ Jak CORS chroni?</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Przeglądarka sprawdza:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Czy serwer pozwala na request z Twojego origin?</li>
                <li>• Czy serwer zwraca odpowiednie headers (Access-Control-Allow-Origin)?</li>
                <li>• Jeśli nie → blokuje request!</li>
              </ul>
              <p className="mt-3 font-bold text-yellow-400">
                ⚠️ NIGDY NIKOMU NIE UFaj! CORS to tylko jedna warstwa bezpieczeństwa.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cors-solutions',
      title: 'CORS - Rozwiązania',
      icon: '✅',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Jak <strong className="text-blue-400">obejść CORS</strong> bezpiecznie?
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✅ Rozwiązanie 1: API zwraca CORS headers</h3>
            <div className="space-y-3 text-sm">
              <p>Serwer musi dodać specjalne headers:</p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type`}</code>
              </pre>
              <p className="opacity-80">
                <strong>Problem:</strong> To musi zrobić właściciel API (nie Ty!)
              </p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✅ Rozwiązanie 2: Proxy w Next.js</h3>
            <div className="space-y-3 text-sm">
              <p><strong>Co to jest Proxy?</strong></p>
              <div className="bg-white/10 rounded p-3">
                <p className="opacity-80">
                  <strong>Proxy</strong> = pośrednik. Zamiast wysyłać request bezpośrednio do API, 
                  wysyłasz do swojego serwera (Next.js), a on przekazuje dalej.
                </p>
              </div>
              <p className="mt-3"><strong>Jak to działa:</strong></p>
              <div className="space-y-2">
                <div className="bg-white/10 rounded p-2">
                  <code className="text-purple-400">1. Frontend → /api/weather</code>
                  <p className="text-xs mt-1 opacity-70">Request do własnego serwera (Next.js)</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-purple-400">2. Next.js → api.openweathermap.org</code>
                  <p className="text-xs mt-1 opacity-70">Next.js przekazuje request do zewnętrznego API</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-purple-400">3. api.openweathermap.org → Next.js</code>
                  <p className="text-xs mt-1 opacity-70">Odpowiedź wraca do Next.js</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-purple-400">4. Next.js → Frontend</code>
                  <p className="text-xs mt-1 opacity-70">Next.js zwraca dane do przeglądarki</p>
                </div>
              </div>
              <p className="mt-3 font-bold text-purple-400">
                💡 Zalety: Ukrywa API keys, omija CORS, cache, rate limiting!
              </p>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✅ Rozwiązanie 3: Next.js Rewrites</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// next.config.ts
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/weather/:path*',
        destination: 'https://api.openweathermap.org/:path*'
      }
    ];
  }
};`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-80">
              <strong>Jak działa:</strong> Request do /api/weather/... automatycznie przekierowuje 
              do api.openweathermap.org/... (na serwerze, nie w przeglądarce!)
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Best Practice:</strong> Używaj API Routes jako proxy - ukrywa API keys, 
            omija CORS, i daje kontrolę nad requestami!
          </div>
        </div>
      )
    },
    {
      id: 'cors-api-route-proxy',
      title: 'CORS - API Route jako Proxy',
      icon: '🔧',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Stwórzmy <strong className="text-blue-400">API Route</strong> jako proxy!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔧 app/api/weather/route.ts</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// 1. To jest Server Component - działa na serwerze!
export async function GET(request: Request) {
  // 2. Pobierz API key (bezpieczne - nie widoczne w przeglądarce!)
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  
  // 3. Pobierz parametr z URL
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  
  // 4. Wyślij request do zewnętrznego API
  const response = await fetch(
    \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`
  );
  
  // 5. Zwróć dane do frontendu
  const data = await response.json();
  return Response.json(data);
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie linia po linii:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">export async function GET(...)</code>
                <p className="text-xs mt-1 opacity-70">Next.js API Route - działa na serwerze (nie w przeglądarce!)</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">process.env.OPENWEATHER_API_KEY</code>
                <p className="text-xs mt-1 opacity-70">BEZPIECZNE! API key nie jest widoczne w przeglądarce</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">new URL(request.url)</code>
                <p className="text-xs mt-1 opacity-70">Parsuj URL żeby dostać parametry (?city=Warsaw)</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">await fetch(...)</code>
                <p className="text-xs mt-1 opacity-70">Wyślij request do zewnętrznego API (na serwerze - brak CORS!)</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">return Response.json(data)</code>
                <p className="text-xs mt-1 opacity-70">Zwróć dane do frontendu</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Użycie w komponencie:</h4>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-purple-400">{`// Frontend - brak API key w kodzie!
const response = await fetch('/api/weather?city=Warsaw');
const data = await response.json();`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-80">
              <strong>Zalety:</strong> API key ukryty, brak CORS, możesz dodać cache/rate limiting!
            </p>
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
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`// 1. Pobierz token (NIE commituj do repo!)
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// 2. Dodaj do header
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

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Wyjaśnienie:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">Authorization: Bearer TOKEN</code>
                <p className="text-xs mt-1 opacity-70">Standardowy format autoryzacji w HTTP</p>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">process.env.NEXT_PUBLIC_API_KEY</code>
                <p className="text-xs mt-1 opacity-70">Pobierz z .env.local (NIE commituj!)</p>
              </div>
            </div>
          </div>

          <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
            <h4 className="text-lg font-bold mb-2 text-red-400">⚠️ Bezpieczeństwo!</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>NIGDY</strong> nie commituj API keys do repozytorium!</li>
              <li>• Używaj <code className="bg-black/30 px-1 rounded">.env.local</code> (jest w .gitignore!)</li>
              <li>• Dla secret keys: używaj Server Components / API Routes</li>
              <li>• <code className="bg-black/30 px-1 rounded">NEXT_PUBLIC_*</code> → widoczne w przeglądarce!</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices-1',
      title: 'Best Practices - Environment Variables',
      icon: '⭐',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Profesjonalne <strong className="text-green-400">podejście do integracji API</strong>:
          </p>

          <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
            <strong className="text-xl text-green-400">1. Używaj Environment Variables</strong>
            <div className="space-y-3 mt-3">
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`// .env.local (NIE COMMITUJ!)
NEXT_PUBLIC_WEATHER_API=abc123
DATABASE_URL=postgresql://...`}</code>
              </pre>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`// Użycie
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;`}</code>
              </pre>
            </div>
            <div className="bg-white/10 rounded p-3 mt-3 text-sm">
              <strong>💡 Dlaczego tak polecam?</strong>
              <ul className="mt-2 space-y-1 text-xs opacity-80">
                <li>• API keys nie są w kodzie (bezpieczeństwo!)</li>
                <li>• Różne klucze dla dev/prod (łatwa konfiguracja)</li>
                <li>• .env.local jest w .gitignore (nie commituje się przypadkiem)</li>
                <li>• Łatwo zmienić bez edycji kodu</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices-2',
      title: 'Best Practices - API Service',
      icon: '⭐',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
            <strong className="text-xl text-blue-400">2. Stwórz API Service</strong>
            <div className="space-y-3 mt-3">
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-blue-400">{`// lib/weatherService.ts
export async function getWeather(city: string) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
  const url = \`https://api.openweathermap.org/...\`;
  const res = await fetch(url);
  return res.json();
}`}</code>
              </pre>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-blue-400">{`// Użycie w komponencie
import { getWeather } from '@/lib/weatherService';
const data = await getWeather('Warsaw');`}</code>
              </pre>
            </div>
            <div className="bg-white/10 rounded p-3 mt-3 text-sm">
              <strong>💡 Dlaczego tak polecam?</strong>
              <ul className="mt-2 space-y-1 text-xs opacity-80">
                <li>• Wszystkie API calls w jednym miejscu (łatwa zmiana URL/logiki)</li>
                <li>• Reużywalność - użyj w wielu komponentach</li>
                <li>• Łatwe testowanie - mockuj service zamiast fetch()</li>
                <li>• Separacja logiki od UI (czysty kod)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices-3',
      title: 'Best Practices - Cache & Type Safety',
      icon: '⭐',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
            <strong className="text-xl text-purple-400">3. Cache & Rate Limiting</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Nie fetchuj za każdym razem - użyj cache (SWR, React Query)</li>
              <li>• Respektuj rate limits API (np. 1000 req/dzień)</li>
              <li>• Rozważ własne API Route jako proxy z cache</li>
            </ul>
            <div className="bg-white/10 rounded p-3 mt-3 text-sm">
              <strong>💡 Dlaczego tak polecam?</strong>
              <ul className="mt-2 space-y-1 text-xs opacity-80">
                <li>• Cache = szybsze ładowanie, mniej requestów</li>
                <li>• Rate limiting = nie przekroczysz limitów API</li>
                <li>• Mniej kosztów (płatne API)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
            <strong className="text-xl text-yellow-400">4. Type Safety (TypeScript)</strong>
            <pre className="bg-black/50 rounded p-3 text-xs mt-2">
              <code className="text-yellow-400">{`interface WeatherResponse {
  main: { temp: number; humidity: number; };
  weather: Array<{ description: string; }>;
}

const data: WeatherResponse = await fetchWeather();
// Autocomplete działa! 🎉`}</code>
            </pre>
            <div className="bg-white/10 rounded p-3 mt-3 text-sm">
              <strong>💡 Dlaczego tak polecam?</strong>
              <ul className="mt-2 space-y-1 text-xs opacity-80">
                <li>• TypeScript sprawdza typy (mniej błędów)</li>
                <li>• Autocomplete w IDE (szybsze kodowanie)</li>
                <li>• Dokumentacja w kodzie (interface = kontrakt)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices-4',
      title: 'Best Practices - Error Handling',
      icon: '⭐',
      content: (
        <div className="space-y-6">
          <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
            <strong className="text-xl text-red-400">5. Error Handling & Retry</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Zawsze obsługuj błędy (try/catch)</li>
              <li>• Pokaż użytkownikowi co się stało</li>
              <li>• Retry logic dla temporary failures</li>
              <li>• Fallback UI (cached data, placeholder)</li>
            </ul>
            <div className="bg-white/10 rounded p-3 mt-3 text-sm">
              <strong>💡 Dlaczego tak polecam?</strong>
              <ul className="mt-2 space-y-1 text-xs opacity-80">
                <li>• Użytkownik wie co się dzieje (nie widzi białego ekranu)</li>
                <li>• Retry = automatyczne odzyskiwanie po błędach sieci</li>
                <li>• Fallback = lepsze UX (pokazuj stare dane zamiast błędu)</li>
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
