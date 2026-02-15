import React, { Component } from "react";
import "./WordCard.css";

export default class WordCard extends Component {
  state = { isFront: true };

  handleFlip = () => {
    this.setState((prevState) => ({ isFront: !prevState.isFront }));
  };

  render() {
    const { front, back, deleteWord } = this.props;
    return (
      <div className="card" onClick={this.handleFlip}>
        <div className="card-content">
          {/* Ternary logic to add the labels based on isFront state */}
          {this.state.isFront ? `English: ${front}` : `German: ${back}`}
        </div>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteWord(front);
          }}
        >
          X
        </button>
      </div>
    );
  }
}
