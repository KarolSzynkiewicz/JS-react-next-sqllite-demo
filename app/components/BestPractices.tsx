'use client';

import { useState } from 'react';

interface Practice {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  explanation: string;
  badExample: string;
  goodExample: string;
  benefits: string[];
}

const PRACTICES: Practice[] = [
  {
    id: 'dry',
    title: 'DRY - Don\'t Repeat Yourself',
    icon: '♻️',
    shortDescription: 'Nie powtarzaj tego samego kodu w różnych miejscach',
    explanation: `
Wyobraź sobie, że budujesz dom. Czy za każdym razem gdy potrzebujesz drzwi, 
projektujesz je od zera? Nie! Używasz standardowych drzwi, które pasują do 
wielu miejsc.

W kodzie to samo. Jeśli piszesz ten sam kod wielokrotnie, to:
❌ Tracisz czas
❌ Trudniej naprawić błędy (musisz zmienić w 10 miejscach!)
❌ Łatwo o niespójności

Zamiast tego: **utwórz komponent**, który możesz użyć wszędzie.
    `,
    badExample: `// ❌ ZŁY PRZYKŁAD - kod powtórzony 3 razy!

// W komponencie A
<button className="px-4 py-2 bg-purple-600 text-white rounded-lg 
  hover:bg-purple-700 transition-all">
  Zapisz
</button>

// W komponencie B
<button className="px-4 py-2 bg-purple-600 text-white rounded-lg 
  hover:bg-purple-700 transition-all">
  Wyślij
</button>

// W komponencie C
<button className="px-4 py-2 bg-purple-600 text-white rounded-lg 
  hover:bg-purple-700 transition-all">
  Potwierdź
</button>

// 😱 Problem: Chcesz zmienić kolor? Musisz edytować 3 miejsca!`,
    goodExample: `// ✅ DOBRY PRZYKŁAD - jeden komponent, wiele użyć!

// Button.tsx - komponent wielokrotnego użytku
export function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg 
        hover:bg-purple-700 transition-all"
    >
      {children}
    </button>
  );
}

// Teraz używasz wszędzie:
<Button onClick={handleSave}>Zapisz</Button>
<Button onClick={handleSend}>Wyślij</Button>
<Button onClick={handleConfirm}>Potwierdź</Button>

// 🎉 Zmiana koloru? Edytujesz TYLKO Button.tsx!`,
    benefits: [
      'Jedna zmiana → efekt wszędzie',
      'Mniej błędów (jeden kod do testowania)',
      'Szybsze developowanie',
      'Łatwiejsze utrzymanie kodu'
    ]
  },
  {
    id: 'components',
    title: 'Komponenty Wielokrotnego Użytku',
    icon: '🧩',
    shortDescription: 'Buduj małe, reużywalne elementy jak klocki LEGO',
    explanation: `
Pomyśl o komponentach jak o klockach LEGO. Zamiast budować cały zamek 
z jednego kawałka, używasz małych klocków, które możesz łączyć w różne 
kombinacje.

**Złota zasada**: Jeśli używasz czegoś więcej niż raz → stwórz komponent!

Dobre komponenty to:
✅ Małe i robią jedną rzecz dobrze
✅ Można je użyć w różnych kontekstach
✅ Mają jasne props (parametry)
✅ Są niezależne od reszty aplikacji
    `,
    badExample: `// ❌ ZŁY PRZYKŁAD - wszystko w jednym gigantycznym komponencie

export default function ProductPage() {
  return (
    <div>
      {/* 300 linii kodu tutaj... */}
      <div className="card">
        <img src={product.image} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button>Dodaj do koszyka</button>
      </div>
      
      {/* Ten sam kod powtórzony 10 razy dla każdego produktu! */}
      <div className="card">
        <img src={product2.image} />
        <h2>{product2.name}</h2>
        {/* ... */}
      </div>
    </div>
  );
}

// 😱 Ciężko czytać, ciężko edytować, ciężko reużyć!`,
    goodExample: `// ✅ DOBRY PRZYKŁAD - małe, reużywalne komponenty

// ProductCard.tsx - mały komponent
export function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Button onClick={() => onAddToCart(product)}>
        Dodaj do koszyka
      </Button>
    </div>
  );
}

// ProductPage.tsx - używa komponentów
export default function ProductPage({ products }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

// 🎉 Teraz ProductCard możesz użyć WSZĘDZIE!`,
    benefits: [
      'Kod jest czystszy i łatwiejszy do czytania',
      'Komponenty można testować osobno',
      'Można użyć w różnych miejscach aplikacji',
      'Łatwiej znaleźć i naprawić błędy'
    ]
  },
  {
    id: 'styling',
    title: 'Centralne Style - Design System',
    icon: '🎨',
    shortDescription: 'Jeden plik ze stylami zamiast rozrzuconych kolorów',
    explanation: `
Wyobraź sobie, że projektujesz plakaty. Czy każdy plakat ma inne kolory 
firmowe? Nie! Masz księgę znaku (brand book) z konkretnymi kolorami, 
czcionkami i stylami.

W aplikacji to samo. Zamiast pisać:
"ten przycisk niech będzie #7c3aed, a ten #6d28d9"

Definiujesz raz:
"primary color to purple-600, secondary to purple-700"

**Rezultat**: Cała aplikacja wygląda spójnie i zmiana stylu to sekundy!
    `,
    badExample: `// ❌ ZŁY PRZYKŁAD - style rozrzucone wszędzie

// Header.tsx
<div className="bg-purple-600">...</div>

// Button.tsx
<button className="bg-purple-600">...</button>

// Card.tsx
<div className="bg-purple-600">...</div>

// 😱 Szef mówi: "Zmień kolor na niebieski"
// Musisz przeszukać CAŁĄ aplikację i zmienić setki linii!

// A co jeśli jeden komponent ma purple-700, a inny purple-600?
// Aplikacja wygląda niespójnie!`,
    goodExample: `// ✅ DOBRY PRZYKŁAD - centralne style

// styles/theme.ts - JEDNA definicja
export const theme = {
  colors: {
    primary: 'purple-600',
    primaryHover: 'purple-700',
    secondary: 'blue-600',
    background: 'slate-950',
  },
  spacing: {
    card: 'p-6',
    button: 'px-4 py-2',
  }
};

// Lub w Tailwind (tailwind.config.ts):
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7c3aed',
          secondary: '#3b82f6',
        }
      }
    }
  }
}

// Używasz wszędzie:
<button className="bg-brand-primary hover:bg-brand-secondary">
  Kliknij
</button>

// 🎉 Zmiana koloru? Edytujesz JEDEN plik (theme.ts)!
// Cała aplikacja zmienia się automatycznie!`,
    benefits: [
      'Spójna stylistyka w całej aplikacji',
      'Zmiana designu to edycja jednego pliku',
      'Łatwe tworzenie dark mode',
      'Zespół używa tych samych wartości'
    ]
  },
  {
    id: 'hooks',
    title: 'Custom Hooks - Reużywalna Logika',
    icon: '🪝',
    shortDescription: 'Wydziel powtarzalną logikę do własnych hooków',
    explanation: `
Hooki to "funkcje specjalne" w React, które pozwalają używać stanu i innych 
funkcji React w komponentach.

Jeśli widzisz, że **ten sam kod logiki** powtarza się w wielu komponentach, 
stwórz **custom hook**!

Przykład: Pobieranie danych z API. Zamiast pisać fetch() w każdym komponencie, 
tworzysz \`useFetch()\` i używasz go wszędzie.
    `,
    badExample: `// ❌ ZŁY PRZYKŁAD - ta sama logika w 3 komponentach

// ProductList.tsx
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  // ...
}

// UserList.tsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  // ...
}

// 😱 Ten sam kod powtórzony! Trudno utrzymać!`,
    goodExample: `// ✅ DOBRY PRZYKŁAD - custom hook

// hooks/useFetch.ts
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, [url]);
  
  return { data, loading, error };
}

// Teraz używasz wszędzie:
function ProductList() {
  const { data: products, loading } = useFetch('/api/products');
  if (loading) return <LoadingSpinner />;
  return <div>{products.map(...)}</div>;
}

function UserList() {
  const { data: users, loading } = useFetch('/api/users');
  if (loading) return <LoadingSpinner />;
  return <div>{users.map(...)}</div>;
}

// 🎉 Czysto, prosto, reużywalne!`,
    benefits: [
      'Logika w jednym miejscu',
      'Łatwe testowanie',
      'Mniej duplikacji kodu',
      'Można dzielić się hookami między projektami'
    ]
  },
  {
    id: 'folder-structure',
    title: 'Czytelna Struktura Folderów',
    icon: '📁',
    shortDescription: 'Organizuj pliki logicznie, żeby łatwo je znaleźć',
    explanation: `
Dobra struktura folderów to jak dobrze zorganizowana biblioteka. 
Każda książka ma swoje miejsce i łatwo ją znaleźć.

**Zasady**:
✅ Komponenty → /components
✅ Strony → /app (Next.js) lub /pages
✅ API → /api
✅ Utilities → /lib lub /utils
✅ Hooki → /hooks
✅ Style/theme → /styles
✅ Typy TypeScript → /types

Podobne rzeczy trzymaj razem!
    `,
    badExample: `// ❌ ZŁY PRZYKŁAD - chaos w strukturze

project/
  Button.tsx
  UserList.tsx
  api-users.ts
  Header.tsx
  helper.ts
  ProductCard.tsx
  db.ts
  utils.ts
  LoginForm.tsx
  
// 😱 Wszystko w jednym miejscu!
// Szukanie pliku to horror!
// Nowy developer się zgubi!`,
    goodExample: `// ✅ DOBRY PRZYKŁAD - logiczna struktura

project/
  app/                    # Strony (Next.js)
    page.tsx             # Strona główna
    demo/
      page.tsx           # /demo
  components/            # Komponenty UI
    ui/                  # Podstawowe komponenty
      Button.tsx
      Card.tsx
      Input.tsx
    features/            # Komponenty funkcjonalne
      UserList.tsx
      ProductCard.tsx
      Header.tsx
  hooks/                 # Custom hooks
    useFetch.ts
    useAuth.ts
  lib/                   # Utilities i helpers
    db.ts
    api.ts
  types/                 # TypeScript types
    user.ts
    product.ts
  styles/                # Style i theme
    theme.ts
    globals.css

// 🎉 Każdy plik na swoim miejscu!
// Łatwo znaleźć co potrzebujesz!`,
    benefits: [
      'Łatwe nawigowanie w projekcie',
      'Nowi developerzy szybko się orientują',
      'Łatwiejsze code review',
      'Skalowalna struktura'
    ]
  }
];

