import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function POST() {
  try {
    const db = getDatabase();
    
    // Wyczyść istniejące lokalizacje
    db.prepare('DELETE FROM lokalizacje').run();
    
    // Dodaj 5 stałych lokalizacji
    const lokalizacje = [
      { miasto: 'Warszawa', kraj: 'Poland', region: 'Mazowieckie' },
      { miasto: 'Kraków', kraj: 'Poland', region: 'Małopolskie' },
      { miasto: 'Gdańsk', kraj: 'Poland', region: 'Pomorskie' },
      { miasto: 'Wrocław', kraj: 'Poland', region: 'Dolnośląskie' },
      { miasto: 'Poznań', kraj: 'Poland', region: 'Wielkopolskie' },
    ];
    
    const stmt = db.prepare('INSERT INTO lokalizacje (miasto, kraj, region) VALUES (?, ?, ?)');
    for (const loc of lokalizacje) {
      stmt.run(loc.miasto, loc.kraj, loc.region);
    }
    
    return NextResponse.json({ success: true, dodano: lokalizacje.length });
  } catch (error) {
    console.error('Błąd seedera:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Nieznany błąd' },
      { status: 500 }
    );
  }
}
