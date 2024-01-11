import React, { useState } from "react";
import InputText from "./InputText";
import Body from "./Body";

function Note() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function onChangeHandle(e) {
    const newValue = e.target.value;
    setText(newValue);
  }

  function addInfo() {
    setItems((prevItem) => {
      return [...prevItem, text];
    });
    setText("");
  }

  function deleteItem(id) {
    setItems((prevItem) => {
      return items.filter((items, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <div className="note-container">
        <div className="note-wrapper">
          <InputText handle={onChangeHandle} use={text} handleSave={addInfo} />
        </div>

        <div className="item-container">
          <ul>
            {items.map((prevValue, index) => {
              return (
                <Body
                  text={prevValue}
                  key={index}
                  id={index}
                  onTick={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Note;
