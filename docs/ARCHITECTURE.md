# 🏗️ Architecture & Visual Diagrams

## 📊 Complete System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                                │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    React Application                          │  │
│  │                                                               │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │  │
│  │  │   NoteForm   │  │   NoteList   │  │   Timeline   │       │  │
│  │  │              │  │              │  │              │       │  │
│  │  │  [useState]  │  │  [map/key]   │  │  [events]    │       │  │
│  │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │  │
│  │         │                  │                  │               │  │
│  │         └──────────────────┴──────────────────┘               │  │
│  │                            │                                  │  │
│  │                    ┌───────▼────────┐                         │  │
│  │                    │ StackDemo      │                         │  │
│  │                    │ (Main Logic)   │                         │  │
│  │                    │                │                         │  │
│  │                    │ • handleAdd    │                         │  │
│  │                    │ • handleDelete │                         │  │
│  │                    │ • fetchNotes   │                         │  │
│  │                    └───────┬────────┘                         │  │
│  │                            │                                  │  │
│  └────────────────────────────┼──────────────────────────────────┘  │
│                               │                                     │
│                        [Fetch API]                                  │
│                               │                                     │
└───────────────────────────────┼─────────────────────────────────────┘
                                │
                         HTTP Request
                         (GET/POST/DELETE)
                                │
┌───────────────────────────────▼─────────────────────────────────────┐
│                        Next.js Server                               │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    API Routes Handler                        │  │
│  │                                                              │  │
│  │  app/api/notatki/route.ts                                   │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │  │
│  │  │   GET    │  │   POST   │  │  DELETE  │                   │  │
│  │  │ (fetch)  │  │  (add)   │  │ (remove) │                   │  │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘                   │  │
│  │       │             │             │                          │  │
│  │       └─────────────┴─────────────┘                          │  │
│  │                     │                                        │  │
│  │              ┌──────▼───────┐                                │  │
│  │              │ getDatabase()│                                │  │
│  │              └──────┬───────┘                                │  │
│  └─────────────────────┼────────────────────────────────────────┘  │
│                        │                                           │
│                        │                                           │
│  ┌─────────────────────▼────────────────────────────────────────┐  │
│  │                  SQLite Database                             │  │
│  │                                                              │  │
│  │  database.db                                                 │  │
│  │  ┌─────────────────────────────────────────────────────────┐ │  │
│  │  │ Table: notatki                                          │ │  │
│  │  │ ┌────┬─────────┬─────────┬──────────────┬──────────────┐ │ │  │
│  │  │ │ id │ tytul   │ tresc   │ utworzona_o  │ zaktualizow  │ │ │  │
│  │  │ ├────┼─────────┼─────────┼──────────────┼──────────────┤ │ │  │
│  │  │ │ 1  │ "Title" │ "Text"  │ 2024-01-01   │ 2024-01-01   │ │ │  │
│  │  │ │ 2  │ ...     │ ...     │ ...          │ ...          │ │ │  │
│  │  │ └────┴─────────┴─────────┴──────────────┴──────────────┘ │ │  │
│  │  └─────────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## 🔄 Data Flow Diagram - Add Note Example

