'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
  icon: string;
  description?: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Start', icon: '🏠', description: 'Strona główna' },
  { href: '/demo', label: 'Platforma', icon: '🚀', description: 'Interactive Learning' },
  { href: '/produkty', label: 'Produkty', icon: '🗄️', description: 'CRUD Demo' },
  { href: '/lokalizacje', label: 'Lokalizacje', icon: '📍', description: 'Seeder Demo' },
  { href: '/pogoda', label: 'Pogoda', icon: '🌤️', description: 'API Demo' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white shadow-lg backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-3xl">🎓</span>
            <div className="hidden md:block">
              <div className="font-black text-xl">Full-Stack Academy</div>
              <div className="text-xs opacity-80">React • Next.js • SQLite</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-2 rounded-lg font-semibold transition-all
                    ${isActive 
                      ? 'bg-white text-purple-600 shadow-lg scale-105' 
                      : 'hover:bg-white/20'
                    }
                  `}
                  title={item.description}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 w-full bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg font-semibold mb-2 transition-all
                    ${isActive 
                      ? 'bg-white text-purple-600' 
                      : 'bg-white/10 hover:bg-white/20'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div>{item.label}</div>
                      {item.description && (
                        <div className="text-xs opacity-70">{item.description}</div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
