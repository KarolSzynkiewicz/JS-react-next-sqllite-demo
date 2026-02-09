import { Lesson } from '../components/LessonSlider';

export const ormBasicsLesson: Lesson = {
  id: 'orm-basics',
  title: 'Prisma ORM - Modele jak w Laravel',
  description: 'ORM z modelami i prostym API',
  icon: '🗺️',
  slides: [
    {
      id: 'what-is-orm-model',
      title: 'Co to jest Model? - Mapowanie bazy na obiekty',
      icon: '🗺️',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-blue-400">Model</strong> to sposób na <strong>mapowanie tabeli w bazie danych 
            na obiekty JavaScript</strong> w kodzie.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📊 Krok 1: Tabela w bazie danych</h3>
            <p className="mb-3 text-base">
              W bazie danych masz <strong>tabelę</strong> z danymi. Tabela to jak arkusz kalkulacyjny - 
              ma wiersze (rekordy) i kolumny (pola):
            </p>
            <div className="bg-white/10 rounded p-4">
              <p className="text-sm mb-2"><strong>Tabela "produkty" w bazie:</strong></p>
              <pre className="bg-black/50 rounded p-3 text-xs overflow-x-auto">
                <code className="text-white">{`┌────┬──────────┬─────────────┬──────┐
│ id │ nazwa    │ opis        │ cena │
├────┼──────────┼─────────────┼──────┤
│ 1  │ Laptop   │ Super laptop│ 1000 │
│ 2  │ Mysz     │ Bezprzewodowa│ 50  │
│ 3  │ Klawiatura│ Mechaniczna│ 200 │
└────┴──────────┴─────────────┴──────┘`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">
                To są dane w bazie - wiersze (1, 2, 3) i kolumny (id, nazwa, opis, cena)
              </p>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">🔄 Krok 2: Prisma mapuje tabelę na obiekty JavaScript</h3>
            <p className="mb-3 text-base">
              Prisma automatycznie <strong>zamienia wiersze z tabeli na obiekty JavaScript</strong>:
            </p>
            <div className="bg-white/10 rounded p-4">
              <p className="text-sm mb-2"><strong>Każdy wiersz staje się obiektem:</strong></p>
              <pre className="bg-black/50 rounded p-3 text-xs overflow-x-auto">
                <code className="text-green-400">{`// Wiersz 1 z tabeli → obiekt JavaScript
const produkt1 = {
  id: 1,
  nazwa: "Laptop",
  opis: "Super laptop",
  cena: 1000
};

// Wiersz 2 z tabeli → obiekt JavaScript
const produkt2 = {
  id: 2,
  nazwa: "Mysz",
  opis: "Bezprzewodowa",
  cena: 50
};

// Wiersz 3 z tabeli → obiekt JavaScript
const produkt3 = {
  id: 3,
  nazwa: "Klawiatura",
  opis: "Mechaniczna",
  cena: 200
};`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">
                <strong>Mapowanie:</strong> Wiersz w tabeli = obiekt JavaScript. Kolumny = właściwości obiektu (id, nazwa, opis, cena)
              </p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔍 Krok 3: Sprawdzanie właściwości (properties)</h3>
            <p className="mb-3 text-base">
              Gdy masz obiekt, możesz <strong>sprawdzać jego właściwości</strong> (properties):
            </p>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-purple-400">{`// Pobierz produkt z bazy (Prisma automatycznie mapuje na obiekt)
const produkt = await prisma.produkt.findUnique({
  where: { id: 1 }
});

// Sprawdzaj właściwości obiektu:
console.log(produkt.id);      // 1
console.log(produkt.nazwa);  // "Laptop"
console.log(produkt.opis);   // "Super laptop"
console.log(produkt.cena);   // 1000

// Możesz używać właściwości w kodzie:
if (produkt.cena > 500) {
  console.log("Drogi produkt!");
}

const pelnaNazwa = produkt.nazwa + " - " + produkt.cena + " zł";
// "Laptop - 1000 zł"`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              <strong>Properties</strong> = właściwości obiektu. To są dane które możesz odczytać i używać w kodzie!
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Podsumowanie mapowania:</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Tabela w bazie → Model w kodzie</li>
              <li>• Wiersz w tabeli → Obiekt JavaScript</li>
              <li>• Kolumna w tabeli → Właściwość obiektu (property)</li>
              <li>• Sprawdzasz właściwości przez: <code className="bg-black/30 px-1 rounded">obiekt.wlasciwosc</code></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'model-repository-pattern',
      title: 'Wzorzec Repository - Prisma.produkt',
      icon: '📦',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">prisma.produkt</strong> to <strong>Repository</strong> - 
            obiekt który ma metody do pracy z tabelą "produkty" w bazie.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📦 Co to jest Repository Pattern?</h3>
            <p className="mb-3 text-base">
              <strong>Repository</strong> to obiekt który <strong>ukrywa szczegóły bazy danych</strong> i daje 
              proste metody do pracy z danymi.
            </p>
            <div className="bg-white/10 rounded p-4">
              <p className="text-sm mb-2"><strong>prisma.produkt = Repository dla tabeli "produkty"</strong></p>
              <pre className="bg-black/50 rounded p-3 text-xs overflow-x-auto">
                <code className="text-green-400">{`// prisma.produkt to obiekt z metodami:
prisma.produkt.findMany()    // Pobierz wszystkie produkty
prisma.produkt.findUnique()  // Znajdź produkt po ID
prisma.produkt.create()      // Dodaj nowy produkt
prisma.produkt.update()      // Zaktualizuj produkt
prisma.produkt.delete()      // Usuń produkt`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">
                <strong>Repository Pattern:</strong> Kod nie wie jak działa baza danych. Tylko używa metod 
                (findMany, create, etc.) a Prisma sama wykonuje odpowiednie SQL queries!
              </p>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">✅ Zalety Repository Pattern:</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>1. Kod nie wie jaka to baza danych</strong>
                <p className="text-xs mt-1 opacity-70">
                  Twój kod używa <code className="bg-black/30 px-1 rounded">prisma.produkt.findMany()</code> 
                  - nie wie czy to SQLite, PostgreSQL czy MySQL!
                </p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>2. Łatwa zmiana bazy danych</strong>
                <p className="text-xs mt-1 opacity-70">
                  Chcesz zmienić z SQLite na PostgreSQL? Zmieniasz tylko config file - kod zostaje taki sam!
                </p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>3. Proste metody zamiast SQL</strong>
                <p className="text-xs mt-1 opacity-70">
                  Zamiast pisać długie SQL queries, używasz prostych metod: 
                  <code className="bg-black/30 px-1 rounded">findMany()</code>, <code className="bg-black/30 px-1 rounded">create()</code>
                </p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>4. Type safety</strong>
                <p className="text-xs mt-1 opacity-70">
                  TypeScript wie jakie właściwości ma produkt. Autocomplete działa - nie pomylisz nazwy kolumny!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🌉 Analogia: Sklep z produktami</h4>
            <div className="space-y-2 text-base">
              <p>
                Wyobraź sobie <strong>sklep z produktami</strong>:
              </p>
              <div className="bg-white/10 rounded p-4 text-sm">
                <p className="mb-2"><strong>prisma.produkt</strong> = szafa z produktami (tabela w bazie)</p>
                <p className="mb-2"><strong>findMany()</strong> = metoda "pokaż mi wszystkie produkty"</p>
                <p className="mb-2"><strong>findUnique()</strong> = metoda "znajdź produkt o numerze 1"</p>
                <p className="mb-2"><strong>create()</strong> = metoda "dodaj nowy produkt do szafy"</p>
                <p className="mt-3">
                  <strong>Repository Pattern:</strong> Nie musisz wiedzieć jak działa szafa (baza danych). 
                  Tylko mówisz metodzie co chcesz, a ona sama to robi!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pamiętaj:</strong> <code className="bg-black/30 px-1 rounded">prisma.produkt</code> to Repository - 
            obiekt z metodami do pracy z tabelą. Kod nie wie jak działa baza - tylko używa metod!
          </div>
        </div>
      )
    },
    {
      id: 'model-config-file',
      title: 'Config File - Jak zmienić bazę danych?',
      icon: '⚙️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Dzięki <strong className="text-blue-400">config file</strong> możesz <strong>zmienić bazę danych 
            bez zmiany kodu</strong>! To bardzo przydatne.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📋 Config File 1: schema.prisma</h3>
            <p className="mb-3 text-base">
              Plik <code className="bg-black/30 px-2 py-1 rounded">prisma/schema.prisma</code> definiuje 
              <strong> jak wyglądają modele</strong> (jakie kolumny ma tabela):
            </p>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`// prisma/schema.prisma

// Konfiguracja bazy danych
datasource db {
  provider = "sqlite"        // Typ bazy: sqlite, postgresql, mysql
  url      = env("DATABASE_URL")  // URL do bazy (z pliku .env)
}

// MODEL - definicja tabeli "produkty"
model Produkt {
  id        Int      @id @default(autoincrement())
  nazwa     String
  opis      String?
  cena      Float
  utworzono DateTime @default(now())
}

// MODEL - definicja tabeli "zamowienia"
model Zamowienie {
  id         Int      @id @default(autoincrement())
  produktId  Int
  ilosc      Int
  utworzono  DateTime @default(now())
}`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              <strong>schema.prisma</strong> = definicja modeli. Mówi Prisma jak wyglądają tabele w bazie.
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">🔑 Config File 2: .env (DATABASE_URL)</h3>
            <p className="mb-3 text-base">
              Plik <code className="bg-black/30 px-2 py-1 rounded">.env</code> zawiera <strong>URL do bazy danych</strong>:
            </p>
            <div className="space-y-3">
              <div className="bg-white/10 rounded p-4">
                <p className="text-sm mb-2"><strong>Dla SQLite (lokalna baza plikowa):</strong></p>
                <pre className="bg-black/50 rounded p-2 text-xs">
                  <code className="text-green-400">DATABASE_URL="file:./database.db"</code>
                </pre>
              </div>
              <div className="bg-white/10 rounded p-4">
                <p className="text-sm mb-2"><strong>Dla PostgreSQL (serwer bazy danych):</strong></p>
                <pre className="bg-black/50 rounded p-2 text-xs">
                  <code className="text-green-400">DATABASE_URL="postgresql://user:password@localhost:5432/mydb"</code>
                </pre>
              </div>
              <div className="bg-white/10 rounded p-4">
                <p className="text-sm mb-2"><strong>Dla MySQL:</strong></p>
                <pre className="bg-black/50 rounded p-2 text-xs">
                  <code className="text-green-400">DATABASE_URL="mysql://user:password@localhost:3306/mydb"</code>
                </pre>
              </div>
            </div>
            <p className="text-sm mt-3 opacity-80">
              <strong>DATABASE_URL</strong> = adres bazy danych. Zmieniasz tylko ten URL, a kod zostaje taki sam!
            </p>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔄 Jak zmienić bazę danych?</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>Krok 1:</strong> Zmień <code className="bg-black/30 px-1 rounded">provider</code> w schema.prisma
                <p className="text-xs mt-1 opacity-70">Z "sqlite" na "postgresql" lub "mysql"</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Krok 2:</strong> Zmień <code className="bg-black/30 px-1 rounded">DATABASE_URL</code> w .env
                <p className="text-xs mt-1 opacity-70">Podaj URL do nowej bazy danych</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Krok 3:</strong> Uruchom <code className="bg-black/30 px-1 rounded">npx prisma migrate dev</code>
                <p className="text-xs mt-1 opacity-70">Prisma stworzy tabele w nowej bazie</p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Gotowe!</strong> Kod zostaje taki sam - tylko zmieniłeś config files!
                <p className="text-xs mt-1 opacity-70">Wszystkie metody (findMany, create, etc.) działają tak samo!</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 To jest siła Repository Pattern!</strong> Kod nie wie jaka to baza - tylko używa metod. 
            Zmieniasz bazę przez config files, a kod zostaje taki sam!
          </div>
        </div>
      )
    },
    {
      id: 'why-prisma',
      title: 'Dlaczego Prisma?',
      icon: '⭐',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Prisma</strong> to najpopularniejszy ORM dla TypeScript. 
            Ma <strong>modele jak Laravel</strong> i <strong>proste API</strong>!
          </p>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border-2 border-blue-500/50">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">⭐</span>
              <div>
                <h3 className="text-3xl font-bold">Prisma ORM</h3>
                <p className="opacity-80">Next-generation ORM for TypeScript</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">📋</div>
                <strong>Modele</strong>
                <p className="text-xs opacity-70 mt-1">Dedykowane pliki .prisma</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">🎯</div>
                <strong>Laravel-like API</strong>
                <p className="text-xs opacity-70 mt-1">findMany(), findUnique()</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">🔗</div>
                <strong>Relacje</strong>
                <p className="text-xs opacity-70 mt-1">hasMany, belongsTo</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-lg font-bold mb-2 text-green-400">✅ Zalety Prisma</h4>
              <ul className="text-sm space-y-1">
                <li>• Modele w plikach .prisma (jak Laravel!)</li>
                <li>• API identyczne jak Laravel Eloquent</li>
                <li>• Type-safe (TypeScript)</li>
                <li>• Automatyczne migracje</li>
                <li>• Relacje (hasMany, belongsTo)</li>
                <li>• Prisma Studio (GUI do bazy)</li>
                <li>• Świetne wsparcie SQLite</li>
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
            <strong>🌟 Popularność:</strong> Prisma jest używana przez tysiące firm (GitHub, Netflix, 
            Notion, Figma). To standard w TypeScript ecosystem!
          </div>
        </div>
      )
    },
    {
      id: 'installation',
      title: 'Instalacja Prisma',
      icon: '📦',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Instalacja Prisma to <strong className="text-green-400">3 proste kroki</strong>!
          </p>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">📥 Krok 1: Zainstaluj paczki</h3>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`# Prisma ORM + SQLite driver
npm install @prisma/client

# Prisma CLI (narzędzia - migracje, studio)
npm install -D prisma`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              <strong>@prisma/client</strong> - główna biblioteka (runtime)<br/>
              <strong>prisma</strong> - narzędzia CLI (development)
            </p>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">⚙️ Krok 2: Inicjalizacja</h3>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-blue-400">{`# Stwórz folder prisma/ i schema.prisma
npx prisma init --datasource-provider sqlite`}</code>
            </pre>
            <p className="text-sm mt-3 opacity-80">
              To stworzy folder <code className="bg-black/30 px-2 py-1 rounded">prisma/</code> 
              z plikiem <code className="bg-black/30 px-2 py-1 rounded">schema.prisma</code>!
            </p>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✅ Krok 3: Wygeneruj klienta</h3>
            <pre className="bg-black/50 rounded p-3 text-sm">
              <code className="text-purple-400">{`# Po zdefiniowaniu modeli w schema.prisma
npx prisma generate

# Uruchom migracje (stworzy tabele w bazie)
npx prisma migrate dev --name init`}</code>
            </pre>
            <p className="text-sm mt-3">
              <code className="bg-black/30 px-2 py-1 rounded">prisma generate</code> tworzy TypeScript 
              typy z modeli!
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Tip:</strong> Po każdej zmianie w <code className="bg-black/30 px-2 py-1 rounded">schema.prisma</code> 
            uruchom <code className="bg-black/30 px-2 py-1 rounded">npx prisma generate</code>!
          </div>
        </div>
      )
    },
    {
      id: 'models-schema',
      title: 'Modele - Definiowanie w schema.prisma',
      icon: '📋',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Modele</strong> definiujesz w pliku 
            <code className="bg-black/30 px-2 py-1 rounded">prisma/schema.prisma</code>. 
            To jak <strong>migracje w Laravel</strong>!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📋 Przykład: prisma/schema.prisma</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// Konfiguracja bazy danych
datasource db {
  provider = "sqlite"
  url      = "file:./database.db"
}

generator client {
  provider = "prisma-client-js"
}

// MODEL - reprezentuje tabelę "produkty"
model Produkt {
  id        Int      @id @default(autoincrement())
  nazwa     String
  opis      String?
  cena      Float
  utworzono DateTime @default(now())
  
  // Relacja: jeden produkt ma wiele zamówień
  zamowienia Zamowienie[]
}

// MODEL - reprezentuje tabelę "zamowienia"
model Zamowienie {
  id         Int      @id @default(autoincrement())
  produktId  Int
  ilosc      Int
  utworzono  DateTime @default(now())
  
  // Relacja: zamówienie należy do produktu
  produkt    Produkt  @relation(fields: [produktId], references: [id])
}`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Typy pól w Prisma</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>Int</strong> - liczby całkowite
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>String</strong> - tekst
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Float</strong> - liczby dziesiętne
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>DateTime</strong> - data i czas
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>Boolean</strong> - true/false
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong>String?</strong> - opcjonalne (nullable)
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🔧 Atrybuty (dekoratory)</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">@id</code> - klucz główny
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">@default(autoincrement())</code> - auto-increment
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">@default(now())</code> - aktualna data/czas
              </div>
              <div className="bg-white/10 rounded p-2">
                <code className="text-green-400">@relation</code> - relacja między modelami
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Ważne:</strong> Model <code className="bg-black/30 px-2 py-1 rounded">Produkt</code> 
            automatycznie staje się tabelą <code className="bg-black/30 px-2 py-1 rounded">Produkt</code> 
            (Prisma używa PascalCase dla modeli, ale możesz zmienić przez <code className="bg-black/30 px-2 py-1 rounded">@@map</code>)
          </div>
        </div>
      )
    },
    {
      id: 'relations',
      title: 'Relacje - hasMany i belongsTo',
      icon: '🔗',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Relacje</strong> w Prisma działają jak w Laravel! 
            <code>hasMany</code>, <code>belongsTo</code> - wszystko wspierane!
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">🔗 Przykład relacji</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// Jeden Produkt ma wiele Zamówień (hasMany)
model Produkt {
  id        Int      @id @default(autoincrement())
  nazwa     String
  cena      Float
  
  // hasMany - jeden produkt, wiele zamówień
  zamowienia Zamowienie[]  // Tablica = hasMany
}

// Zamówienie należy do Produktu (belongsTo)
model Zamowienie {
  id        Int      @id @default(autoincrement())
  ilosc     Int
  produktId Int      // Foreign key
  
  // belongsTo - zamówienie należy do produktu
  produkt   Produkt  @relation(fields: [produktId], references: [id])
}`}</code>
            </pre>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Jak to działa?</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong className="text-blue-400">hasMany:</strong>
                <p className="mt-1">
                  <code className="bg-black/30 px-1 rounded">zamowienia Zamowienie[]</code> - 
                  tablica oznacza "wiele" (hasMany)
                </p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong className="text-green-400">belongsTo:</strong>
                <p className="mt-1">
                  <code className="bg-black/30 px-1 rounded">produkt Produkt</code> - 
                  pojedynczy obiekt oznacza "należy do" (belongsTo)
                </p>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong className="text-purple-400">@relation:</strong>
                <p className="mt-1">
                  Definiuje jak tabele są połączone (foreign key)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Użycie relacji w queries</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`// Pobierz produkt z jego zamówieniami (include)
const produkt = await prisma.produkt.findUnique({
  where: { id: 1 },
  include: {
    zamowienia: true  // Załaduj relację!
  }
});
// produkt.zamowienia - tablica zamówień!

// Pobierz zamówienie z produktem
const zamowienie = await prisma.zamowienie.findUnique({
  where: { id: 1 },
  include: {
    produkt: true  // Załaduj produkt!
  }
});
// zamowienie.produkt - obiekt produktu!`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>To jest jak Laravel Eloquent!</strong> <code>include</code> = <code>with()</code> w Laravel
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Inne typy relacji:</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <code className="bg-black/30 px-1 rounded">hasOne</code> - jeden do jednego</li>
              <li>• <code className="bg-black/30 px-1 rounded">hasMany</code> - jeden do wielu</li>
              <li>• <code className="bg-black/30 px-1 rounded">belongsTo</code> - wiele do jednego</li>
              <li>• <code className="bg-black/30 px-1 rounded">manyToMany</code> - wiele do wielu</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'database-connection',
      title: 'Połączenie z bazą (lib/prisma.ts)',
      icon: '🔌',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Stwórz instancję Prisma Client do użycia w całej aplikacji!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">💻 lib/prisma.ts</h3>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import { PrismaClient } from '@prisma/client';

// Singleton pattern - jedna instancja dla całej aplikacji
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error'],
});

