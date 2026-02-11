import React from "react";

import WordForm from "./Components/WordForm/WordForm";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

import "./App.css";

// This function is a Statefull Component - it has state and logic to manage that state.
function App() {
  const [words, setWords] = React.useState([
    { front: "translation", back: "Übersetzung" },
    { front: "egg", back: "Ei" },
    { front: "taxi", back: "Taxi" },
    { front: "paper", back: "Papier" },
    { front: "square", back: "Platz" },
  ]);

  const addWord = (front, back) => {
    const newWords = [...words, { front, back }];
    setWords(newWords);
  };

  const deleteWord = (front) => {
    const newWords = words.filter((word) => word.front !== front); // This is a Boolean expression that returns true for all words that do NOT match the front of the word to delete.
    setWords(newWords);
  };

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <WordForm addWord={addWord} />
        <CardsContainer words={words} deleteWord={deleteWord} />
      </main>
    </div>
  );
}

export default App;
