import React from "react";
import "./WordForm.css";

const WordForm = ({ addWord }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Removed the colons (:) to fix the "not a valid selector" error
    const enField = document.querySelector("[name= en]");
    const deField = document.querySelector("[name= de]");

    if (enField && deField) {
      const enValue = enField.value;
      const deValue = deField.value;

      addWord(enValue, deValue);
      // This clears the input boxes correctly
      enField.value = "";
      deField.value = "";
    }
  };

  return (
    <section className="card-form">
      {" "}
      <h2>New Card</h2>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="form-row">
          {" "}
          <label>
            {" "}
            English: <input type="text" name="en" placeholder="English" />{" "}
          </label>{" "}
        </div>{" "}
        <div className="form-row">
          {" "}
          <label>
            {" "}
            German: <input type="text" name="de" placeholder="German" />{" "}
          </label>{" "}
        </div>{" "}
        <div className="form-row">
          {" "}
          <button type="submit">Add Word</button>{" "}
        </div>{" "}
      </form>{" "}
    </section>
  );
};

export default WordForm;