// W development, zapisz instancję w globalThis
// (Next.js hot reload nie tworzy nowych instancji)
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Co się dzieje?</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>PrismaClient</strong> - główna klasa do queries</li>
              <li>• <strong>Singleton</strong> - jedna instancja (nie tworz wielu!)</li>
              <li>• <strong>globalThis</strong> - zapisuje instancję w development (Next.js hot reload)</li>
              <li>• <strong>log</strong> - opcjonalne logowanie queries (tylko w dev)</li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📝 Użycie</h4>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`// W każdym pliku:
import { prisma } from '@/lib/prisma';

// Użyj modeli!
const produkty = await prisma.produkt.findMany();
const produkt = await prisma.produkt.findUnique({ where: { id: 1 } });`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>prisma.produkt</strong> - model Produkt z schema.prisma!
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Production:</strong> W produkcji (Docker) użyj <code className="bg-black/30 px-2 py-1 rounded">file:/app/data/database.db</code> 
            w <code className="bg-black/30 px-2 py-1 rounded">schema.prisma</code>
          </div>
        </div>
      )
    },
    {
      id: 'laravel-like-api',
      title: 'API jak Laravel - findMany, findUnique',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Prisma ma <strong className="text-purple-400">API identyczne jak Laravel Eloquent</strong>! 
            <code>findMany()</code> = <code>all()</code>, <code>findUnique()</code> = <code>find()</code>!
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">🔄 Porównanie: Laravel vs Prisma</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 rounded p-4">
                <h4 className="text-lg font-bold mb-2 text-green-400">✅ Laravel/PHP</h4>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-green-400">{`// Wszystkie
Produkt::all();

// Jeden po ID
Produkt::find(1);

// Where
Produkt::where('cena', '>', 100)
  ->get();

// Create
Produkt::create([
  'nazwa' => 'Laptop',
  'cena' => 2999
]);

// Update
Produkt::find(1)
  ->update(['cena' => 2499]);

// Delete
Produkt::find(1)->delete();`}</code>
                </pre>
              </div>

              <div className="bg-blue-500/20 rounded p-4">
                <h4 className="text-lg font-bold mb-2 text-blue-400">✅ Prisma/TypeScript</h4>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-blue-400">{`// Wszystkie
await prisma.produkt.findMany();

// Jeden po ID
await prisma.produkt.findUnique({
  where: { id: 1 }
});

// Where
await prisma.produkt.findMany({
  where: { cena: { gt: 100 } }
});

// Create
await prisma.produkt.create({
  data: {
    nazwa: 'Laptop',
    cena: 2999
  }
});

// Update
await prisma.produkt.update({
  where: { id: 1 },
  data: { cena: 2499 }
});

// Delete
await prisma.produkt.delete({
  where: { id: 1 }
});`}</code>
                </pre>
              </div>
            </div>
            <p className="text-sm mt-4 text-center">
              <strong>Prawie identyczne!</strong> Tylko składnia TypeScript zamiast PHP 🎯
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Różnice:</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Laravel: <code className="bg-black/30 px-1 rounded">all()</code> → Prisma: <code className="bg-black/30 px-1 rounded">findMany()</code></li>
              <li>• Laravel: <code className="bg-black/30 px-1 rounded">find(1)</code> → Prisma: <code className="bg-black/30 px-1 rounded">{'findUnique({where: {id: 1}})'}</code></li>
              <li>• Laravel: <code className="bg-black/30 px-1 rounded">{'where(\'cena\', \'>\', 100)'}</code> → Prisma: <code className="bg-black/30 px-1 rounded">{'where: {cena: {gt: 100}}'}</code></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'sql-vs-prisma',
      title: 'Długie SQL → Krótkie Prisma',
      icon: '⚡',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobacz jak <strong className="text-red-400">długie SQL queries</strong> stają się 
            <strong className="text-green-400"> krótkimi Prisma queries</strong>!
          </p>

          <div className="space-y-4">
            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <h4 className="text-xl font-bold mb-3 text-red-400">❌ Długie SQL Query</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-white/70">{`const db = getDatabase();
const rows = db.prepare(\`
  SELECT 
    p.id,
    p.nazwa,
    p.cena,
    p.opis,
    COUNT(z.id) as liczba_zamowien,
    SUM(z.ilosc * p.cena) as suma_wartosci
  FROM produkty p
  LEFT JOIN zamowienia z ON p.id = z.produkt_id
  WHERE p.cena > ?
    AND p.nazwa LIKE ?
    AND p.utworzono >= ?
  GROUP BY p.id
  HAVING COUNT(z.id) > ?
  ORDER BY p.cena DESC
  LIMIT ?
\`).all(100, '%Laptop%', '2024-01-01', 5, 10);

// 15 linii SQL!
// Trudno czytać
// Łatwo o błąd
// Brak type safety`}</code>
              </pre>
            </div>

            <div className="text-center text-3xl">⬇️</div>

            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-green-400">✅ Krótkie Prisma Query</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-green-400">{`const produkty = await prisma.produkt.findMany({
  where: {
    cena: { gt: 100 },
    nazwa: { contains: 'Laptop' },
    utworzono: { gte: new Date('2024-01-01') }
  },
  include: {
    zamowienia: {
      _count: true
    }
  },
  having: {
    zamowienia: {
      _count: { gt: 5 }
    }
  },
  orderBy: { cena: 'desc' },
  take: 10
});

// 12 linii czytelnego kodu!
// TypeScript type safety
// Autocomplete działa
// Łatwo refaktorować`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">📊 Porównanie</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong className="text-red-400">SQL:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 15 linii kodu</li>
                  <li>• Trudno czytać</li>
                  <li>• Brak type safety</li>
                  <li>• Łatwo o literówkę</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded p-3">
                <strong className="text-green-400">Prisma:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 12 linii kodu</li>
                  <li>• Czytelne i logiczne</li>
                  <li>• Full type safety</li>
                  <li>• Autocomplete w IDE</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>💡 To jest główna zaleta ORM!</strong> 
            Zamiast pisać długie SQL queries, piszesz krótki, czytelny kod JavaScript/TypeScript.
          </div>
        </div>
      )
    },
    {
      id: 'crud-examples',
      title: 'CRUD w Prisma - Kompletne przykłady',
      icon: '✏️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Kompletne przykłady <strong className="text-blue-400">CRUD operations</strong> w Prisma!
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-green-400">📖 READ (findMany, findUnique)</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-green-400">{`import { prisma } from '@/lib/prisma';

// Wszystkie produkty
const wszystkie = await prisma.produkt.findMany();

// Jeden po ID
const jeden = await prisma.produkt.findUnique({
  where: { id: 1 }
});

// Z warunkami (WHERE)
const drogie = await prisma.produkt.findMany({
  where: {
    cena: { gt: 100 },
    nazwa: { contains: 'Laptop' }
  },
  orderBy: { cena: 'desc' },
  take: 10  // LIMIT
});

// Z relacjami (JOIN)
const zZamowieniami = await prisma.produkt.findUnique({
  where: { id: 1 },
  include: {
    zamowienia: true  // Załaduj zamówienia!
  }
});`}</code>
              </pre>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <h4 className="text-xl font-bold mb-3 text-blue-400">✏️ CREATE</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-blue-400">{`// Utwórz jeden
const nowy = await prisma.produkt.create({
  data: {
    nazwa: 'Laptop',
    opis: 'Gaming laptop',
    cena: 2999.99
  }
});

// Utwórz wiele
await prisma.produkt.createMany({
  data: [
    { nazwa: 'Mysz', cena: 49.99 },
    { nazwa: 'Klawiatura', cena: 199.99 }
  ]
});

// Utwórz z relacją
await prisma.zamowienie.create({
  data: {
    ilosc: 2,
    produkt: {
      connect: { id: 1 }  // Połącz z istniejącym produktem
    }
  }
});`}</code>
              </pre>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold mb-3 text-yellow-400">🔄 UPDATE</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-yellow-400">{`// Zaktualizuj jeden
await prisma.produkt.update({
  where: { id: 1 },
  data: { cena: 2499.99 }
});

// Zaktualizuj wiele
await prisma.produkt.updateMany({
  where: { cena: { lt: 50 } },
  data: { cena: 49.99 }
});

// Upsert (update lub create)
await prisma.produkt.upsert({
  where: { id: 1 },
  update: { cena: 2499 },
  create: {
    nazwa: 'Laptop',
    cena: 2499
  }
});`}</code>
              </pre>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <h4 className="text-xl font-bold mb-3 text-red-400">🗑️ DELETE</h4>
              <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
                <code className="text-red-400">{`// Usuń jeden
await prisma.produkt.delete({
  where: { id: 1 }
});

// Usuń wiele
await prisma.produkt.deleteMany({
  where: { cena: { gt: 1000 } }
});

// Usuń wszystkie
await prisma.produkt.deleteMany({});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>💡 Type Safety:</strong> Wszystkie queries są type-safe! 
            TypeScript wie jakie pola możesz użyć w <code className="bg-black/30 px-2 py-1 rounded">where</code>, 
            <code className="bg-black/30 px-2 py-1 rounded">data</code>, etc.
          </div>
        </div>
      )
    },
    {
      id: 'final-implementation',
      title: 'Finalna implementacja w API Routes',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobacz jak używać <strong className="text-purple-400">Prisma w API Routes</strong> - 
            finalna implementacja!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 app/api/produkty/route.ts</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/produkty
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const minCena = searchParams.get('minCena');
    
    // Prisma query - krótkie i czytelne!
    const produkty = await prisma.produkt.findMany({
      where: minCena 
        ? { cena: { gte: parseFloat(minCena) } }
        : {},
      orderBy: { utworzono: 'desc' },
      include: {
        zamowienia: {
          _count: true  // Liczba zamówień
        }
      }
    });
    
    return NextResponse.json({
      success: true,
      data: produkty
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Błąd pobierania produktów' },
      { status: 500 }
    );
  }
}

