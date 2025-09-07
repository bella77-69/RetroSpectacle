import React from "react";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div style={{
      padding: "10px",
      margin: "5px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff",
    }}>
      {title}
    </div>
  );
};

export default Card;
