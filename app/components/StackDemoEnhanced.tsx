'use client';

import { useState, useEffect, useRef } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { StateLog } from './StateTracker';
import { Notatka } from '@/app/api/notatki/route';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type FlowStep = 'browser' | 'nextjs' | 'react' | 'api' | 'database' | 'response' | 'ui';
type ActionType = 'page_load' | 'add_note' | 'delete_note' | 'fetch_notes';

interface FlowNode {
  id: FlowStep;
  label: string;
  icon: string;
  color: string;
  description: string;
  tech: string[];
}

interface DataPacket {
  id: string;
  from: FlowStep;
  to: FlowStep;
  data: string;
  timestamp: number;
}

interface TimelineEvent {
  id: string;
  timestamp: number;
  title: string;
  description: string;
  technicalDetails: string;
  step: FlowStep;
  duration?: number;
  codeSnippet?: string;
}

interface TooltipData {
  title: string;
  description: string;
  tech: string;
  example: string;
}

// ============================================================================
// FLOW NODES CONFIGURATION
// ============================================================================

const FLOW_NODES: FlowNode[] = [
  {
    id: 'browser',
    label: 'Przeglądarka',
    icon: '🌐',
    color: '#3B82F6',
    description: 'Chrome/Firefox - środowisko wykonawcze JavaScript w przeglądarce',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM API']
  },
  {
    id: 'react',
    label: 'React',
    icon: '⚛️',
    color: '#61DAFB',
    description: 'React 19.2.3 - biblioteka do budowy UI z komponentami i hooks',
    tech: ['JSX', 'useState', 'useEffect', 'Virtual DOM']
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    icon: '▲',
    color: '#000000',
    description: 'Next.js 16.1.6 - framework React z SSR i API routes',
    tech: ['File-based routing', 'API Routes', 'Server Components']
  },
  {
    id: 'api',
    label: 'API Handler',
    icon: '🔌',
    color: '#10B981',
    description: 'Node.js runtime - obsługa HTTP requests i routing',
    tech: ['REST API', 'JSON', 'HTTP Methods']
  },
  {
    id: 'database',
    label: 'SQLite',
    icon: '💾',
    color: '#F59E0B',
    description: 'SQLite z better-sqlite3 - lokalna baza danych SQL',
    tech: ['SQL', 'better-sqlite3', 'ACID transactions']
  },
  {
    id: 'response',
    label: 'Response',
    icon: '📤',
    color: '#8B5CF6',
    description: 'HTTP Response - zwrot danych do klienta',
    tech: ['JSON', 'HTTP Status', 'Headers']
  },
  {
    id: 'ui',
    label: 'UI Update',
    icon: '✨',
    color: '#EC4899',
    description: 'React DOM update - renderowanie zmian w interfejsie',
    tech: ['Reconciliation', 'Diffing', 'Browser Paint']
  }
];

// ============================================================================
// TOOLTIPS DATA
// ============================================================================

