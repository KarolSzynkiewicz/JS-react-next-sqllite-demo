'use client';

import { useState, FormEvent } from 'react';
import { StateLog } from './StateTracker';

interface NoteFormProps {
  onAddNote: (tytul: string, tresc: string) => Promise<void>;
  onLog: (log: StateLog) => void;
  onStepChange?: (step: 'form' | 'api' | 'database' | 'ui' | null) => void;
}

export default function NoteForm({ onAddNote, onLog, onStepChange }: NoteFormProps) {
  const [tytul, setTytul] = useState('');
  const [tresc, setTresc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ tytul?: string; tresc?: string }>({});

  const validate = (): boolean => {
    const newErrors: { tytul?: string; tresc?: string } = {};
    if (!tytul.trim()) {
      newErrors.tytul = 'Tytuł jest wymagany';
    }
    if (!tresc.trim()) {
      newErrors.tresc = 'Treść jest wymagana';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onLog({
      id: Date.now().toString(),
      timestamp: Date.now(),
      type: 'function',
      name: 'handleSubmit (React Form Event)',
      description: 'React 19.2.3 form onSubmit event → preventDefault() → TypeScript 5 validation function → sprawdzanie typów i wartości pól',
    });

    if (!validate()) {
      onLog({
        id: (Date.now() + 1).toString(),
        timestamp: Date.now(),
        type: 'state',
        name: 'setErrors (React useState)',
        description: 'TypeScript validation failed → React useState setter → aktualizacja stanu errors → rerender → wyświetlenie komunikatów błędów w UI',
      });
      return;
    }

    setIsSubmitting(true);
    onLog({
      id: (Date.now() + 2).toString(),
      timestamp: Date.now(),
      type: 'state',
      name: 'setIsSubmitting(true) (React useState)',
      description: 'React useState setter → isLoading = true → rerender → przycisk disabled → wyświetlenie "Zapisywanie..." → UI feedback',
    });

    try {
      await onAddNote(tytul, tresc);
      setTytul('');
      setTresc('');
      setErrors({});
      onLog({
        id: (Date.now() + 3).toString(),
        timestamp: Date.now(),
        type: 'state',
        name: 'setTytul/setTresc (React useState)',
        description: 'React useState setters → reset wartości pól do "" → rerender → czyszczenie inputów → formularz gotowy na nowy wpis',
      });
    } catch (error) {
      console.error('Błąd przy dodawaniu notatki:', error);
    } finally {
      setIsSubmitting(false);
      onLog({
        id: (Date.now() + 4).toString(),
        timestamp: Date.now(),
        type: 'state',
        name: 'setIsSubmitting(false) (React useState)',
        description: 'React useState setter → isLoading = false → rerender → przycisk enabled → powrót do normalnego stanu',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        ➕ Dodaj nową notatkę
      </h3>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="tytul"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Tytuł (TypeScript: string)
          </label>
          <input
            id="tytul"
            type="text"
            value={tytul}
            onChange={(e) => {
              setTytul(e.target.value);
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.tytul ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Wpisz tytuł notatki..."
          />
          {errors.tytul && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.tytul}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="tresc"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Treść (TypeScript: string)
          </label>
          <textarea
            id="tresc"
            value={tresc}
            onChange={(e) => {
              setTresc(e.target.value);
            }}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.tresc ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Wpisz treść notatki..."
          />
          {errors.tresc && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.tresc}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
        >
          {isSubmitting ? 'Zapisywanie...' : 'Zapisz notatkę (API → SQLite)'}
        </button>
      </div>
    </form>
  );
}
