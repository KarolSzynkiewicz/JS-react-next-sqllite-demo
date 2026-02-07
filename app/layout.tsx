/**
 * ROOT LAYOUT - app/layout.tsx
 * 
 * To jest główny layout aplikacji Next.js. Jest to specjalny plik, który:
 * 1. Obejmuje WSZYSTKIE strony w aplikacji
 * 2. Definiuje strukturę HTML (html, body)
 * 3. Ładuje globalne style CSS
 * 4. Konfiguruje czcionki i metadane
 * 
 * Jak działa layout w Next.js:
 * - Layout.tsx w katalogu app/ jest root layoutem (obejmuje całą aplikację)
 * - Możesz tworzyć nested layouts w podfolderach (np. app/blog/layout.tsx)
 * - Layouty są "wrappowane" wokół stron - nie przeładowują się przy nawigacji
 * - {children} to miejsce, gdzie renderuje się zawartość aktualnej strony
 * 
 * Hierarchia renderowania:
 * RootLayout → {children} (aktualna strona: page.tsx)
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Konfiguracja czcionek z Google Fonts
 * Next.js automatycznie optymalizuje czcionki:
 * - Pobiera tylko potrzebne znaki (subset)
 * - Preloaduje czcionki dla lepszej wydajności
 * - Tworzy zmienne CSS do użycia w Tailwind
 */
const geistSans = Geist({
  variable: "--font-geist-sans",  // Zmienna CSS dostępna w całej aplikacji
  subsets: ["latin"],              // Tylko znaki łacińskie (mniejszy rozmiar)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadane strony - używane do SEO i wyświetlania w przeglądarce
 * Te metadane są domyślne dla wszystkich stron
 * Możesz je nadpisać w każdym page.tsx używając export const metadata
 */
export const metadata: Metadata = {
  title: "Lekcja Next.js - Routing",
  description: "Praktyczna lekcja routingu w Next.js App Router",
};

/**
 * RootLayout - główny komponent layoutu
 * 
 * Właściwości:
 * - children: React.ReactNode - zawartość aktualnej strony (page.tsx)
 * 
 * Jak to działa:
 * 1. Gdy użytkownik odwiedza / → renderuje się RootLayout z app/page.tsx jako children
 * 2. Gdy użytkownik odwiedza /o-nas → renderuje się RootLayout z app/o-nas/page.tsx jako children
 * 3. Layout NIE przeładowuje się przy nawigacji - tylko children się zmienia!
 * 
 * To jest Server Component (domyślnie w Next.js 13+)
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* 
        Atrybut lang="pl" ustawia język strony (ważne dla SEO i dostępności)
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        /*
          className zawiera:
          - Zmienne czcionek (dostępne w Tailwind jako font-sans, font-mono)
          - antialiased: lepsze wygładzanie tekstu
        */
      >
        {/* 
          {children} - tutaj renderuje się zawartość aktualnej strony
          
          Przykład dla /:
          <RootLayout>
            <Home />  ← app/page.tsx
          </RootLayout>
          
          Przykład dla /o-nas:
          <RootLayout>
            <About />  ← app/o-nas/page.tsx
          </RootLayout>
          
          Layout pozostaje ten sam, zmienia się tylko children!
        */}
        {children}
      </body>
    </html>
  );
}
