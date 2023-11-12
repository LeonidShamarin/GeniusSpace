import React from "react";
// import GrandChild from "./GrandChild";

const TodosList = (props) => {
  return (
    <>
      <div>{props.todo}</div>;
      {/* <GrandChild newPropTodo={props.renderOneTodo} /> */}
    </>
  );
};

export default TodosList;
