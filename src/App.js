import React, { Component } from "react";
import WordForm from "./Components/WordForm/WordForm";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

class App extends Component {
  state = {
    words: [],
    score: 0,
  };

  componentDidMount() {
    this.setState({ words: [{ front: "one", back: "eins" }] });

    fetch("./constants/words.json")
      .then((data) => data.json())
      .then((words) => this.setState({ words: words }));
  }

  // Keep the capital 'W' here
  addWord = (en, de) => {
    const newWord = { front: en, back: de };
    this.setState({
      words: [...this.state.words, newWord],
    });
  };

  // Add this missing function so the delete buttons work
  deleteWord = (frontValue) => {
    this.setState({
      words: this.state.words.filter((word) => word.front !== frontValue),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Dictionary App</h1>
        {/* FIX: Use this.addWord (Capital W) to match the function above */}
        <WordForm addWord={this.addWord} />

        {/* Pass the words and the delete function to the container */}
        <CardsContainer words={this.state.words} deleteWord={this.deleteWord} />
      </div>
    );
  }
}

export default App;
