import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const SentenceCase = () => {
    if (text === "") {
    } else {
      let newText = text.split(". ");
      let str = [];

      for (let i = 0; i < newText.length; i++) {
        let text1 = newText[i][0].toUpperCase();
        let subStr = newText[i].substring(1);
        subStr = subStr.toLowerCase();
        str[i] = text1 + subStr + ".";
      }
      setText(str.join(" "));
    }
  };

  const clearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-5">
        <div className="mb-3 container">
          <h2>{props.heading}</h2>

          <textarea
            className="form-control border-2 border-dark"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary my-1 mx-2" onClick={lowerCase}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary my-1 mx-2" onClick={SentenceCase}>
          Convert to Sentence Case
        </button>
        <button className="btn btn-danger my-1 mx-2" onClick={clearText}>
          Clear Text
        </button>

        <div className="container my-4">
          <h2>Your Text Summary</h2>
          <p>
            {" "}
            {text.split(" ").length} words and {text.length} characters
          </p>
          <h2 className="my-2">Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
