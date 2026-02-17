import React, { useEffect } from "react";
// Change the line below to go UP one level (../) to find the WordCard sibling
import WordCard from "../WordCard/WordCard";
import "./CardsContainer.css";

export default function CardsContainer({ words, deleteWord }) {
  useEffect(
    () => {
      console.log("CardsContainer USEEFFECT");
    },
    [words], // dependency array - this useEffect will run every time the "words" prop changes, which happens when a new word is added or deleted.
  );

  const cardList = words.map((word) => (
    <WordCard
      front={word.front}
      back={word.back}
      key={`${word.front}`}
      deleteWord={deleteWord}
    />
  ));
  return <section className="cards-container">{cardList}</section>;
}
