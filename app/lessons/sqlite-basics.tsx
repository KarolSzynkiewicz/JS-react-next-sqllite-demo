import { Lesson } from '../components/LessonSlider';

export const sqliteBasicsLesson: Lesson = {
  id: 'sqlite-basics',
  title: 'SQLite - Relacyjna Baza Danych',
  description: 'Poznaj podstawy SQL i baz danych',
  icon: '💾',
  slides: [
    {
      id: 'what-is-database',
      title: 'Co to jest Baza Danych?',
      icon: '💾',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            <strong className="text-blue-400">Baza danych</strong> to <strong>uporządkowany zbiór danych</strong>, 
            który przechowuje informacje w sposób łatwy do odnalezienia i zarządzania.
          </p>

          <div className="bg-orange-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📚 Analogia: Biblioteka</h3>
            <div className="space-y-3">
              <p>
                Wyobraź sobie ogromną bibliotekę z milionami książek. Jak je zorganizować?
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/20 rounded p-3">
                  <strong className="text-red-400">❌ Bez systemu:</strong>
                  <p className="text-sm mt-2">Książki walają się po podłodze. Szukanie zajmuje godziny!</p>
                </div>
                <div className="bg-green-500/20 rounded p-3">
                  <strong className="text-green-400">✅ Z bazą danych:</strong>
                  <p className="text-sm mt-2">Książki na półkach, posortowane, zkatalogowane. Znajdziesz w sekundy!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🎯 Po co baza danych?</h4>
            <ul className="space-y-2">
              <li>✓ <strong>Przechowywanie</strong> - dane są bezpieczne nawet po wyłączeniu</li>
              <li>✓ <strong>Organizacja</strong> - strukturyzowane tabele (jak Excel!)</li>
              <li>✓ <strong>Szybkie wyszukiwanie</strong> - znajdź 1 rekord wśród milionów</li>
              <li>✓ <strong>Relacje</strong> - połącz użytkownika z jego zamówieniami</li>
              <li>✓ <strong>Współdzielenie</strong> - wiele osób korzysta jednocześnie</li>
            </ul>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <p className="text-lg">
              <strong>💡 Wszystko używa baz danych:</strong> Facebook (profil), Gmail (maile), 
              Netflix (filmy), Spotify (piosenki)
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'relational-databases',
      title: 'Bazy Relacyjne - Tabele i Relacje',
      icon: '🔗',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">Relacyjna baza danych</strong> przechowuje dane w 
            <strong> tabelach</strong> (jak arkusze Excel) połączonych <strong>relacjami</strong>.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">📊 Tabela = Arkusz Excel</h3>
            <p className="mb-3">Przykład tabeli <strong>użytkownicy</strong>:</p>
            <div className="bg-black/50 rounded overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-purple-500/30">
                  <tr>
                    <th className="p-2 border border-white/20">id</th>
                    <th className="p-2 border border-white/20">imię</th>
                    <th className="p-2 border border-white/20">email</th>
                    <th className="p-2 border border-white/20">wiek</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-white/20">1</td>
                    <td className="p-2 border border-white/20">Anna</td>
                    <td className="p-2 border border-white/20">anna@mail.pl</td>
                    <td className="p-2 border border-white/20">25</td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="p-2 border border-white/20">2</td>
                    <td className="p-2 border border-white/20">Jan</td>
                    <td className="p-2 border border-white/20">jan@mail.pl</td>
                    <td className="p-2 border border-white/20">30</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2 opacity-70">
              Każdy wiersz = 1 użytkownik. Każda kolumna = właściwość (imię, email...)
            </p>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-3">🔗 Relacje między tabelami</h4>
            <p className="mb-3">Tabele można połączyć!</p>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-3">
                <strong>Tabela "użytkownicy"</strong> (id, imię, email)
              </div>
              <div className="text-center text-2xl">↕️</div>
              <div className="bg-white/10 rounded p-3">
                <strong>Tabela "zamówienia"</strong> (id, user_id, produkt, cena)
              </div>
            </div>
            <p className="text-sm mt-3">
              <code className="bg-black/30 px-2 py-1 rounded">user_id</code> w "zamówienia" 
              odnosi się do <code className="bg-black/30 px-2 py-1 rounded">id</code> w "użytkownicy". 
              Dzięki temu wiesz kto złożył zamówienie!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'what-is-sqlite',
      title: 'Co to jest SQLite?',
      icon: '💎',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">SQLite</strong> to <strong>najprostsza</strong> i 
            <strong> najlżejsza</strong> relacyjna baza danych. Idealna do nauki!
          </p>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border-2 border-blue-500/50">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">💎</span>
              <div>
                <h3 className="text-3xl font-bold">SQLite</h3>
                <p className="opacity-80">Self-contained, Serverless, Zero-configuration</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">📁</div>
                <strong>Jeden plik</strong>
                <p className="text-xs opacity-70 mt-1">database.db</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">⚡</div>
                <strong>Szybka</strong>
                <p className="text-xs opacity-70 mt-1">Napisana w C</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <div className="text-2xl mb-1">🪶</div>
                <strong>Lekka</strong>
                <p className="text-xs opacity-70 mt-1">~600KB</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-lg font-bold mb-2 text-green-400">✅ Zalety SQLite</h4>
              <ul className="text-sm space-y-1">
                <li>• Nie wymaga serwera</li>
                <li>• Zero konfiguracji</li>
                <li>• Cała baza w 1 pliku</li>
                <li>• Idealna do małych/średnich projektów</li>
                <li>• Wbudowana w miliony urządzeń</li>
              </ul>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">⚠️ Kiedy NIE używać</h4>
              <ul className="text-sm space-y-1">
                <li>• Bardzo duży ruch (1000+ użytkowników online)</li>
                <li>• Duże dane (100GB+)</li>
                <li>• Potrzebujesz user permissions</li>
                <li>• W takich przypadkach: PostgreSQL, MySQL</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4">
            <strong>🌟 Gdzie używają SQLite?</strong>
            <p className="mt-2">Android, iOS, Chrome, Firefox, Skype, Dropbox, WhatsApp...</p>
            <p className="text-sm mt-2 opacity-80">To najbardziej używana baza danych na świecie! (miliard+ instalacji)</p>
          </div>
        </div>
      )
    },
    {
      id: 'sql-basics',
      title: 'SQL - Język Baz Danych',
      icon: '📝',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-green-400">SQL</strong> (Structured Query Language) to język, 
            którym "rozmawiasz" z bazą danych.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">💬 SQL = Polecenia dla bazy</h3>
            <p className="mb-4">To jakby rozmawiać z bazą po angielsku:</p>
            <div className="space-y-3">
              <div className="bg-green-500/20 rounded p-3">
                <strong>SELECT</strong> - "Pokaż mi..."
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  SELECT * FROM użytkownicy;
                </code>
                <p className="text-xs mt-1 opacity-70">"Pokaż mi wszystkich użytkowników"</p>
              </div>

              <div className="bg-purple-500/20 rounded p-3">
                <strong>INSERT</strong> - "Dodaj..."
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  INSERT INTO użytkownicy (imię, email) VALUES ('Anna', 'anna@mail.pl');
                </code>
                <p className="text-xs mt-1 opacity-70">"Dodaj nowego użytkownika"</p>
              </div>

              <div className="bg-yellow-500/20 rounded p-3">
                <strong>UPDATE</strong> - "Zmień..."
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  UPDATE użytkownicy SET email = 'nowy@mail.pl' WHERE id = 1;
                </code>
                <p className="text-xs mt-1 opacity-70">"Zmień email użytkownika nr 1"</p>
              </div>

              <div className="bg-red-500/20 rounded p-3">
                <strong>DELETE</strong> - "Usuń..."
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  DELETE FROM użytkownicy WHERE id = 1;
                </code>
                <p className="text-xs mt-1 opacity-70">"Usuń użytkownika nr 1"</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💡 Ważne:</strong> SQL jest podobny we wszystkich bazach (SQLite, PostgreSQL, MySQL). 
            Naucz się raz, używaj wszędzie!
          </div>
        </div>
      )
    },
    {
      id: 'create-table',
      title: 'Tworzenie Tabeli',
      icon: '🏗️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Żeby przechowywać dane, najpierw musisz <strong className="text-blue-400">stworzyć tabelę</strong>. 
            To jak zaprojektowanie formularza.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🏗️ CREATE TABLE</h4>
            <p className="mb-3">Przykład: tabela produktów</p>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`CREATE TABLE produkty (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nazwa TEXT NOT NULL,
  opis TEXT,
  cena REAL NOT NULL,
  utworzono DATETIME DEFAULT CURRENT_TIMESTAMP
);`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">📋 Wyjaśnienie po kolei:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <strong>CREATE TABLE produkty</strong> - Stwórz tabelę o nazwie "produkty"
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>id INTEGER PRIMARY KEY</strong> - Unikalny numer (1, 2, 3...)
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>AUTOINCREMENT</strong> - Automatycznie zwiększaj (1→2→3...)
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>TEXT / REAL</strong> - Typy danych (tekst / liczba dziesiętna)
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>NOT NULL</strong> - To pole MUSI być wypełnione
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>DEFAULT</strong> - Domyślna wartość (tutaj: aktualna data/czas)
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-4">
            <h4 className="text-lg font-bold mb-2">🎯 Typy danych w SQLite</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <strong>INTEGER</strong> - liczby całkowite (1, 42, -5)
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>REAL</strong> - liczby dziesiętne (3.14, 99.99)
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>TEXT</strong> - tekst ("Anna", "Opis...")
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>BLOB</strong> - binarne (obrazki, pliki)
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'crud-sql',
      title: 'CRUD w SQL',
      icon: '✏️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            Cztery podstawowe operacje (<strong className="text-purple-400">CRUD</strong>) w SQL:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="text-3xl mb-2">✏️</div>
              <h4 className="text-xl font-bold mb-2 text-green-400">CREATE (INSERT)</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-green-400">{`INSERT INTO produkty 
  (nazwa, cena) 
VALUES 
  ('Laptop', 2999.99);`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-80">Dodaje nowy rekord</p>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="text-3xl mb-2">👁️</div>
              <h4 className="text-xl font-bold mb-2 text-blue-400">READ (SELECT)</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-blue-400">{`SELECT * FROM produkty
WHERE cena < 1000;`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-80">Pobiera rekordy (produkty tańsze niż 1000)</p>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="text-xl font-bold mb-2 text-yellow-400">UPDATE</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-yellow-400">{`UPDATE produkty 
SET cena = 2499.99 
WHERE id = 1;`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-80">Aktualizuje istniejący rekord</p>
            </div>

            <div className="bg-red-500/20 rounded-xl p-5 border-l-4 border-red-500">
              <div className="text-3xl mb-2">🗑️</div>
              <h4 className="text-xl font-bold mb-2 text-red-400">DELETE</h4>
              <pre className="bg-black/50 rounded p-3 text-xs">
                <code className="text-red-400">{`DELETE FROM produkty 
WHERE id = 1;`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-80">Usuwa rekord</p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">⚠️ Ważne: WHERE clause</h4>
            <p className="mb-2">Zawsze używaj <code className="bg-black/30 px-2 py-1 rounded">WHERE</code> przy UPDATE i DELETE!</p>
            <div className="bg-red-500/20 rounded p-3 text-sm">
              <strong className="text-red-400">❌ Bez WHERE:</strong>
              <code className="block mt-1 text-xs bg-black/30 p-2 rounded">DELETE FROM produkty;</code>
              <p className="mt-1 text-xs">Usuwa WSZYSTKIE produkty! 😱</p>
            </div>
            <div className="bg-green-500/20 rounded p-3 text-sm mt-2">
              <strong className="text-green-400">✅ Z WHERE:</strong>
              <code className="block mt-1 text-xs bg-black/30 p-2 rounded">DELETE FROM produkty WHERE id = 1;</code>
              <p className="mt-1 text-xs">Usuwa tylko produkt nr 1 ✓</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'joins',
      title: 'Łączenie Tabel (JOIN)',
      icon: '🔗',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">JOIN</strong> łączy dane z różnych tabel. 
            To magia relacyjnych baz danych!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🔗 Przykład: Użytkownicy i Zamówienia</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <strong className="block mb-2">Tabela: użytkownicy</strong>
                <div className="bg-black/50 rounded p-2 text-xs">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="font-bold">id</div><div className="font-bold">imię</div>
                    <div>1</div><div>Anna</div>
                    <div>2</div><div>Jan</div>
                  </div>
                </div>
              </div>
              <div>
                <strong className="block mb-2">Tabela: zamówienia</strong>
                <div className="bg-black/50 rounded p-2 text-xs">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="font-bold">id</div><div className="font-bold">user_id</div><div className="font-bold">produkt</div>
                    <div>1</div><div>1</div><div>Laptop</div>
                    <div>2</div><div>1</div><div>Mysz</div>
                    <div>3</div><div>2</div><div>Klawiatura</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded p-4">
              <strong>Pytanie:</strong> Kto zamówił laptop?
              <pre className="bg-black/50 rounded p-3 text-xs mt-2">
                <code className="text-green-400">{`SELECT użytkownicy.imię, zamówienia.produkt
FROM użytkownicy
JOIN zamówienia ON użytkownicy.id = zamówienia.user_id
WHERE zamówienia.produkt = 'Laptop';`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-80">Odpowiedź: Anna</p>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Typy JOIN</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 rounded p-2">
                <strong>INNER JOIN</strong> - tylko rekordy które są w OBIE tabelach
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>LEFT JOIN</strong> - wszystkie z lewej + pasujące z prawej
              </div>
              <div className="bg-white/10 rounded p-2">
                <strong>RIGHT JOIN</strong> - wszystkie z prawej + pasujące z lewej
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pro Tip:</strong> JOINy są potężne ale mogą być wolne na dużych tabelach. 
            Używaj indeksów!
          </div>
        </div>
      )
    },
    {
      id: 'sqlite-in-nodejs',
      title: 'SQLite w Node.js (better-sqlite3)',
      icon: '🟢',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            W naszym projekcie używamy <strong className="text-green-400">better-sqlite3</strong> - 
            najszybszej biblioteki SQLite dla Node.js!
          </p>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">📦 Instalacja</h4>
            <pre className="bg-black/50 rounded p-3 text-sm">
              <code className="text-blue-400">npm install better-sqlite3</code>
            </pre>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Przykład użycia</h4>
            <pre className="bg-black/50 rounded p-4 text-xs overflow-x-auto">
              <code className="text-green-400">{`const Database = require('better-sqlite3');
const db = new Database('database.db');

// CREATE
const insert = db.prepare('INSERT INTO produkty (nazwa, cena) VALUES (?, ?)');
insert.run('Laptop', 2999.99);

// READ
const select = db.prepare('SELECT * FROM produkty');
const produkty = select.all();
console.log(produkty);

// UPDATE
const update = db.prepare('UPDATE produkty SET cena = ? WHERE id = ?');
update.run(2499.99, 1);

// DELETE
const del = db.prepare('DELETE FROM produkty WHERE id = ?');
del.run(1);`}</code>
            </pre>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-5">
            <h4 className="text-lg font-bold mb-3">🎯 Dlaczego better-sqlite3?</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Synchroniczny</strong> - prostszy kod (bez async/await)</li>
              <li>✓ <strong>Szybki</strong> - najszybsza biblioteka SQLite dla Node.js</li>
              <li>✓ <strong>Type-safe</strong> - dobra integracja z TypeScript</li>
              <li>✓ <strong>Prepared statements</strong> - bezpieczne (zapobiega SQL injection)</li>
            </ul>
          </div>

          <div className="bg-red-500/20 rounded-xl p-4 border-2 border-red-500/50">
            <strong className="text-red-400">⚠️ SQL Injection - NIGDY tak nie rób:</strong>
            <pre className="bg-black/50 rounded p-2 text-xs mt-2">
              <code className="text-red-400">{`// ❌ ZŁE - podatne na SQL injection
db.prepare(\`SELECT * FROM users WHERE name = '\${userInput}'\`).get();

// ✅ DOBRE - używaj parametrów (?)
db.prepare('SELECT * FROM users WHERE name = ?').get(userInput);`}</code>
            </pre>
          </div>
        </div>
      )
    }
  ]
};
