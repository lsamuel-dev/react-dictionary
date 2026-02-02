import React from "react";
import "./WordCard.css";

function WordCard(props) {
  return (
    <div className="word-card">
      <p>English: {props.en}</p>
      <p>German: {props.de}</p>
    </div>
  );
}
export default WordCard;