const TOOLTIPS: Record<string, TooltipData> = {
  'useState': {
    title: 'React useState Hook',
    description: 'Hook do zarządzania stanem w komponentach funkcyjnych',
    tech: 'React 19.2.3',
    example: 'const [notes, setNotes] = useState<Notatka[]>([]);'
  },
  'useEffect': {
    title: 'React useEffect Hook',
    description: 'Hook do efektów ubocznych (side effects) - np. fetch danych',
    tech: 'React 19.2.3',
    example: 'useEffect(() => { fetchNotes(); }, []); // [] = tylko przy mount'
  },
  'fetch': {
    title: 'Fetch API',
    description: 'Nowoczesne API do wykonywania HTTP requests w przeglądarce',
    tech: 'Browser API',
    example: 'const res = await fetch(\'/api/notatki\', { method: \'POST\' });'
  },
  'api-route': {
    title: 'Next.js API Route',
    description: 'Serverless function - endpoint API działający na Node.js',
    tech: 'Next.js 16.1.6',
    example: 'export async function GET(request: Request) { ... }'
  },
  'sqlite': {
    title: 'SQLite Database',
    description: 'Lekka, lokalna baza danych SQL - cały DB w jednym pliku',
    tech: 'better-sqlite3',
    example: 'db.prepare(\'SELECT * FROM notatki\').all();'
  },
  'json': {
    title: 'JSON Format',
    description: 'JavaScript Object Notation - format wymiany danych',
    tech: 'Standard',
    example: '{ "success": true, "notatki": [...] }'
  }
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface StackDemoProps {
  onAction: (log: StateLog) => void;
  onStepChange: (step: string | null) => void;
}

export default function StackDemoEnhanced({ onAction, onStepChange }: StackDemoProps) {
  // State
  const [notes, setNotes] = useState<Notatka[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentAction, setCurrentAction] = useState<ActionType | null>(null);
  const [activeNodes, setActiveNodes] = useState<Set<FlowStep>>(new Set());
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [expandedTimeline, setExpandedTimeline] = useState<string | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<Record<string, number>>({});
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  // ============================================================================
  // HELPER FUNCTIONS
  // ============================================================================

  const addTimelineEvent = (event: Omit<TimelineEvent, 'id' | 'timestamp'>) => {
    const newEvent: TimelineEvent = {
      ...event,
      id: `event-${Date.now()}-${Math.random()}`,
      timestamp: Date.now()
    };
    setTimeline(prev => [newEvent, ...prev].slice(0, 50)); // Keep last 50 events
  };

  const animateDataFlow = (from: FlowStep, to: FlowStep, data: string) => {
    const packet: DataPacket = {
      id: `packet-${Date.now()}`,
      from,
      to,
      data,
      timestamp: Date.now()
    };
    setDataPackets(prev => [...prev, packet]);
    
    // Remove packet after animation
    setTimeout(() => {
      setDataPackets(prev => prev.filter(p => p.id !== packet.id));
    }, 2000);
  };

  const highlightPath = (steps: FlowStep[]) => {
    steps.forEach((step, index) => {
      setTimeout(() => {
        setActiveNodes(prev => new Set([...prev, step]));
        
        if (index < steps.length - 1) {
          animateDataFlow(step, steps[index + 1], '📦');
        }
      }, index * 300);
    });

    setTimeout(() => {
      setActiveNodes(new Set());
    }, steps.length * 300 + 2000);
  };

  const measurePerformance = (key: string, startTime: number) => {
    const duration = Date.now() - startTime;
    setPerformanceMetrics(prev => ({ ...prev, [key]: duration }));
    return duration;
  };

  // ============================================================================
  // INITIAL PAGE LOAD SEQUENCE
  // ============================================================================

  useEffect(() => {
    const initializeDemo = async () => {
      const startTime = Date.now();
      
      // Event 1: Browser loads page
      addTimelineEvent({
        title: '🌐 Przeglądarka ładuje stronę',
        description: 'Użytkownik wchodzi na /demo',
        technicalDetails: 'Browser HTTP GET request → Next.js server → routing system wykrywa /demo/page.tsx',
        step: 'browser',
        codeSnippet: '// Browser\nwindow.location = "/demo"\n// Next.js routing\n// /demo/page.tsx matched'
      });
      highlightPath(['browser', 'nextjs']);

      setTimeout(() => {
        // Event 2: Next.js processes route
        addTimelineEvent({
          title: '▲ Next.js przetwarza route',
          description: 'File-based routing znajduje komponent',
          technicalDetails: 'Next.js 16.1.6 file-system router → /demo/page.tsx → Server Component rendering → hydration',
          step: 'nextjs',
          codeSnippet: '// app/demo/page.tsx\nexport default function DemoPage() {\n  return <StackDemo />;\n}'
        });
      }, 500);

      setTimeout(() => {
        // Event 3: React mounts component
        addTimelineEvent({
          title: '⚛️ React montuje komponent',
          description: 'StackDemo component initialization',
          technicalDetails: 'React 19.2.3 → createElement → useState initialization → useEffect registration',
          step: 'react',
          codeSnippet: '// React internals\nconst [notes, setNotes] = useState<Notatka[]>([]);\nuseEffect(() => { fetchNotes(); }, []);'
        });
        highlightPath(['react']);
      }, 1000);

      setTimeout(() => {
        // Event 4: useEffect triggers
        addTimelineEvent({
          title: '🎣 useEffect odpala się',
          description: 'Dependency array [] = tylko przy mount',
          technicalDetails: 'React hooks system → effect queue → fetchNotes() invocation',
          step: 'react',
          codeSnippet: 'useEffect(() => {\n  console.log("Component mounted!");\n  fetchNotes(); // Fetch initial data\n}, []); // Empty deps = run once'
        });
      }, 1500);

      // Now actually fetch notes
      setTimeout(async () => {
        await fetchNotes();
        const duration = measurePerformance('initial_load', startTime);
        
        addTimelineEvent({
          title: '✅ Inicjalizacja zakończona',
          description: `Strona gotowa do użycia (${duration}ms)`,
          technicalDetails: 'Full render cycle complete → interactive state achieved',
          step: 'ui',
          duration
        });
      }, 2000);
    };

    initializeDemo();
  }, []);

  // ============================================================================
  // DATA FETCHING
  // ============================================================================

  const fetchNotes = async () => {
    const startTime = Date.now();
    setIsLoading(true);
    setCurrentAction('fetch_notes');
    
    addTimelineEvent({
      title: '📡 Rozpoczynam fetch notatek',
      description: 'React → Fetch API → Next.js',
      technicalDetails: 'Client-side fetch() → HTTP GET /api/notatki → Next.js API Route handler',
      step: 'react',
      codeSnippet: 'const response = await fetch(\'/api/notatki\');'
    });

    highlightPath(['react', 'browser', 'nextjs', 'api']);

    try {
      onStepChange('api');
      const response = await fetch('/api/notatki');
      
      setTimeout(() => {
        addTimelineEvent({
          title: '🔌 API Route obsługuje request',
          description: 'Next.js przetwarza GET /api/notatki',
          technicalDetails: 'Node.js runtime → route handler → TypeScript execution',
          step: 'api',
          codeSnippet: 'export async function GET() {\n  const db = getDatabase();\n  const notatki = db.prepare(\'SELECT * FROM notatki\').all();\n  return Response.json({ success: true, notatki });\n}'
        });
        highlightPath(['api', 'database']);
      }, 300);

      const data = await response.json();
      
      if (data.success) {
        setTimeout(() => {
          addTimelineEvent({
            title: '💾 SQLite zwraca dane',
            description: `Pobrano ${data.notatki.length} notatek z bazy`,
            technicalDetails: 'better-sqlite3 → SELECT query → rows returned → JSON serialization',
            step: 'database',
            codeSnippet: `// SQL Query\nSELECT * FROM notatki ORDER BY utworzona_o DESC;\n// Returned ${data.notatki.length} rows`
          });
          highlightPath(['database', 'response', 'react']);
        }, 600);

        setTimeout(() => {
          onStepChange('ui');
          setNotes(data.notatki);
          
          const duration = measurePerformance('fetch_notes', startTime);
          
          addTimelineEvent({
            title: '✨ UI zaktualizowany',
            description: 'React re-renderuje listę notatek',
            technicalDetails: 'setNotes() → state update → reconciliation → virtual DOM diff → browser repaint',
            step: 'ui',
            duration,
            codeSnippet: 'setNotes(data.notatki);\n// React triggers re-render\n// NoteList component updates'
          });
        }, 900);
      }
    } catch (error) {
      console.error('Błąd:', error);
      addTimelineEvent({
        title: '❌ Błąd podczas fetch',
        description: String(error),
        technicalDetails: 'Error caught in try-catch block',
        step: 'api'
      });
    } finally {
      setIsLoading(false);
      setCurrentAction(null);
      setTimeout(() => onStepChange(null), 1000);
    }
  };

  // ============================================================================
  // ADD NOTE
  // ============================================================================

  const handleAddNote = async (tytul: string, tresc: string) => {
    const startTime = Date.now();
    setCurrentAction('add_note');
    
    addTimelineEvent({
      title: '📝 Użytkownik wypełnił formularz',
      description: `Tytuł: "${tytul}"`,
      technicalDetails: 'Form submit event → React event handler → validation → prepare POST request',
      step: 'ui',
      codeSnippet: `// User input\n{\n  tytul: "${tytul}",\n  tresc: "${tresc}"\n}`
    });

    highlightPath(['ui', 'react', 'browser', 'nextjs', 'api']);

    try {
      onStepChange('api');
      
      setTimeout(() => {
        addTimelineEvent({
          title: '🚀 Wysyłam POST request',
          description: 'Fetch API → Next.js API Route',
          technicalDetails: 'HTTP POST /api/notatki → JSON body → Content-Type: application/json header',
          step: 'browser',
          codeSnippet: `fetch('/api/notatki', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ tytul, tresc })\n});`
        });
      }, 200);

      const response = await fetch('/api/notatki', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tytul, tresc }),
      });

      const data = await response.json();
      
      if (data.success) {
        setTimeout(() => {
          addTimelineEvent({
            title: '💾 Zapisuję do SQLite',
            description: 'INSERT INTO notatki',
            technicalDetails: 'better-sqlite3 prepare → bind parameters → execute INSERT → commit transaction',
            step: 'database',
            codeSnippet: `db.prepare(\n  'INSERT INTO notatki (tytul, tresc) VALUES (?, ?)'\n).run(tytul, tresc);\n// New ID: ${data.notatka?.id || 'auto-generated'}`
          });
          highlightPath(['database', 'response', 'react']);
        }, 400);

        setTimeout(async () => {
          await fetchNotes();
          const duration = measurePerformance('add_note', startTime);
          
          addTimelineEvent({
            title: '✅ Notatka dodana!',
            description: `Operacja zakończona w ${duration}ms`,
            technicalDetails: 'Full CRUD cycle: UI → API → DB → Response → UI update',
            step: 'ui',
            duration
          });
        }, 700);
      }
    } catch (error) {
      console.error('Błąd:', error);
      addTimelineEvent({
        title: '❌ Błąd podczas dodawania',
        description: String(error),
        technicalDetails: 'Error in POST request or database operation',
        step: 'api'
      });
      throw error;
    } finally {
      setCurrentAction(null);
      setTimeout(() => onStepChange(null), 1500);
    }
  };

  // ============================================================================
  // DELETE NOTE
  // ============================================================================

  const handleDeleteNote = async (id: number) => {
    const startTime = Date.now();
    setCurrentAction('delete_note');
    
    addTimelineEvent({
      title: '🗑️ Użytkownik kliknął "Usuń"',
      description: `Usuwanie notatki ID: ${id}`,
      technicalDetails: 'onClick event → React handler → confirm deletion → prepare DELETE request',
      step: 'ui',
      codeSnippet: `// React onClick\n<button onClick={() => handleDeleteNote(${id})}\n  Delete\n</button>`
    });

    highlightPath(['ui', 'react', 'browser', 'nextjs', 'api']);

    try {
      onStepChange('api');
      
      setTimeout(() => {
        addTimelineEvent({
          title: '🚀 Wysyłam DELETE request',
          description: `DELETE /api/notatki/${id}`,
          technicalDetails: 'HTTP DELETE → Next.js dynamic route [id] → parameter extraction',
          step: 'browser',
          codeSnippet: `fetch('/api/notatki/${id}', {\n  method: 'DELETE'\n});`
        });
      }, 200);

      const response = await fetch(`/api/notatki/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      
      if (data.success) {
        setTimeout(() => {
          addTimelineEvent({
            title: '💾 Usuwam z SQLite',
            description: 'DELETE FROM notatki WHERE id = ?',
            technicalDetails: 'better-sqlite3 → DELETE query → affected rows: 1 → commit',
            step: 'database',
            codeSnippet: `db.prepare(\n  'DELETE FROM notatki WHERE id = ?'\n).run(${id});\n// Rows deleted: 1`
          });
          highlightPath(['database', 'response', 'react']);
        }, 400);

        setTimeout(async () => {
          await fetchNotes();
          const duration = measurePerformance('delete_note', startTime);
          
          addTimelineEvent({
            title: '✅ Notatka usunięta!',
            description: `Operacja zakończona w ${duration}ms`,
            technicalDetails: 'DELETE operation successful → UI refreshed → state synchronized',
            step: 'ui',
            duration
          });
        }, 700);
      }
    } catch (error) {
      console.error('Błąd:', error);
      addTimelineEvent({
        title: '❌ Błąd podczas usuwania',
        description: String(error),
        technicalDetails: 'Error in DELETE request or database operation',
        step: 'api'
      });
      throw error;
    } finally {
      setCurrentAction(null);
      setTimeout(() => onStepChange(null), 1500);
    }
  };

  // ============================================================================
  // CANVAS ANIMATION (Particle effects for data flow)
  // ============================================================================

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
    }> = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Create particles when data flows
    const createParticles = () => {
      if (activeNodes.size > 0 && Math.random() > 0.7) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`
        });
      }
    };

    const interval = setInterval(createParticles, 100);
    animate();

    return () => {
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeNodes]);

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Onboarding overlay */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 max-w-2xl text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">👋 Witaj w Interaktywnej Lekcji!</h2>
            <p className="text-lg mb-6 opacity-90">
              To nie jest zwykłe demo. Zobaczysz <strong>dokładnie</strong> jak działa full-stack aplikacja:
            </p>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <strong>Hover</strong> na dowolny element → zobacz wyjaśnienie techniczne
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎬</span>
                <div>
                  <strong>Kliknij</strong> przycisk → obserwuj przepływ danych w czasie rzeczywistym
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <strong>Timeline</strong> pokazuje każdy krok → od kliknięcia do bazy danych
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <strong>Performance</strong> metrics → zobacz jak szybko działa każda operacja
                </div>
              </li>
            </ul>
            <button
              onClick={() => setShowOnboarding(false)}
              className="w-full bg-white text-purple-600 font-bold py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Zaczynamy! 🚀
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with live status */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                💻 Interactive Full-Stack Demo
              </h1>
              <p className="text-white/80">
                Obserwuj przepływ danych w czasie rzeczywistym
              </p>
            </div>
            {currentAction && (
              <div className="bg-purple-500 text-white px-6 py-3 rounded-full font-bold animate-pulse">
                {currentAction === 'add_note' && '➕ Dodawanie notatki...'}
                {currentAction === 'delete_note' && '🗑️ Usuwanie...'}
                {currentAction === 'fetch_notes' && '📡 Pobieranie danych...'}
                {currentAction === 'page_load' && '🌐 Ładowanie strony...'}
              </div>
            )}
          </div>

          {/* Flow visualization */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {FLOW_NODES.map((node, index) => (
              <div
                key={node.id}
                className={`relative text-center p-4 rounded-xl transition-all duration-300 cursor-help ${
                  activeNodes.has(node.id)
                    ? 'bg-white shadow-2xl scale-110 z-10'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                onMouseEnter={() => setHoveredTooltip(node.id)}
                onMouseLeave={() => setHoveredTooltip(null)}
                style={{
                  borderLeft: activeNodes.has(node.id) ? `4px solid ${node.color}` : 'none'
                }}
              >
                <div className="text-3xl mb-2">{node.icon}</div>
                <div className={`text-sm font-bold ${activeNodes.has(node.id) ? 'text-gray-900' : 'text-white'}`}>
                  {node.label}
                </div>
                
                {/* Tooltip */}
                {hoveredTooltip === node.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-900 text-white p-4 rounded-lg shadow-2xl z-50 w-64 text-left">
                    <div className="font-bold mb-2">{node.label}</div>
                    <div className="text-sm mb-2 opacity-80">{node.description}</div>
                    <div className="flex flex-wrap gap-1">
                      {node.tech.map(t => (
                        <span key={t} className="text-xs bg-white/20 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Connection arrow */}
                {index < FLOW_NODES.length - 1 && (
                  <div className={`absolute top-1/2 -right-2 text-2xl transition-opacity ${
                    activeNodes.has(node.id) ? 'opacity-100' : 'opacity-30'
                  }`}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Performance metrics */}
          {Object.keys(performanceMetrics).length > 0 && (
            <div className="bg-black/30 rounded-xl p-4">
              <div className="text-white font-bold mb-2">⚡ Performance Metrics</div>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(performanceMetrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-green-400">{value}ms</div>
                    <div className="text-xs text-white/60">{key.replace(/_/g, ' ')}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Forms */}
          <div className="lg:col-span-1">
            <NoteForm 
              onAddNote={handleAddNote} 
              onLog={onAction} 
              onStepChange={onStepChange} 
            />
          </div>

          {/* Middle: Notes list */}
          <div className="lg:col-span-1">
            {isLoading ? (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="animate-spin text-6xl mb-4">⚙️</div>
                <p className="text-white">Ładowanie notatek...</p>
              </div>
            ) : (
              <NoteList 
                notes={notes} 
                onDeleteNote={handleDeleteNote} 
                onLog={onAction} 
                onStepChange={onStepChange} 
              />
            )}
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-h-[800px] overflow-y-auto">
              <h3 className="text-2xl font-bold text-white mb-4">📜 Timeline Wydarzeń</h3>
              
              {timeline.length === 0 ? (
                <p className="text-white/60 text-center py-8">
                  Czekam na akcje...
                </p>
              ) : (
                <div className="space-y-3">
                  {timeline.map((event, index) => {
                    const node = FLOW_NODES.find(n => n.id === event.step);
                    const isExpanded = expandedTimeline === event.id;
                    
                    return (
                      <div
                        key={event.id}
                        className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer border-l-4"
                        style={{ borderLeftColor: node?.color || '#999' }}
                        onClick={() => setExpandedTimeline(isExpanded ? null : event.id)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="font-bold text-white flex items-center gap-2">
                              <span>{node?.icon}</span>
                              {event.title}
                            </div>
                            <div className="text-sm text-white/70 mt-1">
                              {event.description}
                            </div>
                          </div>
                          <div className="text-xs text-white/50">
                            {new Date(event.timestamp).toLocaleTimeString()}
                          </div>
                        </div>

                        {event.duration && (
                          <div className="text-xs text-green-400 font-mono">
                            ⚡ {event.duration}ms
                          </div>
                        )}

                        {/* Expanded details */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-white/20">
                            <div className="text-sm text-white/80 mb-3">
                              <strong>Szczegóły techniczne:</strong>
                              <p className="mt-1">{event.technicalDetails}</p>
                            </div>
                            
                            {event.codeSnippet && (
                              <div className="bg-black/50 rounded-lg p-3 font-mono text-xs text-green-400 overflow-x-auto">
                                <pre>{event.codeSnippet}</pre>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="text-xs text-white/40 mt-2">
                          {isExpanded ? '▲ Zwiń' : '▼ Rozwiń szczegóły'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Educational tooltips help */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">💡 Wskazówki</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-sm">
            <div>
              <strong>🎯 Hover na flowchart</strong> - zobacz szczegóły każdego kroku
            </div>
            <div>
              <strong>📊 Kliknij event w timeline</strong> - rozwiń kod i wyjaśnienie
            </div>
            <div>
              <strong>⚡ Performance metrics</strong> - sprawdź szybkość operacji
            </div>
            <div>
              <strong>🎬 Obserwuj animacje</strong> - śledzij przepływ danych
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
