import React, { useState, useEffect } from "react";
import WordForm from "./Components/WordForm/WordForm";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch("./constants/words.json")
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
      })
      .catch((err) => console.error("Error fetching words:", err));
  }, []);

  const addWord = (word) => {
    setWords([...words, word]);
  };

  const deleteWord = (wordFront) => {
    const updatedWords = words.filter((word) => word.front !== wordFront);
    setWords(updatedWords);
  };

  return (
    <div className="App">
      <WordForm addWord={addWord} />
      <CardsContainer words={words} deleteWord={deleteWord} />
    </div>
  );
}

export default App;
