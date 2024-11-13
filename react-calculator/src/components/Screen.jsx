import React from "react";

const Screen = (props) => {
  return (
    <h1 className="screen" aria-label="output">
      {props.value}
    </h1>
  );
};

export default Screen;