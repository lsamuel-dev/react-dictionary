import React from "react";
// Verified: Moving up one level to find the sibling folder
import WordCard from "../WordCard/WordCard";
import "./CardsContainer.css";

export default class CardList extends React.Component {
  render() {
    const { words, deleteWord } = this.props;

    const cardList = words.map((word) => (
      <WordCard
        front={word.front}
        back={word.back}
        key={word.front}
        deleteWord={deleteWord}
      />
    ));

    return <section className="cards-container">{cardList}</section>;
  }
}