export default function BestPractices() {
  const [expandedPractice, setExpandedPractice] = useState<string | null>(null);

  const togglePractice = (id: string) => {
    setExpandedPractice(expandedPractice === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-4xl font-black mb-4">
          💎 Najlepsze Praktyki Programowania
        </h2>
        <p className="text-xl opacity-90 mb-4">
          Poznaj zasady, które sprawią, że Twój kod będzie czystszy, łatwiejszy do utrzymania 
          i bardziej profesjonalny
        </p>
        <div className="bg-white/20 rounded-lg p-4 text-sm">
          <strong>💡 Dla kogo?</strong> Te praktyki są uniwersalne - niezależnie czy dopiero 
          zaczynasz, czy masz doświadczenie, warto je stosować od pierwszego dnia!
        </div>
      </div>

      {/* Practices List */}
      <div className="space-y-4">
        {PRACTICES.map((practice) => {
          const isExpanded = expandedPractice === practice.id;
          
          return (
            <div
              key={practice.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all"
            >
              {/* Practice Header - Clickable */}
              <button
                onClick={() => togglePractice(practice.id)}
                className="w-full p-6 text-left hover:bg-white/5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{practice.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {practice.title}
                      </h3>
                      <p className="text-white/70">
                        {practice.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className={`text-3xl transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                    ⬇️
                  </div>
                </div>
              </button>

              {/* Practice Details - Expandable */}
              {isExpanded && (
                <div className="p-6 pt-0 space-y-6 animate-fadeIn">
                  {/* Explanation */}
                  <div className="bg-blue-500/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      📖 Wyjaśnienie dla początkujących
                    </h4>
                    <div className="text-white/90 whitespace-pre-line leading-relaxed">
                      {practice.explanation}
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Bad Example */}
                    <div className="bg-red-500/20 rounded-xl p-4 border-2 border-red-500/50">
                      <div className="text-red-400 font-bold mb-2 text-sm">❌ UNIKAJ TEGO:</div>
                      <pre className="bg-black/50 rounded p-3 overflow-x-auto text-xs text-white/90">
                        <code>{practice.badExample}</code>
                      </pre>
                    </div>

                    {/* Good Example */}
                    <div className="bg-green-500/20 rounded-xl p-4 border-2 border-green-500/50">
                      <div className="text-green-400 font-bold mb-2 text-sm">✅ RÓB TAK:</div>
                      <pre className="bg-black/50 rounded p-3 overflow-x-auto text-xs text-white/90">
                        <code>{practice.goodExample}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-green-500/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      🎯 Korzyści
                    </h4>
                    <ul className="space-y-2">
                      {practice.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/90">
                          <span className="text-green-400 text-xl">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
        <h3 className="text-3xl font-black mb-4">🎓 Podsumowanie</h3>
        <div className="space-y-3 text-lg">
          <p>
            <strong>1. DRY</strong> - Nie kopiuj kodu, twórz komponenty
          </p>
          <p>
            <strong>2. Komponenty</strong> - Małe, reużywalne klocki LEGO
          </p>
          <p>
            <strong>3. Style</strong> - Jeden plik ze stylami (theme/design system)
          </p>
          <p>
            <strong>4. Hooki</strong> - Wydziel logikę do custom hooks
          </p>
          <p>
            <strong>5. Struktura</strong> - Organizuj pliki logicznie
          </p>
        </div>
        <div className="mt-6 bg-white/20 rounded-lg p-4">
          💡 <strong>Pamiętaj</strong>: Stosuj te zasady od pierwszego dnia. Im wcześniej 
          zaczniesz, tym łatwiej Ci będzie później!
        </div>
      </div>
    </div>
  );
}
