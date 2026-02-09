'use client';

import { useEffect, useState } from 'react';
import { StateLog } from './StateTracker';

interface SimpleDarkModeToggleProps {
  onAction?: (log: StateLog) => void;
}

export default function SimpleDarkModeToggle({ onAction }: SimpleDarkModeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = stored === 'true' || (stored === null && prefersDark);
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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

    if (onAction) {
      onAction({
        id: Date.now().toString(),
        timestamp: Date.now(),
        type: 'function',
        name: 'toggleDarkMode (React + Tailwind)',
        description: `React 19.2.3 useState setter → localStorage.setItem() → document.documentElement.classList.${newDarkMode ? 'add' : 'remove'}('dark') → Tailwind CSS 4 dark mode classes activated → rerender całej strony → wszystkie komponenty dostosowują kolory`,
        friendlyDescription: `🎨 Zmieniasz tryb na ${newDarkMode ? 'ciemny' : 'jasny'}! Tailwind CSS automatycznie dostosowuje kolory wszystkich elementów na stronie.`,
      });
    }
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <span className="text-xl">🌙</span>
          <span>Dark Mode</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
      >
        <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </div>
  );
}
