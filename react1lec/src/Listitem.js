import React from "react";

const Listitem = (props) => {
  return (
    <>
      <li key={props.id}>{props.name}</li>
      {props.children}
    </>
  );
};

export default Listitem;
