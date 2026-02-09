import { Lesson } from '../components/LessonSlider';

export const ormBasicsLesson: Lesson = {
  id: 'orm-basics',
  title: 'Prisma ORM - Modele i Relacje',
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
            <h3 className="text-2xl font-bold mb-4">🔍 Krok 3: Używanie właściwości w kodzie</h3>
            <p className="mb-3 text-base">
              Gdy masz obiekt, możesz <strong>używać jego właściwości</strong> w kodzie:
            </p>
            <p className="text-sm mb-2">Pobierz produkt z bazy:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-purple-400">{`const produkt = await prisma.produkt.findUnique({
  where: { id: 1 }
});`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              Prisma automatycznie mapuje wiersz z tabeli na obiekt JavaScript
            </p>

            <p className="text-sm mb-2">Użyj właściwości w widoku (komponencie):</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-purple-400">{`export default function ProduktPage() {
  const produkt = await prisma.produkt.findUnique({
    where: { id: 1 }
  });
  
  const nazwa = produkt.nazwa;
  const cena = produkt.cena;
  
  return (
    <div>
      <h1>{nazwa}</h1>
      <p>Cena: {cena} zł</p>
    </div>
  );
}`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              Przypisujesz właściwości do zmiennych i używasz w widoku - to jest życiowy przykład!
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
      id: 'why-prisma',
      title: 'Dlaczego Prisma?',
      icon: '⭐',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Prisma</strong> to najpopularniejszy ORM dla TypeScript. 
            Ma <strong>proste modele</strong> i <strong>czytelne API</strong>!
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
                <strong>Proste API</strong>
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
                <li>• Modele w plikach .prisma (czytelne definicje)</li>
                <li>• Proste API (findMany, create, update)</li>
                <li>• Type-safe (TypeScript)</li>
                <li>• Automatyczne migracje</li>
                <li>• Relacje (jeden do wielu, wiele do wielu)</li>
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
      title: 'Jak zdefiniować model? - Mapowanie kolumn na properties',
      icon: '📋',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Model</strong> to definicja tabeli. Mówisz Prisma jakie kolumny 
            ma tabela, a Prisma mapuje to na obiekt JavaScript z właściwościami.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🎯 Jak działa mapowanie?</h3>
            <p className="mb-3 text-base">
              <strong>Model ma properties</strong> (właściwości), <strong>tabela ma kolumny</strong>. 
              Prisma łączy je automatycznie:
            </p>
            <div className="bg-white/10 rounded p-4">
              <p className="text-sm mb-2"><strong>W modelu definiujesz:</strong></p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`model Produkt {
  id    Int
  nazwa String
  cena  Float
}`}</code>
              </pre>
              <p className="text-xs mt-2 mb-3 opacity-70">
                To mówi Prisma: "Tabela produkty ma kolumny: id, nazwa, cena"
              </p>

              <p className="text-sm mb-2"><strong>W kodzie używasz properties:</strong></p>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`const produkt = await prisma.produkt.findUnique({
  where: { id: 1 }
});

