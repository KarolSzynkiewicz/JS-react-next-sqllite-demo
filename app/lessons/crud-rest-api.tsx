import { Lesson } from '../components/LessonSlider';

export const crudRestApiLesson: Lesson = {
  id: 'crud-rest-api',
  title: 'CRUD & REST API',
  description: 'Podstawy API i operacji CRUD',
  icon: '🔄',
  slides: [
    {
      id: 'what-is-crud',
      title: 'Co to jest CRUD?',
      icon: '🔄',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-purple-400">CRUD</strong> to akronim 4 podstawowych operacji 
            na danych w każdej aplikacji.
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-3xl font-black mb-6 text-center">CRUD</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 rounded-xl p-5">
                <div className="text-5xl mb-3">✏️</div>
                <h4 className="text-2xl font-bold mb-2 text-green-400">CREATE</h4>
                <p className="text-sm">Dodaj nowy rekord do bazy</p>
                <div className="mt-3 text-xs bg-black/30 rounded p-2">
                  Przykład: Rejestracja użytkownika
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-5">
                <div className="text-5xl mb-3">👁️</div>
                <h4 className="text-2xl font-bold mb-2 text-blue-400">READ</h4>
                <p className="text-sm">Odczytaj dane z bazy</p>
                <div className="mt-3 text-xs bg-black/30 rounded p-2">
                  Przykład: Pokaż listę postów
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-5">
                <div className="text-5xl mb-3">🔄</div>
                <h4 className="text-2xl font-bold mb-2 text-yellow-400">UPDATE</h4>
                <p className="text-sm">Zaktualizuj istniejący rekord</p>
                <div className="mt-3 text-xs bg-black/30 rounded p-2">
                  Przykład: Edycja profilu
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-5">
                <div className="text-5xl mb-3">🗑️</div>
                <h4 className="text-2xl font-bold mb-2 text-red-400">DELETE</h4>
                <p className="text-sm">Usuń rekord z bazy</p>
                <div className="mt-3 text-xs bg-black/30 rounded p-2">
                  Przykład: Usunięcie konta
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-5 border border-orange-500/50">
            <p className="text-lg">
              <strong>💡 Każda aplikacja używa CRUD!</strong> Facebook (posty), Gmail (maile), 
              Spotify (playlisty) - wszystkie wykonują te 4 operacje na swoich danych.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'what-is-api',
      title: 'Co to jest API?',
      icon: '🔌',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-blue-400">API</strong> (Application Programming Interface) to 
            <strong> menu restauracji</strong> dla programistów!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🍔 Analogia: Restauracja Fast Food</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <strong>🏢 Restauracja (Serwer)</strong>
                <p className="text-sm mt-2">Ma kuchnię, składniki, przepisy. Może zrobić jedzenie.</p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong>📋 Menu (API)</strong>
                <p className="text-sm mt-2">
                  Lista dostępnych potraw. Możesz zamówić tylko to co jest w menu. 
                  Menu opisuje co możesz dostać i jak to zamówić.
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong>👤 Klient (Ty / Twoja Aplikacja)</strong>
                <p className="text-sm mt-2">Patrzysz w menu i zamawiasz. Nie wchodzisz do kuchni!</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 API w praktyce</h4>
            <p className="mb-3">Aplikacja chce pobrać listę produktów z serwera:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">1</span>
                <span>Frontend wysyła request: "Daj mi produkty"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">2</span>
                <span>API sprawdza: "OK, masz dostęp"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">3</span>
                <span>Serwer pobiera dane z bazy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/10 px-3 py-1 rounded">4</span>
                <span>API zwraca dane jako JSON</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>💡 Przykłady API:</strong>
            <p className="mt-2">Google Maps API, Twitter API, Spotify API, OpenWeather API...</p>
          </div>
        </div>
      )
    },
    {
      id: 'what-is-rest',
      title: 'REST API - Standard komunikacji',
      icon: '🌐',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-green-400">REST</strong> (Representational State Transfer) to 
            <strong> standard</strong> budowy API. 99% API w internecie to REST API!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📜 Zasady REST</h3>
            <div className="space-y-3">
              <div className="bg-green-500/20 rounded p-4">
                <strong>1. Używaj HTTP methods</strong>
                <p className="text-sm mt-1">GET, POST, PUT, DELETE - każda ma swoje zadanie</p>
              </div>
              <div className="bg-blue-500/20 rounded p-4">
                <strong>2. Intuicyjne URL-e</strong>
                <p className="text-sm mt-1"><code className="bg-black/30 px-2 py-1 rounded">/api/users</code>, <code className="bg-black/30 px-2 py-1 rounded">/api/products/5</code></p>
              </div>
              <div className="bg-purple-500/20 rounded p-4">
                <strong>3. Stateless</strong>
                <p className="text-sm mt-1">Każdy request jest niezależny (nie pamięta poprzednich)</p>
              </div>
              <div className="bg-yellow-500/20 rounded p-4">
                <strong>4. JSON jako format</strong>
                <p className="text-sm mt-1">Wysyłaj i odbieraj dane w JSON</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">📊 HTTP Methods (verbs)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between bg-white/10 rounded p-2">
                <strong className="text-blue-400">GET</strong>
                <span>Pobierz dane (READ)</span>
              </div>
              <div className="flex justify-between bg-white/10 rounded p-2">
                <strong className="text-green-400">POST</strong>
                <span>Utwórz nowy (CREATE)</span>
              </div>
              <div className="flex justify-between bg-white/10 rounded p-2">
                <strong className="text-yellow-400">PUT/PATCH</strong>
                <span>Zaktualizuj (UPDATE)</span>
              </div>
              <div className="flex justify-between bg-white/10 rounded p-2">
                <strong className="text-red-400">DELETE</strong>
                <span>Usuń (DELETE)</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>⚡ Szybka zasada:</strong> HTTP method mówi "CO robisz", URL mówi "NA CZYM"
          </div>
        </div>
      )
    },
    {
      id: 'rest-examples',
      title: 'REST API - Przykłady',
      icon: '📝',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobaczmy jak wygląda <strong className="text-blue-400">REST API dla produktów</strong>:
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📖</span>
                <strong className="text-xl text-green-400">GET /api/products</strong>
              </div>
              <p className="text-sm mb-2">Pobierz wszystkie produkty</p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`Response:
{
  "success": true,
  "data": [
    { "id": 1, "name": "Laptop", "price": 2999 },
    { "id": 2, "name": "Mouse", "price": 49 }
  ]
}`}</code>
              </pre>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📄</span>
                <strong className="text-xl text-blue-400">GET /api/products/1</strong>
              </div>
              <p className="text-sm mb-2">Pobierz produkt o ID = 1</p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-blue-400">{`Response:
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Laptop",
    "price": 2999
  }
}`}</code>
              </pre>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">➕</span>
                <strong className="text-xl text-purple-400">POST /api/products</strong>
              </div>
              <p className="text-sm mb-2">Utwórz nowy produkt</p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-purple-400">{`Body (wysyłasz):
{
  "name": "Keyboard",
  "price": 199
}

