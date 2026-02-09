import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';
import { faker } from '@faker-js/faker';

export async function POST() {
  try {
    const db = getDatabase();
    
    // Generuj 5 losowych lokalizacji z Faker
    const lokalizacje = Array.from({ length: 5 }, () => ({
      miasto: faker.location.city(),
      kraj: faker.location.country(),
      region: faker.location.state(),
    }));
    
    const stmt = db.prepare('INSERT INTO lokalizacje (miasto, kraj, region) VALUES (?, ?, ?)');
    for (const loc of lokalizacje) {
      stmt.run(loc.miasto, loc.kraj, loc.region);
    }
    
    return NextResponse.json({ success: true, dodano: lokalizacje.length, data: lokalizacje });
  } catch (error) {
    console.error('Błąd factory:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Nieznany błąd' },
      { status: 500 }
    );
  }
}