// POST /api/produkty
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nazwa, opis, cena } = body;
    
    // Walidacja
    if (!nazwa || !cena) {
      return NextResponse.json(
        { success: false, error: 'Nazwa i cena są wymagane' },
        { status: 400 }
      );
    }
    
    // Prisma create - super proste!
    const nowy = await prisma.produkt.create({
      data: {
        nazwa,
        opis: opis || null,
        cena: parseFloat(cena)
      }
    });
    
    return NextResponse.json({
      success: true,
      data: nowy
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Błąd tworzenia produktu' },
      { status: 500 }
    );
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 app/api/produkty/[id]/route.ts</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/produkty/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const produkt = await prisma.produkt.findUnique({
      where: { id: parseInt(id) },
      include: {
        zamowienia: true  // Załaduj relację!
      }
    });
    
    if (!produkt) {
      return NextResponse.json(
        { success: false, error: 'Produkt nie znaleziony' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: produkt });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Błąd pobierania produktu' },
      { status: 500 }
    );
  }
}

// PUT /api/produkty/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const zaktualizowany = await prisma.produkt.update({
      where: { id: parseInt(id) },
      data: body
    });
    
    return NextResponse.json({ success: true, data: zaktualizowany });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Błąd aktualizacji' },
      { status: 500 }
    );
  }
}