Response:
{
  "success": true,
  "id": 3
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rest-examples-2',
      title: 'REST API - UPDATE & DELETE',
      icon: '🔄',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Kontynuacja przykładów REST API:
          </p>

          <div className="space-y-4">
            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">✏️</span>
                <strong className="text-xl text-yellow-400">PUT /api/products/1</strong>
              </div>
              <p className="text-sm mb-2">Zaktualizuj produkt o ID = 1</p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-yellow-400">{`Body (wysyłasz):
{
  "name": "Gaming Laptop",
  "price": 3999
}

Response:
{
  "success": true,
  "message": "Updated"
}`}</code>
              </pre>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🗑️</span>
                <strong className="text-xl text-red-400">DELETE /api/products/1</strong>
              </div>
              <p className="text-sm mb-2">Usuń produkt o ID = 1</p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-red-400">{`Response:
{
  "success": true,
  "message": "Deleted"
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Zauważ wzorzec:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-3">
                <code>/api/products</code> - operacje na kolekcji
              </div>
              <div className="bg-white/10 rounded p-3">
                <code>/api/products/1</code> - operacje na konkretnym produkcie
              </div>
              <div className="bg-white/10 rounded p-3">
                Metoda HTTP (GET/POST/PUT/DELETE) określa CO robisz
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-4 border-2 border-green-500/50">
            <strong>✨ To jest standard REST!</strong> Proste, czytelne, uniwersalne.
          </div>
        </div>
      )
    },
    {
      id: 'status-codes',
      title: 'HTTP Status Codes',
      icon: '📊',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            API używa <strong className="text-blue-400">kodów statusu HTTP</strong> żeby powiedzieć 
            "jak poszło"
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <h4 className="text-xl font-bold mb-3 text-green-400">✅ 2xx - Sukces</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <strong>200 OK</strong> - Wszystko git!
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>201 Created</strong> - Utworzono nowy zasób
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>204 No Content</strong> - OK, ale brak danych do zwrócenia
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-2 border-yellow-500/50">
              <h4 className="text-xl font-bold mb-3 text-yellow-400">⚠️ 4xx - Błąd klienta</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <strong>400 Bad Request</strong> - Źle sformatowany request
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>401 Unauthorized</strong> - Zaloguj się!
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>404 Not Found</strong> - Nie znaleziono
                </div>
              </div>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
              <h4 className="text-xl font-bold mb-3 text-red-400">❌ 5xx - Błąd serwera</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <strong>500 Internal Server Error</strong> - Coś poszło nie tak
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>503 Service Unavailable</strong> - Serwer niedostępny
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-2 border-blue-500/50">
              <h4 className="text-xl font-bold mb-3 text-blue-400">🔄 3xx - Redirect</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <strong>301 Moved Permanently</strong> - Przeniesiono na stałe
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>304 Not Modified</strong> - Użyj cache
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>💡 Przykład:</strong>
            <pre className="bg-black/50 rounded p-3 text-xs mt-2">
              <code className="text-green-400">{`fetch('/api/products/999')
  .then(res => {
    if (res.status === 404) {
      console.log('Produkt nie istnieje');
    }
  });`}</code>
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'api-in-nextjs',
      title: 'API Routes w Next.js',
      icon: '▲',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Next.js</strong> ma wbudowaną obsługę API! 
            Nie potrzebujesz osobnego serwera!
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">📁 Struktura plików</h3>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-blue-400">{`app/
  api/
    products/
      route.ts          → GET /api/products, POST /api/products
      [id]/
        route.ts        → GET /api/products/1, PUT, DELETE`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              Folder <code className="bg-black/30 px-2 py-1 rounded">api/</code> → automatycznie API endpoint!
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Przykład: app/api/products/route.ts</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// GET - pobierz wszystkie
export async function GET() {
  const db = getDatabase();
  const products = db.prepare('SELECT * FROM products').all();
  return Response.json({ success: true, data: products });
}

// POST - utwórz nowy
export async function POST(request: Request) {
  const body = await request.json();
  const db = getDatabase();
  const result = db.prepare(
    'INSERT INTO products (name, price) VALUES (?, ?)'
  ).run(body.name, body.price);
  return Response.json({ success: true, id: result.lastInsertRowid });
}`}</code>
            </pre>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-2">🎯 Co tu się dzieje?</h4>
            <ul className="text-sm space-y-1">
              <li>• Eksportujesz funkcje async (GET, POST, PUT, DELETE)</li>
              <li>• Next.js automatycznie tworzy endpoint</li>
              <li>• Kod działa na serwerze (Node.js) - masz dostęp do bazy!</li>
              <li>• Zwracasz Response.json()</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'crud-in-our-app',
      title: 'CRUD w naszej aplikacji',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobacz jak <strong className="text-purple-400">CRUD + REST API</strong> działa w tej aplikacji!
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4 text-center">🔄 Pełen flow CRUD</h3>
            <div className="space-y-3">
              <div className="bg-green-500/20 rounded p-4">
                <strong className="text-green-400">1. CREATE (Dodaj produkt)</strong>
                <div className="text-xs mt-2 space-y-1">
                  <div>Frontend: Formularz → POST /api/produkty</div>
                  <div>Backend: INSERT INTO produkty</div>
                  <div>Response: {"{ success: true, id: 5 }"}</div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded p-4">
                <strong className="text-blue-400">2. READ (Pokaż listę)</strong>
                <div className="text-xs mt-2 space-y-1">
                  <div>Frontend: useEffect → GET /api/produkty</div>
                  <div>Backend: SELECT * FROM produkty</div>
                  <div>Response: {"{ success: true, data: [...] }"}</div>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded p-4">
                <strong className="text-yellow-400">3. UPDATE (Edytuj)</strong>
                <div className="text-xs mt-2 space-y-1">
                  <div>Frontend: Klik "Edytuj" → PUT /api/produkty/5</div>
                  <div>Backend: UPDATE produkty SET ... WHERE id=5</div>
                  <div>Response: {"{ success: true }"}</div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded p-4">
                <strong className="text-red-400">4. DELETE (Usuń)</strong>
                <div className="text-xs mt-2 space-y-1">
                  <div>Frontend: Klik "Usuń" → DELETE /api/produkty/5</div>
                  <div>Backend: DELETE FROM produkty WHERE id=5</div>
                  <div>Response: {"{ success: true }"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎓 Sprawdź w praktyce!</h4>
            <p className="mb-3">Przejdź na stronę <strong>CRUD Operations Demo</strong> i zobacz jak to działa live!</p>
            <div className="bg-white/10 rounded p-3 text-sm">
              Obserwuj Network tab w DevTools (F12) → zakładka Network → każda operacja to request do API!
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold mb-3">🎉 Gratulacje!</p>
            <p className="text-lg">
              Rozumiesz teraz CRUD i REST API - fundamenty backend development! 
              Możesz budować własne API 🚀
            </p>
          </div>
        </div>
      )
    }
  ]
};