```
┌─────────┐
│  USER   │ "I want to add a note"
└────┬────┘
     │
     │ 1. Types in form
     │    - title: "My Note"
     │    - content: "Hello World"
     ▼
┌─────────────────┐
│   NOTEFORM      │
│  (React Input)  │
└────┬────────────┘
     │
     │ 2. onClick submit button
     │    → handleAddNote(title, content)
     ▼
┌─────────────────┐
│  STACKDEMO      │
│  (Event Handler)│
└────┬────────────┘
     │
     │ 3. Prepare POST request
     │    body: { tytul: "My Note", tresc: "Hello World" }
     ▼
┌─────────────────┐
│   FETCH API     │
│  (Browser API)  │
└────┬────────────┘
     │
     │ 4. HTTP POST /api/notatki
     │    Content-Type: application/json
     ▼
     │
    ╱│╲  Internet / Network
   ╱ │ ╲
  ╱  │  ╲
     │
     ▼
┌─────────────────┐
│   NEXT.JS       │
│  (Server Side)  │
└────┬────────────┘
     │
     │ 5. Route to /api/notatki/route.ts
     │    → POST function
     ▼
┌─────────────────┐
│  API HANDLER    │
│  (Node.js)      │
└────┬────────────┘
     │
     │ 6. Extract body
     │    const { tytul, tresc } = await request.json()
     ▼
┌─────────────────┐
│   DATABASE      │
│  (better-sqlite3)│
└────┬────────────┘
     │
     │ 7. Execute SQL
     │    INSERT INTO notatki (tytul, tresc)
     │    VALUES (?, ?)
     ▼
┌─────────────────┐
│  database.db    │
│  (SQLite File)  │
└────┬────────────┘
     │
     │ 8. Return inserted row ID
     │    { id: 3, tytul: "My Note", ... }
     ▼
┌─────────────────┐
│  API HANDLER    │
└────┬────────────┘
     │
     │ 9. Create JSON response
     │    Response.json({ success: true, notatka: {...} })
     ▼
     │
    ╱│╲  Network Response
   ╱ │ ╲
  ╱  │  ╲
     │
     ▼
┌─────────────────┐
│   FETCH API     │
│  (Browser)      │
└────┬────────────┘
     │
     │ 10. Parse JSON
     │     const data = await response.json()
     ▼
┌─────────────────┐
│  STACKDEMO      │
└────┬────────────┘
     │
     │ 11. Call fetchNotes() to refresh list
     │     → GET /api/notatki
     ▼
┌─────────────────┐
│  REACT STATE    │
└────┬────────────┘
     │
     │ 12. setNotes(newData)
     │     → Trigger re-render
     ▼
┌─────────────────┐
│  REACT DOM      │
└────┬────────────┘
     │
     │ 13. Virtual DOM diff
     │     → Update only changed nodes
     ▼
┌─────────────────┐
│  BROWSER DOM    │
└────┬────────────┘
     │
     │ 14. Repaint screen
     ▼
┌─────────┐
│  USER   │ "I see my new note! ✨"
└─────────┘

Total time: ~100-300ms
```

## 📁 File Structure with Purpose

```
project-root/
│
├── app/
│   ├── demo/
│   │   ├── page.tsx                    # Entry point - renders EducationalStackDemo
│   │   │                               # Purpose: Route component for /demo
│   │   │
│   │   ├── EducationalStackDemo.tsx    # Main app shell with tab navigation
│   │   │                               # Purpose: Orchestrates all major components
│   │   │                               # Features: Tab switching, state management
│   │   │
│   │   ├── StackDemoEnhanced.tsx       # Live interactive demo
│   │   │                               # Purpose: Main CRUD operations with timeline
│   │   │                               # Features: Add/delete notes, real-time logging
│   │   │                               # Dependencies: NoteForm, NoteList
│   │   │
│   │   ├── InteractiveFlowChart.tsx    # Visual flow diagram
│   │   │                               # Purpose: Show data flow between layers
│   │   │                               # Features: Click nodes for details, hover tooltips
│   │   │                               # Canvas: Animated connections
│   │   │
│   │   ├── LiveCodeViewer.tsx          # Code explorer with annotations
│   │   │                               # Purpose: Display code examples step-by-step
│   │   │                               # Features: Syntax highlighting, line annotations
│   │   │                               # Data: 8 code examples covering full flow
│   │   │
│   │   ├── InteractiveQuiz.tsx         # Knowledge test component
│   │   │                               # Purpose: Test understanding with 10 questions
│   │   │                               # Features: Instant feedback, explanations
│   │   │                               # Difficulty: Beginner → Advanced
│   │   │
│   │   ├── NoteForm.tsx                # Form input component
│   │   │                               # Purpose: Collect user input for new notes
│   │   │                               # Events: onSubmit → handleAddNote
│   │   │
│   │   ├── NoteList.tsx                # List display component
│   │   │                               # Purpose: Render all notes from state
│   │   │                               # Events: onDelete → handleDeleteNote
│   │   │                               # Key: Uses note.id for React keys
│   │   │
│   │   └── StateTracker.tsx            # Logging system types
│   │                                   # Purpose: Type definitions for logging
│   │                                   # Exports: StateLog interface
│   │
│   ├── api/
│   │   └── notatki/
│   │       ├── route.ts                # Main API endpoint
│   │       │                           # Methods: GET (fetch all), POST (create)
│   │       │                           # Database: Uses better-sqlite3
│   │       │
│   │       └── [id]/
│   │           └── route.ts            # Dynamic route for single note
│   │                                   # Methods: DELETE (remove by ID)
│   │                                   # Params: ID from URL path
│   │
│   └── layout.tsx                      # Root layout (optional)
│
├── lib/
│   └── db.ts                           # Database connection & schema
│                                       # Purpose: SQLite setup, table creation
│                                       # Export: getDatabase() function
│
├── public/                             # Static assets (images, etc.)
│
├── README.md                           # Main documentation
├── QUICK_START.md                      # Quick start guide
└── package.json                        # Dependencies & scripts

```