// DELETE /api/produkty/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.produkt.delete({
      where: { id: parseInt(id) }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Błąd usuwania' },
      { status: 500 }
    );
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Co widzisz?</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Krótki kod</strong> - zamiast długich SQL queries</li>
              <li>✓ <strong>Type-safe</strong> - TypeScript sprawdza wszystko</li>
              <li>✓ <strong>Relacje</strong> - łatwo załadować powiązane dane</li>
              <li>✓ <strong>Czytelne</strong> - kod mówi co robi</li>
              <li>✓ <strong>Laravel-like</strong> - jeśli znasz Laravel, Prisma jest intuicyjna!</li>
            </ul>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 To jest finalna implementacja!</strong>
            <p className="text-sm mt-2">
              Zamiast pisać SQL ręcznie, używasz Prisma która generuje SQL za Ciebie. 
              Kod jest krótszy, bezpieczniejszy i łatwiejszy w utrzymaniu!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'migrations',
      title: 'Migracje - Zmiany w bazie',
      icon: '🔄',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Migracje</strong> w Prisma działają jak w Laravel! 
            Zmieniasz model → Prisma tworzy migrację → aplikujesz migrację!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔄 Workflow migracji</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">1️⃣</span>
                  <h4 className="text-xl font-bold text-blue-400">Zmień schema.prisma</h4>
                </div>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-blue-400">{`// Dodaj nową kolumnę
