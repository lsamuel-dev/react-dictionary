import React, { useState, useEffect } from "react";
import WordForm from "./Components/WordForm/WordForm";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Using process.env.PUBLIC_URL ensures the path works
    // on both localhost and GitHub Pages sub-directories
    fetch(`${process.env.PUBLIC_URL}/constants/words.json`)
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
      })
      .catch((err) => console.error("Error fetching words:", err));
  }, []);

  // RESTORED: Catching both parameters sent by your form and structuring them correctly
  const addWord = (frontText, backText) => {
    setWords([...words, { front: frontText, back: backText }]);
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