## 🔍 Component Hierarchy

```
EducationalStackDemo (Root)
│
├─ Tab Navigation
│  ├─ Live Demo Tab
│  ├─ Flow Map Tab
│  ├─ Code Explorer Tab
│  ├─ Quiz Tab
│  └─ Resources Tab
│
├─ Active Content (based on selected tab)
│  │
│  ├─ [Tab: Live Demo]
│  │  └─ StackDemoEnhanced
│  │     ├─ Header (title, current action)
│  │     ├─ Flow Visualization (nodes)
│  │     ├─ Performance Metrics
│  │     ├─ Main Grid
│  │     │  ├─ NoteForm
│  │     │  │  └─ Form inputs + submit
│  │     │  ├─ NoteList
│  │     │  │  └─ Note items + delete buttons
│  │     │  └─ Timeline
│  │     │     └─ Event cards (expandable)
│  │     └─ Canvas (particle effects)
│  │
│  ├─ [Tab: Flow Map]
│  │  └─ InteractiveFlowChart
│  │     ├─ Header + current action
│  │     ├─ Canvas (connections)
│  │     ├─ Nodes (clickable/hoverable)
│  │     │  ├─ Browser node
│  │     │  ├─ React node
│  │     │  ├─ Next.js node
│  │     │  ├─ API node
│  │     │  ├─ Database node
│  │     │  ├─ Response node
│  │     │  ├─ State node
│  │     │  └─ UI node
│  │     └─ Detail Panel (when node selected)
│  │        ├─ Title + description
│  │        ├─ Code examples
│  │        └─ Resources
│  │
│  ├─ [Tab: Code Explorer]
│  │  └─ LiveCodeViewer
│  │     ├─ Header + annotations toggle
│  │     ├─ Step selector (1-8)
│  │     ├─ Description + related concepts
│  │     └─ Code display
│  │        └─ Lines with annotations
│  │
│  ├─ [Tab: Quiz]
│  │  └─ InteractiveQuiz
│  │     ├─ Progress bar
│  │     ├─ Question
│  │     │  ├─ Meta info (difficulty, topic)
│  │     │  ├─ Question text
│  │     │  └─ Answer options
│  │     ├─ Explanation (after answer)
│  │     └─ Results screen (at end)
│  │
│  └─ [Tab: Resources]
│     └─ Resources Grid
│        ├─ React resources
│        ├─ Next.js resources
│        ├─ Database resources
│        └─ Full-Stack resources
│
└─ Footer
   └─ Credits + tech stack
```

## ⚙️ State Management Flow

