import "./App.css";
import WordCard from "./Components/WordCard/WordCard";
import React from "react";

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
      <main className="cards-container">
        {/* Mapping through your state array to render cards dynamically */}
        {words.map((word, index) => (
          <WordCard key={index} front={word.front} back={word.back} />
        ))}
      </main>
    </div>
  );
}
export default App;
