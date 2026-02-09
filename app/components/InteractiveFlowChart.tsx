'use client';

import { useState, useEffect, useRef } from 'react';

// ============================================================================
// TYPES
// ============================================================================

interface FlowChartNode {
  id: string;
  label: string;
  icon: string;
  color: string;
  description: string;
  x: number;
  y: number;
  tech: string[];
  learnMore?: {
    title: string;
    content: string;
    examples: string[];
    resources: string[];
  };
}

interface Connection {
  from: string;
  to: string;
  label: string;
  active: boolean;
}

interface FlowChartProps {
  activeNodes: Set<string>;
  currentAction?: string;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

const NODES: FlowChartNode[] = [
  {
    id: 'user',
    label: 'Użytkownik',
    icon: '👤',
    color: '#EF4444',
    description: 'Interakcja w przeglądarce',
    x: 50,
    y: 150,
    tech: ['Mouse', 'Keyboard', 'Touch'],
    learnMore: {
      title: 'Jak działa interakcja użytkownika?',
      content: 'Każde kliknięcie, wpisanie tekstu czy hover to event w przeglądarce. JavaScript nasłuchuje tych eventów i reaguje.',
      examples: [
        'onClick={() => handleSubmit()}',
        'onChange={(e) => setText(e.target.value)}',
        'onMouseEnter={() => setHover(true)}'
      ],
      resources: [
        'MDN: Event handling',
        'React: Handling Events',
        'W3C: DOM Events'
      ]
    }
  },
  {
    id: 'react',
    label: 'React',
    icon: '⚛️',
    color: '#61DAFB',
    description: 'UI Framework',
    x: 200,
    y: 150,
    tech: ['JSX', 'Virtual DOM', 'Hooks'],
    learnMore: {
      title: 'Czym jest React?',
      content: 'React to biblioteka JavaScript do budowania interfejsów użytkownika. Używa koncepcji "komponentów" - małych, reużywalnych kawałków UI.',
      examples: [
        'function Button() { return <button>Click</button>; }',
        'const [count, setCount] = useState(0);',
        'useEffect(() => { fetchData(); }, []);'
      ],
      resources: [
        'react.dev - Official docs',
        'React Beta Docs',
        'Kent C. Dodds - Epic React'
      ]
    }
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    icon: '▲',
    color: '#000000',
    description: 'React Framework',
    x: 350,
    y: 150,
    tech: ['SSR', 'Routing', 'API Routes'],
    learnMore: {
      title: 'Dlaczego Next.js?',
      content: 'Next.js to framework zbudowany na React, który dodaje: routing oparty na plikach, Server-Side Rendering, API routes, optymalizację obrazów i wiele więcej.',
      examples: [
        '// app/demo/page.tsx → route /demo',
        '// app/api/notes/route.ts → endpoint /api/notes',
        'export default function Page() { return <h1>Hello</h1>; }'
      ],
      resources: [
        'nextjs.org/docs',
        'Vercel - Next.js Course',
        'Lee Robinson - Next.js videos'
      ]
    }
  },
  {
    id: 'api',
    label: 'API Handler',
    icon: '🔌',
    color: '#10B981',
    description: 'Backend Logic',
    x: 500,
    y: 150,
    tech: ['Node.js', 'REST', 'JSON'],
    learnMore: {
      title: 'Co to jest API Route?',
      content: 'API Routes w Next.js to funkcje serverless działające na Node.js. Obsługują HTTP requests (GET, POST, DELETE, etc.) i zwracają odpowiedzi.',
      examples: [
        'export async function GET(req) { return Response.json({ data }); }',
        'export async function POST(req) { const body = await req.json(); }',
        'export async function DELETE(req, { params }) { const id = params.id; }'
      ],
      resources: [
        'Next.js API Routes docs',
        'MDN: HTTP methods',
        'REST API best practices'
      ]
    }
  },
  {
    id: 'database',
    label: 'SQLite',
    icon: '💾',
    color: '#F59E0B',
    description: 'Data Storage',
    x: 650,
    y: 150,
    tech: ['SQL', 'better-sqlite3', 'ACID'],
    learnMore: {
      title: 'Czym jest SQLite?',
      content: 'SQLite to lekka baza danych SQL przechowywana w pojedynczym pliku. Idealna do małych aplikacji, prototypów i embedded systems.',
      examples: [
        'SELECT * FROM notes WHERE id = ?',
        'INSERT INTO notes (title, content) VALUES (?, ?)',
        'DELETE FROM notes WHERE id = ?'
      ],
      resources: [
        'sqlite.org/docs',
        'better-sqlite3 npm package',
        'SQL Tutorial - W3Schools'
      ]
    }
  },
  {
    id: 'response',
    label: 'Response',
    icon: '📤',
    color: '#8B5CF6',
    description: 'HTTP Response',
    x: 500,
    y: 300,
    tech: ['JSON', 'Status Codes', 'Headers'],
    learnMore: {
      title: 'Jak działają HTTP Responses?',
      content: 'Po przetworzeniu requestu, serwer zwraca response z kodem statusu (200, 404, 500...), headerami i body (często JSON).',
      examples: [
        'Response.json({ success: true, data: [...] })',
        'Response.json({ error: "Not found" }, { status: 404 })',
        'new Response("OK", { status: 200 })'
      ],
      resources: [
        'MDN: HTTP response codes',
        'HTTP Status Dogs',
        'REST API response patterns'
      ]
    }
  },
  {
    id: 'state',
    label: 'State Update',
    icon: '🔄',
    color: '#EC4899',
    description: 'React Re-render',
    x: 350,
    y: 300,
    tech: ['useState', 'Reconciliation', 'Diffing'],
    learnMore: {
      title: 'Jak działa State w React?',
      content: 'State to dane, które mogą się zmieniać. Gdy wywołasz setState(), React re-renderuje komponent z nowymi danymi.',
      examples: [
        'const [count, setCount] = useState(0);',
        'setCount(count + 1); // Trigger re-render',
        'setNotes([...notes, newNote]); // Update array'
      ],
      resources: [
        'React docs: State',
        'Dan Abramov: State and Lifecycle',
        'useState vs useReducer'
      ]
    }
  },
  {
    id: 'ui',
    label: 'UI Update',
    icon: '✨',
    color: '#06B6D4',
    description: 'DOM Changes',
    x: 200,
    y: 300,
    tech: ['Virtual DOM', 'Diffing', 'Browser Paint'],
    learnMore: {
      title: 'Jak React aktualizuje DOM?',
      content: 'React porównuje Virtual DOM (w pamięci) z prawdziwym DOM. Znajduje różnice (diffing) i aktualizuje TYLKO to, co się zmieniło.',
      examples: [
        '// Before: <li>Old note</li>',
        '// After:  <li>New note</li>',
        '// React updates ONLY the text node'
      ],
      resources: [
        'React Reconciliation',
        'Virtual DOM explained',
        'Browser rendering pipeline'
      ]
    }
  }
];

const CONNECTIONS: Connection[] = [
  { from: 'user', to: 'react', label: 'Event', active: false },
  { from: 'react', to: 'nextjs', label: 'Fetch', active: false },
  { from: 'nextjs', to: 'api', label: 'Route', active: false },
  { from: 'api', to: 'database', label: 'Query', active: false },
  { from: 'database', to: 'api', label: 'Data', active: false },
  { from: 'api', to: 'response', label: 'JSON', active: false },
  { from: 'response', to: 'state', label: 'Update', active: false },
  { from: 'state', to: 'ui', label: 'Render', active: false },
  { from: 'ui', to: 'user', label: 'Display', active: false }
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function InteractiveFlowChart({ activeNodes, currentAction }: FlowChartProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [connections, setConnections] = useState(CONNECTIONS);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Update active connections based on active nodes
  useEffect(() => {
    setConnections(prev =>
      prev.map(conn => ({
        ...conn,
        active: activeNodes.has(conn.from) && activeNodes.has(conn.to)
      }))
    );
  }, [activeNodes]);

  // Draw connections on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      connections.forEach(conn => {
        const fromNode = NODES.find(n => n.id === conn.from);
        const toNode = NODES.find(n => n.id === conn.to);
        
        if (!fromNode || !toNode) return;

        // Calculate positions (scale to canvas size)
        const scaleX = canvas.width / 800;
        const scaleY = canvas.height / 500;
        const x1 = fromNode.x * scaleX;
        const y1 = fromNode.y * scaleY;
        const x2 = toNode.x * scaleX;
        const y2 = toNode.y * scaleY;

        // Draw line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = conn.active ? fromNode.color : '#444';
        ctx.lineWidth = conn.active ? 4 : 2;
        ctx.stroke();

        // Draw arrow
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const arrowSize = 10;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(
          x2 - arrowSize * Math.cos(angle - Math.PI / 6),
          y2 - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          x2 - arrowSize * Math.cos(angle + Math.PI / 6),
          y2 - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fillStyle = conn.active ? fromNode.color : '#444';
        ctx.fill();

        // Draw label
        if (conn.active) {
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#fff';
          ctx.textAlign = 'center';
          ctx.fillText(conn.label, midX, midY - 5);
        }
      });
    };

