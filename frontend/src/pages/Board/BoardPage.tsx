import React from "react";
import Column from "../../components/Column/Column";
import "../../styles/Board/BoardPage.css";

const BoardPage: React.FC = () => {
  const columns = ["To Do", "In Progress", "Done"];
  
  const dummyCards = [
    { id: 1, title: "Setup project repo" },
    { id: 2, title: "Add ESLint & Prettier" },
    { id: 3, title: "Create Board Page layout" },
  ];

  return (
    <div className="board">
      {columns.map((col) => (
        <Column key={col} title={col} cards={dummyCards} />
      ))}
    </div>
  );
};

export default BoardPage;
