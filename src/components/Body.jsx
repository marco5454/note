import React from "react";

function Body(props) {
  return (
    <>
      <div
        className="body-container"
        onClick={() => {
          props.onTick(props.id);
        }}
      >
        <li className="list-items">{props.text}</li>
      </div>
    </>
  );
}

export default Body;
