import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params;
  const db = getDatabase();
  const id = parseInt(idParam);
  const body = await request.json();
  
  const updates: string[] = [];
  const values: any[] = [];
  if (body.miasto) { updates.push('miasto = ?'); values.push(body.miasto); }
  if (body.kraj) { updates.push('kraj = ?'); values.push(body.kraj); }
  if (body.region !== undefined) { updates.push('region = ?'); values.push(body.region); }
  
  if (updates.length === 0) {
    return NextResponse.json({ success: false, error: 'Brak danych do aktualizacji' }, { status: 400 });
  }
  
  values.push(id);
  db.prepare(`UPDATE lokalizacje SET ${updates.join(', ')} WHERE id = ?`).run(...values);
  const zaktualizowany = db.prepare('SELECT * FROM lokalizacje WHERE id = ?').get(id);
  return NextResponse.json({ success: true, data: zaktualizowany });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params;
  const db = getDatabase();
  const id = parseInt(idParam);
  db.prepare('DELETE FROM lokalizacje WHERE id = ?').run(id);
  return NextResponse.json({ success: true, deletedId: id });
}
