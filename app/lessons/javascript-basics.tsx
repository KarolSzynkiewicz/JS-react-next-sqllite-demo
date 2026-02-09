import { Lesson } from '../components/LessonSlider';

export const javascriptBasicsLesson: Lesson = {
  id: 'js-basics',
  title: 'Podstawy JavaScript',
  description: 'Od zera do bohatera - poznaj fundamenty JS',
  icon: '📘',
  slides: [
    {
      id: 'what-is-js',
      title: 'Co to jest JavaScript?',
      icon: '🤔',
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-semibold">
            JavaScript to <strong className="text-yellow-400">język programowania</strong>, 
            który sprawia, że strony internetowe są <strong>interaktywne</strong>!
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🎭 Wyobraź sobie teatr...</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-2xl">🏗️</span>
                <div>
                  <strong>HTML</strong> = Scenografia (struktura, elementy)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <strong>CSS</strong> = Kostiumy i oświetlenie (wygląd)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <strong>JavaScript</strong> = Aktorzy i akcja (interaktywność!)
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h4 className="text-xl font-bold mb-3">✨ Co możesz robić z JavaScript?</h4>
            <ul className="space-y-2 text-base">
              <li>✓ Reagować na kliknięcia (przyciski, linki)</li>
              <li>✓ Zmieniać treść strony bez przeładowania</li>
              <li>✓ Walidować formularze</li>
              <li>✓ Tworzyć animacje</li>
              <li>✓ Pobierać dane z serwerów (API)</li>
              <li>✓ Budować całe aplikacje (jak ta!)</li>
            </ul>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <p className="text-lg">
              <strong>💡 Ciekawostka:</strong> JavaScript działa w przeglądarce (Chrome, Firefox) 
              i na serwerze (Node.js)!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'variables-intro',
      title: 'Zmienne - Pudełka na Dane',
      icon: '📦',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-yellow-400">Zmienna</strong> to jak <strong>pudełko z etykietą</strong>, 
            w którym przechowujesz dane.
          </p>

          <div className="bg-orange-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🏷️ Analogia: Pudełka w pokoju</h3>
            <div className="space-y-3 text-base">
              <p>
                Masz pokój pełen pudełek. Każde pudełko ma naklejkę (nazwę) i coś w środku (wartość).
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <div className="font-bold">wiek</div>
                  <div className="text-sm opacity-70">→ 25</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <div className="font-bold">imię</div>
                  <div className="text-sm opacity-70">→ "Anna"</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <div className="font-bold">aktywny</div>
                  <div className="text-sm opacity-70">→ true</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">💻 Jak to wygląda w kodzie?</h4>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm">
              <code className="text-green-400">{`// Tworzenie zmiennej (deklaracja)
let wiek = 25;
let imie = "Anna";
let aktywny = true;

// Używanie zmiennej
console.log(wiek);     // Wyświetli: 25
console.log(imie);     // Wyświetli: Anna`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Pamiętaj:</strong> Nazwa zmiennej = etykieta na pudełku. 
            Wartość = to co jest w środku!
          </div>
        </div>
      )
    },
    {
      id: 'let-const-var',
      title: 'let, const, var - Rodzaje Pudełek',
      icon: '🔒',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            JavaScript ma <strong>3 sposoby</strong> na tworzenie zmiennych. 
            Każdy działa trochę inaczej!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {/* let */}
            <div className="bg-blue-500/20 rounded-xl p-5 border-2 border-blue-500/50">
              <div className="text-4xl mb-3 text-center">📦</div>
              <h4 className="text-xl font-bold mb-3 text-center text-blue-400">let</h4>
              <p className="text-sm mb-3">
                <strong>Pudełko, które możesz</strong> otworzyć i zmienić zawartość
              </p>
              <pre className="bg-black/50 rounded p-2 text-xs">
                <code className="text-green-400">{`let wiek = 25;
wiek = 26; // ✓ OK!`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">
                ✓ Używaj gdy wartość może się zmienić
              </p>
            </div>

            {/* const */}
            <div className="bg-purple-500/20 rounded-xl p-5 border-2 border-purple-500/50">
              <div className="text-4xl mb-3 text-center">🔒</div>
              <h4 className="text-xl font-bold mb-3 text-center text-purple-400">const</h4>
              <p className="text-sm mb-3">
                <strong>Pudełko zamknięte</strong> - raz włożysz, nie zmienisz
              </p>
              <pre className="bg-black/50 rounded p-2 text-xs">
                <code className="text-green-400">{`const imie = "Anna";
imie = "Ola"; // ❌ Błąd!`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">
                ✓ Używaj gdy wartość jest stała
              </p>
            </div>

            {/* var */}
            <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
              <div className="text-4xl mb-3 text-center">⚠️</div>
              <h4 className="text-xl font-bold mb-3 text-center text-red-400">var</h4>
              <p className="text-sm mb-3">
                <strong>Stary sposób</strong> - ma dziwne zachowanie
              </p>
              <pre className="bg-black/50 rounded p-2 text-xs">
                <code className="text-red-400">{`var x = 10;
// Nie używaj!`}</code>
              </pre>
              <p className="text-xs mt-2 opacity-70">
                ❌ Unikaj - używaj let lub const
              </p>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h4 className="text-xl font-bold mb-3">🎯 Złota Zasada</h4>
            <div className="space-y-2 text-base">
              <p>1. <strong>Zawsze używaj const</strong> jako domyślnie</p>
              <p>2. Jeśli musisz zmienić wartość → użyj <strong>let</strong></p>
              <p>3. <strong>Nigdy nie używaj var</strong> (stary, problematyczny)</p>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-4">
            <strong>💡 Przykład z życia:</strong> Twój wiek zmienia się co rok → <code className="bg-black/50 px-2 py-1 rounded">let</code>. 
            Twoja data urodzenia nie zmienia się → <code className="bg-black/50 px-2 py-1 rounded">const</code>
          </div>
        </div>
      )
    },
    {
      id: 'data-types',
      title: 'Typy Danych - Co Może Być w Pudełku?',
      icon: '🎁',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            W pudełku (zmiennej) możesz trzymać <strong>różne rzeczy</strong>. 
            JavaScript ma kilka podstawowych typów:
          </p>

          <div className="space-y-4">
            {/* String */}
            <div className="bg-yellow-500/20 rounded-xl p-5 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📝</span>
                <h4 className="text-xl font-bold text-yellow-400">String (tekst)</h4>
              </div>
              <p className="text-sm mb-2">Litery, słowa, zdania - wszystko w cudzysłowiu</p>
              <pre className="bg-black/50 rounded p-3 text-sm">
                <code className="text-green-400">{`let imie = "Anna";
let miasto = 'Warszawa';
let wiadomosc = \`Cześć, jestem \${imie}\`;  // Template literal`}</code>
              </pre>
            </div>

            {/* Number */}
            <div className="bg-blue-500/20 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🔢</span>
                <h4 className="text-xl font-bold text-blue-400">Number (liczby)</h4>
              </div>
              <p className="text-sm mb-2">Liczby całkowite i dziesiętne</p>
              <pre className="bg-black/50 rounded p-3 text-sm">
                <code className="text-green-400">{`let wiek = 25;
let cena = 19.99;
let temperatura = -5;`}</code>
              </pre>
            </div>

            {/* Boolean */}
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">✅</span>
                <h4 className="text-xl font-bold text-green-400">Boolean (prawda/fałsz)</h4>
              </div>
              <p className="text-sm mb-2">Tylko dwie wartości: true lub false</p>
              <pre className="bg-black/50 rounded p-3 text-sm">
                <code className="text-green-400">{`let jestAktywny = true;
let jestZalogowany = false;
let czyPada = true;`}</code>
              </pre>
            </div>

            {/* Others */}
            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎨</span>
                <h4 className="text-xl font-bold text-purple-400">Inne typy</h4>
              </div>
              <pre className="bg-black/50 rounded p-3 text-sm">
                <code className="text-green-400">{`let nic = null;           // Celowo puste
let niezdefiniowane;      // undefined (nie ustawione)
let tablica = [1, 2, 3];  // Array (lista)
let obiekt = { x: 10 };   // Object (obiekt)`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💡 Sprawdzanie typu:</strong> Użyj <code className="bg-black/50 px-2 py-1 rounded">typeof</code>
            <pre className="bg-black/50 rounded p-2 mt-2 text-xs">
              <code className="text-green-400">{`console.log(typeof "Anna");  // "string"
console.log(typeof 25);      // "number"
console.log(typeof true);    // "boolean"`}</code>
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'typing',
      title: 'Typowanie - JavaScript vs TypeScript',
      icon: '🎯',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            JavaScript jest <strong className="text-yellow-400">dynamicznie typowany</strong>. 
            Co to znaczy? Sprawdźmy!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* JavaScript - dynamiczne */}
            <div className="bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-500/50">
              <div className="text-4xl mb-3 text-center">🎭</div>
              <h4 className="text-2xl font-bold mb-3 text-center text-yellow-400">JavaScript</h4>
              <p className="text-sm mb-3 text-center">Dynamiczne typowanie - typ zmienia się swobodnie</p>
              <pre className="bg-black/50 rounded p-3 text-sm">
                <code className="text-green-400">{`let x = 42;        // number
x = "tekst";      // ✓ OK! Teraz string
x = true;         // ✓ OK! Teraz boolean

// JavaScript nie narzeka!`}</code>
              </pre>
              <p className="text-xs mt-3 opacity-70">
                ✓ Elastyczne<br/>
                ❌ Łatwo o błędy
              </p>
            </div>

            {/* TypeScript - statyczne */}
            <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-500/50">
              <div className="text-4xl mb-3 text-center">🛡️</div>
              <h4 className="text-2xl font-bold mb-3 text-center text-blue-400">TypeScript</h4>
              <p className="text-sm mb-3 text-center">Statyczne typowanie - typ jest zdefiniowany</p>
              <pre className="bg-black/50 rounded p-3 text-sm">
                <code className="text-green-400">{`let x: number = 42;
x = "tekst";      // ❌ Błąd!
// Type 'string' is not 
// assignable to type 'number'

x = 100;          // ✓ OK!`}</code>
              </pre>
              <p className="text-xs mt-3 opacity-70">
                ✓ Bezpieczne<br/>
                ✓ Łapie błędy wcześniej
              </p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">🤔 Która opcja jest lepsza?</h4>
            <div className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🟡</span>
                <div>
                  <strong>JavaScript</strong> - świetny na start, szybkie prototypy, małe projekty
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔵</span>
                <div>
                  <strong>TypeScript</strong> - lepszy dla większych projektów, team work, production apps
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h4 className="text-xl font-bold mb-3">✨ TypeScript = JavaScript + Typy</h4>
            <p className="text-base">
              TypeScript to JavaScript z dodatkowymi zasadami. Kod TypeScript jest kompilowany 
              do JavaScript, więc działa wszędzie gdzie działa JS!
            </p>
            <pre className="bg-black/50 rounded p-3 mt-3 text-sm">
              <code className="text-blue-400">{`// TypeScript - definiujemy typy
function dodaj(a: number, b: number): number {
  return a + b;
}

dodaj(5, 10);      // ✓ OK! = 15
dodaj("5", "10");  // ❌ Błąd! Chcemy numbers!`}</code>
            </pre>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 text-center">
            <strong>💡 Ta aplikacja używa TypeScript!</strong> Zobaczysz to w kodzie 🚀
          </div>
        </div>
      )
    },
    {
      id: 'objects-intro',
      title: 'Obiekty - Grupowanie Danych',
      icon: '📦',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-purple-400">Obiekt</strong> to jak <strong>pudełko z przegródkami</strong>. 
            Każda przegródka ma nazwę i przechowuje jakąś wartość.
          </p>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">👤 Przykład: Osoba</h3>
            <p className="mb-4">
              Zamiast tworzyć osobne zmienne dla każdej informacji o osobie:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm mb-2 opacity-70">❌ Słaby sposób:</p>
                <pre className="bg-black/50 rounded p-3 text-sm">
                  <code className="text-red-400">{`let imie = "Anna";
let wiek = 25;
let email = "anna@mail.pl";

// 3 osobne zmienne!`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm mb-2 opacity-70">✅ Lepszy sposób:</p>
                <pre className="bg-black/50 rounded p-3 text-sm">
                  <code className="text-green-400">{`let osoba = {
  imie: "Anna",
  wiek: 25,
  email: "anna@mail.pl"
};`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🔑 Dostęp do właściwości</h4>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`let osoba = {
  imie: "Anna",
  wiek: 25,
  miasto: "Warszawa"
};

// Odczytywanie - dwa sposoby:
console.log(osoba.imie);        // "Anna" (kropka)
console.log(osoba["wiek"]);     // 25 (nawiasy)

// Zmiana wartości:
osoba.wiek = 26;

// Dodanie nowej właściwości:
osoba.email = "anna@mail.pl";`}</code>
            </pre>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500/50">
            <h4 className="text-xl font-bold mb-3">🎯 Metody - Funkcje w Obiekcie</h4>
            <p className="mb-3">Obiekt może zawierać nie tylko dane, ale też <strong>funkcje</strong>!</p>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`let osoba = {
  imie: "Anna",
  wiek: 25,
  
  // Metoda (funkcja w obiekcie)
  przedstawSie: function() {
    return "Cześć, jestem " + this.imie;
  }
};

console.log(osoba.przedstawSie());
// "Cześć, jestem Anna"`}</code>
            </pre>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
            <strong>💡 Dlaczego obiekty są ważne?</strong><br/>
            Prawie wszystko w JavaScript to obiekt! Rozumiejąc obiekty, rozumiesz większość JS 🎯
          </div>
        </div>
      )
    },
    {
      id: 'oop-basics',
      title: 'Programowanie Obiektowe (OOP)',
      icon: '🏗️',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-blue-400">OOP</strong> to sposób organizowania kodu używając 
            <strong> obiektów jako "szablonów"</strong>.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🏭 Analogia: Fabryka Samochodów</h3>
            <p className="mb-4">
              <strong>Klasa</strong> to jak <strong>projekt/szablon</strong> samochodu.<br/>
              <strong>Obiekt</strong> to konkretny samochód zbudowany według tego projektu.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <pre className="text-sm">
                <code className="text-green-400">{`// Klasa - szablon
class Samochod {
  constructor(marka, model) {
    this.marka = marka;      // Właściwość
    this.model = model;
    this.predkosc = 0;
  }
  
  // Metoda
  przyspiesz() {
    this.predkosc += 10;
    console.log("Prędkość: " + this.predkosc + " km/h");
  }
}

// Tworzenie obiektów (instancji)
let auto1 = new Samochod("Toyota", "Corolla");
let auto2 = new Samochod("BMW", "X5");

auto1.przyspiesz();  // Prędkość: 10 km/h
auto2.przyspiesz();  // Prędkość: 10 km/h`}</code>
              </pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-500/20 rounded-xl p-5 border-l-4 border-purple-500">
              <h4 className="text-lg font-bold mb-2 text-purple-400">🧱 Enkapsulacja</h4>
              <p className="text-sm">
                Grupowanie powiązanych danych i funkcji w jeden obiekt
              </p>
            </div>
            <div className="bg-green-500/20 rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="text-lg font-bold mb-2 text-green-400">🔄 Dziedziczenie</h4>
              <p className="text-sm">
                Nowa klasa może "odziedziczyć" właściwości z innej klasy
              </p>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🌳 Przykład dziedziczenia</h4>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`// Klasa bazowa
class Zwierze {
  constructor(imie) {
    this.imie = imie;
  }
  
  jedz() {
    console.log(this.imie + " je");
  }
}

// Klasa pochodna (dziedziczy po Zwierze)
class Pies extends Zwierze {
  szczekaj() {
    console.log(this.imie + " szczeka: Hau!");
  }
}

let burek = new Pies("Burek");
burek.jedz();       // "Burek je" (z klasy Zwierze)
burek.szczekaj();   // "Burek szczeka: Hau!" (z klasy Pies)`}</code>
            </pre>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/50">
            <strong>💡 OOP w React:</strong> React używa OOP! Komponenty to klasy lub funkcje, 
            które tworzą "instancje" elementów UI 🎨
          </div>
        </div>
      )
    },
    {
      id: 'dom-explained',
      title: 'DOM - Łączenie JS z HTML',
      icon: '🌳',
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            <strong className="text-green-400">DOM (Document Object Model)</strong> to sposób, 
            w jaki JavaScript "widzi" i manipuluje stroną HTML.
          </p>

          <div className="bg-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🗺️ DOM to "Mapa" Strony</h3>
            <p className="mb-3">
              Każdy element HTML (przycisk, tekst, div) jest <strong>obiektem</strong> w JavaScript!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-2 opacity-70">HTML:</p>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-blue-400">{`<div id="app">
  <h1>Witaj!</h1>
  <button>Kliknij</button>
</div>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm mb-2 opacity-70">JavaScript widzi to jako:</p>
                <pre className="bg-black/50 rounded p-3 text-xs">
                  <code className="text-green-400">{`Document
  └─ div#app
     ├─ h1 ("Witaj!")
     └─ button ("Kliknij")`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-3">🎯 Manipulacja DOM</h4>
            <pre className="bg-black/50 rounded p-4 text-sm">
              <code className="text-green-400">{`// Znajdowanie elementu
let przycisk = document.getElementById("mojPrzycisk");
let tekst = document.querySelector(".tekst");

// Zmiana treści
tekst.textContent = "Nowa treść!";

// Zmiana stylu
przycisk.style.backgroundColor = "blue";

// Reagowanie na kliknięcie
przycisk.addEventListener("click", function() {
  alert("Kliknięto!");
});`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-500/50">
              <h4 className="text-lg font-bold mb-2 text-red-400">⚠️ Problem z DOM</h4>
              <p className="text-sm">
                Każda zmiana w DOM jest <strong>wolna</strong>. Przeglądarka musi:
              </p>
              <ul className="text-xs mt-2 space-y-1">
                <li>• Przeliczyć style</li>
                <li>• Przebudować layout</li>
                <li>• Przerysować ekran</li>
              </ul>
            </div>

            <div className="bg-green-500/20 rounded-xl p-5 border-2 border-green-500/50">
              <h4 className="text-lg font-bold mb-2 text-green-400">✅ Virtual DOM (React)</h4>
              <p className="text-sm">
                React tworzy "wirtualną kopię" DOM i aktualizuje tylko co się zmieniło. 
                <strong> Super szybko!</strong> ⚡
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
            <h4 className="text-xl font-bold mb-3">🎓 Podsumowanie</h4>
            <div className="space-y-2 text-base">
              <p>✓ DOM = reprezentacja strony HTML w JavaScript</p>
              <p>✓ Każdy element HTML = obiekt JavaScript</p>
              <p>✓ Możesz zmieniać elementy, style, reagować na eventy</p>
              <p>✓ React używa Virtual DOM do optymalizacji</p>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 text-center">
            <strong>🎉 Gratulacje!</strong> Znasz teraz podstawy JavaScript! Czas na React 🚀
          </div>
        </div>
      )
    }
  ]
};
