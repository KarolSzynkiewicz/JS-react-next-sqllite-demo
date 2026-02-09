'use client';

import { useState } from 'react';
import { StateLog } from './StateTracker';

// ============================================================================
// CODE EXAMPLES FOR EACH STEP
// ============================================================================

interface CodeExample {
  id: string;
  title: string;
  description: string;
  language: 'typescript' | 'javascript' | 'sql' | 'bash';
  code: string;
  annotations: {
    line: number;
    text: string;
  }[];
  relatedConcepts: string[];
}

const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'page-load',
    title: '1. Ładowanie strony - Next.js Routing',
    description: 'Użytkownik wchodzi na /demo, Next.js wykrywa plik i renderuje komponent',
    language: 'typescript',
    code: `// app/demo/page.tsx
export default function DemoPage() {
  // Next.js automatycznie tworzy route /demo
  // z tego pliku
  return (
    <div>
      <h1>Stack Demo</h1>
      <StackDemo />
    </div>
  );
}

// Next.js routing:
// app/
//   demo/
//     page.tsx  → /demo route
//   api/
//     notatki/
//       route.ts → /api/notatki endpoint`,
    annotations: [
      { line: 2, text: 'Export default = to jest Twój route component' },
      { line: 4, text: 'Next.js automatycznie mapuje pliki na routes' },
      { line: 13, text: 'File-based routing - struktura folderów = URL structure' }
    ],
    relatedConcepts: ['Next.js App Router', 'Server Components', 'File-based Routing']
  },
  {
    id: 'react-mount',
    title: '2. React Component Mounting',
    description: 'React montuje komponent i uruchamia useEffect',
    language: 'typescript',
    code: `function StackDemo() {
  // 1. React tworzy instancję komponentu
  const [notes, setNotes] = useState<Note[]>([]);
  
  // 2. useState inicjalizuje state (pusty array)
  // 3. React rejestruje useEffect
  useEffect(() => {
    console.log("Component mounted!");
    fetchNotes(); // Uruchomi się PO pierwszym renderze
  }, []); // Pusta dependency array = tylko przy mount
  
  // 4. Pierwszy render (notes = [])
  return <NoteList notes={notes} />;
}

// React lifecycle:
// 1. Constructor/useState initialization
// 2. First render (return JSX)
// 3. useEffect execution
// 4. Re-render when state changes`,
    annotations: [
      { line: 3, text: 'useState hook - zarządzanie stanem w functional component' },
      { line: 7, text: 'useEffect - odpala się PO renderze, nie podczas' },
      { line: 9, text: 'Empty deps [] = tylko raz, przy mount. [count] = gdy count się zmieni' },
      { line: 13, text: 'JSX to syntactic sugar dla React.createElement()' }
    ],
    relatedConcepts: ['React Hooks', 'Component Lifecycle', 'useState', 'useEffect']
  },
  {
    id: 'fetch-api',
    title: '3. Fetch API - HTTP Request',
    description: 'Browser wysyła HTTP request do Next.js API Route',
    language: 'typescript',
    code: `async function fetchNotes() {
  // Fetch API - nowoczesny sposób na HTTP requests
  const response = await fetch('/api/notatki', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Dodatkowe headers mogą być potrzebne
      // np. Authorization: 'Bearer token'
    }
  });
  
  // Response to obiekt z metodami jak:
  const data = await response.json(); // Parse JSON
  // response.text() - surowy text
  // response.blob() - binary data
  
  if (data.success) {
    setNotes(data.notatki);
  }
}

// HTTP Request flow:
// Browser → DNS lookup → TCP connection
// → HTTP request → Server processing
// → HTTP response → Parse response`,
    annotations: [
      { line: 3, text: 'fetch() to promise - używamy await żeby poczekać na response' },
      { line: 4, text: 'GET = pobierz dane, POST = wyślij, DELETE = usuń, PUT = zaktualizuj' },
      { line: 13, text: 'await response.json() parsuje JSON string do JavaScript object' },
      { line: 18, text: 'setNotes() aktualizuje state → React re-renderuje component' }
    ],
    relatedConcepts: ['Fetch API', 'HTTP Methods', 'Promises', 'async/await']
  },
  {
    id: 'api-route',
    title: '4. Next.js API Route Handler',
    description: 'Serverless function obsługuje HTTP request',
    language: 'typescript',
    code: `// app/api/notatki/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  // Ta funkcja działa na SERWERZE (Node.js)
  // nie w przeglądarce!
  
  try {
    const db = getDatabase();
    
    // Wykonaj SQL query
    const notatki = db
      .prepare('SELECT * FROM notatki ORDER BY utworzona_o DESC')
      .all();
    
    // Zwróć JSON response
    return NextResponse.json({
      success: true,
      notatki: notatki
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Database error' },
      { status: 500 }
    );
  }
}`,
    annotations: [
      { line: 5, text: 'Export async function GET/POST/DELETE/PUT - Next.js używa nazwy funkcji jako HTTP method' },
      { line: 6, text: 'Ten kod działa na SERWERZE - ma dostęp do file system, database, env variables' },
      { line: 13, text: 'better-sqlite3 - synchroniczna biblioteka do SQLite' },
      { line: 18, text: 'NextResponse.json() - helper do tworzenia JSON responses' }
    ],
    relatedConcepts: ['Next.js API Routes', 'Serverless Functions', 'Node.js', 'HTTP Handlers']
  },
  {
    id: 'sqlite-query',
    title: '5. SQLite Database Query',
    description: 'Wykonanie SQL query i zwrócenie danych',
    language: 'sql',
    code: `-- SELECT query - pobierz wszystkie notatki
SELECT 
  id,
  tytul,
  tresc,
  utworzona_o,
  zaktualizowana_o
FROM notatki
ORDER BY utworzona_o DESC;

-- INSERT - dodaj nową notatkę
INSERT INTO notatki (tytul, tresc, utworzona_o)
VALUES (?, ?, CURRENT_TIMESTAMP);

-- DELETE - usuń notatkę
DELETE FROM notatki
WHERE id = ?;

-- UPDATE - zaktualizuj notatkę
UPDATE notatki
SET 
  tytul = ?,
  tresc = ?,
  zaktualizowana_o = CURRENT_TIMESTAMP
WHERE id = ?;`,
    annotations: [
      { line: 1, text: 'SELECT - podstawowe query do pobierania danych' },
      { line: 8, text: 'ORDER BY - sortuj wyniki (DESC = malejąco, ASC = rosnąco)' },
      { line: 12, text: '? to placeholder - better-sqlite3 automatycznie escape\'uje wartości (防止 SQL injection)' },
      { line: 15, text: 'DELETE usunie wszystkie rows które matchują WHERE condition' }
    ],
    relatedConcepts: ['SQL', 'SQLite', 'Database Queries', 'CRUD Operations']
  },
  {
    id: 'json-response',
    title: '6. JSON Response & Parsing',
    description: 'Server zwraca JSON, browser go parsuje',
    language: 'typescript',
    code: `// Server (Next.js API Route):
return NextResponse.json({
  success: true,
  notatki: [
    { id: 1, tytul: 'Pierwsza', tresc: 'Treść...' },
    { id: 2, tytul: 'Druga', tresc: 'Treść...' }
  ],
  count: 2,
  timestamp: Date.now()
});

// To zostanie przekonwertowane na JSON string:
// {"success":true,"notatki":[...],"count":2}

// Browser (fetch):
const response = await fetch('/api/notatki');
const data = await response.json();
// data to teraz JavaScript object, gotowy do użycia!

console.log(data.notatki[0].tytul); // "Pierwsza"
console.log(data.count); // 2`,
    annotations: [
      { line: 2, text: 'NextResponse.json() automatycznie serializes object to JSON string' },
      { line: 12, text: 'JSON to text format - {"key": "value"} - human readable i machine parseable' },
      { line: 17, text: 'response.json() parsuje JSON string z powrotem do JavaScript object' },
      { line: 20, text: 'Teraz możemy używać kropkowej notacji do dostępu do properties' }
    ],
    relatedConcepts: ['JSON', 'Serialization', 'HTTP Response', 'Data Formats']
  },
  {
    id: 'react-state-update',
    title: '7. React State Update & Re-render',
    description: 'setNotes() triggeruje re-render komponentu',
    language: 'typescript',
    code: `// Po otrzymaniu danych z API:
const data = await response.json();

if (data.success) {
  // setNotes() to setter function z useState
  setNotes(data.notatki);
  
  // Co się dzieje pod maską:
  // 1. React zapisuje nowy state
  // 2. React schedules re-render
  // 3. React wywołuje component function znowu
  // 4. Tym razem notes !== [] (ma dane!)
  // 5. React porównuje old vs new Virtual DOM
  // 6. React update'uje tylko to co się zmieniło w real DOM
}

// Re-render:
function StackDemo() {
  const [notes, setNotes] = useState([]);
  // notes teraz = [{id: 1, ...}, {id: 2, ...}]
  
  return (
    <NoteList notes={notes} />
    // NoteList dostaje nowe props → re-renderuje się
  );
}`,
    annotations: [
      { line: 6, text: 'setNotes() NIE zmienia state natychmiastowo - to asynchroniczne!' },
      { line: 10, text: 'React batches state updates dla performance' },
      { line: 13, text: 'Virtual DOM to representation of UI in memory - szybszy niż real DOM' },
      { line: 14, text: 'Reconciliation = porównywanie old vs new Virtual DOM' }
    ],
    relatedConcepts: ['React State', 'Virtual DOM', 'Reconciliation', 'Component Re-rendering']
  },
  {
    id: 'dom-update',
    title: '8. Browser DOM Update & Paint',
    description: 'React aktualizuje DOM, browser renderuje zmiany',
    language: 'typescript',
    code: `// React Virtual DOM diff:
// OLD:
<ul>
  <li>Loading...</li>
</ul>

// NEW:
<ul>
  <li key="1">Pierwsza notatka</li>
  <li key="2">Druga notatka</li>
</ul>

// React znajduje różnice i wykonuje MINIMUM operacji:
// 1. Remove <li>Loading...</li>
// 2. Append <li key="1">Pierwsza notatka</li>
// 3. Append <li key="2">Druga notatka</li>

// Browser rendering pipeline:
// DOM update → Recalculate styles → Layout
// → Paint → Composite layers → Display on screen

// Dlaczego to jest szybkie?
// - React minimalizuje DOM operations (najwolniejsza część)
// - Batch updates razem
// - Używa key props żeby śledzić elements`,
    annotations: [
      { line: 9, text: 'key prop pomaga React identify które items się zmieniły, dodane, lub usunięte' },
      { line: 13, text: 'React wykonuje TYLKO potrzebne DOM updates - nie re-renderuje całego DOM' },
      { line: 18, text: 'Browser rendering jest multi-step process - każdy step kosztuje performance' },
      { line: 23, text: 'Batching updates = mniej re-renders = lepsza performance' }
    ],
    relatedConcepts: ['DOM Manipulation', 'Browser Rendering', 'React Keys', 'Performance Optimization']
  }
];

