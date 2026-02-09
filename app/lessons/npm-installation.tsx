import { Lesson } from '../components/LessonSlider';

export const npmInstallationLesson: Lesson = {
  id: 'npm-installation',
  title: 'NPM & Instalacja Node.js',
  description: 'Podstawy package managera i środowiska Node',
  icon: '📦',
  slides: [
    {
      id: 'what-is-nodejs-npm',
      title: 'Czego potrzebujesz do pracy?',
      icon: '🛠️',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            Żeby pisać aplikacje w React/Next.js potrzebujesz <strong className="text-green-400">Node.js</strong> i 
            <strong className="text-red-400"> npm</strong>!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
              <div className="text-5xl mb-3 text-center">🟢</div>
              <h3 className="text-3xl font-bold mb-4 text-center text-green-400">Node.js</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>Runtime</strong> - uruchamia JavaScript poza przeglądarką</li>
                <li>✓ <strong>Serwer</strong> - tworzy backend w JS</li>
                <li>✓ <strong>Narzędzia</strong> - budowanie, transpilacja, linting</li>
                <li>✓ <strong>Wymagane</strong> dla React, Next.js, Vue...</li>
              </ul>
              <div className="mt-4 bg-black/30 rounded p-2 text-xs text-center">
                Zbudowane na V8 (Chrome engine)
              </div>
            </div>

            <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
              <div className="text-5xl mb-3 text-center">📦</div>
              <h3 className="text-3xl font-bold mb-4 text-center text-red-400">npm</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>Package Manager</strong> - instaluje biblioteki</li>
                <li>✓ <strong>Repository</strong> - 2M+ paczek dostępnych</li>
                <li>✓ <strong>Scripts</strong> - uruchamia komendy (build, dev...)</li>
                <li>✓ <strong>Instaluje się</strong> razem z Node.js!</li>
              </ul>
              <div className="mt-4 bg-black/30 rounded p-2 text-xs text-center">
                npm = Node Package Manager
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔗 Jak współpracują?</h4>
            <div className="space-y-2 text-base">
              <p><strong>Node.js</strong> = silnik który uruchamia kod</p>
              <p><strong>npm</strong> = narzędzie do zarządzania dependencies (pakietami)</p>
              <p className="mt-3 bg-white/10 rounded p-3 text-sm">
                <strong>Przykład:</strong> Chcesz użyć React w projekcie → 
                <code className="bg-black/30 px-2 py-1 rounded mx-1">npm install react</code> → 
                npm pobiera React z internetu → Node.js go uruchamia
              </p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <p className="text-lg">
              <strong>💡 Bez Node.js nie zbudujesz nowoczesnej aplikacji webowej!</strong> 
              To absolutna podstawa.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'installation-guide',
      title: 'Instalacja Node.js i npm',
      icon: '⬇️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Instalacja Node.js jest <strong className="text-green-400">prosta</strong> i 
            <strong> darmowa</strong>! Raz na komputer.
          </p>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">📥 Krok po kroku</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">1️⃣</span>
                  <strong className="text-lg">Idź na nodejs.org</strong>
                </div>
                <p className="text-sm">
                  <a href="https://nodejs.org" className="text-blue-400 underline">nodejs.org</a> → 
                  Zobacz 2 wersje: <strong>LTS</strong> i Current
                </p>
              </div>

              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">2️⃣</span>
                  <strong className="text-lg">Wybierz LTS (Long Term Support)</strong>
                </div>
                <p className="text-sm mb-2">LTS = stabilna, zalecana wersja (np. 20.x)</p>
                <div className="flex gap-3 text-xs">
                  <div className="bg-green-500/30 px-3 py-1 rounded">✅ LTS - użyj tej!</div>
                  <div className="bg-yellow-500/30 px-3 py-1 rounded">⚠️ Current - najnowsze, ale mniej stabilne</div>
                </div>
              </div>

              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">3️⃣</span>
                  <strong className="text-lg">Pobierz dla swojego systemu</strong>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm mt-2">
                  <div className="bg-blue-500/20 rounded p-2 text-center">🪟 Windows</div>
                  <div className="bg-blue-500/20 rounded p-2 text-center">🍎 macOS</div>
                  <div className="bg-blue-500/20 rounded p-2 text-center">🐧 Linux</div>
                </div>
              </div>

              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">4️⃣</span>
                  <strong className="text-lg">Uruchom instalator</strong>
                </div>
                <p className="text-sm">Klikaj "Next" → zgódź się z licencją → zainstaluj</p>
                <p className="text-xs mt-2 opacity-70">npm instaluje się automatycznie razem z Node.js!</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">✅ Sprawdź czy działa</h4>
            <p className="text-sm mb-3">Otwórz terminal/CMD i wpisz:</p>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`node --version
# Output: v20.11.0 (lub inna wersja)

npm --version
# Output: 10.2.4 (lub inna wersja)`}</code>
            </pre>
            <p className="text-sm mt-3">Jeśli widzisz wersje - sukces! 🎉</p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Troubleshooting:</strong> Jeśli komendy nie działają, zrestartuj terminal lub komputer
          </div>
        </div>
      )
    },
    {
      id: 'package-json',
      title: 'package.json - Serce projektu',
      icon: '📄',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Każdy projekt Node.js ma plik <strong className="text-blue-400">package.json</strong> - 
            manifest z konfiguracją!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📋 Co zawiera package.json?</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`{
  "name": "my-app",                    // Nazwa projektu
  "version": "1.0.0",                  // Wersja
  "description": "My awesome app",     // Opis
  "main": "index.js",                  // Główny plik
  
  "scripts": {                         // Komendy do uruchomienia
    "dev": "next dev",                 // npm run dev
    "build": "next build",             // npm run build
    "start": "next start"              // npm start
  },
  
  "dependencies": {                    // Paczki produkcyjne
    "react": "^19.0.0",
    "next": "^16.0.0"
  },
  
  "devDependencies": {                 // Paczki deweloperskie
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0"
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Najważniejsze sekcje</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong className="text-purple-400">scripts:</strong> Skróty do komend
                <p className="text-xs mt-1 opacity-70">
                  Zamiast <code className="bg-black/30 px-1 rounded">next dev --turbopack</code> 
                  → <code className="bg-black/30 px-1 rounded">npm run dev</code>
                </p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong className="text-blue-400">dependencies:</strong> Biblioteki potrzebne w produkcji
                <p className="text-xs mt-1 opacity-70">React, Next.js, axios...</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong className="text-green-400">devDependencies:</strong> Tylko do developmentu
                <p className="text-xs mt-1 opacity-70">TypeScript, ESLint, testing libraries...</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🚀 Jak stworzyć package.json?</h4>
            <pre className="bg-black/50 rounded p-3 text-sm">
              <code className="text-green-400">{`npm init
# Odpowiadasz na pytania (nazwa, wersja...)

# LUB szybka wersja (wypełnia defaultami)
npm init -y`}</code>
            </pre>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>⚠️ Ważne:</strong> <strong>NIE edytuj ręcznie</strong> dependencies! 
            Używaj <code className="bg-black/30 px-2 py-1 rounded">npm install</code>
          </div>
        </div>
      )
    },
    {
      id: 'npm-install',
      title: 'npm install - Instalacja pakietów',
      icon: '📦',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-red-400">npm install</strong> pobiera biblioteki z internetu 
            i dodaje do projektu!
          </p>

          <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
            <h3 className="text-2xl font-bold mb-4">📥 Podstawowe komendy</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <strong className="text-red-400">Zainstaluj paczkę</strong>
                <code className="block mt-2 text-sm bg-black/30 p-2 rounded">
                  npm install react
                </code>
                <p className="text-xs mt-1 opacity-70">
                  Dodaje do dependencies w package.json + pobiera do node_modules/
                </p>
              </div>

              <div className="bg-white/10 rounded p-4">
                <strong className="text-blue-400">Zainstaluj wszystkie zależności</strong>
                <code className="block mt-2 text-sm bg-black/30 p-2 rounded">
                  npm install
                </code>
                <p className="text-xs mt-1 opacity-70">
                  Czyta package.json i instaluje WSZYSTKIE wymienione paczki
                </p>
              </div>

              <div className="bg-white/10 rounded p-4">
                <strong className="text-green-400">Dev dependency</strong>
                <code className="block mt-2 text-sm bg-black/30 p-2 rounded">
                  npm install --save-dev typescript
                </code>
                <p className="text-xs mt-1 opacity-70">
                  Dodaje do devDependencies (tylko development, nie production)
                </p>
              </div>

              <div className="bg-white/10 rounded p-4">
                <strong className="text-purple-400">Globalna instalacja</strong>
                <code className="block mt-2 text-sm bg-black/30 p-2 rounded">
                  npm install -g create-next-app
                </code>
                <p className="text-xs mt-1 opacity-70">
                  Instaluje na całym systemie (dostępne jako komenda w terminalu)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🗑️ Usuwanie pakietów</h4>
            <pre className="bg-black/50 rounded p-3 text-sm">
              <code className="text-blue-400">{`npm uninstall react
# Usuwa z node_modules i package.json`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📁 node_modules/</h4>
            <p className="text-sm mb-2">
              Folder gdzie npm zapisuje wszystkie pobrane biblioteki. Może być <strong>OGROMNY</strong> (100MB+)!
            </p>
            <div className="bg-white/10 rounded p-3 text-sm">
              ⚠️ <strong>NIE commituj node_modules do Git!</strong><br/>
              Dodaj do <code className="bg-black/30 px-2 py-1 rounded">.gitignore</code>:<br/>
              <code className="bg-black/30 px-2 py-1 rounded mt-1 inline-block">node_modules/</code>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Tip:</strong> Pobierasz projekt z GitHub? 
            Najpierw <code className="bg-black/30 px-2 py-1 rounded">npm install</code> 
            żeby zainstalować dependencies!
          </div>
        </div>
      )
    },
    {
      id: 'npm-run-dev',
      title: 'npm run dev - Development Server',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-green-400">npm run dev</strong> uruchamia serwer deweloperski 
            z hot reload!
          </p>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">🔥 Co to jest hot reload?</h3>
            <div className="space-y-3">
              <p className="text-lg">
                Zapisujesz plik → aplikacja <strong>automatycznie się odświeża</strong> w przeglądarce!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/20 rounded p-4">
                  <strong className="text-red-400">❌ Bez hot reload:</strong>
                  <ol className="text-xs mt-2 space-y-1 ml-4 list-decimal">
                    <li>Edytujesz kod</li>
                    <li>Zapisujesz</li>
                    <li>Restartujesz serwer ręcznie</li>
                    <li>Odświeżasz przeglądarkę</li>
                  </ol>
                  <p className="text-xs mt-2">Męczące! 😫</p>
                </div>
                <div className="bg-green-500/20 rounded p-4">
                  <strong className="text-green-400">✅ Z hot reload:</strong>
                  <ol className="text-xs mt-2 space-y-1 ml-4 list-decimal">
                    <li>Edytujesz kod</li>
                    <li>Zapisujesz</li>
                    <li><strong>Gotowe!</strong> 🎉</li>
                  </ol>
                  <p className="text-xs mt-2">Wszystko automatycznie!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Uruchomienie dev server</h4>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`# W folderze projektu
npm run dev

# Output:
# ▲ Next.js 16.1.6
# - Local:        http://localhost:3000
# - Ready in 1.2s`}</code>
            </pre>
            <p className="text-sm mt-3">
              Teraz otwórz <code className="bg-black/30 px-2 py-1 rounded">http://localhost:3000</code> 
              w przeglądarce!
            </p>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🛑 Zatrzymanie servera</h4>
            <p className="text-sm mb-2">W terminalu gdzie uruchomiłeś <code className="bg-black/30 px-2 py-1 rounded">npm run dev</code>:</p>
            <div className="bg-black/30 rounded p-3 text-center">
              <strong className="text-2xl">Ctrl + C</strong>
              <p className="text-xs mt-1 opacity-70">(Windows/Linux) lub Cmd + C (Mac)</p>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Co robi npm run dev?</h4>
            <ul className="text-sm space-y-2">
              <li>• Uruchamia Next.js development server</li>
              <li>• Kompiluje TypeScript/JSX na żywo</li>
              <li>• Obsługuje hot reload (Fast Refresh w React)</li>
              <li>• Wyświetla błędy w przeglądarce</li>
              <li>• Source maps (debugging w DevTools)</li>
            </ul>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💡 Port zajęty?</strong> Jeśli 3000 zajęty, Next.js zapyta czy użyć 3001. 
            Możesz też: <code className="bg-black/30 px-2 py-1 rounded">PORT=4000 npm run dev</code>
          </div>
        </div>
      )
    },
    {
      id: 'npm-scripts',
      title: 'NPM Scripts - Komendy projektu',
      icon: '⚙️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Scripts</strong> w package.json to skróty do 
            często używanych komend!
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">📜 Standardowe scripts w Next.js</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center justify-between mb-2">
                  <strong className="text-green-400">npm run dev</strong>
                  <span className="text-xs bg-green-500/20 px-2 py-1 rounded">Development</span>
                </div>
                <p className="text-sm">Uruchamia development server z hot reload</p>
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  "dev": "next dev"
                </code>
              </div>

              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center justify-between mb-2">
                  <strong className="text-blue-400">npm run build</strong>
                  <span className="text-xs bg-blue-500/20 px-2 py-1 rounded">Production</span>
                </div>
                <p className="text-sm">Buduje zoptymalizowaną wersję produkcyjną</p>
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  "build": "next build"
                </code>
              </div>

              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center justify-between mb-2">
                  <strong className="text-purple-400">npm start</strong>
                  <span className="text-xs bg-purple-500/20 px-2 py-1 rounded">Production</span>
                </div>
                <p className="text-sm">Uruchamia produkcyjny server (po build)</p>
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  "start": "next start"
                </code>
              </div>

              <div className="bg-white/10 rounded p-4">
                <div className="flex items-center justify-between mb-2">
                  <strong className="text-yellow-400">npm run lint</strong>
                  <span className="text-xs bg-yellow-500/20 px-2 py-1 rounded">Quality</span>
                </div>
                <p className="text-sm">Sprawdza kod pod kątem błędów (ESLint)</p>
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  "lint": "next lint"
                </code>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔧 Własne scripty</h4>
            <p className="text-sm mb-3">Możesz dodawać swoje!</p>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-blue-400">{`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "test": "jest",                    // Testy
  "format": "prettier --write .",    // Formatowanie
  "type-check": "tsc --noEmit",      // TypeScript check
  "clean": "rm -rf .next out"        // Czyszczenie
}`}</code>
            </pre>
            <p className="text-sm mt-3">Uruchom: <code className="bg-black/30 px-2 py-1 rounded">npm run test</code></p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">⚡ Skróty</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">npm start</code> = <code>npm run start</code>
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">npm test</code> = <code>npm run test</code>
              </div>
            </div>
            <p className="text-xs mt-2 opacity-70">Tylko dla start i test!</p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pre/Post hooks:</strong> <code className="bg-black/30 px-2 py-1 rounded">prebuild</code>, 
            <code className="bg-black/30 px-2 py-1 rounded">postbuild</code> - uruchamiają się przed/po build
          </div>
        </div>
      )
    },
    {
      id: 'package-lock',
      title: 'package-lock.json - Lock File',
      icon: '🔒',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">package-lock.json</strong> zapisuje DOKŁADNE wersje 
            wszystkich pakietów. <strong>Nie edytuj go ręcznie!</strong>
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-500/50">
            <h3 className="text-2xl font-bold mb-4">🔒 Po co lock file?</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <strong className="text-green-400">Problem bez lock file:</strong>
                <p className="text-sm mt-2">
                  package.json: <code className="bg-black/30 px-2 py-1 rounded">"react": "^19.0.0"</code>
                </p>
                <p className="text-xs mt-1 opacity-70">
                  ^ = "19.0.0 lub nowsza" → Ty instalujesz 19.0.0, kolega za miesiąc 19.1.0 → 
                  <strong className="text-red-400"> różne wersje = potencjalne błędy!</strong>
                </p>
              </div>

              <div className="bg-white/10 rounded p-4">
                <strong className="text-blue-400">Rozwiązanie: package-lock.json</strong>
                <p className="text-sm mt-2">
                  Zapisuje dokładnie: React 19.0.0, build 1234, dependencies...
                </p>
                <p className="text-xs mt-1 opacity-70">
                  Wszyscy w zespole mają <strong>identyczne</strong> wersje!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">📊 Różnica między plikami</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-500/20 rounded p-4">
                <strong className="text-green-400">package.json</strong>
                <ul className="mt-2 space-y-1 text-xs">
                  <li>✓ Edytujesz ręcznie (czasem)</li>
                  <li>✓ Range wersji (<code className="bg-black/30 px-1 rounded">^19.0.0</code>)</li>
                  <li>✓ Prosty, czytelny</li>
                  <li>✓ Pokazuje intencję</li>
                </ul>
              </div>
              <div className="bg-blue-500/20 rounded p-4">
                <strong className="text-blue-400">package-lock.json</strong>
                <ul className="mt-2 space-y-1 text-xs">
                  <li>✓ <strong>NIE edytujesz!</strong></li>
                  <li>✓ Dokładne wersje (19.0.0)</li>
                  <li>✓ Duży, szczegółowy</li>
                  <li>✓ Gwarantuje powtarzalność</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Czy commitować do Git?</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-3 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong>package.json</strong> - TAK, zawsze!
                </div>
              </div>
              <div className="bg-white/10 rounded p-3 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong>package-lock.json</strong> - TAK, zawsze!
                </div>
              </div>
              <div className="bg-white/10 rounded p-3 flex items-center gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>node_modules/</strong> - NIE, nigdy!
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Tip:</strong> Jeśli masz problemy, usuń node_modules i package-lock.json, 
            potem <code className="bg-black/30 px-2 py-1 rounded">npm install</code> od nowa
          </div>
        </div>
      )
    },
    {
      id: 'npm-alternatives',
      title: 'Alternatywy: yarn, pnpm, bun',
      icon: '🔄',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            npm nie jest jedyny! Inne package managery oferują lepszą wydajność.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
              <div className="text-4xl mb-2 text-center">📦</div>
              <h4 className="text-xl font-bold mb-3 text-center text-red-400">npm</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Default z Node.js</li>
                <li>✓ Najbardziej popularny</li>
                <li>✓ Wolniejszy niż alternatywy</li>
                <li>✓ Dobry na start</li>
              </ul>
              <code className="block mt-3 text-xs bg-black/30 p-2 rounded text-center">
                npm install
              </code>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-2 border-blue-500/50">
              <div className="text-4xl mb-2 text-center">🐈</div>
              <h4 className="text-xl font-bold mb-3 text-center text-blue-400">yarn</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Szybszy niż npm</li>
                <li>✓ Lepsze error messages</li>
                <li>✓ Offline mode</li>
                <li>✓ Workspace (monorepo)</li>
              </ul>
              <code className="block mt-3 text-xs bg-black/30 p-2 rounded text-center">
                yarn install
              </code>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-2 border-yellow-500/50">
              <div className="text-4xl mb-2 text-center">⚡</div>
              <h4 className="text-xl font-bold mb-3 text-center text-yellow-400">pnpm</h4>
              <ul className="text-sm space-y-1">
                <li>✓ <strong>Najszybszy!</strong></li>
                <li>✓ Oszczędza miejsce (symlinki)</li>
                <li>✓ Strict (lepsze dependency management)</li>
                <li>✓ Workspace support</li>
              </ul>
              <code className="block mt-3 text-xs bg-black/30 p-2 rounded text-center">
                pnpm install
              </code>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5 border-2 border-purple-500/50">
              <div className="text-4xl mb-2 text-center">🥟</div>
              <h4 className="text-xl font-bold mb-3 text-center text-purple-400">bun</h4>
              <ul className="text-sm space-y-1">
                <li>✓ <strong>ULTRA szybki!</strong></li>
                <li>✓ Zastępuje Node.js + npm</li>
                <li>✓ Built-in bundler, test runner</li>
                <li>✓ Nowy (2023+), mniej stabilny</li>
              </ul>
              <code className="block mt-3 text-xs bg-black/30 p-2 rounded text-center">
                bun install
              </code>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">📊 Porównanie szybkości</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-32">npm install</div>
                <div className="flex-1 bg-red-500 h-6 rounded"></div>
                <div>~30s</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32">yarn install</div>
                <div className="flex-1 bg-blue-500 h-6 rounded" style={{width: '70%'}}></div>
                <div>~20s</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32">pnpm install</div>
                <div className="flex-1 bg-yellow-500 h-6 rounded" style={{width: '40%'}}></div>
                <div>~10s</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32">bun install</div>
                <div className="flex-1 bg-purple-500 h-6 rounded" style={{width: '20%'}}></div>
                <div>~3s</div>
              </div>
            </div>
            <p className="text-xs mt-3 opacity-70">*Czasy przybliżone, zależą od projektu</p>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💡 Rekomendacja:</strong> Zacznij od <strong>npm</strong>. 
            Jak się oswoisz, spróbuj <strong>pnpm</strong> (najlepszy stosunek szybkość/stabilność)
          </div>
        </div>
      )
    }
  ]
};
