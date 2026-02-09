import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function GET() {
  try {
    const db = getDatabase();
    const lokalizacje = db.prepare('SELECT * FROM lokalizacje ORDER BY id DESC').all();
    return NextResponse.json({ success: true, data: lokalizacje });
  } catch (error) {
    console.error('Błąd pobierania lokalizacji:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Nieznany błąd', data: [] },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const db = getDatabase();
  const body = await request.json();
  const stmt = db.prepare('INSERT INTO lokalizacje (miasto, kraj, region) VALUES (?, ?, ?)');
  const result = stmt.run(body.miasto, body.kraj, body.region || null);
  const nowy = db.prepare('SELECT * FROM lokalizacje WHERE id = ?').get(result.lastInsertRowid);
  return NextResponse.json({ success: true, data: nowy });
}
