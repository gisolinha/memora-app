import { useState } from 'react';

type Card = {
  id: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

type CardFormProps = {
  onAdd: (card: Card) => void;
};

export function CardForm({ onAdd }: CardFormProps) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!question.trim() || !answer.trim()) {
      alert('Por favor, preencha pergunta e resposta!');
      return;
    }

    const newCard: Card = {
      id: Date.now().toString(),
      question: question.trim(),
      answer: answer.trim(),
      difficulty,
    };

    onAdd(newCard);

    setQuestion('');
    setAnswer('');
    setDifficulty('medium');
  }

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-md space-y-4 max-w-lg">
      <div>
        <label className="block font-semibold mb-1" htmlFor="question">Pergunta</label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite a pergunta"
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="answer">Resposta</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Digite a resposta"
          className="w-full border rounded px-3 py-2"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="difficulty">Dificuldade</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
          className="w-full border rounded px-3 py-2"
        >
          <option value="easy">Fácil</option>
          <option value="medium">Médio</option>
          <option value="hard">Difícil</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar Card
      </button>
    </form>
  );
}
