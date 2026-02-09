import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function POST() {
  try {
    const db = getDatabase();
    const result = db.prepare('DELETE FROM lokalizacje').run();
    return NextResponse.json({ success: true, usunieto: result.changes });
  } catch (error) {
    console.error('Błąd przy usuwaniu lokalizacji:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Nieznany błąd' },
      { status: 500 }
    );
  }
}
