import React, { Component } from "react";
import "./WordForm.css";

export default class WordForm extends Component {
  // Initialize the refs properly
  enRef = React.createRef();
  deRef = React.createRef();

  // Use an arrow function so 'this' works
  handleSubmit = (e) => {
    e.preventDefault();

    // Use .current.value to get the text from the refs
    const enValue = this.enRef.current.value;
    const deValue = this.deRef.current.value;

    if (enValue && deValue) {
      // Pass the values to the addWord function in App.js
      this.props.addWord(enValue, deValue);

      // Clear the inputs
      this.enRef.current.value = "";
      this.deRef.current.value = "";
    }
  };

  render() {
    return (
      <section className="card-form">
        <h2>New Card</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label>
              English: <input type="text" ref={this.enRef} />
            </label>
          </div>
          <div className="form-row">
            <label>
              German: <input type="text" ref={this.deRef} />
            </label>
          </div>
          <button type="submit">Add Word</button>
        </form>
      </section>
    );
  }
}
