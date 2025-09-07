import React from "react";
import Card from "../Card/Card";

interface CardType {
  id: number;
  title: string;
}

interface ColumnProps {
  title: string;
  cards: CardType[];
}

const Column: React.FC<ColumnProps> = ({ title, cards }) => {
  return (
    <div style={{ margin: "0 10px", flex: 1 }}>
      <h2>{title}</h2>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} />
      ))}
    </div>
  );
};

export default Column;
