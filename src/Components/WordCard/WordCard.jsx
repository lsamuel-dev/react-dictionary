import React from "react";

function WordCard(props) {
  return (
    <div className="word-card">
      <p>English: {props.en}</p>
      <p>German: {props.de}</p>
    </div>
  );
}
export default WordCard;
