import { Lesson } from '../components/LessonSlider';

export const ormBasicsLesson: Lesson = {
  id: 'orm-basics',
  title: 'ORM - Object-Relational Mapping',
  description: 'Mapowanie obiektów na bazę danych',
  icon: '🗺️',
  slides: [
    {
      id: 'what-is-orm',
      title: 'Co to jest ORM?',
      icon: '🗺️',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-blue-400">ORM</strong> (Object-Relational Mapping) to narzędzie, 
            które <strong>mapuje obiekty JavaScript na tabele w bazie danych</strong>!
          </p>

          <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-500/50">
            <h3 className="text-2xl font-bold mb-4">🌉 Analogia: Tłumacz</h3>
            <div className="space-y-3">
              <p className="text-lg">
                Wyobraź sobie, że mówisz po polsku, a baza danych rozumie tylko SQL. 
                ORM to jak tłumacz który:
              </p>
              <div className="bg-white/10 rounded p-4">
                <ul className="space-y-2">
                  <li>✓ <strong>Rozumie JavaScript</strong> - piszesz kod w JS/TS</li>
                  <li>✓ <strong>Tłumaczy na SQL</strong> - ORM generuje SQL za Ciebie</li>
                  <li>✓ <strong>Mapuje wyniki</strong> - SQL results → JavaScript objects</li>
                  <li>✓ <strong>Type-safe</strong> - TypeScript wie jakie pola masz</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
              <h4 className="text-xl font-bold mb-3 text-red-300">❌ Bez ORM (czysty SQL)</h4>
              <pre className="bg-black/50 rounded p-3 text-xs overflow-x-auto">
                <code className="text-white/70">{`const db = getDatabase();
const rows = db.prepare(
  'SELECT * FROM produkty WHERE cena > ?'
).all(100);

// rows to surowe dane z bazy
// Nie masz type safety
// Musisz pamiętać nazwy kolumn
// Trudno refaktorować`}</code>
              </pre>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <h4 className="text-xl font-bold mb-3 text-green-300">✅ Z ORM (Drizzle)</h4>
              <pre className="bg-black/50 rounded p-3 text-xs overflow-x-auto">
                <code className="text-green-400">{`import { db, produkty } from '@/lib/db';
import { gt } from 'drizzle-orm';

const results = await db
  .select()
  .from(produkty)
  .where(gt(produkty.cena, 100));

// TypeScript wie typ!
// Autocomplete działa
// Łatwo refaktorować
// Czytelny kod`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <p className="text-lg">
              <strong>💡 ORM = Mniej SQL, więcej JavaScript!</strong> 
              Pisz kod w języku który znasz, ORM zajmie się bazą.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'how-orm-works',
      title: 'Jak działa ORM?',
      icon: '⚙️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            ORM działa w <strong className="text-blue-400">3 warstwach</strong>:
          </p>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border-2 border-blue-500/50">
            <h3 className="text-2xl font-bold mb-6 text-center">🔄 ORM Flow</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">1️⃣</span>
                  <h4 className="text-xl font-bold text-blue-400">Schema Definition</h4>
                </div>
                <p className="text-sm mb-2">Definiujesz strukturę tabeli jako TypeScript object:</p>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-blue-400">{`const produkty = sqliteTable('produkty', {
  id: integer('id').primaryKey(),
  nazwa: text('nazwa').notNull(),
  cena: real('cena').notNull(),
});`}</code>
                </pre>
                <p className="text-xs mt-2 opacity-70">ORM wie jak wygląda tabela!</p>
              </div>

              <div className="text-center text-3xl">⬇️</div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">2️⃣</span>
                  <h4 className="text-xl font-bold text-purple-400">Query Builder</h4>
                </div>
                <p className="text-sm mb-2">Piszesz zapytania w JavaScript:</p>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-purple-400">{`db.select()
  .from(produkty)
  .where(gt(produkty.cena, 100));`}</code>
                </pre>
                <p className="text-xs mt-2 opacity-70">ORM tłumaczy to na SQL!</p>
              </div>

              <div className="text-center text-3xl">⬇️</div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">3️⃣</span>
                  <h4 className="text-xl font-bold text-green-400">SQL Execution</h4>
                </div>
                <p className="text-sm mb-2">ORM wykonuje SQL i zwraca typowane obiekty:</p>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-green-400">{`// ORM generuje:
SELECT * FROM produkty WHERE cena > 100

// Zwraca:
[{ id: 1, nazwa: 'Laptop', cena: 2999 }]
// TypeScript wie typ każdego pola!`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Zalety ORM</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Type Safety</strong> - TypeScript wie co zwraca</li>
              <li>✓ <strong>Autocomplete</strong> - IDE podpowiada pola</li>
              <li>✓ <strong>Mniej błędów</strong> - literówki w nazwach kolumn = błąd kompilacji</li>
              <li>✓ <strong>Łatwiejsze migracje</strong> - zmiana schema = zmiana kodu</li>
              <li>✓ <strong>Database agnostic</strong> - łatwo zmienić bazę (SQLite → PostgreSQL)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'drizzle-orm',
      title: 'Drizzle ORM - Najlepszy dla SQLite',
      icon: '❄️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-cyan-400">Drizzle ORM</strong> to nowoczesny, lekki ORM 
            idealny dla <strong>SQLite + TypeScript + Next.js</strong>!
          </p>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-cyan-500/50">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">❄️</span>
              <div>
                <h3 className="text-3xl font-bold">Drizzle ORM</h3>
                <p className="opacity-80">TypeScript ORM with zero runtime overhead</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">⚡</div>
                <strong>Zero runtime</strong>
                <p className="text-xs opacity-70 mt-1">Tylko TypeScript types</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">🎯</div>
                <strong>Type-safe</strong>
                <p className="text-xs opacity-70 mt-1">Full TypeScript</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">🪶</div>
                <strong>Lekki</strong>
                <p className="text-xs opacity-70 mt-1">~15KB</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-lg font-bold mb-2 text-green-400">✅ Zalety Drizzle</h4>
              <ul className="text-sm space-y-1">
                <li>• Świetne wsparcie SQLite</li>
                <li>• Type-safe queries</li>
                <li>• Zero runtime overhead</li>
                <li>• Migracje wbudowane</li>
                <li>• Aktywna społeczność</li>
                <li>• Dobra dokumentacja</li>
              </ul>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">⚠️ Kiedy NIE używać</h4>
              <ul className="text-sm space-y-1">
                <li>• Bardzo proste projekty (1-2 tabele)</li>
                <li>• Chcesz pełną kontrolę nad SQL</li>
                <li>• Projekt bez TypeScript</li>
                <li>• Wtedy: better-sqlite3 bezpośrednio</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-4">
            <strong>🌟 Popularność:</strong> Drizzle to najszybciej rosnący ORM w ekosystemie TypeScript! 
            Używany przez Vercel, Supabase, i wiele startupów.
          </div>
        </div>
      )
    },
    {
      id: 'installation',
      title: 'Instalacja Drizzle ORM',
      icon: '📦',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Instalacja Drizzle to <strong className="text-green-400">3 proste kroki</strong>!
          </p>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">📥 Krok 1: Zainstaluj paczki</h3>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`# Drizzle ORM + SQLite driver
npm install drizzle-orm better-sqlite3

# Drizzle Kit (narzędzia CLI - migracje, studio)
npm install -D drizzle-kit

# TypeScript types dla better-sqlite3
npm install -D @types/better-sqlite3`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              <strong>drizzle-orm</strong> - główna biblioteka<br/>
              <strong>drizzle-kit</strong> - narzędzia deweloperskie (migracje, studio)
            </p>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">⚙️ Krok 2: Konfiguracja (drizzle.config.ts)</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-blue-400">{`import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './lib/schema.ts',    // Gdzie są definicje tabel
  out: './drizzle',              // Gdzie zapisać migracje
  dialect: 'sqlite',             // Typ bazy danych
  dbCredentials: {
    url: './database.db',        // Ścieżka do pliku SQLite
  },
});`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✅ Krok 3: Sprawdź instalację</h3>
            <pre className="bg-black/50 rounded p-3 text-sm">
              <code className="text-purple-400">{`# Sprawdź czy działa
