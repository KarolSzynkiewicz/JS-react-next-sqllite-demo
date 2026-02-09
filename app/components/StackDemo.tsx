'use client';

import { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { StateLog } from './StateTracker';
import FlowIndicator from './FlowIndicator';
import { Notatka } from '@/app/api/notatki/route';

interface StackDemoProps {
  onAction: (log: StateLog) => void;
  onStepChange: (step: 'form' | 'api' | 'database' | 'ui' | null) => void;
}

export default function StackDemo({ onAction, onStepChange }: StackDemoProps) {
  const [notes, setNotes] = useState<Notatka[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const addLog = (log: StateLog) => {
    onAction(log);
    if (log.currentStep) {
      onStepChange(log.currentStep);
    }
  };

  const fetchNotes = async () => {
    setIsLoading(true);
    onStepChange('api');
    addLog({
      id: Date.now().toString(),
      timestamp: Date.now(),
      type: 'function',
      name: 'fetchNotes → API GET',
      description: 'React Client Component → fetch() → Next.js API Route /api/notatki → Node.js handler → SQLite SELECT → JSON response → React state update',
      friendlyDescription: '📡 Pobieramy listę notatek z bazy danych! Twoja przeglądarka wysyła żądanie do Next.js, który pobiera dane z SQLite i zwraca je jako JSON.',
      currentStep: 'api',
    });

    try {
      onStepChange('database');
      const response = await fetch('/api/notatki');
      const data = await response.json();
      if (data.success) {
        onStepChange('ui');
        setNotes(data.notatki);
        addLog({
          id: (Date.now() + 1).toString(),
          timestamp: Date.now(),
          type: 'state',
          name: 'setNotes (React useState)',
          description: 'React useState setter → aktualizacja stanu notes → React reconciliation → rerender NoteList component → React DOM update → UI refresh',
          friendlyDescription: '✨ Lista notatek została zaktualizowana! React odświeżył interfejs i teraz widzisz wszystkie notatki z bazy danych.',
          currentStep: 'ui',
        });
      }
    } catch (error) {
      console.error('Błąd przy pobieraniu notatek:', error);
      onStepChange(null);
    } finally {
      setIsLoading(false);
      setTimeout(() => onStepChange(null), 1000);
    }
  };

  useEffect(() => {
    addLog({
      id: Date.now().toString(),
      timestamp: Date.now(),
      type: 'function',
      name: 'useEffect (React Hook)',
      description: 'React 19.2.3 useEffect hook → uruchomienie po mount komponentu → dependency array [] oznacza tylko raz → wywołanie fetchNotes',
      friendlyDescription: '🚀 Strona się załadowała! React automatycznie pobiera listę notatek z bazy danych.',
      currentStep: 'api',
    });
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddNote = async (tytul: string, tresc: string) => {
    onStepChange('form');
    addLog({
      id: Date.now().toString(),
      timestamp: Date.now(),
      type: 'function',
      name: 'handleAddNote → API POST',
      description: 'React event handler → fetch() POST request → Next.js 16.1.6 API Route handler → Node.js runtime → TypeScript validation → SQLite INSERT → better-sqlite3 → database.db file → JSON response → React state update',
      friendlyDescription: '📝 Rozpoczynamy dodawanie notatki! Twoje dane z formularza są przygotowywane do wysłania...',
      currentStep: 'form',
    });

    try {
      onStepChange('api');
      const response = await fetch('/api/notatki', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tytul, tresc }),
      });

      const data = await response.json();
      if (data.success) {
        onStepChange('database');
        addLog({
          id: (Date.now() + 0.5).toString(),
          timestamp: Date.now(),
          type: 'function',
          name: 'API POST → SQLite INSERT',
          description: 'Next.js API Route → Node.js handler → SQLite INSERT → better-sqlite3 → database.db file',
          friendlyDescription: '💾 Zapisujemy notatkę w bazie danych SQLite! Twoje dane są teraz bezpiecznie przechowywane w pliku database.db.',
          currentStep: 'database',
        });
        await fetchNotes();
        onStepChange('ui');
        addLog({
          id: (Date.now() + 1).toString(),
          timestamp: Date.now(),
          type: 'state',
          name: 'fetchNotes → setNotes (React useState)',
          description: 'Odświeżenie listy → API GET → SQLite SELECT → React state update → rerender → nowa notatka widoczna w UI',
          friendlyDescription: '✅ Gotowe! Twoja notatka została dodana i jest teraz widoczna na liście. React automatycznie odświeżył interfejs!',
          currentStep: 'ui',
        });
      }
    } catch (error) {
      console.error('Błąd przy dodawaniu notatki:', error);
      onStepChange(null);
      throw error;
    } finally {
      setTimeout(() => onStepChange(null), 1500);
    }
  };

  const handleDeleteNote = async (id: number) => {
    onStepChange('ui');
    addLog({
      id: Date.now().toString(),
      timestamp: Date.now(),
      type: 'function',
      name: 'handleDeleteNote → API DELETE',
      description: 'React onClick handler → fetch() DELETE request → Next.js 16.1.6 dynamic route /api/notatki/[id] → Node.js handler → SQLite DELETE → better-sqlite3 → database.db update → JSON response → React state refresh',
      friendlyDescription: '🗑️ Usuwamy notatkę! Kliknąłeś przycisk "Usuń" i teraz żądanie jest wysyłane do serwera...',
      currentStep: 'ui',
    });

    try {
      onStepChange('api');
      const response = await fetch(`/api/notatki/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        onStepChange('database');
        addLog({
          id: (Date.now() + 0.5).toString(),
          timestamp: Date.now(),
          type: 'function',
          name: 'API DELETE → SQLite DELETE',
          description: 'Next.js API Route → Node.js handler → SQLite DELETE → better-sqlite3 → database.db update',
          friendlyDescription: '💾 Notatka została usunięta z bazy danych SQLite! Plik database.db został zaktualizowany.',
          currentStep: 'database',
        });
        await fetchNotes();
        onStepChange('ui');
        addLog({
          id: (Date.now() + 1).toString(),
          timestamp: Date.now(),
          type: 'state',
          name: 'fetchNotes → setNotes (React useState)',
          description: 'Odświeżenie listy → API GET → SQLite SELECT → React state update → rerender → usunięta notatka znika z UI',
          friendlyDescription: '✅ Gotowe! Notatka zniknęła z listy. React automatycznie odświeżył interfejs i lista jest teraz aktualna.',
          currentStep: 'ui',
        });
      }
    } catch (error) {
      console.error('Błąd przy usuwaniu notatki:', error);
      onStepChange(null);
      throw error;
    } finally {
      setTimeout(() => onStepChange(null), 1500);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          💻 Interaktywna demonstracja stacku
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Poniżej możesz przetestować pełny CRUD z SQLite. Każda akcja jest logowana w sekcji
          komentarzy powyżej.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NoteForm onAddNote={handleAddNote} onLog={addLog} onStepChange={onStepChange} />
        <div>
          {isLoading ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-500 dark:text-gray-400">Ładowanie...</p>
            </div>
          ) : (
            <NoteList notes={notes} onDeleteNote={handleDeleteNote} onLog={addLog} onStepChange={onStepChange} />
          )}
        </div>
      </div>
    </div>
  );
}
