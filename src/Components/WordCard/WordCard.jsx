import React from "react";
import "./WordCard.css";

export default function WordCard({ front, back, deleteWord }) {
  const [isFront, setFront] = React.useState(true);

  // Conditional Rendering - Logic to decide what to show based on isFront state
  const cardContent = isFront ? (
    <div className="card-front">English: {front}</div>
  ) : (
    <div className="card-back">German: {back}</div>
  );

  const handleFlip = () => {
    setFront(!isFront);
  };

  /*
  function handleClickAlternative() {
    setFront(!isFront);
  */

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteWord(front);
  };

  return (
    <div className="word-card" onClick={handleFlip}>
      <span className="delete-card" onClick={handleDelete}>
        X
      </span>
      {cardContent}
    </div>
  );
}
// Note: Remove the second "export default WordCard" at the bottom if it's still there.
