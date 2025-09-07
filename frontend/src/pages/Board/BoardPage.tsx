import React, { useState } from "react";
import "../../styles/Board/BoardPage.css";

interface Card {
  id: number;
  title: string;
}

const initialCards = {
  todo: [
    { id: 1, title: "Set up project" },
    { id: 2, title: "Write BoardPage" },
  ],
  inProgress: [
    { id: 3, title: "Design UI" },
  ],
  done: [
    { id: 4, title: "Create repo" },
  ],
};

export default function BoardPage() {
  const [cards, setCards] = useState(initialCards);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [addColumn, setAddColumn] = useState<"todo" | "inProgress" | "done">("todo");

  function handleAddCard(e: React.FormEvent) {
    e.preventDefault();
    if (!newCardTitle.trim()) return;
    const newCard: Card = {
      id: Date.now(),
      title: newCardTitle,
    };
    setCards((prev) => ({
      ...prev,
      [addColumn]: [...prev[addColumn], newCard],
    }));
    setNewCardTitle("");
  }

  return (
    <div className="board-page">
      <h2>RetroSpectacle Board</h2>
      <div className="board-columns">
        {Object.entries(cards).map(([colKey, colCards]) => (
          <div key={colKey} className="board-column">
            <h3>
              {colKey === "todo"
                ? "To Do"
                : colKey === "inProgress"
                ? "In Progress"
                : "Done"}
            </h3>
            <ul>
              {(colCards as Card[]).map((card) => (
                <li key={card.id} className="board-card">
                  {card.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <form className="add-card-form" onSubmit={handleAddCard}>
        <input
          type="text"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
          placeholder="Card title"
        />
        <select
          value={addColumn}
          onChange={(e) => setAddColumn(e.target.value as "todo" | "inProgress" | "done")}
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}
