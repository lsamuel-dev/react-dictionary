import React from "react"; // 1. Added missing React import
import "./App.css";
import WordCard from "./Components/WordCard/WordCard";

function App() {
  // 2. Define state INSIDE the function so 'words' is accessible
  const [words, setWords] = React.useState([
    { front: "translation", back: "Übersetzung" },
    { front: "egg", back: "Ei" },
    { front: "taxi", back: "Taxi" },
    { front: "paper", back: "Papier" },
    { front: "square", back: "Platz" },
    { front: "seven", back: "sieben" }
  ]);

  return (
    <div className="App"> {/* 3. Fixed lowercase 'app' to match CSS */}
      <header className="App-header">Dictionary App</header>
      <main className="cards-container">
        {/* 4. Manual indexing using the 'words' state */}
        <WordCard front={words[0].front} back={words[0].back} />
        <WordCard front={words[1].front} back={words[1].back} />
        <WordCard front={words[2].front} back={words[2].back} />
        <WordCard front={words[3].front} back={words[3].back} />
        <WordCard front={words[4].front} back={words[4].back} />
        <WordCard front={words[5].front} back={words[5].back} />
      </main>
    </div>
  );
}

export default App;