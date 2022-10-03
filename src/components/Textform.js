import React, { useState } from "react";

export default function Textform(props) {
  // UpperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Lowercase
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Clear
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  // Capitalize
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
    setText(newText);
  };

  // Copy
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div className="btn btn-info my-4" onClick={handleUpClick}>
            Convert To UpperCase
          </div>
          <div className="btn btn-info my-4 mx-3" onClick={handleDownClick}>
            Convert To LowerCase
          </div>
          <div className="btn btn-info my-4 mx-3" onClick={handleCapitalize}>
            Capitalize
          </div>
          <div className="btn btn-info my-4 mx-3" onClick={handleClearClick}>
            Clear
          </div>
          <div className="btn btn-info my-4 mx-3" onClick={handleCopy}>
            Copy
          </div>
          <div className="btn btn-info my-4 mx-3" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </div>
        </div>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Some Text In TextArea to Preview'}</p>
      </div>
    </>
  );
}
