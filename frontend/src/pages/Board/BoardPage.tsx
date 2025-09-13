import React, { useState } from "react";

interface Card {
  id: number;
  title: string;
}

const initialCards = {
  todo: [
    { id: 1, title: "Set up project" },
    { id: 2, title: "Write BoardPage" },
  ],
  inProgress: [{ id: 3, title: "Design UI" }],
  done: [{ id: 4, title: "Create repo" }],
};

export default function BoardPage() {
  const [cards, setCards] = useState(initialCards);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [addColumn, setAddColumn] = useState<"todo" | "inProgress" | "done">("todo");

  function handleAddCard(e: React.FormEvent) {
    e.preventDefault();
    if (!newCardTitle.trim()) return;
    const newCard: Card = { id: Date.now(), title: newCardTitle };
    setCards((prev) => ({
      ...prev,
      [addColumn]: [...prev[addColumn], newCard],
    }));
    setNewCardTitle("");
  }

  // Map column keys to labels
  const columnMeta = {
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done",
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="min-h-screen bg-secondary dark:bg-primary p-6 rounded-xl shadow-kanban">
        <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {Object.entries(cards).map(([colKey, colCards]) => (
            <div
              key={colKey}
              className="bg-card border-card border rounded-lg shadow-card hover:shadow-cardHover p-4 flex flex-col space-y-4"
            >
              <h3 className="text-primary font-semibold text-lg mb-2">
                {columnMeta[colKey as keyof typeof columnMeta]}
              </h3>
              <ul className="space-y-2">
                {(colCards as Card[]).map((card) => (
                  <li
                    key={card.id}
                    className="bg-card border-card border rounded-lg p-3 text-secondary dark:text-secondary shadow-sm"
                  >
                    {card.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Add card form */}
        <form
          className="flex flex-col sm:flex-row items-center gap-4"
          onSubmit={handleAddCard}
        >
          <input
            type="text"
            id="newCardTitle"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            placeholder="Card title"
            className="flex-1 p-2 rounded-lg border border-card bg-card text-primary dark:text-primary"
          />
          <select
            value={addColumn}
            id="select-column"
            onChange={(e) =>
              setAddColumn(e.target.value as "todo" | "inProgress" | "done")
            }
            className="p-2 rounded-lg border border-card bg-card text-primary dark:text-primary"
          >
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 btn-success text-button-text border border-card rounded-lg hover:bg-success-hover"
          >
            Add Card
          </button>
        </form>
      </div>
    </section>
  );
}