// ============================================================================
// COMPONENT
// ============================================================================

interface LiveCodeViewerProps {
  currentStep?: string;
  onAction?: (log: StateLog) => void;
}

export default function LiveCodeViewer({ onAction }: LiveCodeViewerProps) {
  const [selectedExample, setSelectedExample] = useState<string>(CODE_EXAMPLES[0].id);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const currentExample = CODE_EXAMPLES.find(ex => ex.id === selectedExample) || CODE_EXAMPLES[0];
  const codeLines = currentExample.code.split('\n');

  const getAnnotationForLine = (lineNum: number) => {
    return currentExample.annotations.find(a => a.line === lineNum);
  };

  const handleExampleChange = (exampleId: string) => {
    setSelectedExample(exampleId);
    const example = CODE_EXAMPLES.find(ex => ex.id === exampleId);
    
    if (onAction && example) {
      const timestamp = Date.now();
      onAction({
        id: timestamp.toString(),
        timestamp,
        type: 'function',
        name: `Code Viewer → ${example.title}`,
        description: `Switched to code example: ${exampleId}. Language: ${example.language}, Concepts: ${example.relatedConcepts.join(', ')}`,
        friendlyDescription: `💻 Przeglądasz teraz: "${example.title}". ${example.description} Zwróć uwagę na adnotacje (💡) - tam są najważniejsze insights!`,
        currentStep: undefined
      });
    }
  };

  const handleAnnotationsToggle = (show: boolean) => {
    if (onAction) {
      const timestamp = Date.now();
      onAction({
        id: timestamp.toString(),
        timestamp,
        type: 'function',
        name: `Annotations ${show ? 'Shown' : 'Hidden'}`,
        description: `User toggled code annotations visibility to: ${show}`,
        friendlyDescription: `${show ? '👁️ Pokazano' : '🙈 Ukryto'} adnotacje do kodu. ${show ? 'Teraz widzisz szczegółowe wyjaśnienia przy każdej ważnej linii!' : 'Kod jest teraz czystszy, bez podpowiedzi.'}`,
        currentStep: undefined
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white">
            💻 Live Code Viewer
          </h2>
          <button
            onClick={() => {
              const newValue = !showAnnotations;
              setShowAnnotations(newValue);
              handleAnnotationsToggle(newValue);
            }}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              showAnnotations
                ? 'bg-white text-purple-600'
                : 'bg-white/20 text-white'
            }`}
          >
            {showAnnotations ? '👁️ Hide' : '👁️ Show'} Annotations
          </button>
        </div>
        
        {/* Step selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CODE_EXAMPLES.map((example, index) => (
            <button
              key={example.id}
              onClick={() => handleExampleChange(example.id)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-lg font-bold text-sm transition-all
                ${selectedExample === example.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
                }
              `}
            >
              {index + 1}. {example.title.split(' - ')[1] || example.title}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-800 p-6 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white mb-2">
          {currentExample.title}
        </h3>
        <p className="text-gray-300">
          {currentExample.description}
        </p>
        
        {/* Related concepts */}
        <div className="flex flex-wrap gap-2 mt-4">
          {currentExample.relatedConcepts.map(concept => (
            <span
              key={concept}
              className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Code display */}
      <div className="relative">
        <div className="absolute top-4 right-4 bg-gray-700 text-white text-xs px-3 py-1 rounded-full font-mono">
          {currentExample.language}
        </div>
        
        <div className="p-6 overflow-x-auto">
          <div className="font-mono text-sm">
            {codeLines.map((line, index) => {
              const lineNum = index + 1;
              const annotation = getAnnotationForLine(lineNum);
              const isHovered = hoveredLine === lineNum;
              const hasAnnotation = !!annotation;

              return (
                <div
                  key={index}
                  className={`
                    group relative py-1 px-3 -mx-3 rounded transition-all
                    ${hasAnnotation && showAnnotations ? 'bg-yellow-500/10 hover:bg-yellow-500/20' : ''}
                    ${isHovered ? 'bg-blue-500/10' : ''}
                  `}
                  onMouseEnter={() => setHoveredLine(lineNum)}
                  onMouseLeave={() => setHoveredLine(null)}
                >
                  <div className="flex items-start gap-4">
                    {/* Line number */}
                    <span className="text-gray-500 select-none w-8 text-right flex-shrink-0">
                      {lineNum}
                    </span>
                    
                    {/* Code */}
                    <div className="flex-1">
                      <code className="text-green-400 whitespace-pre">
                        {line || ' '}
                      </code>
                      
                      {/* Inline annotation */}
                      {showAnnotations && annotation && (
                        <div className="mt-2 bg-yellow-500/20 border-l-4 border-yellow-500 pl-3 py-2 text-yellow-200 text-xs">
                          💡 {annotation.text}
                        </div>
                      )}
                    </div>

                    {/* Annotation indicator */}
                    {hasAnnotation && showAnnotations && (
                      <div className="flex-shrink-0 text-yellow-400 text-xs">
                        💡
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom tips */}
      <div className="bg-gray-800 border-t border-gray-700 p-4">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500/20 rounded"></span>
            <span>Line with annotation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">💡</span>
            <span>Explanation available</span>
          </div>
          <div className="ml-auto text-gray-500">
            Hover over code for details
          </div>
        </div>
      </div>
    </div>
  );
}
