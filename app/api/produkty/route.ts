/**
 * API ROUTE - app/api/produkty/route.ts
 * 
 * To jest API Route w Next.js App Router.
 * 
 * Jak działają API Routes w Next.js:
 * 1. Pliki w folderze app/api/ automatycznie stają się endpointami API
 * 2. app/api/produkty/route.ts → endpoint: /api/produkty
 * 3. Eksportujemy funkcje HTTP: GET, POST, PUT, DELETE
 * 4. Te funkcje działają TYLKO po stronie serwera (Server-side)
 * 
 * CRUD Operations:
 * - CREATE: POST /api/produkty (dodaj nowy produkt)
 * - READ: GET /api/produkty (pobierz wszystkie produkty)
 * - READ: GET /api/produkty/[id] (pobierz jeden produkt)
 * - UPDATE: PUT /api/produkty/[id] (zaktualizuj produkt)
 * - DELETE: DELETE /api/produkty/[id] (usuń produkt)
 */

import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

/**
 * GET /api/produkty
 * Pobiera wszystkie produkty z bazy danych
 * 
 * Query parameters (opcjonalne):
 * - ?limit=10 - limit ilości wyników
 * - ?sort=asc|desc - sortowanie po cenie
 */
export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    
    // Pobierz parametry z URL (query string)
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get('limit');
    const sort = searchParams.get('sort') || 'asc';
    
    /**
     * Przygotowanie zapytania SQL
     * 
     * better-sqlite3 używa prepared statements dla bezpieczeństwa
     * (zapobiega SQL injection)
     */
    let query = 'SELECT * FROM produkty';
    
    // Dodaj sortowanie
    if (sort === 'desc') {
      query += ' ORDER BY cena DESC';
    } else {
      query += ' ORDER BY cena ASC';
    }
    
    // Dodaj limit jeśli podano
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        query += ` LIMIT ${limitNum}`;
      }
    }
    
    // Wykonaj zapytanie
    // .all() zwraca wszystkie wiersze jako tablicę
    const produkty = db.prepare(query).all();
    
    // Zwróć dane jako JSON
    return NextResponse.json({
      success: true,
      data: produkty,
      count: produkty.length
    });
    
  } catch (error) {
    console.error('Błąd przy pobieraniu produktów:', error);
    return NextResponse.json(
      { success: false, error: 'Nie udało się pobrać produktów' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/produkty
 * Tworzy nowy produkt w bazie danych
 * 
 * Body (JSON):
 * {
 *   "nazwa": "Nazwa produktu",
 *   "opis": "Opis produktu",
 *   "cena": 99.99
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    
    // Pobierz dane z body requesta
    const body = await request.json();
    const { nazwa, opis, cena } = body;
    
    // Walidacja danych
    if (!nazwa || !cena) {
      return NextResponse.json(
        { success: false, error: 'Nazwa i cena są wymagane' },
        { status: 400 }
      );
    }
    
    if (typeof cena !== 'number' || cena < 0) {
      return NextResponse.json(
        { success: false, error: 'Cena musi być liczbą dodatnią' },
        { status: 400 }
      );
    }
    
    /**
     * Wstawienie nowego rekordu do bazy danych
     * 
     * .run() wykonuje zapytanie i zwraca informacje o wykonaniu
     * lastInsertRowid - ID ostatnio wstawionego rekordu
     */
    const stmt = db.prepare(`
      INSERT INTO produkty (nazwa, opis, cena)
      VALUES (?, ?, ?)
    `);
    
    const result = stmt.run(nazwa, opis || null, cena);
    
    // Pobierz utworzony produkt
    const nowyProdukt = db.prepare('SELECT * FROM produkty WHERE id = ?').get(result.lastInsertRowid);
    
    return NextResponse.json({
      success: true,
      data: nowyProdukt,
      message: 'Produkt został utworzony pomyślnie'
    }, { status: 201 });
    
  } catch (error) {
    console.error('Błąd przy tworzeniu produktu:', error);
    return NextResponse.json(
      { success: false, error: 'Nie udało się utworzyć produktu' },
      { status: 500 }
    );
  }
}
