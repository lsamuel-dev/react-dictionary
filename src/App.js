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

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <WordForm />
        <CardsContainer words={words} /> // This is a Stateless Component. It
        doesn't have its own state.
      </main>
    </div>
  );
}

export default App;
