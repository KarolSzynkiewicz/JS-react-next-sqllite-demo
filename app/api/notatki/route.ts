import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export interface Notatka {
  id: number;
  tytul: string;
  tresc: string;
  utworzono: string;
}

export async function GET() {
  try {
    const db = getDatabase();
    const notatki = db.prepare('SELECT * FROM notatki ORDER BY utworzono DESC').all() as Notatka[];
    return NextResponse.json({ success: true, notatki });
  } catch (error) {
    console.error('Błąd przy pobieraniu notatek:', error);
    return NextResponse.json(
      { success: false, error: 'Błąd przy pobieraniu notatek' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tytul, tresc } = body;

    if (!tytul || !tresc || tytul.trim() === '' || tresc.trim() === '') {
      return NextResponse.json(
        { success: false, error: 'Tytuł i treść są wymagane' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    const result = db
      .prepare('INSERT INTO notatki (tytul, tresc) VALUES (?, ?)')
      .run(tytul.trim(), tresc.trim());

    const nowaNotatka = db
      .prepare('SELECT * FROM notatki WHERE id = ?')
      .get(result.lastInsertRowid) as Notatka;

    return NextResponse.json({ success: true, notatka: nowaNotatka }, { status: 201 });
  } catch (error) {
    console.error('Błąd przy tworzeniu notatki:', error);
    return NextResponse.json(
      { success: false, error: 'Błąd przy tworzeniu notatki' },
      { status: 500 }
    );
  }
}