const nazwa = produkt.nazwa;  // Właściwość "nazwa"
const cena = produkt.cena;    // Właściwość "cena"`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">
                Prisma automatycznie mapuje kolumnę "nazwa" z tabeli na właściwość produkt.nazwa w obiekcie!
              </p>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">📄 Wszystkie modele w jednym pliku</h3>
            <p className="mb-3 text-base">
              W Prisma <strong>wszystkie modele są w jednym pliku</strong>: 
              <code className="bg-black/30 px-2 py-1 rounded">prisma/schema.prisma</code>
            </p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`model Produkt {
  id    Int    @id
  nazwa String
  cena  Float
}

model Uzytkownik {
  id   Int    @id
  imie String
}

model Zamowienie {
  id         Int    @id
  produktId Int
}`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>Zalety:</strong> Wszystko w jednym miejscu, łatwo znaleźć, łatwo zmienić config (o tym później)
            </p>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📋 Przykład: prisma/schema.prisma</h3>
            <p className="text-sm mb-2">Model Produkt:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`model Produkt {
  id        Int      @id @default(autoincrement())
  nazwa     String
  opis      String?
  cena      Float
  utworzono DateTime @default(now())
}`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              To definicja tabeli "produkty" z kolumnami: id, nazwa, opis, cena, utworzono
            </p>
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
      title: 'Relacje - Po co i jak działają?',
      icon: '🔗',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Relacje</strong> pozwalają łączyć dane z różnych tabel. 
            W prawdziwym życiu często tego potrzebujesz!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🌍 Przykłady z życia</h3>
            <div className="space-y-3 text-base">
              <div className="bg-white/10 rounded p-4">
                <strong className="text-2xl">👤 Użytkownik → Posty</strong>
                <p className="text-sm mt-2">
                  Jeden użytkownik napisał wiele postów na blogu. 
                  Chcesz wyświetlić użytkownika i wszystkie jego posty.
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong className="text-2xl">👔 Kierownik → Pracownicy</strong>
                <p className="text-sm mt-2">
                  Kierownik ma wiele pracowników pod sobą. 
                  Chcesz wyświetlić kierownika i listę jego pracowników.
                </p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <strong className="text-2xl">📦 Zamówienie → Produkty</strong>
                <p className="text-sm mt-2">
                  Zamówienie zawiera wiele produktów. 
                  Chcesz wyświetlić zamówienie i wszystkie produkty w nim.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
            <h3 className="text-2xl font-bold mb-4">❌ Bez relacji - skomplikowane SQL</h3>
            <p className="mb-3 text-sm">Bez ORM musiałbyś pisać skomplikowane SQL queries:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-red-300">{`SELECT * FROM uzytkownicy WHERE id = 1;`}</code>
            </pre>
            <p className="text-xs mt-2 mb-2">Potem osobne query dla postów:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-red-300">{`SELECT * FROM posty WHERE uzytkownik_id = 1;`}</code>
            </pre>
            <p className="text-sm mt-3">Musisz:</p>
            <ul className="text-xs mt-2 space-y-1 ml-4">
              <li>• Wykonać 2 osobne queries</li>
              <li>• Pamiętać nazwy kolumn (uzytkownik_id)</li>
              <li>• Ręcznie połączyć dane w kodzie</li>
              <li>• Napisać dużo kodu!</li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">✅ Z relacjami - proste!</h3>
            <p className="mb-3 text-sm">Z Prisma wystarczy jedna linijka:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`const uzytkownik = await prisma.uzytkownik.findUnique({
  where: { id: 1 },
  include: { posty: true }
});`}</code>
            </pre>
            <p className="text-sm mt-3 mb-2">Teraz masz:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`uzytkownik.imie      // "Jan"
uzytkownik.posty    // Tablica postów!
uzytkownik.posty[0].tytul  // Tytuł pierwszego posta`}</code>
            </pre>
            <p className="text-sm mt-3">Zalety:</p>
            <ul className="text-xs mt-2 space-y-1 ml-4">
              <li>• Jedno query zamiast dwóch</li>
              <li>• Proste API (include)</li>
              <li>• Automatyczne łączenie danych</li>
              <li>• Mało kodu!</li>
            </ul>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pamiętaj:</strong> Relacje = łączenie danych z różnych tabel. 
            Zamiast skomplikowanych SQL queries, masz obiekt z relacją!
          </div>
        </div>
      )
    },
    {
      id: 'relations-how',
      title: 'Jak definiować relacje?',
      icon: '🔗',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Relacje definiujesz w <code className="bg-black/30 px-2 py-1 rounded">schema.prisma</code>. 
            Zobaczmy przykład krok po kroku.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">👤 Przykład: Użytkownik i Posty</h3>
            <p className="text-sm mb-3">Model Uzytkownik:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`model Uzytkownik {
  id    Int    @id @default(autoincrement())
  imie  String
  
  posty Post[]
}`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              <strong>posty Post[]</strong> = tablica postów. Oznacza: jeden użytkownik ma wiele postów
            </p>

            <p className="text-sm mb-3">Model Post:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`model Post {
  id            Int        @id @default(autoincrement())
  tytul         String
  uzytkownikId  Int
  
  uzytkownik    Uzytkownik @relation(fields: [uzytkownikId], references: [id])
}`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              <strong>uzytkownik Uzytkownik</strong> = post należy do użytkownika<br/>
              <strong>@relation</strong> = połączenie przez uzytkownikId
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">💡 Jak to użyć?</h3>
            <p className="text-sm mb-3">Pobierz użytkownika z postami:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`const uzytkownik = await prisma.uzytkownik.findUnique({
  where: { id: 1 },
  include: { posty: true }
});`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              <strong>include: {`{ posty: true }`}</strong> = załaduj posty tego użytkownika
            </p>

            <p className="text-sm mb-3">Użyj danych w widoku:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`export default function UzytkownikPage() {
  const uzytkownik = await prisma.uzytkownik.findUnique({
    where: { id: 1 },
    include: { posty: true }
  });
  
  const imie = uzytkownik.imie;
  const liczbaPostow = uzytkownik.posty.length;
  const pierwszyPost = uzytkownik.posty[0];
  
  return (
    <div>
      <h1>{imie}</h1>
      <p>Liczba postów: {liczbaPostow}</p>
      <p>Ostatni post: {pierwszyPost.tytul}</p>
    </div>
  );
}`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              Przypisujesz właściwości do zmiennych i używasz w widoku - to jest życiowy przykład!
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Typy relacji:</strong>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Jeden do wielu</strong> - Użytkownik → Posty (tablica [])</li>
              <li>• <strong>Wiele do jednego</strong> - Post → Użytkownik (pojedynczy)</li>
              <li>• <strong>Wiele do wielu</strong> - Studenci ↔ Kursy (obie tablice)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'database-connection',
      title: 'lib/prisma.ts - Połączenie z bazą',
      icon: '🔌',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Żeby używać Prisma, musisz stworzyć <strong className="text-blue-400">połączenie z bazą</strong>. 
            Tworzymy plik <code>lib/prisma.ts</code> który zrobi to za Ciebie.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🤔 Po co ten plik?</h3>
            <p className="text-base mb-3">
              <strong>Problem:</strong> Gdybyś tworzył nowe połączenie w każdym pliku, 
              miałbyś dziesiątki połączeń do bazy. To jest wolne i zużywa pamięć!
            </p>
            <p className="text-base">
              <strong>Rozwiązanie:</strong> Stwórz <strong>jedno połączenie</strong> w pliku 
              <code className="bg-black/30 px-2 py-1 rounded">lib/prisma.ts</code> 
              i używaj go wszędzie. To się nazywa <strong>"Singleton Pattern"</strong>.
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">📄 Plik: lib/prisma.ts</h3>
            <p className="text-sm mb-3">Krok 1: Import</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`import { PrismaClient } from '@prisma/client';`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              Import głównej klasy Prisma
            </p>

            <p className="text-sm mb-3">Krok 2: Stwórz połączenie</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`export const prisma = new PrismaClient();`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              Tworzy nowe połączenie z bazą i eksportuje jako "prisma"
            </p>

            <p className="text-sm mb-3">Krok 3: Opcjonalne logowanie (w development)</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' 
    ? ['query'] 
    : []
});`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              W development pokazuje SQL queries w konsoli (przydatne do debugowania!)
            </p>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📍 Jak używać w innych plikach?</h3>
            <p className="text-sm mb-3"><strong>Use case:</strong> Chcesz pobierać produkty w API Route</p>
            <p className="text-xs mb-2 opacity-70">Plik: app/api/produkty/route.ts</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm mb-2">1. Import prisma:</p>
                <pre className="bg-black/50 rounded p-2 text-xs">
                  <code className="text-purple-400">{`import { prisma } from '@/lib/prisma';`}</code>
                </pre>
                <p className="text-xs mt-1 opacity-70">
                  Importujesz połączenie z lib/prisma.ts
                </p>
              </div>

              <div>
                <p className="text-sm mb-2">2. Użyj do queries:</p>
                <pre className="bg-black/50 rounded p-2 text-xs">
                  <code className="text-purple-400">{`export async function GET() {
  const produkty = await prisma.produkt.findMany();
  return Response.json(produkty);
}`}</code>
                </pre>
                <p className="text-xs mt-1 opacity-70">
                  Używasz prisma.produkt.findMany() żeby pobrać wszystkie produkty
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-500/50">
            <h4 className="text-xl font-bold mb-3">💡 Singleton Pattern - Co to znaczy?</h4>
            <p className="text-sm mb-2">
              <strong>Singleton</strong> = tylko jedna instancja (jedno połączenie) dla całej aplikacji
            </p>
            <ul className="text-xs space-y-1 mt-2 ml-4">
              <li>• Tworzysz połączenie raz w lib/prisma.ts</li>
              <li>• Importujesz je wszędzie gdzie potrzebujesz</li>
              <li>• Używasz tego samego połączenia (szybkie, oszczędne)</li>
              <li>• Next.js cache'uje moduły - nie tworzy nowych połączeń!</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'prisma-api',
      title: 'Prisma API - Podstawowe metody',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Prisma ma <strong className="text-purple-400">proste i czytelne API</strong>! 
            Zamiast pisać SQL, używasz prostych metod.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📋 Podstawowe metody</h3>
            <p className="text-sm mb-2">Pobierz wszystkie produkty:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-blue-400">{`const produkty = await prisma.produkt.findMany();`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              Zwraca tablicę wszystkich produktów
            </p>

            <p className="text-sm mb-2">Znajdź produkt po ID:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-blue-400">{`const produkt = await prisma.produkt.findUnique({
  where: { id: 1 }
});`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              Zwraca jeden produkt lub null jeśli nie istnieje
            </p>

            <p className="text-sm mb-2">Znajdź produkty z warunkiem:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-blue-400">{`const drogie = await prisma.produkt.findMany({
  where: { cena: { gt: 100 } }
});`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              Znajduje produkty droższe niż 100
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">✏️ Tworzenie, aktualizacja, usuwanie</h3>
            <p className="text-sm mb-2">Dodaj nowy produkt:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`const nowy = await prisma.produkt.create({
  data: {
    nazwa: 'Laptop',
    cena: 2999
  }
});`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              Tworzy nowy produkt w bazie
            </p>

            <p className="text-sm mb-2">Zaktualizuj produkt:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`await prisma.produkt.update({
  where: { id: 1 },
  data: { cena: 2499 }
});`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              Zmienia cenę produktu o ID 1
            </p>

            <p className="text-sm mb-2">Usuń produkt:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`await prisma.produkt.delete({
  where: { id: 1 }
});`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              Usuwa produkt o ID 1 z bazy
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pamiętaj:</strong> Wszystkie metody zwracają obiekty JavaScript z właściwościami. 
            Zamiast SQL, działasz na obiektach!
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
      id: 'final-implementation-get',
      title: 'API Route - GET (Pobierz wszystkie)',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Zobacz jak używać <strong className="text-purple-400">Prisma w API Routes</strong>! 
            Zacznijmy od pobierania wszystkich produktów.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📍 Plik: app/api/produkty/route.ts</h3>
            <p className="text-sm mb-2"><strong>Use case:</strong> Chcesz pobrać wszystkie produkty z bazy</p>
            
            <p className="text-sm mb-2">Krok 1: Import</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';`}</code>
            </pre>
            <p className="text-xs mt-1 mb-3 opacity-70">
              Importujesz Next.js API Route i prisma z lib/prisma.ts
            </p>

            <p className="text-sm mb-2">Krok 2: Funkcja GET</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`export async function GET(request: NextRequest) {
  const produkty = await prisma.produkt.findMany();
  
  return NextResponse.json({
    success: true,
    data: produkty
  });
}`}</code>
            </pre>
            <p className="text-xs mt-1 mb-3 opacity-70">
              findMany() pobiera wszystkie produkty. Zwracasz je jako JSON.
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">💡 Z filtrowaniem</h3>
            <p className="text-sm mb-2">Jeśli chcesz filtrować (np. tylko drogie produkty):</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-green-400">{`const produkty = await prisma.produkt.findMany({
  where: { cena: { gt: 100 } },
  orderBy: { utworzono: 'desc' }
});`}</code>
            </pre>
            <p className="text-xs mt-1 opacity-70">
              where = warunki filtrowania, orderBy = sortowanie
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'final-implementation-post',
      title: 'API Route - POST (Dodaj nowy)',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Teraz <strong className="text-purple-400">dodawanie nowego produktu</strong> do bazy.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📍 Plik: app/api/produkty/route.ts</h3>
            <p className="text-sm mb-2"><strong>Use case:</strong> Chcesz dodać nowy produkt do bazy</p>
            
            <p className="text-sm mb-2">Krok 1: Pobierz dane z requestu</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`export async function POST(request: NextRequest) {
  const body = await request.json();
  const { nazwa, opis, cena } = body;`}</code>
            </pre>
            <p className="text-xs mt-1 mb-3 opacity-70">
              Pobierasz dane z body requestu (JSON)
            </p>

            <p className="text-sm mb-2">Krok 2: Walidacja</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`if (!nazwa || !cena) {
  return NextResponse.json(
    { success: false, error: 'Nazwa i cena są wymagane' },
    { status: 400 }
  );
}`}</code>
            </pre>
            <p className="text-xs mt-1 mb-3 opacity-70">
              Sprawdzasz czy wymagane pola są wypełnione
            </p>

            <p className="text-sm mb-2">Krok 3: Dodaj do bazy</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`const nowy = await prisma.produkt.create({
  data: {
    nazwa,
    opis: opis || null,
    cena: parseFloat(cena)
  }
});

return NextResponse.json({
  success: true,
  data: nowy
}, { status: 201 });`}</code>
            </pre>
            <p className="text-xs mt-1 opacity-70">
              create() dodaje nowy produkt. Zwracasz go jako JSON z statusem 201 (Created)
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'final-implementation-get-id',
      title: 'API Route - GET [id] (Pobierz jeden)',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Pobieranie <strong className="text-purple-400">jednego produktu po ID</strong>.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📍 Plik: app/api/produkty/[id]/route.ts</h3>
            <p className="text-sm mb-2"><strong>Use case:</strong> Chcesz pobrać produkt o konkretnym ID</p>
            
            <p className="text-sm mb-2">Krok 1: Pobierz ID z URL</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;`}</code>
            </pre>
            <p className="text-xs mt-1 mb-3 opacity-70">
              params zawiera ID z URL (np. /api/produkty/1 → id = "1")
            </p>

            <p className="text-sm mb-2">Krok 2: Pobierz produkt z bazy</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`const produkt = await prisma.produkt.findUnique({
  where: { id: parseInt(id) },
  include: { zamowienia: true }
});`}</code>
            </pre>
            <p className="text-xs mt-1 mb-3 opacity-70">
              findUnique() znajduje produkt po ID. include załaduje relację zamowienia.
            </p>

            <p className="text-sm mb-2">Krok 3: Sprawdź czy istnieje</p>
            <pre className="bg-black/50 rounded p-2 text-xs">
              <code className="text-blue-400">{`if (!produkt) {
  return NextResponse.json(
    { success: false, error: 'Produkt nie znaleziony' },
    { status: 404 }
  );
}

return NextResponse.json({ success: true, data: produkt });`}</code>
            </pre>
            <p className="text-xs mt-1 opacity-70">
              Jeśli produkt nie istnieje, zwróć 404. W przeciwnym razie zwróć produkt.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'final-implementation-put-delete',
      title: 'API Route - PUT i DELETE',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Aktualizacja i usuwanie</strong> produktów.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">✏️ PUT - Zaktualizuj produkt</h3>
            <p className="text-sm mb-2"><strong>Use case:</strong> Chcesz zmienić dane produktu</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-blue-400">{`export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  
  const zaktualizowany = await prisma.produkt.update({
    where: { id: parseInt(id) },
    data: body
  });
  
  return NextResponse.json({ success: true, data: zaktualizowany });
}`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              update() zmienia dane produktu. where = który produkt, data = nowe dane.
            </p>
          </div>

          <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
            <h3 className="text-2xl font-bold mb-4">🗑️ DELETE - Usuń produkt</h3>
            <p className="text-sm mb-2"><strong>Use case:</strong> Chcesz usunąć produkt z bazy</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-red-400">{`export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  await prisma.produkt.delete({
    where: { id: parseInt(id) }
  });
  
  return NextResponse.json({ success: true });
}`}</code>
            </pre>
            <p className="text-xs mt-2 opacity-70">
              delete() usuwa produkt z bazy. where = który produkt usunąć.
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 To jest finalna implementacja!</strong>
            <p className="text-sm mt-2">
              Zamiast pisać SQL ręcznie, używasz Prisma która generuje SQL za Ciebie. 
              Kod jest krótszy i łatwiejszy w utrzymaniu!
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
            <strong className="text-blue-400">Migracje</strong> to sposób na zmiany w bazie danych. 
            Zmieniasz model → Prisma tworzy migrację → aplikujesz migrację!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🤔 Co to jest migracja i po co istnieje?</h3>
            <p className="mb-3 text-base">
              <strong>Problem:</strong> Gdy zmieniasz model (np. dodajesz kolumnę), musisz też zmienić tabelę w bazie. 
              Ale jak to zrobić bezpiecznie?
            </p>
            <p className="mb-3 text-base">
              <strong>Rozwiązanie:</strong> <strong>Migracja</strong> to plik SQL który mówi bazie "dodaj kolumnę kategoria". 
              Prisma tworzy ten plik automatycznie!
            </p>
            <div className="bg-white/10 rounded p-4 text-sm">
              <p className="mb-2"><strong>Zalety migracji:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Historia zmian - widzisz co się zmieniło w bazie</li>
                <li>• Bezpieczeństwo - możesz cofnąć zmiany</li>
                <li>• Automatyzacja - Prisma tworzy SQL za Ciebie</li>
                <li>• Współpraca - zespół ma te same zmiany</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">🔄 Jak to działa krok po kroku?</h3>
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
      id: 'config-files',
      title: 'Config Files - Jak skonfigurować bazę?',
      icon: '⚙️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Dzięki <strong className="text-blue-400">config files</strong> możesz <strong>zmienić bazę danych 
            bez zmiany kodu</strong>! To bardzo przydatne.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📄 Wszystkie modele w jednym pliku</h3>
            <p className="mb-3 text-base">
              W Prisma <strong>wszystkie modele są w jednym pliku</strong>: 
              <code className="bg-black/30 px-2 py-1 rounded">prisma/schema.prisma</code>
            </p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`model Produkt {
  id    Int    @id
  nazwa String
}

