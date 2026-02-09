import { Lesson } from '../components/LessonSlider';

export const tailwindBasicsLesson: Lesson = {
  id: 'tailwind-basics',
  title: 'Tailwind CSS - Utility-First Framework',
  description: 'Styluj komponenty bez pisania CSS!',
  icon: '🎨',
  slides: [
    {
      id: 'what-is-tailwind',
      title: 'Co to jest Tailwind CSS?',
      icon: '🎨',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-cyan-400">Tailwind CSS</strong> to <strong>utility-first framework</strong> - 
            stylujesz komponenty używając gotowych klas CSS!
          </p>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-cyan-500/50">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">🎨</span>
              <div>
                <h3 className="text-3xl font-bold">Tailwind CSS</h3>
                <p className="opacity-80">A utility-first CSS framework</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">⚡</div>
                <strong>Szybki</strong>
                <p className="text-xs opacity-70 mt-1">Nie piszesz CSS!</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">🎯</div>
                <strong>Precyzyjny</strong>
                <p className="text-xs opacity-70 mt-1">Pełna kontrola</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">📦</div>
                <strong>Tiny</strong>
                <p className="text-xs opacity-70 mt-1">Tree-shaking</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <h4 className="text-lg font-bold mb-2 text-red-400">❌ Tradycyjny CSS</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-white/70">{`/* styles.css */
.button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}

<!-- HTML -->
<button class="button">Klik</button>`}</code>
              </pre>
              <ul className="text-xs mt-2 space-y-1">
                <li>❌ Musisz wymyślać nazwy klas</li>
                <li>❌ Osobny plik CSS</li>
                <li>❌ Trudno znaleźć nieużywane style</li>
              </ul>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-lg font-bold mb-2 text-green-400">✅ Tailwind CSS</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`<!-- Wszystko w JSX -->
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Klik
</button>`}</code>
              </pre>
              <ul className="text-xs mt-2 space-y-1">
                <li>✓ Bez wymyślania nazw</li>
                <li>✓ Wszystko w jednym miejscu</li>
                <li>✓ Auto tree-shaking (niewykorzystane = usunięte)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>🌟 Używają Tailwind:</strong>
            <p className="mt-2">GitHub, OpenAI, Twitch, Netflix, NASA, Shopify...</p>
          </div>
        </div>
      )
    },
    {
      id: 'utility-classes',
      title: 'Utility Classes - Podstawy',
      icon: '🧩',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-cyan-400">Utility classes</strong> to małe, pojedyncze klasy CSS. 
            Każda robi <strong>jedną rzecz</strong>!
          </p>

          <div className="space-y-4">
            <div className="bg-blue-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3 text-blue-400">📏 Spacing (margin, padding)</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">m-4</code> → margin: 1rem
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">p-4</code> → padding: 1rem
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">mx-auto</code> → margin left/right: auto
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">py-2</code> → padding top/bottom: 0.5rem
                </div>
              </div>
              <p className="text-xs mt-2 opacity-70">Skala: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20...</p>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3 text-purple-400">🎨 Colors</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">bg-blue-500</code> → background niebieski
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">text-red-600</code> → tekst czerwony
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">border-green-400</code> → border zielony
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">bg-opacity-50</code> → 50% opacity
                </div>
              </div>
              <p className="text-xs mt-2 opacity-70">Kolory: gray, red, yellow, green, blue, indigo, purple, pink...</p>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3 text-green-400">📝 Typography</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">text-xl</code> → font-size: 1.25rem
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">font-bold</code> → font-weight: 700
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">text-center</code> → text-align: center
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">uppercase</code> → text-transform: uppercase
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3 text-yellow-400">📦 Layout</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">flex</code> → display: flex
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">grid</code> → display: grid
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">hidden</code> → display: none
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">w-full</code> → width: 100%
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4">
            <strong>💡 Pełna lista:</strong> <a href="https://tailwindcss.com/docs" 
              className="text-blue-400 underline">tailwindcss.com/docs</a>
          </div>
        </div>
      )
    },
    {
      id: 'responsive-design',
      title: 'Responsive Design - Breakpoints',
      icon: '📱',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Tailwind ma wbudowane <strong className="text-blue-400">responsive breakpoints</strong>! 
            Prefiks + klasa = responsive!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📱 Breakpoints</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-3 flex justify-between">
                <code className="text-cyan-400">sm:</code>
                <span>≥ 640px (tablet pionowo)</span>
              </div>
              <div className="bg-white/10 rounded p-3 flex justify-between">
                <code className="text-cyan-400">md:</code>
                <span>≥ 768px (tablet poziomo)</span>
              </div>
              <div className="bg-white/10 rounded p-3 flex justify-between">
                <code className="text-cyan-400">lg:</code>
                <span>≥ 1024px (laptop)</span>
              </div>
              <div className="bg-white/10 rounded p-3 flex justify-between">
                <code className="text-cyan-400">xl:</code>
                <span>≥ 1280px (desktop)</span>
              </div>
              <div className="bg-white/10 rounded p-3 flex justify-between">
                <code className="text-cyan-400">2xl:</code>
                <span>≥ 1536px (duży desktop)</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Przykład</h4>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`<div className="
  w-full          {/* Mobile: 100% szerokości */}
  sm:w-1/2        {/* Tablet: 50% szerokości */}
  lg:w-1/3        {/* Desktop: 33% szerokości */}
  bg-blue-500     {/* Mobile: niebieski */}
  md:bg-red-500   {/* Tablet+: czerwony */}
">
  Responsive box!
</div>`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Mobile-First</h4>
            <p className="text-sm mb-2">Tailwind jest <strong>mobile-first</strong>:</p>
            <ul className="text-sm space-y-1">
              <li>• Bez prefiksu = mobile (domyślne)</li>
              <li>• <code className="bg-black/30 px-1 rounded">md:</code> = tablet i większe</li>
              <li>• <code className="bg-black/30 px-1 rounded">lg:</code> = desktop i większe</li>
            </ul>
            <pre className="bg-black/50 rounded p-3 text-xs mt-3">
              <code className="text-purple-400">{`<div className="text-sm md:text-base lg:text-lg">
  {/* Mobile: mały tekst, Desktop: duży */}
</div>`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pro Tip:</strong> Zacznij od mobile, potem dodawaj <code className="bg-black/30 px-2 py-1 rounded">md:</code>, 
            <code className="bg-black/30 px-2 py-1 rounded">lg:</code> tylko tam gdzie potrzeba!
          </div>
        </div>
      )
    },
    {
      id: 'hover-focus-states',
      title: 'Hover, Focus, i inne stany',
      icon: '✨',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Tailwind obsługuje <strong className="text-purple-400">wszystkie stany CSS</strong> 
            przez prefiksy!
          </p>

          <div className="space-y-4">
            <div className="bg-purple-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3 text-purple-400">🖱️ Hover</h4>
              <pre className="bg-black/50 rounded p-4 text-sm">
                <code className="text-green-400">{`<button className="
  bg-blue-500 
  hover:bg-blue-700    {/* Po najechaniu: ciemniejszy */}
  text-white 
  hover:text-yellow-300
">
  Najedź na mnie!
</button>`}</code>
              </pre>
              <div className="mt-3 p-3 bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-300 rounded text-center cursor-pointer transition-colors">
                Demo - najedź na mnie!
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3 text-blue-400">🎯 Focus (formularze)</h4>
              <pre className="bg-black/50 rounded p-4 text-sm">
                <code className="text-green-400">{`<input className="
  border 
  border-gray-300 
  focus:border-blue-500    {/* Po kliknięciu: niebieski */}
  focus:ring-2             {/* Dodaj ring */}
  focus:ring-blue-200
" />`}</code>
              </pre>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3 text-green-400">⚡ Inne stany</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">active:</code> podczas kliknięcia
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">disabled:</code> gdy disabled
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">group-hover:</code> gdy parent ma hover
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">first:</code> pierwszy element
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">last:</code> ostatni element
                </div>
                <div className="bg-white/10 rounded p-2">
                  <code className="text-cyan-400">dark:</code> dark mode
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5">
              <h4 className="text-lg font-bold mb-3">🎨 Kombinacje</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-yellow-400">{`<button className="
  md:hover:bg-red-500    {/* Hover tylko na tablet+ */}
  dark:bg-gray-800       {/* Dark mode */}
  disabled:opacity-50    {/* Gdy disabled */}
">`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-80">Możesz łączyć prefiksy!</p>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4">
            <strong>💡 Transitions:</strong> Dodaj <code className="bg-black/30 px-2 py-1 rounded">transition-colors</code> 
            lub <code className="bg-black/30 px-2 py-1 rounded">transition-all</code> dla smooth animations!
          </div>
        </div>
      )
    },
    {
      id: 'flexbox-grid',
      title: 'Flexbox & Grid w Tailwind',
      icon: '📐',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Tailwind sprawia że <strong className="text-blue-400">Flexbox i Grid</strong> są super proste!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔄 Flexbox</h3>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`<div className="
  flex                    {/* display: flex */}
  items-center            {/* align-items: center */}
  justify-between         {/* justify-content: space-between */}
  gap-4                   {/* gap: 1rem */}
">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</code>
            </pre>
            <div className="mt-3 flex items-center justify-between gap-4 p-3 bg-white/10 rounded">
              <div className="bg-blue-500 p-2 rounded">Item 1</div>
              <div className="bg-blue-500 p-2 rounded">Item 2</div>
              <div className="bg-blue-500 p-2 rounded">Item 3</div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📊 Grid</h3>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`<div className="
  grid                    {/* display: grid */}
  grid-cols-3             {/* 3 kolumny */}
  md:grid-cols-4          {/* 4 na tablet+ */}
  gap-6                   {/* odstępy */}
">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>`}</code>
            </pre>
            <div className="mt-3 grid grid-cols-3 gap-4">
              <div className="bg-purple-500 p-3 rounded text-center">Box 1</div>
              <div className="bg-purple-500 p-3 rounded text-center">Box 2</div>
              <div className="bg-purple-500 p-3 rounded text-center">Box 3</div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Częste Flex/Grid klasy</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Flex:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li><code className="bg-black/30 px-1 rounded">flex-row</code> / flex-col</li>
                  <li><code className="bg-black/30 px-1 rounded">flex-wrap</code></li>
                  <li><code className="bg-black/30 px-1 rounded">items-start</code> / center / end</li>
                  <li><code className="bg-black/30 px-1 rounded">justify-center</code> / between / around</li>
                </ul>
              </div>
              <div>
                <strong>Grid:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li><code className="bg-black/30 px-1 rounded">grid-cols-{'{n}'}</code></li>
                  <li><code className="bg-black/30 px-1 rounded">col-span-{'{n}'}</code></li>
                  <li><code className="bg-black/30 px-1 rounded">gap-{'{n}'}</code></li>
                  <li><code className="bg-black/30 px-1 rounded">auto-cols-max</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dark-mode',
      title: 'Dark Mode',
      icon: '🌙',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Tailwind ma <strong className="text-purple-400">wbudowaną obsługę dark mode</strong>! 
            Prefiks <code className="bg-black/30 px-2 py-1 rounded">dark:</code> i gotowe!
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌙 Dark Mode</h3>
            <pre className="bg-black/50 rounded p-4 text-sm overflow-x-auto">
              <code className="text-green-400">{`<div className="
  bg-white 
  dark:bg-gray-900        {/* Dark mode: ciemne tło */}
  text-black 
  dark:text-white         {/* Dark mode: biały tekst */}
">
  Zmień theme systemu żeby zobaczyć!
</div>`}</code>
            </pre>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">⚙️ Konfiguracja (tailwind.config.ts)</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-blue-400">{`module.exports = {
  darkMode: 'class',  // lub 'media' (auto system theme)
  // ...
}`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>class:</strong> Kontrolujesz przez klasę <code className="bg-black/30 px-1 rounded">.dark</code> na <code className="bg-black/30 px-1 rounded">&lt;html&gt;</code><br/>
              <strong>media:</strong> Auto z system preferences
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">💻 Toggle dark mode (class mode)</h4>
            <pre className="bg-black/50 rounded p-3 text-xs overflow-x-auto">
              <code className="text-green-400">{`function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
}`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Best Practice:</strong> Zapisuj wybór użytkownika w localStorage!
          </div>
        </div>
      )
    },
    {
      id: 'custom-styles',
      title: 'Własne Style & Komponenty',
      icon: '🎨',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Czasem Tailwind nie wystarczy. Możesz dodać <strong className="text-blue-400">własne style</strong>!
          </p>

          <div className="space-y-4">
            <div className="bg-blue-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3">🎨 Arbitrary Values</h4>
              <pre className="bg-black/50 rounded p-4 text-sm">
                <code className="text-green-400">{`<div className="
  w-[137px]              {/* Custom width */}
  bg-[#1da1f2]           {/* Custom color */}
  top-[117px]            {/* Custom position */}
">
  Dowolne wartości w []!
</div>`}</code>
              </pre>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3">🔧 Extend Config (tailwind.config.ts)</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-purple-400">{`module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}

// Użycie: bg-brand-500, w-128`}</code>
              </pre>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3">🧩 Reusable Components</h4>
              <p className="text-sm mb-3">Zamiast kopiować długie className, stwórz komponent:</p>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-green-400">{`// components/Button.tsx
export const Button = ({ children }) => (
  <button className="
    bg-blue-500 hover:bg-blue-700 
    text-white font-bold 
    py-2 px-4 rounded
    transition-colors
  ">
    {children}
  </button>
);

// Użycie
<Button>Kliknij</Button>`}</code>
              </pre>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5">
              <h4 className="text-xl font-bold mb-3">📦 @apply (gdy musisz)</h4>
              <pre className="bg-black/50 rounded p-4 text-xs">
                <code className="text-yellow-400">{`/* globals.css */
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
  @apply hover:bg-blue-700 transition-colors;
}

<!-- HTML -->
<button className="btn-primary">Klik</button>`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">Używaj rzadko! Lepiej komponenty React.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tailwind-in-our-app',
      title: 'Tailwind w naszej aplikacji',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobacz jak <strong className="text-cyan-400">Tailwind CSS</strong> działa w tej aplikacji!
          </p>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-cyan-500/50">
            <h3 className="text-2xl font-bold mb-4">🎨 Przykłady z naszego kodu</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>Navigation bar:</strong>
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">
                  className="bg-gradient-to-r from-purple-700 to-blue-700"
                </code>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Cards (glassmorphism):</strong>
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">
                  className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"
                </code>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Buttons (hover):</strong>
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">
                  className="bg-blue-600 hover:bg-blue-700 transition-colors"
                </code>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Responsive grid:</strong>
                <code className="block mt-1 text-xs bg-black/30 p-2 rounded">
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                </code>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Co dzięki Tailwind mamy?</h4>
            <ul className="space-y-2">
              <li>✓ <strong>Szybki development</strong> - style bezpośrednio w JSX</li>
              <li>✓ <strong>Responsive design</strong> - prefiksy md:, lg:</li>
              <li>✓ <strong>Dark mode ready</strong> - prefiks dark:</li>
              <li>✓ <strong>Hover effects</strong> - hover:, focus:</li>
              <li>✓ <strong>Tiny bundle</strong> - tree-shaking (tylko używane klasy)</li>
              <li>✓ <strong>Consistent design</strong> - ta sama paleta kolorów/spacingu</li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">📚 Gdzie się uczyć więcej?</h4>
            <ul className="space-y-2 text-sm">
              <li>• <a href="https://tailwindcss.com/docs" className="text-blue-400 underline">
                Oficjalna dokumentacja</a> - najlepsza</li>
              <li>• <a href="https://tailwindui.com/components" className="text-blue-400 underline">
                Tailwind UI</a> - gotowe komponenty</li>
              <li>• <a href="https://tailwindcss.com/docs/editor-setup" className="text-blue-400 underline">
                VS Code plugin</a> - autocomplete dla klas!</li>
            </ul>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold mb-3">🎉 Gratulacje!</p>
            <p className="text-lg">
              Znasz już Tailwind CSS - najpopularniejszy CSS framework! 
              Możesz budować piękne UI super szybko 🎨
            </p>
          </div>
        </div>
      )
    }
  ]
};
