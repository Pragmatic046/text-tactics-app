import React, { useState } from "react";

export default function TextForm({ mode, heading, showAlert, Capitalize }) {
  const [text, setText] = useState("");

  //   For Converting text to uppercase
  const ToUpperCase = () => {
    let UpperCaseText = text.toUpperCase();
    setText(UpperCaseText);
    showAlert("Entire text has been converted to upper case", "success");
  };

  //   For Converting text to lowercase
  const ToLowerCase = () => {
    let LowerCaseText = text.toLowerCase();
    setText(LowerCaseText);
    showAlert("Entire text has been converted to lower case", "success");
  };

  //   For Removing All Text
  const ToClear = () => {
    let ClearText = "";
    setText(ClearText);
    showAlert("Attention! Entire text has been removed", "warning");
  };

  // For Copying Text
  const ToCopy = () => {
    let CopyText = document.getElementById("text-box");
    CopyText.select();
    CopyText.setSelectionRange(0, CopyText.value.length);
    navigator.clipboard.writeText(CopyText.value);
    showAlert("Text Copied !", "success");
  };

  // For Finding Text
  const ToFind = () => {
    let FindText = document.getElementById("find-box").value;
    let TextBox = document.getElementById("text-box");
    let startingIndex = text.indexOf(FindText);
    if (startingIndex !== -1) {
      TextBox.setSelectionRange(startingIndex, startingIndex + FindText.length);
      TextBox.focus();
    }
    showAlert("Selected text founded !", "info");
  };

  // For Removing Extra Spaces
  const ToRemoveXSpaces = () => {
    let RemoveSpace = text.split(/\s+/);
    setText(RemoveSpace.join(" "));
    showAlert("Extra spaces removed", "info");
  };

  //   For listening onChange event, we couldn't type whitout it
  const OnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container p-0 ">
        <div className="container p-0">
          <h1
            className={`my-3 fw-bold text-${
              mode === "dark" ? "light" : "primary"
            } `}
          >
            {heading}
          </h1>
          <textarea
            className={`form-control border-3 border-dark-subtle my-2 text-${
              mode === "dark" ? "white" : "dark"
            }  bg-${mode}`}
            onChange={OnChange}
            value={Capitalize(text)}
            id="text-box"
            rows="4"
            placeholder="Enter text here"
          ></textarea>
          <button className="btn btn-danger mx-2 my-2" onClick={ToUpperCase}>
            Upper Case
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={ToLowerCase}>
            Lower Case
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={ToClear}>
            Clear Text
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={ToCopy}>
            Copy Text
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={ToFind}>
            Find Text
          </button>
          <button
            className="btn btn-danger mx-2 my-2"
            onClick={ToRemoveXSpaces}
          >
            Remove X Spaces
          </button>
          <input
            className="form-control border-2 border-dark-subtle my-4"
            id="find-box"
            type="text"
            placeholder="Type word to find"
            aria-label="default input example"
          />
        </div>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <div className="container text-center p-3">
            <h2>Text Details</h2>
          </div>
          <div className="container d-flex align-items-center justify-content-center gap-5">
            <p>
              <span className="fw-bolder">
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </span>{" "}
              Words
            </p>
            <p>
              <span className="fw-bolder">
                {text !== "" ? text.length : text.length * 0}
              </span>{" "}
              Characters
            </p>
            <p>
              <span className="fw-bolder">
                {text !== ""
                  ? (0.008 * text.trim().split(/\s+/gm).length).toFixed(2)
                  : 0}
              </span>{" "}
              Minutes take to read
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// |\s$/