    draw();
    const interval = setInterval(draw, 100); // Redraw for animations

    return () => clearInterval(interval);
  }, [connections]);

  const selectedNodeData = selectedNode ? NODES.find(n => n.id === selectedNode) : null;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          🗺️ Interactive Flow Map
        </h2>
        {currentAction && (
          <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            {currentAction}
          </div>
        )}
      </div>

      <div className="relative">
        {/* Canvas for connections */}
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: 'auto' }}
        />

        {/* Nodes */}
        <div className="relative" style={{ height: '500px' }}>
          {NODES.map(node => {
            const isActive = activeNodes.has(node.id);
            const isHovered = hoveredNode === node.id;
            const isSelected = selectedNode === node.id;

            return (
              <div
                key={node.id}
                className={`absolute transition-all duration-300 cursor-pointer ${
                  isActive ? 'scale-125 z-20' : 'z-10'
                }`}
                style={{
                  left: `${(node.x / 800) * 100}%`,
                  top: `${(node.y / 500) * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              >
                <div
                  className={`
                    w-24 h-24 rounded-2xl flex flex-col items-center justify-center
                    border-4 transition-all shadow-lg
                    ${isActive ? 'bg-white shadow-2xl' : 'bg-gray-800 border-gray-700'}
                    ${isHovered ? 'border-white' : ''}
                    ${isSelected ? 'ring-4 ring-yellow-400' : ''}
                  `}
                  style={{
                    borderColor: isActive ? node.color : undefined
                  }}
                >
                  <div className="text-4xl mb-1">{node.icon}</div>
                  <div className={`text-xs font-bold text-center ${isActive ? 'text-gray-900' : 'text-white'}`}>
                    {node.label}
                  </div>
                </div>

                {/* Quick tooltip on hover */}
                {isHovered && !isSelected && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white p-3 rounded-lg shadow-xl z-30 w-48 text-sm">
                    <div className="font-bold mb-1">{node.description}</div>
                    <div className="text-xs opacity-70">
                      Click for details →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed panel for selected node */}
      {selectedNodeData && selectedNodeData.learnMore && (
        <div className="mt-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-5xl">{selectedNodeData.icon}</span>
              <div>
                <h3 className="text-2xl font-bold">{selectedNodeData.learnMore.title}</h3>
                <div className="flex gap-2 mt-2">
                  {selectedNodeData.tech.map(t => (
                    <span key={t} className="text-xs bg-white/20 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-white/70 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          <p className="mb-6 text-lg opacity-90">
            {selectedNodeData.learnMore.content}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Examples */}
            <div>
              <h4 className="font-bold mb-3 text-yellow-300">💡 Przykłady kodu:</h4>
              <div className="space-y-2">
                {selectedNodeData.learnMore.examples.map((example, i) => (
                  <div key={i} className="bg-black/30 rounded-lg p-3 font-mono text-sm">
                    {example}
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-3 text-green-300">📚 Dowiedz się więcej:</h4>
              <ul className="space-y-2">
                {selectedNodeData.learnMore.resources.map((resource, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">→</span>
                    {resource}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 bg-black/30 rounded-xl p-4">
        <div className="text-white/70 text-sm grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded"></div>
            <span>Aktywny krok</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-700 rounded"></div>
            <span>Nieaktywny</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-4 border-yellow-400 rounded"></div>
            <span>Wybrany (kliknięty)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
