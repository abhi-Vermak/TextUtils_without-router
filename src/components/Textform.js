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
let changeColor = props.mode==="light" ?'black':"white";
  
  let myStyle = {
    backgroundColor: props.mode === "light" ? 'white' :  '#101e38',
    color: changeColor,
    border : '2px solid ${changeColor}',
  };

  let numOfWords = (text.split(" ").pop() ===""?text.split(" ").length-1 :text.split(' ').length);
  

  return (
    <>
      <div className="container my-5">
        <div className="mb-3 container">
          <h2>Enter Text here</h2>

          <textarea
            className="form-control border-2"
            style={myStyle}
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
             
            {numOfWords} words and {text.length} characters

            {/* {text===" " || text.split(" ").pop() ==="" ? text.split(" ").length-1 :text.split(' ').length} words and {text.length} characters */}
          </p>
          <h2 className="my-2">Preview</h2>
          <p>{(text.length>0)?text :"Enter text to Preview"}</p>
        </div>
      </div>
    </>
  );
}