```
┌────────────────────────────────────────────────────────────┐
│                   EducationalStackDemo                     │
│                                                            │
│  State:                                                    │
│  ├─ activeTab: Tab                                         │
│  ├─ activeNodes: Set<string>                               │
│  ├─ currentStep: string | null                             │
│  └─ logs: StateLog[]                                       │
│                                                            │
│  Handlers:                                                 │
│  ├─ handleAction(log)                                      │
│  │  └─> Add to logs array                                 │
│  │                                                         │
│  └─ handleStepChange(step)                                 │
│     ├─> Update currentStep                                 │
│     └─> Update activeNodes (for visualization)             │
│                                                            │
└──────────────────┬─────────────────────────────────────────┘
                   │
                   │ Props passed down
                   │
       ┌───────────┴───────────┐
       │                       │
       ▼                       ▼
┌──────────────┐      ┌──────────────────┐
│ StackDemo    │      │ FlowChart        │
│ Enhanced     │      │                  │
│              │      │ Props:           │
│ Props:       │      │ • activeNodes    │
│ • onAction   │      │ • currentAction  │
│ • onStepChange│      │                  │
│              │      │ Displays:        │
│ Internal:    │      │ • Highlighted    │
│ • notes[]    │      │   nodes          │
│ • isLoading  │      │ • Connections    │
│ • timeline[] │      │ • Tooltips       │
│              │      └──────────────────┘
│ Actions:     │
│ • fetchNotes()│
│ • handleAdd()│
│ • handleDelete()│
│              │
│ Each calls:  │
│ onAction(log)│
│ onStepChange(step)│
└──────────────┘

Flow of single action (e.g., Add Note):

1. User clicks submit in NoteForm
   └─> calls handleAddNote(title, content)

2. StackDemoEnhanced.handleAddNote()
   ├─> onStepChange('form')
   ├─> onAction({ type: 'function', name: 'handleAddNote', ... })
   └─> fetch POST /api/notatki

3. handleStepChange in parent
   ├─> setCurrentStep('form')
   └─> setActiveNodes(new Set(['user']))

4. API responds
   └─> onStepChange('api')
       └─> setActiveNodes(new Set(['user', 'api']))

5. Database updates
   └─> onStepChange('database')
       └─> setActiveNodes(new Set(['user', 'api', 'database']))

6. UI refreshes
   └─> onStepChange('ui')
       └─> setActiveNodes(new Set(['user', 'api', 'database', 'ui']))

7. After 1.5s
   └─> onStepChange(null)
       └─> setActiveNodes(new Set()) // Clear highlights
```

## 🎨 Styling & Theming

```css
Color Palette:
┌─────────────────────────────────────────┐
│ Primary Gradient:                       │
│ from-purple-600 to-blue-600             │
│ #9333EA → #2563EB                       │
├─────────────────────────────────────────┤
│ Background Gradient:                    │
│ from-slate-950 via-purple-950 to-slate-950│
│ #020617 → #4C0D5B → #020617             │
├─────────────────────────────────────────┤
│ Node Colors:                            │
│ • Browser:  #3B82F6 (blue)              │
│ • React:    #61DAFB (cyan)              │
│ • Next.js:  #000000 (black)             │
│ • API:      #10B981 (green)             │
│ • Database: #F59E0B (amber)             │
│ • Response: #8B5CF6 (purple)            │
│ • UI:       #EC4899 (pink)              │
└─────────────────────────────────────────┘

Typography:
┌─────────────────────────────────────────┐
│ Headers: font-bold text-4xl/5xl/6xl     │
│ Body:    text-base text-white/80        │
│ Code:    font-mono text-sm              │
│ Labels:  font-bold text-xs/sm           │
└─────────────────────────────────────────┘
```

## 🔧 Technical Dependencies

```
Core Dependencies:
├─ react@19.2.3          # UI library
├─ next@16.1.6           # Framework
├─ typescript@5.x        # Type safety
├─ tailwindcss@3.x       # Styling
└─ better-sqlite3@9.x    # Database

Dev Dependencies:
├─ @types/react
├─ @types/node
├─ @types/better-sqlite3
└─ eslint-config-next

Browser APIs Used:
├─ Fetch API             # HTTP requests
├─ Canvas API            # Animations
├─ DOM Events            # User interactions
└─ JSON                  # Data serialization
```

---

This architecture is designed to be:
- 📚 **Educational** - Every component teaches something
- 🔄 **Interactive** - Users learn by doing
- 🎯 **Progressive** - From basics to advanced
- 🎨 **Visual** - Diagrams > walls of text
- 💪 **Production-ready** - Real code, not toys

