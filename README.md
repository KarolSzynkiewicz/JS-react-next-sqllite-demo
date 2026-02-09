# 🚀 Interactive Full-Stack Learning Platform

Edukacyjna platforma do nauki React, Next.js i SQLite przez interaktywne eksperymenty.

## ✨ Funkcje

- **Live Demo** - Interaktywna demonstracja pełnego stacku technologicznego
- **Flow Map** - Wizualizacja przepływu danych przez cały stack
- **Code Explorer** - Przeglądaj kod każdego kroku z wyjaśnieniami line-by-line
- **Test Wiedzy** - Interaktywny quiz z 10 pytaniami (beginner → advanced)
- **Zasoby** - Linki do dokumentacji, tutoriali i dodatkowych materiałów
- **Szczegółowe wyjaśnienia techniczne** - Zobacz co się dzieje pod spodem (React rendering, Virtual DOM, Tailwind CSS, etc.)

## 🛠️ Technologie

- **React 19.2.3** - Biblioteka do budowy interfejsów użytkownika
- **Next.js 16.1.6** - Framework React z App Router
- **SQLite (better-sqlite3)** - Lekka, plikowa baza danych
- **TypeScript 5** - Typowany JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

## 🚀 Lokalne uruchomienie

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Otwórz http://localhost:3000
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000)

### Baza danych

SQLite baza danych jest automatycznie tworzona przy pierwszym uruchomieniu w pliku `database.db`. Tabele są inicjalizowane automatycznie przez `lib/db.ts`.

## 📦 Wdrożenie na Railway

### Opcja 1: Przez GitHub (Rekomendowane)

1. **Zaloguj się do Railway**
   - Przejdź na [railway.app](https://railway.app)
   - Zaloguj się przez GitHub

2. **Utwórz nowy projekt**
   - Kliknij "New Project"
   - Wybierz "Deploy from GitHub repo"
   - Wybierz repozytorium: `KarolSzynkiewicz/JS-react-next-sqllite-demo`

3. **Railway automatycznie wykryje Next.js**
   - Railway automatycznie wykryje, że to projekt Next.js
   - Użyje `npm run build` do budowy
   - Użyje `npm start` do uruchomienia

4. **Baza danych**
   - SQLite baza danych będzie automatycznie tworzona przy pierwszym uruchomieniu
   - **UWAGA**: Railway używa ephemeral filesystem - baza danych będzie resetowana przy każdym redeploy
   - Dla produkcji rozważ użycie Railway PostgreSQL lub zewnętrznej bazy danych

5. **Dodaj domenę (opcjonalnie)**
   - W ustawieniach projektu możesz dodać własną domenę
   - Railway automatycznie wygeneruje HTTPS certyfikat

### Opcja 2: Przez Railway CLI

```bash
# Zainstaluj Railway CLI
npm i -g @railway/cli

# Zaloguj się
railway login

# Zainicjalizuj projekt
railway init

# Wdróż
railway up
```

## 🔧 Konfiguracja

### Zmienne środowiskowe

Projekt nie wymaga żadnych zmiennych środowiskowych do podstawowego działania. Baza danych SQLite jest tworzona automatycznie.

### Port

Railway automatycznie ustawia zmienną środowiskową `PORT`. Next.js automatycznie użyje tego portu.

## 📚 Struktura projektu

```
moj-projekt/
├── app/
│   ├── api/              # API Routes (Next.js)
│   │   ├── notatki/      # CRUD dla notatek
│   │   └── lokalizacje/  # CRUD dla lokalizacji
│   ├── components/       # Komponenty React
│   ├── demo/             # Strona demo
│   └── page.tsx          # Strona główna
├── lib/
│   └── db.ts             # Inicjalizacja SQLite
├── docs/                 # Dokumentacja
└── railway.json          # Konfiguracja Railway
```

## 🎓 Jak korzystać

1. **Live Demo** - Dodawaj i usuwaj notatki, obserwując każdy krok w czasie rzeczywistym
2. **Flow Map** - Kliknij node żeby zobaczyć szczegóły przepływu danych
3. **Code Explorer** - Przeglądaj kod z wyjaśnieniami line-by-line
4. **Test Wiedzy** - Sprawdź swoją wiedzę o React, Next.js i SQLite
5. **Zasoby** - Kontynuuj naukę z curated resources

## 📝 Licencja

Ten projekt jest stworzony jako edukacyjne demo.

## 🔗 Linki

- [GitHub Repository](https://github.com/KarolSzynkiewicz/JS-react-next-sqllite-demo)
- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
