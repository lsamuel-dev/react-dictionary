import React from "react";
import "./App.css";
import WordCard from "./Components/WordCard/WordCard";
import CardsContainer from "./Components/CardsContainer/CardsContainer";
import WordForm from "./Components/WordForm/WordForm";

function App() {
  const [words, setWords] = React.useState([
    { front: "translation", back: "Übersetzung" },
    { front: "egg", back: "Ei" },
    { front: "paper", back: "Papier" },
    { front: "square", back: "Platz" },
  ]);

  const cardList = words.map((word) => (
    <WordCard front={word.front} back={word.back} key={`${word.front}`} />
  ));

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <WordForm />
        <CardsContainer cardList={cardList} />
      </main>
    </div>
  );
}

export default App;
