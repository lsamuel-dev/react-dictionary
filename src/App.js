import React from "react";

import WordForm from "./Components/WordForm/WordForm";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

import "./App.css";

class App extends React.Component {
  state = {
    words: [
      { front: "translation", back: "Übersetzung" },
      { front: "egg", back: "Ei" },
      { front: "taxi", back: "Taxi" },
      { front: "paper", back: "Papier" },
      { front: "square", back: "Platz" },
    ],
    score: 0,
  };

  addWord = (front, back) => {
    // 1. Correctly access state and use spread operator
    const newWords = [...this.state.words, { front, back }];
    this.setState({ words: newWords });
  };

  deleteWord = (front) => {
    // 2. FIXED: Correct filter syntax to actually remove the word
    const newWords = this.state.words.filter((word) => word.front !== front);

    // 3. Update state so the UI refreshes
    this.setState({ words: newWords });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Dictionary App</header>
        <main>
          {/* 4. FIXED: Added 'this.' to addWord */}
          <WordForm addWord={this.addWord} />

          {/* 5. FIXED: Changed 'this.words' to 'this.state.words' */}
          <CardsContainer
            words={this.state.words}
            deleteWord={this.deleteWord}
          />
        </main>
      </div>
    );
  }
}

export default App;
