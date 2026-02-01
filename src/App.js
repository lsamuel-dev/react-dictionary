import "./App.css";
import WordCard from "./Components/WordCard/WordCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main>
        <WordCard en="translation" de="Übersetzung" />
        <WordCard en="egg" de="Ei" />
      </main>
    </div>
  );
}
export default App;
