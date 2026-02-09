import { Lesson } from '../components/LessonSlider';

export const nodejsBasicsLesson: Lesson = {
  id: 'nodejs-basics',
  title: 'Node.js - JavaScript po stronie serwera',
  description: 'Naucz się jak JavaScript działa na serwerze',
  icon: '🟢',
  slides: [
    {
      id: 'what-is-nodejs',
      title: 'Co to jest Node.js?',
      icon: '🟢',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-green-400">Node.js</strong> to środowisko, które pozwala uruchamiać 
            <strong> JavaScript poza przeglądarką</strong> - na serwerze!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🎭 Wyobraź sobie...</h3>
            <p className="mb-4">
              Normalnie JavaScript działa tylko w przeglądarce (Chrome, Firefox). 
              To jakby aktor, który może występować tylko w jednym teatrze.
            </p>
            <p className="mb-4">
              <strong className="text-green-400">Node.js to jak przenośna scena</strong> - teraz ten 
              sam aktor (JavaScript) może występować wszędzie: na serwerze, w aplikacjach desktopowych, 
              nawet w robotach!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-500/20 rounded-xl p-5 border-2 border-yellow-500/50">
              <h4 className="text-xl font-bold mb-3 text-yellow-400">🌐 JavaScript w przeglądarce</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Zmienia wygląd strony</li>
                <li>✓ Reaguje na kliknięcia</li>
                <li>✓ Animacje</li>
                <li>❌ Nie ma dostępu do plików</li>
                <li>❌ Nie może tworzyć serwerów</li>
              </ul>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <h4 className="text-xl font-bold mb-3 text-green-400">🟢 JavaScript w Node.js</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Wszystko co w przeglądarce</li>
                <li>✓ Czyta i pisze pliki</li>
                <li>✓ Tworzy serwery HTTP</li>
                <li>✓ Łączy się z bazami danych</li>
                <li>✓ Uruchamia cron jobs</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <p className="text-lg">
              <strong>💡 Ważne:</strong> To ten sam JavaScript! Nie musisz uczyć się nowego języka 🎉
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'why-nodejs',
      title: 'Dlaczego Node.js jest genialny?',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Node.js to <strong className="text-green-400">game changer</strong> w web development. 
            Oto dlaczego:
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">1️⃣</span>
                <h4 className="text-xl font-bold text-green-400">Jeden język = Frontend + Backend</h4>
              </div>
              <p className="text-base mb-3">
                Zamiast uczyć się JavaScript (frontend) + PHP/Python/Java (backend), 
                uczysz się <strong>tylko JavaScript</strong>!
              </p>
              <div className="bg-black/30 rounded p-3 text-sm">
                <p className="text-red-400 line-through">❌ Frontend: JavaScript, Backend: PHP</p>
                <p className="text-green-400">✅ Frontend: JavaScript, Backend: JavaScript (Node.js)</p>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">2️⃣</span>
                <h4 className="text-xl font-bold text-blue-400">Szybki i wydajny</h4>
              </div>
              <p className="text-base">
                Node.js używa <strong>V8 engine</strong> (ten sam co Chrome) - jednego z najszybszych 
                interpreterów JavaScript. Plus jest <strong>asynchroniczny</strong> - obsługuje tysiące 
                requestów jednocześnie bez blokowania!
              </p>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">3️⃣</span>
                <h4 className="text-xl font-bold text-purple-400">Ogromna społeczność</h4>
              </div>
              <p className="text-base mb-2">
                <strong>npm</strong> (Node Package Manager) ma ponad 2 miliony paczek! 
                Potrzebujesz czegoś? Na 99% ktoś już to zrobił.
              </p>
              <div className="flex gap-2 flex-wrap text-xs">
                <span className="bg-white/10 px-3 py-1 rounded-full">Express.js</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Socket.io</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Mongoose</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">+ 2M więcej!</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>🌟 Firmy używające Node.js:</strong>
            <p className="mt-2">Netflix, PayPal, Uber, LinkedIn, NASA, Twitter/X...</p>
          </div>
        </div>
      )
    },
    {
      id: 'how-nodejs-works',
      title: 'Jak działa Node.js?',
      icon: '⚙️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Node.js działa <strong className="text-green-400">asynchronicznie</strong> i jest 
            <strong> jednowątkowy</strong>. Co to znaczy?
          </p>

          <div className="bg-orange-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🍔 Analogia: Fast Food</h3>
            <div className="space-y-4">
              <div className="bg-red-500/20 rounded-lg p-4">
                <strong className="text-red-400">❌ Synchroniczny (tradycyjny serwer):</strong>
                <p className="text-sm mt-2">
                  Kasjer przyjmuje zamówienie → czeka aż kucharz zrobi burger → dopiero potem 
                  obsługuje następnego klienta. Wolne! 🐌
                </p>
              </div>
              <div className="bg-green-500/20 rounded-lg p-4">
                <strong className="text-green-400">✅ Asynchroniczny (Node.js):</strong>
                <p className="text-sm mt-2">
                  Kasjer przyjmuje zamówienie → przekazuje do kuchni → od razu obsługuje następnego. 
                  Gdy burger gotowy, dzwoni dzwonek. Szybkie! ⚡
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🔄 Event Loop</h4>
            <p className="mb-3">
              Serce Node.js to <strong>Event Loop</strong> - pętla, która nieustannie sprawdza:
              "Czy coś się skończyło? Czy mogę coś zrobić?"
            </p>
            <div className="bg-black/30 rounded p-4 text-sm font-mono">
              <div className="space-y-1 text-green-400">
                <div>1. Request przyszedł → dodaj do kolejki</div>
                <div>2. Czytanie z bazy danych → rozpocznij i idź dalej</div>
                <div>3. Baza zwróciła dane? → wyślij response</div>
                <div>4. Wróć do kroku 1 (pętla!)</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Rezultat</h4>
            <p>
              Node.js może obsłużyć <strong>tysiące połączeń jednocześnie</strong> na jednym procesorze, 
              bo nie czeka - wykonuje kolejne zadania podczas gdy inne się wykonują w tle!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'nodejs-example',
      title: 'Pierwszy serwer w Node.js',
      icon: '💻',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobaczmy jak wygląda <strong>najprostszy serwer HTTP</strong> w Node.js:
          </p>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3 text-blue-400">📝 Kod serwera (server.js)</h4>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm">
              <code className="text-green-400">{`// Importuj moduł http (wbudowany w Node.js)
const http = require('http');

// Stwórz serwer
const server = http.createServer((req, res) => {
  // To się wykonuje dla każdego requestu
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Witaj! To mój pierwszy serwer Node.js!</h1>');
});

// Nasłuchuj na porcie 3000
server.listen(3000, () => {
  console.log('🚀 Serwer działa na http://localhost:3000');
});`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3 text-green-400">🚀 Jak uruchomić?</h4>
            <div className="space-y-3">
              <div className="bg-black/30 rounded p-3">
                <p className="text-sm mb-1 opacity-70">1. Zapisz kod jako server.js</p>
                <code className="text-blue-400">$ node server.js</code>
              </div>
              <div className="bg-black/30 rounded p-3">
                <p className="text-sm mb-1 opacity-70">2. Otwórz przeglądarkę</p>
                <code className="text-blue-400">http://localhost:3000</code>
              </div>
              <p className="text-sm">
                <strong>Voila! 🎉</strong> Twój serwer działa!
              </p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <h4 className="text-lg font-bold mb-2 text-purple-400">🎯 Co się dzieje?</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>http.createServer()</strong> - tworzy serwer HTTP</li>
              <li>• <strong>req</strong> - request (co klient chce)</li>
              <li>• <strong>res</strong> - response (co mu odpowiadamy)</li>
              <li>• <strong>server.listen(3000)</strong> - nasłuchuj na porcie 3000</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'npm-packages',
      title: 'NPM - Biblioteka wszystkiego',
      icon: '📦',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-red-400">npm</strong> (Node Package Manager) to <strong>sklep z narzędziami</strong> dla programistów!
          </p>

          <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">📦</span>
              <div>
                <h3 className="text-2xl font-bold text-red-400">npm</h3>
                <p className="text-white/70">Największe repozytorium oprogramowania na świecie</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded p-3">
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-sm opacity-70">paczek</div>
              </div>
              <div className="bg-white/10 rounded p-3">
                <div className="text-3xl font-bold">40B+</div>
                <div className="text-sm opacity-70">pobrań/miesiąc</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3 text-blue-400">🔧 Przykładowe paczki</h4>
            <div className="space-y-3">
              <div className="bg-white/5 rounded p-3">
                <strong>express</strong> - framework do budowy serwerów
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">npm install express</code>
              </div>
              <div className="bg-white/5 rounded p-3">
                <strong>mongoose</strong> - obsługa MongoDB
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">npm install mongoose</code>
              </div>
              <div className="bg-white/5 rounded p-3">
                <strong>nodemon</strong> - auto-restart serwera przy zmianach
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">npm install -g nodemon</code>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📋 package.json</h4>
            <p className="text-sm mb-2">
              Lista wszystkich paczek w Twoim projekcie:
            </p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0",
    "mongoose": "^8.0.0"
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pro Tip:</strong> Zawsze commituj <code className="bg-black/30 px-2 py-1 rounded">package.json</code>, 
            nigdy <code className="bg-black/30 px-2 py-1 rounded">node_modules/</code> (za duży!)
          </div>
        </div>
      )
    },
    {
      id: 'nodejs-vs-browser',
      title: 'Node.js vs Przeglądarka',
      icon: '⚔️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Ten sam JavaScript, ale <strong>różne środowiska</strong>. Co jest dostępne gdzie?
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-500/20 rounded-xl p-5 border-2 border-blue-500/50">
              <div className="text-4xl mb-3 text-center">🌐</div>
              <h4 className="text-xl font-bold mb-3 text-center text-blue-400">Przeglądarka</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-500/20 rounded p-2">
                  <strong>✅ Ma:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• window, document</li>
                    <li>• DOM API</li>
                    <li>• fetch(), localStorage</li>
                    <li>• Canvas, WebGL</li>
                  </ul>
                </div>
                <div className="bg-red-500/20 rounded p-2">
                  <strong>❌ Nie ma:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Dostępu do plików</li>
                    <li>• fs, path</li>
                    <li>• Tworzenia serwerów</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <div className="text-4xl mb-3 text-center">🟢</div>
              <h4 className="text-xl font-bold mb-3 text-center text-green-400">Node.js</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-500/20 rounded p-2">
                  <strong>✅ Ma:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• process, __dirname</li>
                    <li>• fs (file system)</li>
                    <li>• http, https</li>
                    <li>• Buffer, streams</li>
                  </ul>
                </div>
                <div className="bg-red-500/20 rounded p-2">
                  <strong>❌ Nie ma:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• window, document</li>
                    <li>• DOM API</li>
                    <li>• localStorage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3 text-purple-400">🤝 Wspólne dla obu</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-white/10 rounded p-2 text-center">console</div>
              <div className="bg-white/10 rounded p-2 text-center">setTimeout</div>
              <div className="bg-white/10 rounded p-2 text-center">JSON</div>
              <div className="bg-white/10 rounded p-2 text-center">Math</div>
              <div className="bg-white/10 rounded p-2 text-center">Array</div>
              <div className="bg-white/10 rounded p-2 text-center">Object</div>
              <div className="bg-white/10 rounded p-2 text-center">Promise</div>
              <div className="bg-white/10 rounded p-2 text-center">async/await</div>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💡 Pamiętaj:</strong> Nie możesz użyć <code className="bg-black/30 px-1 rounded">document.getElementById()</code> w Node.js, 
            bo tam nie ma DOM!
          </div>
        </div>
      )
    },
    {
      id: 'express-framework',
      title: 'Express.js - Framework na sterydach',
      icon: '🚂',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Express.js</strong> to najpopularniejszy framework dla Node.js. 
            Robi wszystko <strong>prostsze i szybsze</strong>!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-500/20 rounded-xl p-5">
              <h4 className="text-lg font-bold mb-3 text-red-400">❌ Czysty Node.js</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-white/70">{`const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Home</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>About</h1>');
  }
  // Dużo kodu...
});`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">Dużo pisania, mało czytelne</p>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5">
              <h4 className="text-lg font-bold mb-3 text-green-400">✅ Express.js</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.listen(3000);`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">Krótkie, czytelne, eleganckie!</p>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3 text-blue-400">🎯 Co daje Express?</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>🛣️ Routing</strong>
                <p className="text-xs mt-1 opacity-70">app.get(), app.post(), app.put(), app.delete()</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>🔌 Middleware</strong>
                <p className="text-xs mt-1 opacity-70">Funkcje między requestem a response</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>📄 Template engines</strong>
                <p className="text-xs mt-1 opacity-70">EJS, Pug, Handlebars</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>🍪 Cookies & Sessions</strong>
                <p className="text-xs mt-1 opacity-70">Łatwa obsługa autoryzacji</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🚀 Szybki start</h4>
            <div className="space-y-2 text-sm bg-black/30 rounded p-3">
              <code className="text-blue-400">$ npm init -y</code><br/>
              <code className="text-blue-400">$ npm install express</code><br/>
              <code className="text-green-400">// Stwórz server.js i gotowe!</code>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>⭐ Ciekawostka:</strong> Express.js ma ponad 25 milionów pobrań tygodniowo! 
            To standard w Node.js development.
          </div>
        </div>
      )
    },
    {
      id: 'nodejs-in-our-stack',
      title: 'Node.js w naszym stacku',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobaczmy jak <strong className="text-green-400">Node.js działa w tej aplikacji</strong> 
            (Next.js + React):
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4 text-center">🔄 Nasz Stack</h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-4 flex items-center gap-3">
                <span className="text-3xl">⚛️</span>
                <div>
                  <strong>React</strong> - Frontend (UI, komponenty)
                  <p className="text-xs opacity-70">Działa w przeglądarce</p>
                </div>
              </div>
              <div className="text-center text-2xl">↕️</div>
              <div className="bg-green-500/20 rounded-lg p-4 flex items-center gap-3">
                <span className="text-3xl">🟢</span>
                <div>
                  <strong>Node.js + Next.js</strong> - Backend (API Routes)
                  <p className="text-xs opacity-70">Działa na serwerze</p>
                </div>
              </div>
              <div className="text-center text-2xl">↕️</div>
              <div className="bg-white/10 rounded-lg p-4 flex items-center gap-3">
                <span className="text-3xl">💾</span>
                <div>
                  <strong>SQLite (better-sqlite3)</strong> - Baza danych
                  <p className="text-xs opacity-70">Node.js łączy się z bazą</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3 text-blue-400">📁 Przykład: API Route</h4>
            <p className="text-sm mb-3">Plik: <code className="bg-black/30 px-2 py-1 rounded">app/api/produkty/route.ts</code></p>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// To działa na serwerze (Node.js!)
export async function GET() {
  const db = getDatabase();              // Node.js: dostęp do plików
  const produkty = db.prepare(           // Node.js: SQLite
    'SELECT * FROM produkty'
  ).all();
  
  return Response.json({                 // Node.js: HTTP response
    success: true,
    data: produkty
  });
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3 text-green-400">🎯 Dlaczego to działa?</h4>
            <ul className="space-y-2 text-base">
              <li>• <strong>Node.js</strong> czyta pliki (database.db)</li>
              <li>• <strong>Node.js</strong> wykonuje SQL queries</li>
              <li>• <strong>Node.js</strong> zwraca JSON do frontendu</li>
              <li>• <strong>React</strong> wyświetla dane użytkownikowi</li>
            </ul>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold mb-3">🎉 Gratulacje!</p>
            <p className="text-lg">
              Teraz rozumiesz jak Node.js pozwala JavaScript działać po stronie serwera. 
              To właśnie dlatego możemy budować <strong>cały stack w jednym języku</strong>!
            </p>
          </div>
        </div>
      )
    }
  ]
};
