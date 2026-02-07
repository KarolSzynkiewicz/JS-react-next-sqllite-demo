/**
 * API ROUTE - app/api/pogoda/route.ts
 * 
 * Endpoint do pobierania danych pogodowych z zewnętrznego API.
 * 
 * Jak działa:
 * 1. Frontend wysyła request z nazwą miasta
 * 2. Ten endpoint (Server-side) łączy się z OpenWeatherMap API
 * 3. Zwraca dane pogodowe jako JSON
 * 
 * WAŻNE: Aby działało, musisz mieć API key z OpenWeatherMap:
 * 1. Zarejestruj się na https://openweathermap.org/api (darmowe)
 * 2. Utwórz plik .env.local w katalogu projektu
 * 3. Dodaj: OPENWEATHER_API_KEY=twoj_klucz_api
 * 
 * Endpoint: GET /api/pogoda?miasto=Warszawa
 */

import { NextRequest, NextResponse } from 'next/server';

/**
 * Funkcja pomocnicza do pobierania pogody z alternatywnego API (wttr.in)
 * To API nie wymaga klucza i jest darmowe
 */
async function getWeatherFromWttr(miasto: string) {
  try {
    // wttr.in - darmowe API pogodowe, nie wymaga klucza
    const url = `https://wttr.in/${encodeURIComponent(miasto)}?format=j1&lang=pl`;
    const response = await fetch(url, { cache: 'no-store' });
    
    if (!response.ok) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Nie znaleziono miasta: ${miasto}` 
        },
        { status: 404 }
      );
    }
    
    const data = await response.json();
    const current = data.current_condition[0];
    
    return NextResponse.json({
      success: true,
      miasto: data.nearest_area[0].areaName[0].value,
      kraj: data.nearest_area[0].country[0].value || 'N/A',
      temperatura: parseInt(current.temp_C),
      temperaturaOdczuwalna: parseInt(current.FeelsLikeC),
      wilgotnosc: parseInt(current.humidity),
      opis: current.lang_pl ? current.lang_pl[0].value : current.weatherDesc[0].value,
      predkoscWiatru: parseFloat(current.windspeedKmph) / 3.6, // km/h na m/s
      cisnienie: parseInt(current.pressure),
      ikonaUrl: null, // wttr.in nie ma ikon w formacie JSON
      zrodlo: 'wttr.in (alternatywne API)'
    });
  } catch (error) {
    console.error('Błąd przy pobieraniu z wttr.in:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Błąd połączenia z alternatywnym API pogodowym' 
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/pogoda?miasto=Warszawa
 * Pobiera dane pogodowe dla danego miasta
 * 
 * Query parameters:
 * - miasto: nazwa miasta (wymagane)
 */
export async function GET(request: NextRequest) {
  try {
    // Pobierz nazwę miasta z query parameters
    const searchParams = request.nextUrl.searchParams;
    const miasto = searchParams.get('miasto');
    
    // Logowanie dla debugowania (tylko w development)
    if (process.env.NODE_ENV === 'development') {
      console.log('🌤️ Request pogody dla miasta:', miasto);
    }
    
    // Walidacja - sprawdź czy miasto zostało podane
    if (!miasto || miasto.trim() === '') {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Nazwa miasta jest wymagana. Użyj: /api/pogoda?miasto=Warszawa' 
        },
        { status: 400 }
      );
    }
    
    // Pobierz API key ze zmiennych środowiskowych
    // W Next.js zmienne środowiskowe są dostępne przez process.env
    // Pliki .env, .env.local, .env.development są automatycznie ładowane przez Next.js
    // WAŻNE: W Next.js 13+ zmienne środowiskowe muszą zaczynać się od NEXT_PUBLIC_ aby były dostępne w przeglądarce
    // Ale dla API routes (server-side) wszystkie zmienne są dostępne
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    // Debug: sprawdź czy API key jest dostępny (tylko w development)
    if (process.env.NODE_ENV === 'development' && !apiKey) {
      console.warn('⚠️ OPENWEATHER_API_KEY nie jest ustawiony w zmiennych środowiskowych');
    }
    
    // Jeśli nie ma API key, użyj alternatywnego API (wttr.in - darmowe, bez klucza)
    if (!apiKey) {
      console.log('⚠️ Brak API key - używam alternatywnego API (wttr.in)');
      return await getWeatherFromWttr(miasto);
    }
    
    /**
     * Wywołanie zewnętrznego API OpenWeatherMap
     * 
     * Endpoint: https://api.openweathermap.org/data/2.5/weather
     * 
     * Parametry:
     * - q: nazwa miasta
     * - appid: API key
     * - units: metric (temperatura w Celsiuszach)
     * - lang: pl (odpowiedzi po polsku)
     */
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(miasto)}&appid=${apiKey}&units=metric&lang=pl`;
    
    // Wykonaj request do zewnętrznego API
    // fetch() działa w Node.js 18+ (Next.js używa tego)
    // cache: 'no-store' - wyłącza cache, aby zawsze pobierać świeże dane
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      // Dodatkowe opcje dla lepszej obsługi błędów
      headers: {
        'Accept': 'application/json',
      }
    });
    
    // Logowanie dla debugowania
    if (process.env.NODE_ENV === 'development') {
      console.log('📡 Status odpowiedzi z OpenWeatherMap:', response.status);
      console.log('🔍 URL:', apiUrl.replace(apiKey, 'API_KEY_HIDDEN'));
    }
    
    // Sprawdź status odpowiedzi
    if (!response.ok) {
      // Loguj szczegóły błędu w development
      if (process.env.NODE_ENV === 'development') {
        console.error('❌ Błąd z OpenWeatherMap API:', response.status, response.statusText);
      }
      
      // Jeśli status 401 (nieprawidłowy API key) - od razu użyj alternatywnego API
      if (response.status === 401) {
        console.log('⚠️ Błąd 401 (nieprawidłowy API key) - przełączam na alternatywne API (wttr.in)');
        return await getWeatherFromWttr(miasto);
      }
      
      // Jeśli status 404 - miasto nie znalezione
      if (response.status === 404) {
        return NextResponse.json(
          { 
            success: false, 
            error: `Nie znaleziono miasta: ${miasto}. Sprawdź pisownię.` 
          },
          { status: 404 }
        );
      }
      
      // Inne błędy API - spróbuj sparsować odpowiedź
      let errorMessage = 'Błąd połączenia z API pogodowym';
      let errorDetails = '';
      
      try {
        const errorData = await response.json();
        
        // Loguj szczegóły błędu w development
        if (process.env.NODE_ENV === 'development') {
          console.error('📋 Szczegóły błędu z API:', JSON.stringify(errorData, null, 2));
        }
        
        // Sprawdź kod błędu w odpowiedzi (może być string lub number)
        const errorCode = errorData.cod;
        if (errorCode === '401' || errorCode === 401) {
          // Jeśli API key jest nieprawidłowy, użyj alternatywnego API
          console.log('⚠️ Nieprawidłowy API key (401) - przełączam na alternatywne API (wttr.in)');
          return await getWeatherFromWttr(miasto);
        }
        
        errorMessage = errorData.message || 'Nieznany błąd';
        errorDetails = errorData.message || `Status: ${response.status}`;
        
        // Specjalna obsługa dla różnych kodów błędów
        if (errorCode === '429' || errorCode === 429) {
          errorMessage = 'Zbyt wiele requestów. Spróbuj za chwilę.';
        } else if (errorData.cod === '404') {
          errorMessage = `Nie znaleziono miasta: ${miasto}. Spróbuj użyć angielskiej nazwy (np. "Gdansk" zamiast "Gdańsk").`;
        } else if (errorData.cod) {
          errorMessage = `Błąd API (kod ${errorData.cod}): ${errorData.message || 'Nieznany błąd'}`;
        }
      } catch (parseError) {
        if (process.env.NODE_ENV === 'development') {
          console.error('❌ Błąd parsowania odpowiedzi błędu:', parseError);
        }
        // Jeśli nie można sparsować JSON, użyj statusu
        errorMessage = `Błąd HTTP ${response.status}: ${response.statusText}`;
        errorDetails = `Nie można sparsować odpowiedzi z API`;
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: errorMessage,
          details: errorDetails,
          statusCode: response.status
        },
        { status: response.status }
      );
    }
    
    // Parsuj odpowiedź JSON
    const data = await response.json();
    
    /**
     * Formatujemy odpowiedź do czytelniejszej formy
     * 
     * Struktura odpowiedzi z OpenWeatherMap:
     * - name: nazwa miasta
     * - main.temp: temperatura
     * - main.feels_like: temperatura odczuwalna
     * - main.humidity: wilgotność
     * - weather[0].description: opis pogody
     * - weather[0].icon: ikona pogody
     * - wind.speed: prędkość wiatru
     */
    const formattedData = {
      success: true,
      miasto: data.name,
      kraj: data.sys?.country || 'N/A',
      temperatura: Math.round(data.main.temp),
      temperaturaOdczuwalna: Math.round(data.main.feels_like),
      wilgotnosc: data.main.humidity,
      opis: data.weather[0]?.description || 'Brak opisu',
      ikona: data.weather[0]?.icon || '',
      predkoscWiatru: data.wind?.speed || 0,
      cisnienie: data.main?.pressure || 0,
      // Pełny URL do ikony pogody
      ikonaUrl: data.weather[0]?.icon 
        ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        : null,
      // Surowe dane (dla zaawansowanych)
      suroweDane: data
    };
    
    return NextResponse.json(formattedData);
    
  } catch (error) {
    console.error('Błąd przy pobieraniu pogody:', error);
    
    // Obsługa różnych typów błędów
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Błąd serwera',
          details: error.message 
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Nieznany błąd przy pobieraniu danych pogodowych' 
      },
      { status: 500 }
    );
  }
}
