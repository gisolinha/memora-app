import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Card = {
  id: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

function Modal({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm text-center shadow-lg">
        <h3 className="text-xl font-bold mb-4">{message}</h3>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export function StudySession() {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();

  const [cards, setCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!deckId) return;

    const stored = localStorage.getItem(`cards-${deckId}`);
    if (stored) {
      setCards(JSON.parse(stored));
    } else {
      setCards([]);
    }
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [deckId]);

  const currentCard = cards[currentIndex];

  function handleReveal() {
    setShowAnswer(true);
  }

  function handleDifficulty(difficulty: string) {
    console.log(`Card ${currentCard.id} marcado como: ${difficulty}`);

    setShowAnswer(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowModal(true); // mostrar modal ao finalizar
    }
  }

  function closeModal() {
    setShowModal(false);
    navigate(`/deck/${deckId}`);
  }

  if (!deckId) return <p>Deck não encontrado.</p>;

  if (cards.length === 0)
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600">Esse deck ainda não tem cards para estudar.</p>
        <button
          onClick={() => navigate(`/deck/${deckId}`)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Voltar para deck
        </button>
      </div>
    );

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Estudando Deck {deckId}</h2>

      <div className="border p-6 rounded-lg shadow-lg inline-block max-w-md">
        <p className="text-xl font-medium mb-4">{currentCard.question}</p>

        {showAnswer ? (
          <>
            <p className="text-gray-700 mb-4">{currentCard.answer}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDifficulty('easy')}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Fácil
              </button>
              <button
                onClick={() => handleDifficulty('medium')}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Médio
              </button>
              <button
                onClick={() => handleDifficulty('hard')}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Difícil
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={handleReveal}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Revelar resposta
          </button>
        )}

        {showModal && (
          <Modal message="Sessão de estudo concluída!" onClose={closeModal} />
        )}
      </div>
    </div>
  );
}
