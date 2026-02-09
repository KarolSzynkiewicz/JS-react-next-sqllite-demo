import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function POST() {
  const db = getDatabase();
  const result = db.prepare('DELETE FROM lokalizacje').run();
  return NextResponse.json({ success: true, usunieto: result.changes });
}
