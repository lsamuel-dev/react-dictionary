import React from "react";
import "./WordCard.css";

function WordCard({ front, back }) {
  return (
    <div className="word-card">
      <div className="card-front">English: {front}</div>
      <div className="card-back">German: {back}</div>
    </div>
  );
}
export default WordCard;
