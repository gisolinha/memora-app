import { useState, useEffect } from 'react';
import { CardForm } from 'components/cardform';

type Card = {
  id: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

type CardListProps = {
  deckId: string;
};

export function CardList({ deckId }: CardListProps) {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(`cards-${deckId}`);
    if (stored) setCards(JSON.parse(stored));
  }, [deckId]);

  useEffect(() => {
    localStorage.setItem(`cards-${deckId}`, JSON.stringify(cards));
  }, [cards, deckId]);

  function handleAddCard(card: Card) {
    setCards([...cards, card]);
  }

  function deleteCard(id: string) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Cards do Deck</h1>

      <CardForm onAdd={handleAddCard} />

      {cards.length === 0 && (
        <p className="text-gray-600 italic mt-4">Nenhum card criado ainda.</p>
      )}

      <ul className="mt-6 space-y-4">
        {[...cards]
          .sort((a, b) => a.question.localeCompare(b.question))
          .map((card) => (
            <li
              key={card.id}
              className="border p-4 rounded shadow-sm flex justify-between items-start"
            >
              <div>
                <p><strong>Pergunta:</strong> {card.question}</p>
                <p><strong>Resposta:</strong> {card.answer}</p>
                <p><strong>Dificuldade:</strong> {card.difficulty}</p>
              </div>

              <button
                onClick={() => deleteCard(card.id)}
                className="text-red-600 hover:underline text-sm ml-4"
              >
                Excluir
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
