import React from "react";

function InputText(props) {
  return (
    <>
      <div className="textfield-container">
        <input
          className="input-wrapper"
          type="text"
          placeholder="Enter text here..."
          value={props.use}
          onChange={props.handle}
        />

        <button className="btn-save" onClick={props.handleSave}>
          {" "}
          Save{" "}
        </button>
      </div>
    </>
  );
}

export default InputText;
