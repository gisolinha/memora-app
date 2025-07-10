# Memora App 🧠

A simple flashcard study app built with React, TypeScript, and TailwindCSS. Inspired by tools like Anki, the goal of this project is to help users study through repetition by creating custom decks and interactive cards.

---

## 🚀 Features

* ✅ Create and manage decks
* ✅ Add cards with question, answer, and difficulty
* ✅ Delete cards and decks
* ✅ Study mode with spaced repetition simulation
* ✅ LocalStorage persistence (no backend needed)

---

## 🧱 Tech Stack

* **Frontend**: React 18 + TypeScript
* **Styling**: TailwindCSS
* **Build Tool**: Vite
* **Testing**: Vitest + Testing Library
* **Linting**: ESLint + Prettier
* **State Persistence**: localStorage

---

## 📂 Project Structure

```
src/
├── assets/           # Static assets (logo, styles)
├── components/       # Reusable UI components (e.g. Avatar, CardForm, DeckList)
├── pages/            # Main views/routes (StudySession, Home, etc.)
├── utils/            # Utility functions
├── index.tsx         # App entry point
└── App.tsx           # Root component
```

---

## 🧲 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/[your-username]/memora-app.git
cd memora-app
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## ✨ How It Works

1. **Decks** are the core containers — each deck holds multiple cards.
2. Each **Card** has:

   * a `question`
   * an `answer`
   * a `difficulty` level
3. The **Study Session** shows one card at a time and asks the user to rate its difficulty after revealing the answer.
4. All data is stored in `localStorage` for simplicity.

---

## 📌 Roadmap

* [x] CRUD for decks and cards
* [x] Basic study session flow
* [ ] Improved UI/UX (animations, responsive design)
* [ ] Real spaced repetition algorithm
* [ ] Firebase integration (optional)
* [ ] Drag-and-drop for card reordering
* [ ] Import/export decks as JSON
* [ ] Dark mode toggle
* [ ] Search and filter cards by difficulty

---

## 🙇‍♀️ Author

Giulia Aragão · [@gisolinha](https://github.com/gisolinha)

---

## 📄 License

MIT License. Feel free to use and contribute! ❤️

