'use client';

import { useState, useEffect } from 'react';
import StackDemoEnhanced from './StackDemoEnhanced';
import InteractiveFlowChart from './InteractiveFlowChart';
import LiveCodeViewer from './LiveCodeViewer';
import InteractiveQuiz from './InteractiveQuiz';
import BestPractices from './BestPractices';
import { StateLog } from './StateTracker';

// ============================================================================
// TYPES
// ============================================================================

type Tab = 'demo' | 'flowchart' | 'code' | 'quiz' | 'practices' | 'resources';

interface TabConfig {
  id: Tab;
  label: string;
  icon: string;
  description: string;
}

interface EducationalStackDemoProps {
  onAction?: (log: StateLog) => void;
}

// ============================================================================
// TAB CONFIGURATION
// ============================================================================

const TABS: TabConfig[] = [
  {
    id: 'demo',
    label: 'Live Demo',
    icon: '🎬',
    description: 'Interaktywna demonstracja - zobacz jak działa stack w akcji'
  },
  {
    id: 'flowchart',
    label: 'Flow Map',
    icon: '🗺️',
    description: 'Wizualizacja przepływu danych przez cały stack'
  },
  {
    id: 'code',
    label: 'Code Explorer',
    icon: '💻',
    description: 'Przeglądaj kod każdego kroku z wyjaśnieniami line-by-line'
  },
  {
    id: 'quiz',
    label: 'Test Wiedzy',
    icon: '🎯',
    description: 'Sprawdź swoją wiedzę o React, Next.js i SQLite'
  },
  {
    id: 'practices',
    label: 'Najlepsze Praktyki',
    icon: '💎',
    description: 'DRY, reużywalne komponenty, czysty kod'
  },
  {
    id: 'resources',
    label: 'Zasoby',
    icon: '📚',
    description: 'Linki do dokumentacji, tutoriali i dodatkowych materiałów'
  }
];

// ============================================================================
// RESOURCES DATA
// ============================================================================

