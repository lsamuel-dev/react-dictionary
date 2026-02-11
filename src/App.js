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

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <WordForm addWord={addWord} />
        <CardsContainer words={words} />
      </main>
    </div>
  );
}

export default App;
