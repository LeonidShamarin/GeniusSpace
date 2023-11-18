import React from "react";

const ButtonComponent = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default ButtonComponent;
