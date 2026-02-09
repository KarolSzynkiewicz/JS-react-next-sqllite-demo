import { Lesson } from '../components/LessonSlider';

export const nextjsRoutingLesson: Lesson = {
  id: 'nextjs-routing',
  title: 'Next.js & Routing',
  description: 'Framework React z super mocami',
  icon: '▲',
  slides: [
    {
      id: 'what-is-nextjs',
      title: 'Co to jest Next.js?',
      icon: '▲',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-purple-400">Next.js</strong> to <strong>React na sterydach</strong>! 
            Framework który dodaje funkcje niezbędne do production apps.
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">▲</span>
              <div>
                <h3 className="text-3xl font-bold">Next.js</h3>
                <p className="opacity-80">The React Framework for Production</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">🚀</div>
                <strong>SSR & SSG</strong>
                <p className="text-xs opacity-70 mt-1">Server rendering</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">📁</div>
                <strong>File-based routing</strong>
                <p className="text-xs opacity-70 mt-1">Bez React Router</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">⚡</div>
                <strong>API Routes</strong>
                <p className="text-xs opacity-70 mt-1">Backend built-in</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <h4 className="text-lg font-bold mb-2 text-red-400">⚛️ Czysty React</h4>
              <ul className="text-sm space-y-1">
                <li>❌ Brak routingu (musisz dodać React Router)</li>
                <li>❌ Tylko CSR (Client Side Rendering)</li>
                <li>❌ Brak backend (osobny serwer)</li>
                <li>❌ Musisz konfigurować webpack, babel...</li>
                <li>✓ Elastyczny</li>
              </ul>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-lg font-bold mb-2 text-green-400">▲ Next.js</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Routing wbudowany (file-based!)</li>
                <li>✓ SSR, SSG, CSR - wybierasz</li>
                <li>✓ API Routes (backend built-in)</li>
                <li>✓ Zero config - działa out of the box</li>
                <li>✓ React + dodatki</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>🌟 Firmy używające Next.js:</strong>
            <p className="mt-2">Netflix, Twitch, GitHub, Notion, TikTok, Hulu, Nike...</p>
          </div>
        </div>
      )
    },
    {
      id: 'ssr-vs-csr',
      title: 'SSR vs CSR - Rendering strategies',
      icon: '🖥️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Next.js daje 3 sposoby renderowania stron. Wybierz najlepszy dla Twojego use case!
          </p>

          <div className="space-y-4">
            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🌐</span>
                <h4 className="text-xl font-bold text-blue-400">CSR - Client Side Rendering</h4>
              </div>
              <p className="text-sm mb-3">
                <strong>Jak działa:</strong> Przeglądarka pobiera pustą stronę HTML + JavaScript. 
                JavaScript buduje UI.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-green-500/20 rounded p-2">
                  <strong>✅ Plusy:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Interaktywne</li>
                    <li>• Nie obciąża serwera</li>
                  </ul>
                </div>
                <div className="bg-red-500/20 rounded p-2">
                  <strong>❌ Minusy:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Wolniejsze pierwsze ładowanie</li>
                    <li>• Słabe SEO</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/10 rounded p-2 mt-2 text-xs">
                <strong>Użyj gdy:</strong> Dashboard, admin panel, aplikacja wymagająca logowania
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">⚡</span>
                <h4 className="text-xl font-bold text-purple-400">SSR - Server Side Rendering</h4>
              </div>
              <p className="text-sm mb-3">
                <strong>Jak działa:</strong> Serwer renderuje HTML dla każdego requesta. 
                Wysyła gotową stronę.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-green-500/20 rounded p-2">
                  <strong>✅ Plusy:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Szybkie pierwsze ładowanie</li>
                    <li>• Świetne SEO</li>
                    <li>• Zawsze fresh data</li>
                  </ul>
                </div>
                <div className="bg-red-500/20 rounded p-2">
                  <strong>❌ Minusy:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Obciąża serwer</li>
                    <li>• Wolniejsze niż SSG</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/10 rounded p-2 mt-2 text-xs">
                <strong>Użyj gdy:</strong> Dane zmieniają się często, personalizacja
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🚀</span>
                <h4 className="text-xl font-bold text-green-400">SSG - Static Site Generation</h4>
              </div>
              <p className="text-sm mb-3">
                <strong>Jak działa:</strong> Generuje HTML podczas build. Serwuje statyczne pliki.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-green-500/20 rounded p-2">
                  <strong>✅ Plusy:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Ultra szybkie</li>
                    <li>• Świetne SEO</li>
                    <li>• CDN friendly</li>
                  </ul>
                </div>
                <div className="bg-red-500/20 rounded p-2">
                  <strong>❌ Minusy:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Rebuild dla update</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/10 rounded p-2 mt-2 text-xs">
                <strong>Użyj gdy:</strong> Blog, marketing page, dokumentacja
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'app-router',
      title: 'App Router - Nowy system routingu',
      icon: '🗂️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">App Router</strong> (Next.js 13+) to nowy, 
            potężniejszy system routingu oparty na <strong>folderach</strong>!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📁 File-based Routing</h3>
            <p className="mb-3 text-sm">Struktura folderów = struktura URL!</p>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`app/
  page.tsx                   → /
  demo/
    page.tsx                 → /demo
  produkty/
    page.tsx                 → /produkty
    [id]/
      page.tsx               → /produkty/123
  api/
    produkty/
      route.ts               → /api/produkty (API endpoint!)`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Specjalne pliki</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>page.tsx</strong> - Główny komponent strony
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>layout.tsx</strong> - Layout otaczający strony (navbar, footer)
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>loading.tsx</strong> - Loading state (automatyczny Suspense!)
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>error.tsx</strong> - Error boundary dla segmentu
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>route.ts</strong> - API endpoint (GET, POST, PUT, DELETE)
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-4">
            <strong>💡 Przykład:</strong>
            <p className="text-sm mt-2">
              Chcesz stronę <code className="bg-black/30 px-2 py-1 rounded">/blog/hello-world</code>?
              Stwórz <code className="bg-black/30 px-2 py-1 rounded">app/blog/[slug]/page.tsx</code>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'dynamic-routes',
      title: 'Dynamic Routes - Parametry w URL',
      icon: '🔀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Dynamic Routes</strong> pozwalają tworzyć strony z 
            dynamicznymi parametrami (np. ID produktu).
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🎯 Składnia: [param]</h3>
            <p className="text-sm mb-3">Folder w nawiasach kwadratowych = parametr dynamiczny</p>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`app/
  produkty/
    [id]/
      page.tsx         → /produkty/1, /produkty/2, /produkty/abc...`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Kod: app/produkty/[id]/page.tsx</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// Next.js 16: params jest Promise!
export default async function ProduktPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;  // Await params
  
  // Pobierz produkt z bazy/API
  const produkt = await getProdukt(id);
  
  return (
    <div>
      <h1>Produkt #{id}</h1>
      <p>{produkt.nazwa}</p>
    </div>
  );
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-2">🎨 Więcej przykładów</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-white/10 rounded p-2">
                <code>[id]/page.tsx</code> → /products/123
              </div>
              <div className="bg-white/10 rounded p-2">
                <code>[slug]/page.tsx</code> → /blog/hello-world
              </div>
              <div className="bg-white/10 rounded p-2">
                <code>[...slug]/page.tsx</code> → /docs/a/b/c (catch-all)
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pro Tip:</strong> Zawsze waliduj parametry! Użytkownik może wpisać cokolwiek w URL.
          </div>
        </div>
      )
    },
    {
      id: 'navigation',
      title: 'Nawigacja w Next.js',
      icon: '🧭',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            W Next.js używamy <strong className="text-blue-400">&lt;Link&gt;</strong> zamiast 
            <code className="bg-black/30 px-2 py-1 rounded">&lt;a&gt;</code> dla client-side navigation!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔗 Link component</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/20 rounded p-4">
                <strong className="text-red-400">❌ Nie rób tak:</strong>
                <pre className="bg-black/50 rounded p-2 text-xs mt-2">
                  <code className="text-red-400">{`<a href="/demo">Demo</a>`}</code>
                </pre>
                <p className="text-xs mt-2 opacity-70">Full page reload! Wolne!</p>
              </div>

              <div className="bg-green-500/20 rounded p-4">
                <strong className="text-green-400">✅ Użyj Link:</strong>
                <pre className="bg-black/50 rounded p-2 text-xs mt-2">
                  <code className="text-green-400">{`<Link href="/demo">Demo</Link>`}</code>
                </pre>
                <p className="text-xs mt-2 opacity-70">Client-side! Szybkie!</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Przykłady użycia</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import Link from 'next/link';

// Prosty link
<Link href="/demo">Demo</Link>

// Link z parametrem
<Link href={\`/produkty/\${id}\`}>Produkt</Link>

// Link z query params
<Link href="/search?q=laptop">Szukaj</Link>

// Programatyczna nawigacja
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/success');  // Nawiguj
router.back();            // Wróć
router.refresh();         // Odśwież`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">⚡ Zalety Link</h4>
            <ul className="text-sm space-y-1">
              <li>✓ Client-side navigation (bez reload)</li>
              <li>✓ Prefetching (ładuje w tle)</li>
              <li>✓ Automatyczne scroll do góry</li>
              <li>✓ Zachowuje state aplikacji</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'layouts',
      title: 'Layouts - Współdzielony UI',
      icon: '🎨',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Layouts</strong> pozwalają współdzielić UI 
            (navbar, sidebar, footer) między stronami!
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📐 layout.tsx</h3>
            <p className="text-sm mb-3">Otacza wszystkie strony w tym folderze i podfolderach</p>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`app/
  layout.tsx              → Layout dla całej apki
  page.tsx                → / (używa app/layout.tsx)
  demo/
    layout.tsx            → Layout dla /demo/*
    page.tsx              → /demo (używa OBA layouty!)
    sub/
      page.tsx            → /demo/sub (3 layouty: root + demo + sub)`}</code>
            </pre>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Przykład: app/layout.tsx</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import Navigation from './components/Navigation';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <Navigation />      {/* Navbar na każdej stronie */}
        <main>
          {children}        {/* Zawartość strony */}
        </main>
        <footer>© 2026</footer>
      </body>
    </html>
  );
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Zalety Layouts</h4>
            <ul className="text-sm space-y-2">
              <li>✓ DRY - nie powtarzaj navbar/footer na każdej stronie</li>
              <li>✓ Layouts nie re-renderują się przy zmianie strony</li>
              <li>✓ State jest zachowany (np. sidebar collapsed/expanded)</li>
              <li>✓ Nested layouts - każdy poziom może mieć swój</li>
            </ul>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pro Tip:</strong> Root layout (app/layout.tsx) jest WYMAGANY i musi zawierać 
            <code className="bg-black/30 px-2 py-1 rounded mx-1">&lt;html&gt;</code> i 
            <code className="bg-black/30 px-2 py-1 rounded">&lt;body&gt;</code>
          </div>
        </div>
      )
    },
    {
      id: 'server-client-components',
      title: 'Server vs Client Components',
      icon: '🖥️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Next.js 13+ ma 2 typy komponentów: <strong className="text-green-400">Server</strong> i 
            <strong className="text-blue-400"> Client</strong>. Wybierz mądrze!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <div className="text-4xl mb-3 text-center">🖥️</div>
              <h4 className="text-xl font-bold mb-3 text-center text-green-400">Server Components</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <strong>✅ Domyślne</strong> - wszystko jest Server Component
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>🔒 Prywatne</strong> - API keys bezpieczne
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>🚀 Szybkie</strong> - mniej JavaScript
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>💾 Dostęp do DB</strong> - bezpośrednio!
                </div>
              </div>
              <pre className="bg-black/50 rounded p-2 text-xs mt-3">
                <code className="text-green-400">{`// Domyślnie server
export default function Page() {
  // Możesz użyć fs, DB...
  return <div>Server</div>;
}`}</code>
              </pre>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-2 border-blue-500/50">
              <div className="text-4xl mb-3 text-center">💻</div>
              <h4 className="text-xl font-bold mb-3 text-center text-blue-400">Client Components</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <strong>🎯 'use client'</strong> - musisz oznaczyć
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>⚡ Interaktywne</strong> - useState, onClick...
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>🌐 Browser API</strong> - window, localStorage
                </div>
                <div className="bg-white/10 rounded p-2">
                  <strong>🪝 Hooks</strong> - useEffect, useContext
                </div>
              </div>
              <pre className="bg-black/50 rounded p-2 text-xs mt-3">
                <code className="text-blue-400">{`'use client';  // Oznacz!

export default function Button() {
  const [count, setCount] = useState(0);
  return <button onClick={...}>
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Kiedy co używać?</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <strong className="text-green-400">🖥️ Server:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• Fetching data</li>
                  <li>• Dostęp do backend</li>
                  <li>• API keys</li>
                  <li>• Statyczny content</li>
                </ul>
              </div>
              <div>
                <strong className="text-blue-400">💻 Client:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• Interakcje (onClick, onChange)</li>
                  <li>• useState, useEffect</li>
                  <li>• Browser API</li>
                  <li>• Real-time (WebSockets)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💡 Zasada:</strong> Używaj Server Components domyślnie. Client tylko gdy MUSISZ!
          </div>
        </div>
      )
    },
    {
      id: 'nextjs-in-our-app',
      title: 'Next.js w naszej aplikacji',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobacz jak <strong className="text-purple-400">Next.js</strong> działa w tej aplikacji!
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">📁 Nasza struktura</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`app/
  layout.tsx                → Root layout (Navigation)
  page.tsx                  → / (główna strona)
  demo/
    page.tsx                → /demo (platforma edukacyjna)
  produkty/
    page.tsx                → /produkty (CRUD demo)
  lokalizacje/
    page.tsx                → /lokalizacje (factory/seeder)
  api/
    produkty/
      route.ts              → API /api/produkty
      [id]/route.ts         → API /api/produkty/[id]
  components/
    Navigation.tsx          → 'use client' (interaktywny)
    EducationalStackDemo.tsx → 'use client' (useState, onClick)
  lessons/
    javascript-basics.tsx   → Lekcje (ten plik!)
`}</code>
            </pre>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Co dzięki Next.js mamy?</h4>
            <ul className="space-y-2">
              <li>✓ <strong>File-based routing</strong> - bez React Router!</li>
              <li>✓ <strong>API Routes</strong> - backend w tym samym projekcie</li>
              <li>✓ <strong>Server Components</strong> - szybsze ładowanie</li>
              <li>✓ <strong>Layouts</strong> - Navigation na każdej stronie</li>
              <li>✓ <strong>TypeScript out of the box</strong></li>
              <li>✓ <strong>Hot reload</strong> - instant changes</li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🚀 Deployment (Railway)</h4>
            <p className="text-sm mb-2">Next.js robi build optymalizowany:</p>
            <div className="bg-black/50 rounded p-3 text-xs">
              <code className="text-blue-400">$ npm run build</code><br/>
              <code className="text-green-400 mt-1">
                ▲ Next.js 16.1.6<br/>
                Creating an optimized production build...<br/>
                ✓ Compiled successfully
              </code>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold mb-3">🎉 Gratulacje!</p>
            <p className="text-lg">
              Rozumiesz teraz Next.js - najpopularniejszy framework React! 
              Możesz budować profesjonalne full-stack aplikacje 🚀
            </p>
          </div>
        </div>
      )
    }
  ]
};