npx drizzle-kit --version

# Wygeneruj migracje (gdy masz schema)
npx drizzle-kit generate

# Uruchom migracje
npx drizzle-kit migrate`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Tip:</strong> Drizzle Kit to opcjonalne narzędzie. Możesz używać Drizzle ORM 
            bez niego, ale migracje będą ręczne.
          </div>
        </div>
      )
    },
    {
      id: 'schema-definition',
      title: 'Definiowanie Schema',
      icon: '📋',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Schema</strong> to definicja tabel jako TypeScript objects. 
            To serce Drizzle!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📋 Przykład: lib/schema.ts</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';

// Definicja tabeli "produkty"
export const produkty = sqliteTable('produkty', {
  id: integer('id').primaryKey(),
  nazwa: text('nazwa').notNull(),
  opis: text('opis'),
  cena: real('cena').notNull(),
  utworzono: text('utworzono').default('CURRENT_TIMESTAMP'),
});

// Definicja tabeli "lokalizacje"
export const lokalizacje = sqliteTable('lokalizacje', {
  id: integer('id').primaryKey(),
  miasto: text('miasto').notNull(),
  kraj: text('kraj').notNull(),
  region: text('region'),
  utworzono: text('utworzono').default('CURRENT_TIMESTAMP'),
});

// TypeScript automatycznie wywnioskuje typy!
export type Produkt = typeof produkty.$inferSelect;  // Typ do odczytu
export type NewProdukt = typeof produkty.$inferInsert; // Typ do wstawienia`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Typy kolumn w SQLite</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>integer()</strong> - liczby całkowite (INTEGER)
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>text()</strong> - tekst (TEXT)
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>real()</strong> - liczby dziesiętne (REAL)
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>blob()</strong> - dane binarne (BLOB)
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🔧 Metody modyfikacji</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">.primaryKey()</code> - klucz główny
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">.notNull()</code> - pole wymagane
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">.default('value')</code> - wartość domyślna
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">.$inferSelect</code> - typ do odczytu
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">.$inferInsert</code> - typ do wstawienia
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Type Inference:</strong> Drizzle automatycznie wywnioskuje typy TypeScript 
            z schema! Nie musisz pisać interfejsów ręcznie.
          </div>
        </div>
      )
    },
    {
      id: 'database-connection',
      title: 'Połączenie z bazą (lib/db.ts)',
      icon: '🔌',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Stwórz instancję Drizzle połączoną z SQLite!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">💻 lib/db.ts z Drizzle</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

// Utwórz połączenie z SQLite
const sqlite = new Database('./database.db');

// Utwórz instancję Drizzle z schema
export const db = drizzle(sqlite, { schema });

// Eksportuj schema żeby używać w queries
export * from './schema';`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Co się dzieje?</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>better-sqlite3</strong> - połączenie z plikiem SQLite</li>
              <li>• <strong>drizzle()</strong> - wrapper który dodaje ORM funkcje</li>
              <li>• <strong>schema</strong> - przekazujemy definicje tabel</li>
              <li>• <strong>db</strong> - gotowa instancja do queries!</li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Singleton Pattern</h4>
            <p className="text-sm mb-2">
              W Next.js, moduły są cache'owane, więc <code className="bg-black/30 px-1 rounded">db</code> 
              będzie utworzony tylko raz. Bezpieczne!
            </p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`// W każdym pliku:
import { db } from '@/lib/db';

// db jest zawsze ta sama instancja
// Nie musisz się martwić o wiele połączeń`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Production:</strong> W produkcji (Docker) użyj <code className="bg-black/30 px-2 py-1 rounded">/app/data/database.db</code> 
            zamiast <code className="bg-black/30 px-2 py-1 rounded">./database.db</code>
          </div>
        </div>
      )
    },
    {
      id: 'basic-queries',
      title: 'Podstawowe Queries',
      icon: '🔍',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobacz jak używać Drizzle do <strong className="text-blue-400">CRUD operations</strong>!
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-green-400">📖 READ (SELECT)</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-green-400">{`import { db, produkty } from '@/lib/db';
import { eq, gt } from 'drizzle-orm';

// Pobierz wszystkie
const wszystkie = await db.select().from(produkty);

// Pobierz jeden (WHERE id = 1)
const jeden = await db
  .select()
  .from(produkty)
  .where(eq(produkty.id, 1));

// Pobierz droższe niż 100 (WHERE cena > 100)
const drogie = await db
  .select()
  .from(produkty)
  .where(gt(produkty.cena, 100));`}</code>
              </pre>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-blue-400">✏️ CREATE (INSERT)</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-blue-400">{`// Wstaw jeden rekord
const nowy = await db.insert(produkty).values({
  nazwa: 'Laptop',
  opis: 'Gaming laptop',
  cena: 2999.99,
}).returning(); // Zwraca wstawiony rekord

// Wstaw wiele
await db.insert(produkty).values([
  { nazwa: 'Mysz', cena: 49.99 },
  { nazwa: 'Klawiatura', cena: 199.99 },
]);`}</code>
              </pre>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold mb-3 text-yellow-400">🔄 UPDATE</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-yellow-400">{`import { eq } from 'drizzle-orm';

// Zaktualizuj jeden (WHERE id = 1)
await db
  .update(produkty)
  .set({ cena: 2499.99 })
  .where(eq(produkty.id, 1));

// Zaktualizuj wiele (WHERE cena < 50)
await db
  .update(produkty)
  .set({ cena: 49.99 })
  .where(lt(produkty.cena, 50));`}</code>
              </pre>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <h4 className="text-xl font-bold mb-3 text-red-400">🗑️ DELETE</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-red-400">{`// Usuń jeden (WHERE id = 1)
await db
  .delete(produkty)
  .where(eq(produkty.id, 1));

// Usuń wszystkie droższe niż 1000
await db
  .delete(produkty)
  .where(gt(produkty.cena, 1000));`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>💡 Type Safety:</strong> TypeScript sprawdzi czy używasz poprawnych nazw kolumn! 
            Literówka = błąd kompilacji.
          </div>
        </div>
      )
    },
    {
      id: 'repository-pattern',
      title: 'Repository Pattern z Drizzle',
      icon: '📚',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Repository Pattern</strong> to warstwa abstrakcji 
            nad bazą danych. <strong>Oddziela logikę od szczegółów implementacji</strong>!
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">📚 Dlaczego Repository?</h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded p-4">
                <strong className="text-purple-400">1. Separacja odpowiedzialności</strong>
                <p className="text-sm mt-2">
                  API Route → wywołuje Repository → Repository → wykonuje query
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong className="text-blue-400">2. Testowanie</strong>
                <p className="text-sm mt-2">
                  Możesz mockować Repository bez prawdziwej bazy danych
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong className="text-green-400">3. Reużywalność</strong>
                <p className="text-sm mt-2">
                  Ten sam Repository w wielu miejscach (API, Server Components, etc.)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Przykład: lib/repositories/produktRepository.ts</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import { db, produkty } from '@/lib/db';
import { eq, gt, desc } from 'drizzle-orm';
import type { NewProdukt } from '@/lib/schema';

export const produktRepository = {
  // Pobierz wszystkie produkty
  findAll: async () => {
    return await db.select().from(produkty);
  },

  // Pobierz jeden po ID
  findById: async (id: number) => {
    const result = await db
      .select()
      .from(produkty)
      .where(eq(produkty.id, id))
      .limit(1);
    return result[0] || null;
  },

  // Pobierz droższe niż X
  findByPriceGreaterThan: async (cena: number) => {
    return await db
      .select()
      .from(produkty)
      .where(gt(produkty.cena, cena))
      .orderBy(desc(produkty.cena));
  },

  // Utwórz nowy produkt
  create: async (data: NewProdukt) => {
    const result = await db
      .insert(produkty)
      .values(data)
      .returning();
    return result[0];
  },

  // Zaktualizuj produkt
  update: async (id: number, data: Partial<NewProdukt>) => {
    const result = await db
      .update(produkty)
      .set(data)
      .where(eq(produkty.id, id))
      .returning();
    return result[0] || null;
  },

  // Usuń produkt
  delete: async (id: number) => {
    await db.delete(produkty).where(eq(produkty.id, id));
  },
};`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Użycie w API Route</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// app/api/produkty/route.ts
import { produktRepository } from '@/lib/repositories/produktRepository';

export async function GET() {
  const produkty = await produktRepository.findAll();
  return Response.json({ success: true, data: produkty });
}

export async function POST(request: Request) {
  const body = await request.json();
  const nowy = await produktRepository.create(body);
  return Response.json({ success: true, data: nowy }, { status: 201 });
}`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>Kod jest czysty!</strong> API Route tylko obsługuje HTTP, 
              Repository zajmuje się bazą danych.
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Best Practice:</strong> Jeden Repository = jedna tabela. 
            Jeśli masz relacje, możesz dodać metody które łączą tabele (JOIN).
          </div>
        </div>
      )
    },
    {
      id: 'drizzle-vs-raw',
      title: 'Drizzle vs Raw SQL - Kiedy co?',
      icon: '⚖️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Kiedy używać <strong className="text-blue-400">Drizzle</strong>, a kiedy 
            <strong className="text-green-400"> raw SQL</strong>?
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-500/20 rounded-xl p-5 border-2 border-blue-500/50">
              <h4 className="text-xl font-bold mb-3 text-blue-400">❄️ Użyj Drizzle gdy:</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Chcesz type safety</li>
                <li>✓ Projekt rośnie (wiele tabel)</li>
                <li>✓ Potrzebujesz migracji</li>
                <li>✓ Zespół pracuje nad projektem</li>
                <li>✓ Możliwa zmiana bazy (SQLite → PostgreSQL)</li>
                <li>✓ Chcesz autocomplete w IDE</li>
                <li>✓ Proste do średnio-złożone queries</li>
              </ul>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <h4 className="text-xl font-bold mb-3 text-green-400">📝 Użyj Raw SQL gdy:</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Bardzo proste projekty (1-2 tabele)</li>
                <li>✓ Chcesz pełną kontrolę nad SQL</li>
                <li>✓ Bardzo złożone queries (window functions, CTEs)</li>
                <li>✓ Minimalne zależności</li>
                <li>✓ Uczysz się SQL</li>
                <li>✓ Performance jest krytyczny</li>
                <li>✓ Masz legacy SQL queries</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔄 Możesz łączyć oba!</h4>
            <p className="text-sm mb-3">
              Drizzle pozwala używać raw SQL gdy potrzeba:
            </p>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-purple-400">{`import { sql } from 'drizzle-orm';

// Proste queries - Drizzle
const produkty = await db.select().from(produkty);

// Złożone query - Raw SQL
const wynik = await db.execute(sql\`
  SELECT 
    p.*,
    COUNT(o.id) as liczba_zamowien
  FROM produkty p
  LEFT JOIN zamowienia o ON p.id = o.produkt_id
  GROUP BY p.id
  HAVING COUNT(o.id) > 5
\`);`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Rekomendacja dla Twojego projektu:</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Teraz:</strong> Zostań przy better-sqlite3 (uczysz się SQL)</li>
              <li>• <strong>Gdy projekt urośnie:</strong> Dodaj Drizzle (type safety, łatwiejsze utrzymanie)</li>
              <li>• <strong>Złożone queries:</strong> Używaj raw SQL nawet z Drizzle</li>
            </ul>
          </div>
        </div>
      )
    }
  ]
};
