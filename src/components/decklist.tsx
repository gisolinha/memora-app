import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Deck = {
  id: string;
  name: string;
};

export function DeckList() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [newDeckName, setNewDeckName] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('decks');
    if (stored) setDecks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('decks', JSON.stringify(decks));
  }, [decks]);

  function addDeck() {
    if (!newDeckName.trim()) return; // validação para não criar vazio
    const newDeck = { id: Date.now().toString(), name: newDeckName.trim() };
    setDecks([...decks, newDeck]);
    setNewDeckName('');
  }

  function deleteDeck(id: string) {
    setDecks(decks.filter((d) => d.id !== id));
    localStorage.removeItem(`cards-${id}`);
  }

  function getCardCount(deckId: string) {
    const stored = localStorage.getItem(`cards-${deckId}`);
    return stored ? JSON.parse(stored).length : 0;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Seus Decks</h1>

      {decks.length === 0 && (
        <p className="text-gray-600 italic mb-6">
          Você ainda não tem decks. Crie um para começar a estudar!
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {[...decks]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((deck) => (
            <div
              key={deck.id}
              className="border rounded p-4 shadow mb-4 hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="font-semibold text-lg mb-2">{deck.name || 'Deck sem nome'}</h2>
              <p className="text-gray-600">{getCardCount(deck.id)} cards</p>

              <div className="mt-4 flex gap-3">
                <Link
                  to={`/deck/${deck.id}`}
                  className="text-indigo-600 hover:underline text-sm"
                >
                  Ver
                </Link>
                <Link
                  to={`/deck/${deck.id}/study`}
                  className="text-green-600 hover:underline text-sm"
                >
                  Estudar
                </Link>
                <button
                  onClick={() => deleteDeck(deck.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Novo deck"
          value={newDeckName}
          onChange={(e) => setNewDeckName(e.target.value)}
          className="border rounded p-2 flex-grow"
        />
        <button
          onClick={addDeck}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Criar
        </button>
      </div>
    </div>
  );
}