model Uzytkownik {
  id   Int    @id
  imie String
}

// ... i tak dalej, nawet 300 modeli!`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>Zalety:</strong> Wszystko w jednym miejscu, łatwo znaleźć, łatwo zmienić config
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">⚙️ Config na górze pliku (tylko raz!)</h3>
            <p className="mb-3 text-base">
              W pliku <code className="bg-black/30 px-2 py-1 rounded">schema.prisma</code> config jest 
              <strong> tylko raz na górze</strong>, a wszystkie modele poniżej:
            </p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-green-400">{`datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Produkt {
  id    Int    @id
  nazwa String
}

model Uzytkownik {
  id   Int    @id
  imie String
}`}</code>
            </pre>
            <p className="text-sm mt-3">
              <strong>Config jest tylko raz!</strong> Nie musisz pisać go przy każdym modelu. 
              Jeśli masz 300 modeli i chcesz zmienić bazę, zmieniasz tylko config (jedna linijka)!
            </p>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🔑 Config File 1: schema.prisma (datasource)</h3>
            <p className="text-sm mb-2">Na górze pliku schema.prisma:</p>
            <pre className="bg-black/50 rounded p-3 text-xs">
              <code className="text-purple-400">{`datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}`}</code>
            </pre>
            <p className="text-xs mt-2 mb-3 opacity-70">
              <strong>provider</strong> = typ bazy (sqlite, postgresql, mysql)<br/>
              <strong>url</strong> = adres bazy (z pliku .env)
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-500/50">
            <h3 className="text-2xl font-bold mb-4">🔑 Config File 2: .env (DATABASE_URL)</h3>
            <p className="text-sm mb-2">Plik .env zawiera URL do bazy:</p>
            <div className="space-y-2">
              <div className="bg-white/10 rounded p-3">
                <p className="text-xs mb-1"><strong>SQLite:</strong></p>
                <pre className="bg-black/50 rounded p-2 text-xs">
                  <code className="text-yellow-400">DATABASE_URL="file:./database.db"</code>
                </pre>
              </div>
              <div className="bg-white/10 rounded p-3">
                <p className="text-xs mb-1"><strong>PostgreSQL:</strong></p>
                <pre className="bg-black/50 rounded p-2 text-xs">
                  <code className="text-yellow-400">DATABASE_URL="postgresql://user:pass@host/db"</code>
                </pre>
              </div>
            </div>
            <p className="text-sm mt-3">
              Zmieniasz tylko URL - kod zostaje taki sam!
            </p>
          </div>

          <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-500/50">
            <h3 className="text-2xl font-bold mb-4">🔄 Jak zmienić bazę danych?</h3>
            <p className="text-sm mb-3">Masz 300 modeli i chcesz zmienić z SQLite na PostgreSQL:</p>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <strong>Krok 1:</strong> Zmień provider w schema.prisma (jedna linijka!)
                <pre className="bg-black/50 rounded p-2 text-xs mt-1">
                  <code className="text-red-300">{`provider = "postgresql"  // było: "sqlite"`}</code>
                </pre>
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>Krok 2:</strong> Zmień DATABASE_URL w .env
                <pre className="bg-black/50 rounded p-2 text-xs mt-1">
                  <code className="text-red-300">DATABASE_URL="postgresql://..."</code>
                </pre>
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>Gotowe!</strong> Wszystkie 300 modeli działają z nową bazą - zmieniłeś tylko config!
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 To jest siła Repository Pattern!</strong> Kod nie wie jaka to baza - tylko używa metod. 
            Zmieniasz bazę przez config (jedna linijka), a kod zostaje taki sam!
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
