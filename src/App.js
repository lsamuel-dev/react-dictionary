<<<<<<< Updated upstream
import React from 'react';
import {useState, useEffect} from "react";
=======
import React, { useEffect } from "react";

>>>>>>> Stashed changes
import WordForm from "./Components/WordForm/WordForm";
import CardsContainer from "./Components/CardsContainer/CardsContainer";


// This function is a Statefull Component - it has state and logic to manage that state.
function App() {
<<<<<<< Updated upstream
  const [words, setWords] = useState([]);

useEffect(
  () => {
    fetch('./constants/words.json')
      .then(x => x.json())
      .then(data => setWords(data));
    console.log('USEEFFECT');
    },
    [] // dependency array
);
=======
  const [words, setWords] = React.useState([]);

  useEffect(
    () => {
      fetch("./constants/words.json")
        .then((x) => x.json())
        .then((data) => setWords(data));
      console.log("App USEEFFECT");
    },
    [], // empty dependency array - this useEffect will only run once, when the component first mounts.
  );
>>>>>>> Stashed changes

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