interface Resource {
  title: string;
  description: string;
  url: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const RESOURCES: Resource[] = [
  // React
  {
    title: 'React Official Docs',
    description: 'Oficjalna dokumentacja React - najlepszy punkt startowy',
    url: 'https://react.dev',
    category: 'React',
    difficulty: 'beginner'
  },
  {
    title: 'React Hooks Explained',
    description: 'Deep dive into useState, useEffect i innych hooks',
    url: 'https://react.dev/reference/react',
    category: 'React',
    difficulty: 'intermediate'
  },
  {
    title: 'React Under the Hood',
    description: 'Jak działa Virtual DOM, Reconciliation i Fiber',
    url: 'https://react.dev/learn/render-and-commit',
    category: 'React',
    difficulty: 'advanced'
  },
  
  // Next.js
  {
    title: 'Next.js Documentation',
    description: 'Kompletny guide po Next.js 14+ App Router',
    url: 'https://nextjs.org/docs',
    category: 'Next.js',
    difficulty: 'beginner'
  },
  {
    title: 'Next.js API Routes',
    description: 'Jak tworzyć i używać API Routes w Next.js',
    url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers',
    category: 'Next.js',
    difficulty: 'intermediate'
  },
  {
    title: 'Next.js App Router Deep Dive',
    description: 'Server Components, Client Components, Streaming',
    url: 'https://nextjs.org/docs/app',
    category: 'Next.js',
    difficulty: 'advanced'
  },
  
  // Database
  {
    title: 'SQLite Tutorial',
    description: 'Podstawy SQL i SQLite dla beginnerów',
    url: 'https://www.sqlitetutorial.net',
    category: 'Database',
    difficulty: 'beginner'
  },
  {
    title: 'better-sqlite3 Docs',
    description: 'Jak używać SQLite w Node.js',
    url: 'https://github.com/WiseLibs/better-sqlite3',
    category: 'Database',
    difficulty: 'intermediate'
  },
  {
    title: 'SQL Injection Prevention',
    description: 'Bezpieczeństwo baz danych - jak uniknąć SQL injection',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html',
    category: 'Database',
    difficulty: 'advanced'
  },
  
  // Full-Stack
  {
    title: 'MDN Web Docs',
    description: 'Kompletna dokumentacja web APIs, HTTP, DOM',
    url: 'https://developer.mozilla.org',
    category: 'Full-Stack',
    difficulty: 'beginner'
  },
  {
    title: 'REST API Best Practices',
    description: 'Jak projektować dobre REST APIs',
    url: 'https://restfulapi.net',
    category: 'Full-Stack',
    difficulty: 'intermediate'
  },
  {
    title: 'Full-Stack Open',
    description: 'Darmowy kurs - React, Node.js, databases i więcej',
    url: 'https://fullstackopen.com',
    category: 'Full-Stack',
    difficulty: 'intermediate'
  },
  
  // Interactive Tools
  {
    title: '🎯 Test Wiedzy - Interaktywny Quiz',
    description: 'Sprawdź swoją wiedzę o React, Next.js i SQLite - 10 pytań od beginner do advanced',
    url: '#quiz',
    category: 'Full-Stack',
    difficulty: 'beginner'
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function EducationalStackDemo({ onAction }: EducationalStackDemoProps = {}) {
  const [activeTab, setActiveTab] = useState<Tab>('demo');
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Check URL params for tab selection
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam && ['demo', 'flowchart', 'code', 'quiz', 'practices', 'resources'].includes(tabParam)) {
        setActiveTab(tabParam as Tab);
      }
    }
  }, []);

  // Helper do logowania
  const logAction = (log: Omit<StateLog, 'id' | 'timestamp'>) => {
    const timestamp = Date.now();
    const fullLog: StateLog = {
      ...log,
      id: timestamp.toString(),
      timestamp
    };
    
    // Przekaż do parent jeśli dostępny
    if (onAction) {
      onAction(fullLog);
    }
  };

  const handleAction = (log: StateLog) => {
    if (onAction) {
      onAction(log);
    }
  };

  const handleStepChange = (step: string | null) => {
    setCurrentStep(step);
    if (step) {
      // Map internal steps to flow nodes
      const stepToNode: Record<string, string> = {
        'form': 'user',
        'ui': 'ui',
        'api': 'api',
        'database': 'database'
      };
      
      const nodeId = stepToNode[step];
      if (nodeId) {
        setActiveNodes(prev => new Set([...prev, nodeId]));
      }
    } else {
      // Clear after animation
      setTimeout(() => setActiveNodes(new Set()), 1000);
    }
  };

  // Handle tab change with logging and animation
  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return;
    
    setIsTransitioning(true);
    
    // Fade out
    setTimeout(() => {
      setActiveTab(tab);
      
    const tabNames = {
      'demo': 'Live Demo',
      'flowchart': 'Flow Map',
      'code': 'Code Explorer',
      'quiz': 'Test Wiedzy',
      'practices': 'Najlepsze Praktyki',
      'resources': 'Zasoby'
    };
      
      logAction({
        type: 'function',
        name: `Przełączono zakładkę → ${tabNames[tab]}`,
        description: `User navigation: Changed active tab from ${activeTab} to ${tab}`,
        friendlyDescription: `📑 Przełączyłeś się na zakładkę "${tabNames[tab]}". ${
          tab === 'demo' ? 'Tutaj możesz dodawać i usuwać notatki, obserwując każdy krok w czasie rzeczywistym!' :
          tab === 'flowchart' ? 'Zobacz wizualizację przepływu danych przez cały stack. Kliknij node żeby zobaczyć szczegóły!' :
          tab === 'code' ? 'Przeglądaj kod każdego kroku z wyjaśnieniami line-by-line. Idealny do nauki!' :
          tab === 'quiz' ? 'Sprawdź swoją wiedzę! 10 pytań od beginner do advanced.' :
          tab === 'practices' ? 'Poznaj najlepsze praktyki programowania: DRY, reużywalne komponenty, czysty kod!' :
          'Kontynuuj naukę z curated resources - oficjalna dokumentacja, tutoriale i więcej!'
        }`,
        currentStep: undefined
      });
      
      // Fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              🚀 Interactive Full-Stack Learning Platform
            </h1>
            <p className="text-2xl mb-6 opacity-90">
              Naucz się <strong>React</strong>, <strong>Next.js</strong> i <strong>SQLite</strong> przez interaktywne eksperymenty
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">⚛️ React 19.2.3</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">▲ Next.js 16.1.6</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">💾 SQLite</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🎯 TypeScript</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🎨 Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-4 gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  flex-shrink-0 px-6 py-4 rounded-t-2xl font-bold transition-all duration-300 transform
                  ${activeTab === tab.id
                    ? 'bg-slate-950 text-white shadow-xl scale-105 -translate-y-1'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-102'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{tab.icon}</span>
                  <div className="text-left">
                    <div className="font-bold">{tab.label}</div>
                    <div className="text-xs opacity-70 hidden lg:block">
                      {tab.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className={`container mx-auto px-4 py-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {activeTab === 'demo' && (
          <StackDemoEnhanced
            onAction={handleAction}
            onStepChange={handleStepChange}
          />
        )}

        {activeTab === 'flowchart' && (
          <div className="space-y-8">
            <InteractiveFlowChart
              activeNodes={activeNodes}
              currentAction={currentStep || undefined}
            />
            
            {/* Instructions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
              <h3 className="text-2xl font-bold mb-4">💡 Jak korzystać z Flow Map</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-2xl">🖱️</span>
                  <div>
                    <strong>Hover</strong> nad nodem → zobacz krótki opis
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">👆</span>
                  <div>
                    <strong>Kliknij</strong> node → zobacz pełne wyjaśnienie z przykładami
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">▶️</span>
                  <div>
                    <strong>Strzałki</strong> pokazują kierunek przepływu danych
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <strong>Podświetlone</strong> nodes to aktualnie aktywne kroki
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="space-y-8">
            <LiveCodeViewer currentStep={currentStep || undefined} onAction={logAction} />
            
            {/* Code tips */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
              <h3 className="text-2xl font-bold mb-4">🎓 Tips dla nauki</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span>1️⃣</span>
                  <div>
                    <strong>Czytaj kod od góry do dołu</strong> - każdy krok jest wyjaśniony
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>2️⃣</span>
                  <div>
                    <strong>Zwróć uwagę na adnotacje</strong> (💡) - tam są najważniejsze insights
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>3️⃣</span>
                  <div>
                    <strong>Eksperymentuj</strong> - skopiuj kod i zmień coś, zobacz co się stanie!
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>4️⃣</span>
                  <div>
                    <strong>Hover nad linią kodu</strong> - niektóre mają dodatkowe wyjaśnienia
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-8">
            <InteractiveQuiz onAction={logAction} />
            
            {/* Quiz tips */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
              <h3 className="text-2xl font-bold mb-4">📝 O quizie</h3>
              <div className="space-y-3">
                <p>
                  Ten quiz sprawdza Twoją wiedzę na temat <strong>React, Next.js, SQLite i full-stack concepts</strong>.
                </p>
                <p>
                  Nie martw się jeśli nie znasz wszystkich odpowiedzi - <strong>każda błędna odpowiedź to okazja do nauki</strong>!
                  Wyjaśnienia po każdym pytaniu są zaprojektowane żeby pomóc Ci zrozumieć koncepcję.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500">
                    <strong>🟢 Beginner</strong> - podstawy
                  </div>
                  <div className="bg-yellow-500/20 px-4 py-2 rounded-lg border border-yellow-500">
                    <strong>🟡 Intermediate</strong> - głębsze zrozumienie
                  </div>
                  <div className="bg-red-500/20 px-4 py-2 rounded-lg border border-red-500">
                    <strong>🔴 Advanced</strong> - internals i edge cases
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practices' && (
          <BestPractices />
        )}

        {activeTab === 'resources' && (
          <div className="space-y-8">
            {/* Hero */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-4xl font-bold mb-4">📚 Zasoby do nauki</h2>
              <p className="text-xl opacity-90">
                Kursy, tutoriale, dokumentacja i więcej - wszystko czego potrzebujesz żeby zostać full-stack developerem
              </p>
            </div>

            {/* Resources by category */}
            {['React', 'Next.js', 'Database', 'Full-Stack'].map(category => {
              const resources = RESOURCES.filter(r => r.category === category);
              
              return (
              <div key={category} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  {category === 'React' && '⚛️'}
                  {category === 'Next.js' && '▲'}
                  {category === 'Database' && '💾'}
                  {category === 'Full-Stack' && '🌐'}
                  {category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource, index) => {
                    // Special handling for quiz link
                    const isQuiz = resource.title.includes('Test Wiedzy');
                    const Component = isQuiz ? 'button' : 'a';
                    const props = isQuiz 
                      ? { onClick: () => handleTabChange('quiz') }
                      : { href: resource.url, target: '_blank', rel: 'noopener noreferrer' };
                    
                    return (
                      <Component
                        key={index}
                        {...props}
                        className="bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all group cursor-pointer text-left"
                      >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                          {resource.title}
                        </h4>
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      </div>
                      <p className="text-sm text-white/70 mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className={`
                          text-xs px-2 py-1 rounded-full
                          ${resource.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' : ''}
                          ${resource.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                          ${resource.difficulty === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
                        `}>
                          {resource.difficulty}
                        </span>
                      </div>
                    </Component>
                  );
                  })}
                </div>
              </div>
            );
            })}

            {/* Additional tips */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
              <h3 className="text-2xl font-bold mb-4">💡 Wskazówki do nauki</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-purple-400">🎯 Dla beginnerów</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Zacznij od podstaw JavaScript (jeśli potrzebujesz)</li>
                    <li>• Poznaj React hooks (useState, useEffect)</li>
                    <li>• Zrób prosty projekt - todo list, notes app</li>
                    <li>• Czytaj oficjalną dokumentację - jest świetna!</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-400">🚀 Dla zaawansowanych</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Deep dive into React internals (Fiber, Reconciliation)</li>
                    <li>• Eksperymentuj z Server Components</li>
                    <li>• Zoptymalizuj performance (code splitting, lazy loading)</li>
                    <li>• Contribute to open source!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/50 border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-white/60 text-sm">
          <p>
            Stworzone z ❤️ jako edukacyjne demo full-stack aplikacji
          </p>
          <p className="mt-2">
            React 19.2.3 • Next.js 16.1.6 • SQLite • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}