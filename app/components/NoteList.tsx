'use client';

import { useEffect, useState } from 'react';
import { StateLog } from './StateTracker';
import { Notatka } from '@/app/api/notatki/route';

interface NoteListProps {
  notes: Notatka[];
  onDeleteNote: (id: number) => Promise<void>;
  onLog: (log: StateLog) => void;
  onStepChange?: (step: 'form' | 'api' | 'database' | 'ui' | null) => void;
}

export default function NoteList({ notes, onDeleteNote, onLog, onStepChange }: NoteListProps) {
  const [deletingIds, setDeletingIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Silent update - no log needed for every notes change
  }, [notes]);

  const handleDelete = async (id: number) => {
    setDeletingIds((prev) => new Set(prev).add(id));
    onLog({
      id: Date.now().toString(),
      timestamp: Date.now(),
      type: 'state',
      name: 'setDeletingIds (React useState)',
      description: 'React useState setter → dodanie id do Set → rerender → przycisk "Usuń" zmienia się na "Usuwanie..." → disabled state → UI feedback',
    });

    try {
      await onDeleteNote(id);
    } catch (error) {
      console.error('Błąd przy usuwaniu notatki:', error);
    } finally {
      setDeletingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  };

  if (notes.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-lg dark:bg-gray-800/50 rounded-2xl shadow-lg p-6 border border-white/20 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-white dark:text-white mb-4">
          📝 Lista notatek (React State + SQLite)
        </h3>
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-50">📝</div>
          <p className="text-white/70 dark:text-gray-400 text-lg">
            Brak notatek
          </p>
          <p className="text-white/50 dark:text-gray-500 text-sm mt-2">
            Dodaj pierwszą notatkę używając formularza obok →
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        📝 Lista notatek ({notes.length}) - React State + SQLite
      </h3>
      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-white dark:text-white mb-2">{note.tytul}</h4>
                <p className="text-white/80 dark:text-gray-300 text-sm mb-2">{note.tresc}</p>
                <p className="text-xs text-white/50 dark:text-gray-400">
                  🕐 {new Date(note.utworzono).toLocaleString('pl-PL')}
                </p>
              </div>
              <button
                onClick={() => handleDelete(note.id)}
                disabled={deletingIds.has(note.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 flex items-center gap-2"
              >
                {deletingIds.has(note.id) ? (
                  <>
                    <div className="animate-spin">⚙️</div>
                    Usuwanie...
                  </>
                ) : (
                  '🗑️ Usuń'
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
