import React from "react";

const Counter = props => {
  return (
    <p>
      {props.counterText} {props.counter}
    </p>
  );
};

export default Counter;
