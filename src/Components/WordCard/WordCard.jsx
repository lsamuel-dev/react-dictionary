import React from "react";
import "./WordCard.css";

export default function WordCard({ front, back }) {
  const [isFront, setFront] = React.useState(true);

  // Logic to decide what to show based on isFront state
  const cardContent = isFront ? (
    <div className="card-front">English: {front}</div>
  ) : (
    <div className="card-back">German: {back}</div>
  );

  return (
    <div className="word-card" onClick={() => setFront(!isFront)}>
      {cardContent}
    </div>
  );
}
// Note: Remove the second "export default WordCard" at the bottom if it's still there.