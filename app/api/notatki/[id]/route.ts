import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const noteId = parseInt(id);

    if (isNaN(noteId)) {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowe ID' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    const result = db.prepare('DELETE FROM notatki WHERE id = ?').run(noteId);

    if (result.changes === 0) {
      return NextResponse.json(
        { success: false, error: 'Notatka nie znaleziona' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Błąd przy usuwaniu notatki:', error);
    return NextResponse.json(
      { success: false, error: 'Błąd przy usuwaniu notatki' },
      { status: 500 }
    );
  }
}