model Produkt {
  id        Int      @id @default(autoincrement())
  nazwa     String
  cena      Float
  kategoria String?  // ← NOWA KOLUMNA
}`}</code>
                </pre>
              </div>

              <div className="text-center text-3xl">⬇️</div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">2️⃣</span>
                  <h4 className="text-xl font-bold text-green-400">Utwórz migrację</h4>
                </div>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-green-400">{`npx prisma migrate dev --name add_kategoria

# Prisma:
# 1. Porównuje schema z bazą
# 2. Tworzy plik migracji SQL
# 3. Aplikuje migrację do bazy
# 4. Regeneruje Prisma Client`}</code>
                </pre>
              </div>

              <div className="text-center text-3xl">⬇️</div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">3️⃣</span>
                  <h4 className="text-xl font-bold text-purple-400">Gotowe!</h4>
                </div>
                <p className="text-sm">
                  Baza danych zaktualizowana! Możesz używać <code className="bg-black/30 px-1 rounded">kategoria</code> 
                  w queries!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">📝 Komendy migracji</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-3">
                <code className="text-green-400">npx prisma migrate dev</code> - utwórz i aplikuj migrację (development)
              </div>
              <div className="bg-white/10 rounded p-3">
                <code className="text-green-400">npx prisma migrate deploy</code> - aplikuj migracje (production)
              </div>
              <div className="bg-white/10 rounded p-3">
                <code className="text-green-400">npx prisma migrate reset</code> - usuń wszystkie dane i aplikuj migracje od nowa
              </div>
              <div className="bg-white/10 rounded p-3">
                <code className="text-green-400">npx prisma generate</code> - regeneruj Prisma Client (po zmianie schema)
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>💡 Tip:</strong> Migracje są zapisywane w <code className="bg-black/30 px-2 py-1 rounded">prisma/migrations/</code>. 
            Commituj je do Git - to historia zmian w bazie!
          </div>
        </div>
      )
    },
    {
      id: 'prisma-studio',
      title: 'Prisma Studio - GUI do bazy',
      icon: '🎨',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Prisma Studio</strong> to GUI do przeglądania i edycji 
            danych w bazie. <strong>Darmowe i wbudowane!</strong>
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-500/50">
            <h3 className="text-2xl font-bold mb-4">🎨 Uruchomienie</h3>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-purple-400">{`npx prisma studio

# Otworzy się w przeglądarce:
# http://localhost:5555`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>To jak phpMyAdmin dla SQLite!</strong> Możesz przeglądać, edytować, dodawać dane.
            </p>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Co możesz robić?</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Przeglądać tabele</strong> - wszystkie modele z schema.prisma</li>
              <li>✓ <strong>Dodawać rekordy</strong> - kliknij "Add record"</li>
              <li>✓ <strong>Edytować dane</strong> - kliknij na rekord</li>
              <li>✓ <strong>Usuwać rekordy</strong> - przycisk delete</li>
              <li>✓ <strong>Filtrować</strong> - wyszukiwanie i filtry</li>
              <li>✓ <strong>Relacje</strong> - zobacz powiązane dane</li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">💡 Kiedy używać?</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Development</strong> - szybkie sprawdzenie danych</li>
              <li>• <strong>Debugging</strong> - zobacz co jest w bazie</li>
              <li>• <strong>Testowanie</strong> - dodaj testowe dane</li>
              <li>• <strong>Nauka</strong> - zobacz jak wyglądają dane</li>
            </ul>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>⚠️ Uwaga:</strong> Prisma Studio działa tylko lokalnie (development). 
            W produkcji użyj innych narzędzi do zarządzania bazą.
          </div>
        </div>
      )
    }
  ]
};
