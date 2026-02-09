import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

async function getWeatherFromWttr(miasto: string) {
  const url = `https://wttr.in/${encodeURIComponent(miasto)}?format=j1&lang=pl`;
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) return null;
  const data = await response.json();
  const current = data.current_condition[0];
  return `${parseInt(current.temp_C)}°C - ${current.lang_pl ? current.lang_pl[0].value : current.weatherDesc[0].value}`;
}

export async function POST() {
  try {
    const db = getDatabase();
    const lokalizacje = db.prepare('SELECT * FROM lokalizacje').all() as Array<{id: number, miasto: string}>;
    
    if (lokalizacje.length === 0) {
      return NextResponse.json({ success: false, error: 'Brak lokalizacji w bazie' }, { status: 400 });
    }
    
    const dataSprawdzenia = new Date().toISOString();
    let zaktualizowano = 0;
    
    for (const loc of lokalizacje) {
      try {
        const pogodaTekst = await getWeatherFromWttr(loc.miasto);
        db.prepare('UPDATE lokalizacje SET pogoda = ?, data_sprawdzenia = ? WHERE id = ?')
          .run(pogodaTekst || 'Brak danych', dataSprawdzenia, loc.id);
        zaktualizowano++;
      } catch (error) {
        console.error(`Błąd dla ${loc.miasto}:`, error);
      }
    }
    
    return NextResponse.json({ success: true, zaktualizowano });
  } catch (error) {
    console.error('Błąd pobierania pogody:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Nieznany błąd' },
      { status: 500 }
    );
  }
}
