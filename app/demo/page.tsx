'use client';

import { useState } from 'react';
import EducationalStackDemo from '@/app/components/EducationalStackDemo';
import TechnologySection from '@/app/components/TechnologySection';
import FlowDiagram from '@/app/components/FlowDiagram';
import SimpleDarkModeToggle from '@/app/components/SimpleDarkModeToggle';
import ActionComment from '@/app/components/ActionComment';
import { StateLog } from '@/app/components/StateTracker';

export default function DemoPage() {
  const [lastAction, setLastAction] = useState<StateLog | null>(null);

  const handleAction = (log: StateLog) => {
    setLastAction(log);
  };

  const handleDarkModeAction = (log: StateLog) => {
    setLastAction(log);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Stack Demo - Next.js + React + TypeScript + Tailwind + SQLite
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Interaktywna demonstracja całego stacku technologicznego. Każda akcja jest śledzona i
            wyświetlana w sekcji komentarzy poniżej.
          </p>
          <SimpleDarkModeToggle onAction={handleDarkModeAction} />
        </header>

        <ActionComment lastAction={lastAction} />

        {/* NOWY GŁÓWNY KOMPONENT - Wszystko w jednym z zakładkami */}
        <div className="mb-12">
          <EducationalStackDemo onAction={handleAction} />
        </div>

        {/* STARE KOMPONENTY - Zostają na dole jako dodatkowa dokumentacja */}
        <div className="mt-16 pt-16 border-t-4 border-purple-500 dark:border-purple-400">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            📚 Dodatkowa Dokumentacja Stack Technologicznego
          </h2>
          
          <div className="mb-8">
            <FlowDiagram />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <TechnologySection
              title="Next.js 16.1.6"
              icon="⚡"
              description="Framework React z App Router, Server Components i API Routes"
              features={[
                'Server Components (renderowanie po stronie serwera)',
                'Client Components (interaktywność w przeglądarce)',
                'API Routes (backend endpoints)',
                'Dynamiczne routing',
                'Automatyczna optymalizacja',
              ]}
              codeExample={`// Server Component (domyślnie)
export default function Page() {
  return <div>Renderowane na serwerze</div>
}

// Client Component
'use client'
export default function Interactive() {
  return <button>Kliknij mnie</button>
}`}
              componentType="server"
            />

            <TechnologySection
              title="React 19.2.3"
              icon="⚛️"
              description="Biblioteka do budowy interaktywnych interfejsów użytkownika"
              features={[
                'useState - zarządzanie stanem komponentu',
                'useEffect - efekty uboczne i subskrypcje',
                'Reactive updates - automatyczne rerendery',
                'Event handlers - obsługa interakcji',
                'Component lifecycle - cykl życia komponentu',
              ]}
              codeExample={`const [state, setState] = useState(0)

useEffect(() => {
  // Efekt uruchamia się przy zmianie state
}, [state])

const handleClick = () => {
  setState(state + 1) // → rerender
}`}
              componentType="client"
            />

            <TechnologySection
              title="TypeScript 5"
              icon="📘"
              description="Typowany nadzbiór JavaScript z statyczną analizą typów"
              features={[
                'Type safety - bezpieczeństwo typów w czasie kompilacji',
                'Interface definitions - definicje interfejsów',
                'Type inference - automatyczne wnioskowanie typów',
                'Form validation - walidacja formularzy',
                'IntelliSense - autouzupełnianie w IDE',
              ]}
              codeExample={`interface Note {
  id: number
  tytul: string
  tresc: string
}

const note: Note = {
  id: 1,
  tytul: "Tytuł",
  tresc: "Treść"
}`}
              componentType="client"
            />

            <TechnologySection
              title="SQLite (better-sqlite3)"
              icon="🗄️"
              description="Lekka, plikowa baza danych SQL bez serwera"
              features={[
                'CRUD operations - Create, Read, Update, Delete',
                'Synchronous API - synchroniczne zapytania',
                'File-based - przechowywanie w pliku',
                'No server required - nie wymaga serwera',
                'ACID transactions - transakcje ACID',
              ]}
              codeExample={`const db = getDatabase()
db.prepare('INSERT INTO notatki (tytul, tresc) VALUES (?, ?)')
  .run(tytul, tresc)
const notes = db.prepare('SELECT * FROM notatki').all()`}
              componentType="server"
            />

            <TechnologySection
              title="Tailwind CSS 4"
              icon="🎨"
              description="Utility-first CSS framework do szybkiego stylowania"
              features={[
                'Utility classes - klasy utility do stylowania',
                'Responsive design - responsywne layouty',
                'Dark mode - tryb ciemny',
                'Hover effects - efekty hover',
                'Animations - animacje i transitions',
              ]}
              codeExample={`<div className="bg-white dark:bg-gray-800 
  rounded-lg shadow-lg p-6 
  hover:shadow-xl transition-shadow">
  <h1 className="text-2xl font-bold 
    text-gray-900 dark:text-white">
    Stylowany tekst
  </h1>
</div>`}
              componentType="client"
            />

            <TechnologySection
              title="Node.js"
              icon="🟢"
              description="Środowisko uruchomieniowe JavaScript po stronie serwera"
              features={[
                'API Routes - backend endpoints w Next.js',
                'File system access - dostęp do systemu plików',
                'Database connections - połączenia z bazami danych',
                'Request handling - obsługa zapytań HTTP',
                'Server-side logic - logika po stronie serwera',
              ]}
              codeExample={`export async function POST(request) {
  const body = await request.json()
  const db = getDatabase()
  const result = db.prepare('INSERT...')
  return NextResponse.json({ success: true })
}`}
              componentType="server"
            />
          </div>
        </div>
      </div>
    </div>
  );
}