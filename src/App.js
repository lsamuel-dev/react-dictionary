import "./App.css";
import WordCard from "./Components/WordCard/WordCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main className="cards-container">
        <WordCard front="translation" back="Übersetzung" />
        <WordCard front="egg" back="Ei" />
        <WordCard front="taxi" back="Taxi" />
        <WordCard front="paper" back="Papier" />
        <WordCard front="square" back="Platz" />
      </main>
    </div>
  );
}
export default App;
