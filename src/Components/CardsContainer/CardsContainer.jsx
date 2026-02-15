import React from "react";
import WordCard from "../WordCard/WordCard";
import "./CardsContainer.css";

const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      {props.words.map((word, index) => (
        <WordCard
          key={index}
          front={word.front}
          back={word.back}
          deleteWord={props.deleteWord}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
