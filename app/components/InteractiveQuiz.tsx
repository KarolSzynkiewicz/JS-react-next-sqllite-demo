'use client';

import { useState } from 'react';
import { StateLog } from './StateTracker';

// ============================================================================
// QUIZ DATA
// ============================================================================

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  relatedTopic: string;
}

interface InteractiveQuizProps {
  onAction?: (log: StateLog) => void;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Co się stanie gdy wywołasz setNotes([...notes, newNote])?',
    options: [
      'State zmieni się natychmiastast',
      'React zaplanuje re-render w następnym cyklu',
      'Component zostanie od razu przerenderowany',
      'Nic się nie stanie'
    ],
    correctAnswer: 1,
    explanation: 'React NIE aktualizuje state natychmiastast. setNotes() planuje aktualizację, a React wykona ją w najbliższym dogodnym momencie (batching). Re-render nie jest synchroniczny!',
    difficulty: 'intermediate',
    relatedTopic: 'React State'
  },
  {
    id: 'q2',
    question: 'Dlaczego useEffect(() => { fetchData(); }, []) odpala się tylko raz?',
    options: [
      'Bo fetch() jest asynchroniczne',
      'Bo dependency array [] jest puste',
      'Bo fetchData() zwraca Promise',
      'To przypadek - powinno odpalać się zawsze'
    ],
    correctAnswer: 1,
    explanation: 'Pusta dependency array [] mówi React: "odpał ten effect tylko przy mount komponentu, nie przy każdym re-render". Gdyby nie było [], odpalałoby się przy każdym renderze!',
    difficulty: 'beginner',
    relatedTopic: 'React Hooks'
  },
  {
    id: 'q3',
    question: 'Co oznacza "app/api/notatki/route.ts" w Next.js?',
    options: [
      'To komponent React',
      'To API endpoint dostępny pod /api/notatki',
      'To strona dostępna pod /api/notatki',
      'To plik konfiguracyjny'
    ],
    correctAnswer: 1,
    explanation: 'W Next.js App Router, pliki "route.ts" w folderze app/api/ tworzą API endpoints. Ten plik obsługuje requesty na /api/notatki. Pliki "page.tsx" tworzą strony, "route.ts" tworzy API.',
    difficulty: 'beginner',
    relatedTopic: 'Next.js Routing'
  },
  {
    id: 'q4',
    question: 'Czym różni się Virtual DOM od prawdziwego DOM?',
    options: [
      'Virtual DOM jest w pamięci, real DOM w przeglądarce',
      'Virtual DOM jest szybszy do update\'u',
      'React porównuje Virtual DOM żeby znaleźć minimum zmian',
      'Wszystkie powyższe'
    ],
    correctAnswer: 3,
    explanation: 'Virtual DOM to lightweight reprezentacja UI w pamięci (JavaScript object). React go używa żeby:\n1. Szybko porównać old vs new (diffing)\n2. Obliczyć minimum zmian potrzebnych w real DOM\n3. Update\'ować tylko to co się zmieniło\nReal DOM operations są wolne, więc minimalizowanie ich = lepsza performance!',
    difficulty: 'intermediate',
    relatedTopic: 'React Virtual DOM'
  },
  {
    id: 'q5',
    question: 'Co to jest SQL injection i jak better-sqlite3 przed nim chroni?',
    options: [
      'Atak przez wstrzyknięcie złośliwego SQL',
      'Prepared statements z placeholders (?) auto-escapują input',
      'Nigdy nie używaj string concatenation w queries',
      'Wszystkie powyższe'
    ],
    correctAnswer: 3,
    explanation: 'SQL injection = atak gdzie hacker wpisuje SQL kod w input field. Np:\nzły kod: `SELECT * FROM users WHERE name = "${userInput}"`\njeśli userInput = `"; DROP TABLE users; --` → 💥\n\nDobre: `db.prepare("SELECT * FROM users WHERE name = ?").get(userInput)`\nPlaceholder ? automatycznie escapuje input, więc nie może wykonać się jako kod!',
    difficulty: 'advanced',
    relatedTopic: 'SQL Security'
  },
  {
    id: 'q6',
    question: 'Która kolejność operacji jest PRAWIDŁOWA przy dodawaniu notatki?',
    options: [
      'User input → React → Database → API → UI update',
      'User input → React → API → Database → Response → State → UI',
      'User input → Database → React → API → UI',
      'User input → API → React → Database → UI'
    ],
    correctAnswer: 1,
    explanation: 'Pełny flow:\n1. User wypełnia form (UI Event)\n2. React handler wywołuje fetch()\n3. Browser wysyła HTTP request do API Route\n4. Next.js API Route wykonuje SQL query na Database\n5. Database zwraca dane do API\n6. API zwraca HTTP Response (JSON)\n7. React otrzymuje dane i wywołuje setState()\n8. React re-renderuje UI z nowymi danymi',
    difficulty: 'intermediate',
    relatedTopic: 'Full-Stack Flow'
  },
  {
    id: 'q7',
    question: 'Po co używać "key" prop w React lists?',
    options: [
      'Żeby React wyglądał profesjonalnie',
      'Żeby React mógł śledzić które items się zmieniły',
      'Żeby uniknąć duplikatów',
      'To opcjonalne, nie jest potrzebne'
    ],
    correctAnswer: 1,
    explanation: 'key prop pomaga React identify które items w liście:\n- Dodane\n- Usunięte\n- Zmieniły kolejność\n- Zostały edytowane\n\nBez key, React musi re-renderować CAŁĄ listę przy każdej zmianie. Z key, React update\'uje tylko to co się zmieniło. ZAWSZE używaj unikalnych, stabilnych keys (np. database ID, nie index)!',
    difficulty: 'intermediate',
    relatedTopic: 'React Lists'
  },
  {
    id: 'q8',
    question: 'Czym jest "reconciliation" w React?',
    options: [
      'Proces łączenia komponentów',
      'Algorytm porównywania old vs new Virtual DOM',
      'Synchronizacja state między komponentami',
      'Metoda optymalizacji renderowania'
    ],
    correctAnswer: 1,
    explanation: 'Reconciliation to algorytm React który:\n1. Porównuje previous Virtual DOM z new Virtual DOM\n2. Znajduje różnice (diffing)\n3. Oblicza minimum operacji potrzebnych do update\'u real DOM\n4. Wykonuje tylko te operacje\n\nTo kluczowa część React performance - zamiast replace\'ować cały DOM, update\'ujemy tylko changed nodes!',
    difficulty: 'advanced',
    relatedTopic: 'React Internals'
  },
  {
    id: 'q9',
    question: 'Co zwraca await response.json()?',
    options: [
      'JSON string',
      'JavaScript object',
      'Promise<object>',
      'Response object'
    ],
    correctAnswer: 1,
    explanation: 'response.json() to async method który:\n1. Czyta response body (który jest JSON stringiem)\n2. Parsuje go do JavaScript object\n3. Zwraca Promise, który resolve\'uje do tego objectu\n\nawait response.json() czeka aż parsing się skończy i zwraca GOTOWY JavaScript object, z którym możesz od razu pracować (np. data.notes).',
    difficulty: 'beginner',
    relatedTopic: 'Fetch API'
  },
  {
    id: 'q10',
    question: 'Dlaczego SQLite jest "serverless"?',
    options: [
      'Nie potrzebuje oddzielnego database servera',
      'Cały DB to jeden plik',
      'Działa bezpośrednio w aplikacji',
      'Wszystkie powyższe'
    ],
    correctAnswer: 3,
    explanation: 'SQLite jest "serverless" database bo:\n- Nie ma oddzielnego procesu servera (jak PostgreSQL czy MySQL)\n- Cały database to jeden plik .db na dysku\n- Biblioteka SQLite działa BEZPOŚREDNIO w Twojej aplikacji\n- Idealne do: małych apps, prototypów, mobile apps, embedded systems\n\nMinusy: nie nadaje się do multiple concurrent writers, large-scale production apps.',
    difficulty: 'intermediate',
    relatedTopic: 'SQLite'
  }
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function InteractiveQuiz({ onAction }: InteractiveQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((answeredQuestions.size) / QUIZ_QUESTIONS.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Already answered

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    // Check if correct
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Mark as answered
    setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id]));

    // Log action
    if (onAction) {
      const timestamp = Date.now();
      onAction({
        id: timestamp.toString(),
        timestamp,
        type: 'function',
        name: `Quiz Answer: ${isCorrect ? 'Correct ✓' : 'Incorrect ✗'}`,
        description: `Question: "${currentQuestion.question}". Selected: "${currentQuestion.options[answerIndex]}". Correct answer: "${currentQuestion.options[currentQuestion.correctAnswer]}"`,
        friendlyDescription: isCorrect 
          ? `🎉 Brawo! Poprawna odpowiedź! ${currentQuestion.explanation.split('.')[0]}.`
          : `📚 Niepoprawnie, ale to okazja do nauki! ${currentQuestion.explanation.split('.')[0]}.`,
        currentStep: undefined
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setQuizCompleted(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / QUIZ_QUESTIONS.length) * 100;
    if (percentage === 100) return '🏆 Perfekcyjnie! Jesteś mistrzem!';
    if (percentage >= 80) return '🎉 Świetnie! Bardzo dobra znajomość tematu!';
    if (percentage >= 60) return '👍 Dobrze! Jest jeszcze miejsce na rozwój.';
    if (percentage >= 40) return '📚 Nieźle, ale warto powtórzyć materiał.';
    return '💪 Nie poddawaj się! Przejrzyj materiał i spróbuj ponownie.';
  };

  if (quizCompleted) {
    return (
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
        <div className="text-center">
          <div className="text-6xl mb-4">
            {score === QUIZ_QUESTIONS.length ? '🏆' : score >= QUIZ_QUESTIONS.length * 0.8 ? '🎉' : '📚'}
          </div>
          <h2 className="text-4xl font-bold mb-4">Quiz Zakończony!</h2>
          <div className="text-6xl font-bold mb-4">
            {score} / {QUIZ_QUESTIONS.length}
          </div>
          <p className="text-2xl mb-8 opacity-90">
            {getScoreMessage()}
          </p>

          {/* Score breakdown */}
          <div className="bg-white/20 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Szczegóły</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {score}
                </div>
                <div className="text-sm opacity-80">Poprawne</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">
                  {QUIZ_QUESTIONS.length - score}
                </div>
                <div className="text-sm opacity-80">Błędne</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
                </div>
                <div className="text-sm opacity-80">Wynik</div>
              </div>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            🔄 Spróbuj Ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden">
      {/* Header with progress */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white">
            🎯 Test Wiedzy
          </h2>
          <div className="text-white text-lg font-bold">
            {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-white text-sm">
          <div>Postęp: {answeredQuestions.size}/{QUIZ_QUESTIONS.length}</div>
          <div>Wynik: {score}/{answeredQuestions.size || 0}</div>
        </div>
      </div>

      {/* Question */}
      <div className="p-8">
        {/* Meta info */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`${getDifficultyColor(currentQuestion.difficulty)} text-white text-xs px-3 py-1 rounded-full font-bold`}>
            {currentQuestion.difficulty.toUpperCase()}
          </span>
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            {currentQuestion.relatedTopic}
          </span>
        </div>

        {/* Question text */}
        <h3 className="text-2xl font-bold text-white mb-6">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showStatus = showExplanation;

            let bgColor = 'bg-gray-800 hover:bg-gray-700';
            let borderColor = 'border-gray-700';
            
            if (showStatus) {
              if (isCorrect) {
                bgColor = 'bg-green-500/20 border-green-500';
                borderColor = 'border-green-500';
              } else if (isSelected && !isCorrect) {
                bgColor = 'bg-red-500/20 border-red-500';
                borderColor = 'border-red-500';
              }
            } else if (isSelected) {
              bgColor = 'bg-purple-600';
              borderColor = 'border-purple-600';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`
                  w-full text-left p-4 rounded-xl border-2 transition-all
                  ${bgColor} ${borderColor}
                  ${!showExplanation ? 'cursor-pointer' : 'cursor-not-allowed'}
                  ${isSelected ? 'ring-4 ring-purple-400/50' : ''}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                  {showStatus && (
                    <span className="text-2xl">
                      {isCorrect ? '✅' : (isSelected ? '❌' : '')}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`
            p-6 rounded-xl border-2 mb-6
            ${selectedAnswer === currentQuestion.correctAnswer
              ? 'bg-green-500/10 border-green-500'
              : 'bg-red-500/10 border-red-500'
            }
          `}>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">
                {selectedAnswer === currentQuestion.correctAnswer ? '🎉' : '📚'}
              </span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? 'Brawo! Poprawna odpowiedź!'
                    : 'Niepoprawnie. Nie martw się, uczysz się!'}
                </h4>
                <p className="text-white/80 whitespace-pre-line">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next button */}
        {showExplanation && (
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
              ? 'Następne pytanie →'
              : 'Zobacz wyniki 🏆'}
          </button>
        )}
      </div>
    </div>
  );
}
