import React from "react";
import Column from "../../components/Column/Column";
import "../../styles/Board/BoardPage.css";

const BoardPage: React.FC = () => {
  const columns = ["To Do", "In Progress", "Done"];
  
  const dummyCardsByColumn: { [key: string]: { id: number; title: string }[] } = {
    "To Do": [
      { id: 1, title: "Setup project repo" },
      { id: 2, title: "Add ESLint & Prettier" },
    ],
    "In Progress": [
      { id: 3, title: "Create Board Page layout" },
    ],
    "Done": [],
  };

  return (
    <div className="board">
      {columns.map((col) => (
        <Column key={col} title={col} cards={dummyCardsByColumn[col] || []} />
      ))}
    </div>
  );
};

export default BoardPage;
