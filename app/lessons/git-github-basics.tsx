import { Lesson } from '../components/LessonSlider';

export const gitGithubBasicsLesson: Lesson = {
  id: 'git-github-basics',
  title: 'Git & GitHub - Kontrola Wersji',
  description: 'System kontroli wersji dla programistów',
  icon: '🐙',
  slides: [
    {
      id: 'what-is-version-control',
      title: 'Co to jest kontrola wersji?',
      icon: '📚',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-blue-400">Kontrola wersji</strong> to system który 
            <strong> śledzi zmiany</strong> w plikach i pozwala wrócić do wcześniejszych wersji!
          </p>

          <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-500/50">
            <h3 className="text-2xl font-bold mb-4">🎮 Analogia: Save points w grze</h3>
            <div className="space-y-3">
              <p className="text-lg">
                Wyobraź sobie grę wideo bez możliwości zapisu. Jeden błąd = zaczynasz od nowa!
              </p>
              <div className="bg-white/10 rounded p-4">
                <strong>🎯 Save points (Git commits):</strong>
                <ul className="mt-2 space-y-2 ml-4">
                  <li>✓ Zapisujesz postęp w ważnych momentach</li>
                  <li>✓ Jeśli coś pójdzie nie tak, wracasz do zapisu</li>
                  <li>✓ Możesz mieć wiele zapisów na różnych etapach</li>
                  <li>✓ Nie boisz się eksperymentować!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
              <h4 className="text-xl font-bold mb-3 text-red-300">❌ Bez kontroli wersji</h4>
              <ul className="text-sm space-y-2">
                <li>• projekt_final.zip</li>
                <li>• projekt_final_FINAL.zip</li>
                <li>• projekt_final_FINAL_v2.zip</li>
                <li>• projekt_final_FINAL_v2_naprawde.zip</li>
                <li>• projekt_przed_poprawkami_backup.zip</li>
              </ul>
              <p className="text-xs mt-3 opacity-80">Chaos! Który plik jest najnowszy? 😱</p>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <h4 className="text-xl font-bold mb-3 text-green-300">✅ Z Git</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Historia zmian</strong> - każda zmiana zapisana</li>
                <li>• <strong>Wiadomości</strong> - "co" i "dlaczego" zmieniłeś</li>
                <li>• <strong>Cofnij zmiany</strong> - w każdej chwili</li>
                <li>• <strong>Branches</strong> - eksperymentuj bezpiecznie</li>
                <li>• <strong>Współpraca</strong> - wielu developerów, zero konfliktów</li>
              </ul>
              <p className="text-xs mt-3 opacity-80">Porządek i profesjonalizm! ✨</p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <p className="text-lg">
              <strong>💡 Git to standard branży!</strong> Każdy programista używa Git. 
              Firmy wymagają tego w ofertach pracy.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'git-vs-github',
      title: 'Git vs GitHub - Jaka różnica?',
      icon: '🔀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Ludzie często mylą <strong className="text-orange-400">Git</strong> z 
            <strong className="text-purple-400"> GitHub</strong>. To dwie różne rzeczy!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-500/50">
              <div className="text-5xl mb-3 text-center">📦</div>
              <h3 className="text-3xl font-bold mb-4 text-center text-orange-400">Git</h3>
              <ul className="space-y-2">
                <li>✓ <strong>Program</strong> na Twoim komputerze</li>
                <li>✓ <strong>System kontroli wersji</strong></li>
                <li>✓ Działa <strong>lokalnie</strong> (offline)</li>
                <li>✓ Śledzi zmiany w plikach</li>
                <li>✓ Tworzy commits, branches</li>
                <li>✓ <strong>Darmowy</strong> i open-source</li>
              </ul>
              <div className="mt-4 bg-black/30 rounded p-2 text-xs text-center">
                Stworzony przez Linusa Torvaldsa (2005)
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
              <div className="text-5xl mb-3 text-center">🐙</div>
              <h3 className="text-3xl font-bold mb-4 text-center text-purple-400">GitHub</h3>
              <ul className="space-y-2">
                <li>✓ <strong>Platforma</strong> w chmurze (strona www)</li>
                <li>✓ <strong>Hosting</strong> dla projektów Git</li>
                <li>✓ Działa <strong>online</strong></li>
                <li>✓ Współpraca w zespołach</li>
                <li>✓ Pull Requests, Issues, Actions</li>
                <li>✓ Darmowy + płatne plany</li>
              </ul>
              <div className="mt-4 bg-black/30 rounded p-2 text-xs text-center">
                Właściciel: Microsoft (od 2018)
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🤝 Jak współpracują?</h4>
            <div className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <strong>Pracujesz lokalnie z Git</strong> - commitujesz zmiany na swoim komputerze
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <strong>Wysyłasz na GitHub</strong> - git push (backup w chmurze)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <strong>Zespół widzi zmiany</strong> - wszyscy mają dostęp
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">4️⃣</span>
                <div>
                  <strong>Pobierają aktualizacje</strong> - git pull
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-4">
            <strong>💡 Alternatywy:</strong> GitLab, Bitbucket - podobne platformy, ale GitHub jest najpopularniejszy!
          </div>
        </div>
      )
    },
    {
      id: 'git-installation',
      title: 'Instalacja i konfiguracja Git',
      icon: '⚙️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zainstaluj Git i skonfiguruj swoje dane. <strong>Raz</strong> na komputer!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📥 Instalacja Git</h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded p-4">
                <strong className="text-blue-400">🪟 Windows:</strong>
                <p className="text-sm mt-2">Pobierz z: <a href="https://git-scm.com" className="text-blue-400 underline">git-scm.com</a></p>
                <p className="text-xs mt-1 opacity-70">Instalator → Next, Next, Next... 😉</p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong className="text-blue-400">🍎 macOS:</strong>
                <code className="block mt-2 text-sm bg-black/30 p-2 rounded">
                  brew install git
                </code>
                <p className="text-xs mt-1 opacity-70">Lub zainstaluj Xcode Command Line Tools</p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong className="text-blue-400">🐧 Linux:</strong>
                <code className="block mt-2 text-sm bg-black/30 p-2 rounded">
                  sudo apt install git
                </code>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔧 Konfiguracja (raz po instalacji)</h3>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`# Twoje dane (pojawiają się przy każdym commit)
git config --global user.name "Jan Kowalski"
git config --global user.email "jan@example.com"

# Sprawdź konfigurację
git config --list`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">✅ Sprawdź czy działa</h4>
            <pre className="bg-black/50 rounded p-3 text-sm">
              <code className="text-green-400">{`git --version
# Output: git version 2.43.0`}</code>
            </pre>
            <p className="text-sm mt-3">Jeśli widzisz wersję - Git zainstalowany! 🎉</p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Tip:</strong> Używaj Git Bash (Windows) lub terminala (Mac/Linux) do komend Git
          </div>
        </div>
      )
    },
    {
      id: 'basic-workflow',
      title: 'Podstawowy workflow Git',
      icon: '🔄',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Podstawowy cykl pracy z Git to <strong>3 kroki</strong>:
          </p>

          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-6 text-center">🔄 Git Workflow</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">1️⃣</span>
                  <h4 className="text-xl font-bold text-green-400">git add</h4>
                </div>
                <p className="text-sm mb-2">Dodaj pliki do "poczekalni" (staging area)</p>
                <code className="block text-xs bg-black/30 p-2 rounded">
                  git add filename.js
                </code>
                <p className="text-xs mt-2 opacity-70">
                  💡 Tip: <code className="bg-black/30 px-1 rounded">git add .</code> dodaje wszystkie zmienione pliki
                </p>
              </div>

              <div className="text-center text-3xl">⬇️</div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">2️⃣</span>
                  <h4 className="text-xl font-bold text-blue-400">git commit</h4>
                </div>
                <p className="text-sm mb-2">Zapisz zmiany z wiadomością</p>
                <code className="block text-xs bg-black/30 p-2 rounded">
                  git commit -m "Add user login feature"
                </code>
                <p className="text-xs mt-2 opacity-70">
                  💡 Wiadomość powinna opisywać CO zmieniłeś
                </p>
              </div>

              <div className="text-center text-3xl">⬇️</div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">3️⃣</span>
                  <h4 className="text-xl font-bold text-purple-400">git push</h4>
                </div>
                <p className="text-sm mb-2">Wyślij na GitHub (backup online)</p>
                <code className="block text-xs bg-black/30 p-2 rounded">
                  git push origin main
                </code>
                <p className="text-xs mt-2 opacity-70">
                  💡 origin = GitHub, main = główna gałąź
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>📝 Dobre praktyki commitów:</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>✓ Częste commity (małe zmiany)</li>
              <li>✓ Opisowe wiadomości (nie "fix", ale "Fix login button alignment")</li>
              <li>✓ Jeden commit = jedna funkcja/naprawa</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'essential-commands',
      title: 'Najważniejsze komendy Git',
      icon: '⌨️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Tych <strong className="text-purple-400">10 komend</strong> używasz w 90% czasu!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-4 border-l-4 border-green-500">
              <strong className="text-green-400">git init</strong>
              <p className="text-xs mt-1 opacity-80">Stwórz nowe repozytorium Git</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git init
              </code>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-4 border-l-4 border-blue-500">
              <strong className="text-blue-400">git clone</strong>
              <p className="text-xs mt-1 opacity-80">Pobierz projekt z GitHub</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git clone https://github.com/user/repo.git
              </code>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-4 border-l-4 border-purple-500">
              <strong className="text-purple-400">git status</strong>
              <p className="text-xs mt-1 opacity-80">Sprawdź stan plików</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git status
              </code>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-4 border-l-4 border-yellow-500">
              <strong className="text-yellow-400">git add</strong>
              <p className="text-xs mt-1 opacity-80">Dodaj pliki do staging</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git add .
              </code>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-4 border-l-4 border-orange-500">
              <strong className="text-orange-400">git commit</strong>
              <p className="text-xs mt-1 opacity-80">Zapisz zmiany</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git commit -m "message"
              </code>
            </div>

            <div className="bg-red-500/20 rounded-xl p-4 border-l-4 border-red-500">
              <strong className="text-red-400">git push</strong>
              <p className="text-xs mt-1 opacity-80">Wyślij na GitHub</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git push origin main
              </code>
            </div>

            <div className="bg-cyan-500/20 rounded-xl p-4 border-l-4 border-cyan-500">
              <strong className="text-cyan-400">git pull</strong>
              <p className="text-xs mt-1 opacity-80">Pobierz zmiany z GitHub</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git pull origin main
              </code>
            </div>

            <div className="bg-pink-500/20 rounded-xl p-4 border-l-4 border-pink-500">
              <strong className="text-pink-400">git branch</strong>
              <p className="text-xs mt-1 opacity-80">Zobacz/stwórz gałęzie</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git branch feature-name
              </code>
            </div>

            <div className="bg-indigo-500/20 rounded-xl p-4 border-l-4 border-indigo-500">
              <strong className="text-indigo-400">git checkout</strong>
              <p className="text-xs mt-1 opacity-80">Przełącz się na branch</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git checkout feature-name
              </code>
            </div>

            <div className="bg-teal-500/20 rounded-xl p-4 border-l-4 border-teal-500">
              <strong className="text-teal-400">git log</strong>
              <p className="text-xs mt-1 opacity-80">Zobacz historię commitów</p>
              <code className="block text-xs bg-black/30 p-2 rounded mt-2">
                git log --oneline
              </code>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>💡 Pro Tip:</strong> Dodaj <code className="bg-black/30 px-2 py-1 rounded">--help</code> 
            do dowolnej komendy żeby zobaczyć pomoc: <code className="bg-black/30 px-2 py-1 rounded">git commit --help</code>
          </div>
        </div>
      )
    },
    {
      id: 'branches',
      title: 'Branches - Gałęzie w Git',
      icon: '🌿',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-green-400">Branches (gałęzie)</strong> pozwalają pracować 
            nad różnymi funkcjami <strong>jednocześnie</strong>, bez mieszania kodu!
          </p>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">🌳 Analogia: Drzewo</h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded p-4">
                <strong>🌲 main (pień):</strong>
                <p className="text-sm mt-2">Główna gałąź - stabilny, działający kod (produkcja)</p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong>🌿 feature branches (gałęzie):</strong>
                <p className="text-sm mt-2">
                  Rozgałęziasz się od main → pracujesz nad nową funkcją → 
                  jak gotowe, łączysz z powrotem do main
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔧 Podstawowe komendy</h4>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`# Stwórz nową gałąź
git branch feature-login

# Przełącz się na nią
git checkout feature-login

# Lub jedno i drugie naraz
git checkout -b feature-login

# Zobacz wszystkie branche
git branch

# Usuń branch
git branch -d feature-login`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔀 Merge - Łączenie gałęzi</h4>
            <p className="mb-3 text-sm">Gdy funkcja gotowa, łączysz branch z main:</p>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-purple-400">{`# Przełącz się na main
git checkout main

# Połącz feature-login z main
git merge feature-login

# Wyślij na GitHub
git push origin main`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Best Practice:</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Nowa funkcja = nowy branch</li>
              <li>• Nazwa opisowa: <code className="bg-black/30 px-1 rounded">feature-user-auth</code>, 
              <code className="bg-black/30 px-1 rounded">bugfix-login-error</code></li>
              <li>• main zawsze działa (nie commituj niedziałającego kodu)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'github-basics',
      title: 'GitHub - Rozpocznij pracę',
      icon: '🐙',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Stwórz konto na GitHub i naucz się podstaw platformy!
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">📝 Rejestracja na GitHub</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">1️⃣</span>
                <div>
                  Idź na <a href="https://github.com" className="text-blue-400 underline">github.com</a> 
                  i kliknij "Sign up"
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">2️⃣</span>
                <div>Wybierz username (będzie widoczny publicznie!)</div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">3️⃣</span>
                <div>Plan Free wystarczy na start (nielimitowane publiczne repo)</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🚀 Stwórz pierwsze repo</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>1. Kliknij "New repository"</strong> (zielony przycisk)
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>2. Nazwa:</strong> np. "my-first-project"
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>3. Public/Private:</strong> wybierz
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>4. Zaznacz "Add README"</strong> (dobra praktyka)
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>5. Create repository!</strong>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔗 Połącz lokalny projekt z GitHub</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`# W folderze Twojego projektu
git init
git add .
git commit -m "Initial commit"

# Połącz z GitHub (URL z Twojego repo)
git remote add origin https://github.com/username/repo.git

# Wyślij kod
git push -u origin main`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 SSH vs HTTPS:</strong> GitHub oferuje 2 sposoby autoryzacji. 
            HTTPS prostszy na start (będzie pytał o login/hasło lub token)
          </div>
        </div>
      )
    },
    {
      id: 'collaboration',
      title: 'Współpraca na GitHub',
      icon: '🤝',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            GitHub to nie tylko backup - to <strong className="text-purple-400">platforma do współpracy</strong>!
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📥</span>
                <h4 className="text-xl font-bold text-green-400">Pull Request (PR)</h4>
              </div>
              <p className="text-sm mb-2">
                "Proszę, przejrzyj moje zmiany i dołącz do projektu"
              </p>
              <div className="bg-white/10 rounded p-3 text-xs">
                <strong>Workflow:</strong>
                <ol className="mt-2 space-y-1 ml-4 list-decimal">
                  <li>Fork projektu lub stwórz branch</li>
                  <li>Wprowadź zmiany i commituj</li>
                  <li>Wyślij na GitHub (push)</li>
                  <li>Otwórz Pull Request</li>
                  <li>Inni review code → merge albo komentarze</li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🐛</span>
                <h4 className="text-xl font-bold text-blue-400">Issues</h4>
              </div>
              <p className="text-sm mb-2">
                System zgłaszania bugów i propozycji nowych funkcji
              </p>
              <div className="bg-white/10 rounded p-3 text-xs">
                Przykład: "Bug: Login button nie działa na mobile"<br/>
                → Zespół widzi → przypisuje komuś → naprawia → zamyka Issue
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">⭐</span>
                <h4 className="text-xl font-bold text-purple-400">Stars & Forks</h4>
              </div>
              <ul className="text-sm space-y-2">
                <li><strong>⭐ Star:</strong> "Lubię ten projekt" (jak like)</li>
                <li><strong>🍴 Fork:</strong> "Skopiuj projekt na moje konto" (własna wersja)</li>
                <li><strong>👁️ Watch:</strong> "Powiadom mnie o zmianach"</li>
              </ul>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">👥</span>
                <h4 className="text-xl font-bold text-yellow-400">Collaborators</h4>
              </div>
              <p className="text-sm">
                Dodaj innych developerów do projektu → mogą push bezpośrednio 
                (Settings → Collaborators)
              </p>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💼 GitHub to Twoje portfolio!</strong> Rekruterzy sprawdzają Twój profil. 
            Pokaż swoje projekty, commituj regularnie, contribute do open-source!
          </div>
        </div>
      )
    }
  ]
};
