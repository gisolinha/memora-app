Memora App 🧠

A simple flashcard study app built with React, TypeScript, and TailwindCSS. Inspired by tools like Anki, the goal of this project is to help users study through repetition by creating custom decks and interactive cards.

🚀 Features
✅ Create and manage decks
✅ Add cards with question, answer, and difficulty
✅ Delete cards and decks
✅ Study mode with spaced repetition simulation
✅ LocalStorage persistence (no backend needed)

🧱 Tech Stack
Frontend: React 18 + TypeScript
Styling: TailwindCSS
Build Tool: Vite
Testing: Vitest + Testing Library
Linting: ESLint + Prettier
State Persistence: localStorage

📂 Project Structuresrc/
├── assets/           # Static assets (logo, styles)
├── components/       # Reusable UI components (e.g. Avatar, CardForm, DeckList)
├── pages/            # Main views/routes (StudySession, Home, etc.)
├── utils/            # Utility functions
├── index.tsx         # App entry point
└── App.tsx           # Root component

🧲 Getting Started1. 
Clone the repository
  git clone https://github.com/[your-username]/memora-app.git
  cd memora-app2. 
Install dependencies
  npm install
# or
  pnpm install3. 
Start the development 
  servernpm run dev4. 
Build for production
  npm run build
  
✨ How It Works
Decks are the core containers — each deck holds multiple cards.
Each Card has:
  a question
  an answer
  a difficulty level
The Study Session shows one card at a time and asks the user to rate its difficulty after revealing the answer.
All data is stored in localStorage for simplicity.

🙇‍♀️ Author
  Giulia Aragão · @gisolinha

📄 LicenseMIT License. Feel free to use and contribute! ❤️
