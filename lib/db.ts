/**
 * INICJALIZACJA BAZY DANYCH SQLite - lib/db.ts
 * 
 * Ten plik zawiera konfigurację i inicjalizację bazy danych SQLite.
 * 
 * Jak działa SQLite w Next.js:
 * 1. SQLite to lekka, plikowa baza danych (nie wymaga serwera)
 * 2. Plik bazy danych jest przechowywany lokalnie (database.db)
 * 3. better-sqlite3 to synchroniczna biblioteka (szybsza niż asynchroniczna)
 * 4. Baza danych jest inicjalizowana przy pierwszym uruchomieniu
 * 
 * WAŻNE: W Next.js App Router, ten plik będzie używany w API Routes
 * (które działają tylko po stronie serwera)
 */

import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

/**
 * Ścieżka do pliku bazy danych
 * Baza będzie przechowywana w katalogu projektu jako database.db
 */
const dbPath = path.join(process.cwd(), 'database.db');

/**
 * Funkcja do inicjalizacji bazy danych
 * Tworzy plik bazy danych (jeśli nie istnieje) i tabele
 */
function initDatabase() {
  // Utwórz połączenie z bazą danych
  // Jeśli plik nie istnieje, SQLite automatycznie go utworzy
  const db = new Database(dbPath);
  
  // Włącz foreign keys (dla przyszłych relacji między tabelami)
  db.pragma('foreign_keys = ON');
  
  /**
   * Tworzenie tabeli "produkty" (products)
   * 
   * Kolumny:
   * - id: INTEGER PRIMARY KEY - automatycznie zwiększany identyfikator
   * - nazwa: TEXT NOT NULL - nazwa produktu (wymagana)
   * - opis: TEXT - opis produktu (opcjonalny)
   * - cena: REAL - cena produktu (liczba zmiennoprzecinkowa)
   * - utworzono: TEXT DEFAULT CURRENT_TIMESTAMP - data utworzenia
   * 
   * SQLite używa typów: INTEGER, TEXT, REAL, BLOB
   */
  db.exec(`
    CREATE TABLE IF NOT EXISTS produkty (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nazwa TEXT NOT NULL,
      opis TEXT,
      cena REAL NOT NULL,
      utworzono TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  console.log('✅ Baza danych zainicjalizowana pomyślnie');
  
  return db;
}

/**
 * Singleton pattern - zapewnia, że mamy tylko jedno połączenie z bazą
 * 
 * W Node.js, moduły są cache'owane, więc ten kod wykona się tylko raz
 * przy pierwszym imporcie tego pliku
 */
let db: Database.Database | null = null;

/**
 * Funkcja do uzyskania instancji bazy danych
 * Jeśli baza nie istnieje, zostanie utworzona
 */
export function getDatabase(): Database.Database {
  if (!db) {
    db = initDatabase();
  }
  return db;
}

/**
 * Funkcja pomocnicza do zamknięcia połączenia z bazą
 * (przydatne przy testach lub zamykaniu aplikacji)
 */
export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}
