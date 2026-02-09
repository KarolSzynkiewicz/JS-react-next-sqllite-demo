/**
 * STRONA GŁÓWNA - Full-Stack Academy
 * 
 * Interaktywna platforma edukacyjna do nauki React, Next.js i SQLite
 */

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 animate-fadeIn">
            🎓 Full-Stack Academy
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8">
            Naucz się <strong className="text-purple-400">React</strong>, 
            <strong className="text-blue-400"> Next.js</strong> i 
            <strong className="text-green-400"> SQLite</strong> przez 
            <strong className="text-yellow-400"> praktyczne przykłady</strong>
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <span className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-white font-semibold">
              ⚛️ React 19.2.3
            </span>
            <span className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-white font-semibold">
              ▲ Next.js 16.1.6
            </span>
            <span className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-white font-semibold">
              💾 SQLite
            </span>
            <span className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-white font-semibold">
              🎯 TypeScript
            </span>
          </div>

          <Link
            href="/demo"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            🚀 Rozpocznij Naukę
          </Link>
        </div>
      </section>

      {/* Co to jest DOM? */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 flex items-center gap-4">
              <span className="text-6xl">🌳</span>
              Co to jest DOM?
            </h2>
            
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p className="text-xl">
                <strong className="text-white">DOM (Document Object Model)</strong> to sposób, 
                w jaki przeglądarka reprezentuje stronę internetową jako "drzewo" elementów.
              </p>

              <div className="bg-blue-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">🤔 Wyobraź sobie...</h3>
                <p className="mb-3">
                  Masz kod HTML swojej strony. Gdy przeglądarka go wczyta, tworzy 
                  <strong> "mapę"</strong> wszystkich elementów - każdy przycisk, tekst, 
                  obrazek, div - wszystko!
                </p>
                <p>
                  Ta mapa to właśnie <strong>DOM</strong>. Dzięki niemu JavaScript może:
                </p>
                <ul className="list-none space-y-2 mt-3">
                  <li>✓ Zmieniać tekst na stronie</li>
                  <li>✓ Dodawać nowe elementy</li>
                  <li>✓ Usuwać elementy</li>
                  <li>✓ Reagować na kliknięcia</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
                  <h4 className="text-xl font-bold mb-3 text-red-300">⚠️ Problem z DOM</h4>
                  <p className="text-sm">
                    Każda zmiana w DOM (np. zmiana tekstu) jest <strong>powolna</strong>. 
                    Przeglądarka musi przeliczyć style, układ, przerysować ekran...
                  </p>
                  <p className="text-sm mt-2">
                    W dużej aplikacji setki zmian = <strong>wolna aplikacja</strong> 😢
                  </p>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
                  <h4 className="text-xl font-bold mb-3 text-green-300">✅ Virtual DOM (React)</h4>
                  <p className="text-sm">
                    React tworzy <strong>"wirtualną kopię"</strong> DOM w pamięci. 
                    Gdy coś się zmienia, React:
                  </p>
                  <ol className="text-sm mt-2 space-y-1 list-decimal list-inside">
                    <li>Sprawdza co się zmieniło</li>
                    <li>Zmienia TYLKO to co trzeba</li>
                    <li>Robi to <strong>super szybko</strong>! ⚡</li>
                  </ol>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-3">⚡ Przykład w praktyce</h4>
                <div className="space-y-3 text-base">
                  <p>
                    <strong>Bez React (zwykły JavaScript):</strong><br/>
                    Chcesz zaktualizować listę 100 produktów? Musisz usunąć starą listę 
                    i dodać nową. Przeglądarka przerysowuje WSZYSTKO. Wolne! 🐌
                  </p>
                  <p>
                    <strong>Z React (Virtual DOM):</strong><br/>
                    React sprawdza: "O, zmienił się tylko jeden produkt". Aktualizuje TYLKO 
                    ten jeden element. Reszta bez zmian. Szybkie! 🚀
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💡</span>
                  <div>
                    <strong className="text-yellow-300 text-xl">Dlaczego to ważne?</strong>
                    <p className="mt-2">
                      Dzięki Virtual DOM, React jest <strong>szybki</strong> i 
                      <strong> wydajny</strong>. Możesz budować duże aplikacje 
                      bez martwienia się o wydajność!
                    </p>
                    <p className="mt-2">
                      Ty piszesz kod, React zajmuje się optymalizacją 🎯
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Główne Sekcje */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12">
          📚 Czego się nauczysz?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Interactive Learning Platform */}
          <Link href="/demo" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Platforma Interaktywna
              </h3>
              <p className="text-white/70 mb-4">
                Zobacz krok po kroku jak dane przepływają od React przez API do bazy danych
              </p>
              <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                Eksploruj <span>→</span>
              </div>
            </div>
          </Link>

          {/* CRUD Operations */}
          <Link href="/produkty" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4">🗄️</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                CRUD z SQLite
              </h3>
              <p className="text-white/70 mb-4">
                Naucz się tworzyć, odczytywać, aktualizować i usuwać dane z bazy
              </p>
              <div className="flex items-center gap-2 text-green-400 font-semibold group-hover:gap-4 transition-all">
                Praktykuj <span>→</span>
              </div>
            </div>
          </Link>

          {/* Best Practices */}
          <Link href="/demo?tab=practices" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Najlepsze Praktyki
              </h3>
              <p className="text-white/70 mb-4">
                Poznaj DRY, reużywalne komponenty i czysty kod
              </p>
              <div className="flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-4 transition-all">
                Ucz się <span>→</span>
              </div>
            </div>
          </Link>

          {/* API Integration */}
          <Link href="/pogoda" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4">🌤️</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Integracja API
              </h3>
              <p className="text-white/70 mb-4">
                Pobieraj dane z zewnętrznych API (przykład: pogoda)
              </p>
              <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                Testuj <span>→</span>
              </div>
            </div>
          </Link>

          {/* Database Seeding */}
          <Link href="/lokalizacje" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-teal-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Seeder & Factory
              </h3>
              <p className="text-white/70 mb-4">
                Automatycznie generuj testowe dane do bazy
              </p>
              <div className="flex items-center gap-2 text-teal-400 font-semibold group-hover:gap-4 transition-all">
                Generuj <span>→</span>
              </div>
            </div>
          </Link>

          {/* Flow Visualization */}
          <Link href="/demo?tab=flowchart" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500 transition-all hover:scale-105">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Wizualizacja Flow
              </h3>
              <p className="text-white/70 mb-4">
                Zobacz jak dane wędrują przez cały stack
              </p>
              <div className="flex items-center gap-2 text-pink-400 font-semibold group-hover:gap-4 transition-all">
                Obserwuj <span>→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12">
          <h2 className="text-4xl font-black text-white mb-4">
            Gotowy żeby zacząć? 🎯
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Przejdź do interaktywnej platformy i zobacz jak wszystko działa w praktyce!
          </p>
          <Link
            href="/demo"
            className="inline-block px-10 py-5 bg-white text-purple-600 text-xl font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            🚀 Zacznij Teraz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-white/50">
        <p>
          Stworzone z ❤️ jako edukacyjna platforma full-stack
        </p>
        <p className="text-sm mt-2">
          React 19.2.3 • Next.js 16.1.6 • SQLite • TypeScript • Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
