/**
 * API ROUTE - app/api/produkty/[id]/route.ts
 * 
 * Dynamiczny route dla pojedynczego produktu
 * 
 * Jak działa dynamic routing w Next.js API:
 * 1. Folder [id] tworzy dynamiczny segment URL
 * 2. app/api/produkty/[id]/route.ts → endpoint: /api/produkty/123
 * 3. Parametr [id] jest dostępny w request.nextUrl.pathname
 * 
 * Endpoints:
 * - GET /api/produkty/1 - pobierz produkt o ID 1
 * - PUT /api/produkty/1 - zaktualizuj produkt o ID 1
 * - DELETE /api/produkty/1 - usuń produkt o ID 1
 */

import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

/**
 * GET /api/produkty/[id]
 * Pobiera jeden produkt po ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase();
    const id = parseInt(params.id, 10);
    
    // Walidacja ID
    if (isNaN(id) || id <= 0) {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowe ID produktu' },
        { status: 400 }
      );
    }
    
    /**
     * Pobierz produkt z bazy danych
     * 
     * .get() zwraca jeden wiersz lub undefined jeśli nie znaleziono
     * Używamy prepared statement z parametrem ? dla bezpieczeństwa
     */
    const produkt = db.prepare('SELECT * FROM produkty WHERE id = ?').get(id);
    
    if (!produkt) {
      return NextResponse.json(
        { success: false, error: 'Produkt nie został znaleziony' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: produkt
    });
    
  } catch (error) {
    console.error('Błąd przy pobieraniu produktu:', error);
    return NextResponse.json(
      { success: false, error: 'Nie udało się pobrać produktu' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/produkty/[id]
 * Aktualizuje istniejący produkt
 * 
 * Body (JSON):
 * {
 *   "nazwa": "Nowa nazwa",
 *   "opis": "Nowy opis",
 *   "cena": 149.99
 * }
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase();
    const id = parseInt(params.id, 10);
    
    // Walidacja ID
    if (isNaN(id) || id <= 0) {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowe ID produktu' },
        { status: 400 }
      );
    }
    
    // Sprawdź czy produkt istnieje
    const istnieje = db.prepare('SELECT id FROM produkty WHERE id = ?').get(id);
    if (!istnieje) {
      return NextResponse.json(
        { success: false, error: 'Produkt nie został znaleziony' },
        { status: 404 }
      );
    }
    
    // Pobierz dane z body
    const body = await request.json();
    const { nazwa, opis, cena } = body;
    
    // Walidacja danych
    if (cena !== undefined && (typeof cena !== 'number' || cena < 0)) {
      return NextResponse.json(
        { success: false, error: 'Cena musi być liczbą dodatnią' },
        { status: 400 }
      );
    }
    
    /**
     * Aktualizacja produktu
     * 
     * Budujemy zapytanie dynamicznie, aktualizując tylko podane pola
     * UPDATE produkty SET kolumna = wartość WHERE id = ?
     */
    const updates: string[] = [];
    const values: any[] = [];
    
    if (nazwa !== undefined) {
      updates.push('nazwa = ?');
      values.push(nazwa);
    }
    if (opis !== undefined) {
      updates.push('opis = ?');
      values.push(opis);
    }
    if (cena !== undefined) {
      updates.push('cena = ?');
      values.push(cena);
    }
    
    if (updates.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Brak danych do aktualizacji' },
        { status: 400 }
      );
    }
    
    values.push(id); // ID na końcu dla WHERE
    
    const query = `UPDATE produkty SET ${updates.join(', ')} WHERE id = ?`;
    db.prepare(query).run(...values);
    
    // Pobierz zaktualizowany produkt
    const zaktualizowanyProdukt = db.prepare('SELECT * FROM produkty WHERE id = ?').get(id);
    
    return NextResponse.json({
      success: true,
      data: zaktualizowanyProdukt,
      message: 'Produkt został zaktualizowany pomyślnie'
    });
    
  } catch (error) {
    console.error('Błąd przy aktualizacji produktu:', error);
    return NextResponse.json(
      { success: false, error: 'Nie udało się zaktualizować produktu' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/produkty/[id]
 * Usuwa produkt z bazy danych
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase();
    const id = parseInt(params.id, 10);
    
    // Walidacja ID
    if (isNaN(id) || id <= 0) {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowe ID produktu' },
        { status: 400 }
      );
    }
    
    // Sprawdź czy produkt istnieje
    const produkt = db.prepare('SELECT * FROM produkty WHERE id = ?').get(id);
    if (!produkt) {
      return NextResponse.json(
        { success: false, error: 'Produkt nie został znaleziony' },
        { status: 404 }
      );
    }
    
    /**
     * Usunięcie produktu z bazy danych
     * 
     * DELETE FROM produkty WHERE id = ?
     * .run() zwraca informacje o liczbie usuniętych wierszy
     */
    const result = db.prepare('DELETE FROM produkty WHERE id = ?').run(id);
    
    return NextResponse.json({
      success: true,
      message: 'Produkt został usunięty pomyślnie',
      deletedId: id
    });
    
  } catch (error) {
    console.error('Błąd przy usuwaniu produktu:', error);
    return NextResponse.json(
      { success: false, error: 'Nie udało się usunąć produktu' },
      { status: 500 }
    );
  }
}
