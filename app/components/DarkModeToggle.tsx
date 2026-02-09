'use client';

import { useEffect, useState } from 'react';
import { StateLog } from './StateTracker';

interface DarkModeToggleProps {
  onLog: (log: StateLog) => void;
}

export default function DarkModeToggle({ onLog }: DarkModeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    onLog({
      id: Date.now().toString(),
      timestamp: Date.now(),
      type: 'function',
      name: 'toggleDarkMode → setState',
      description: 'Tailwind dark mode → aktualizacja klasy HTML → rerender',
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 w-14 h-14 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform z-50"
      title="Toggle dark mode (Tailwind)"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
