//використання пропсів
import React from "react";
import TodosList from "./TodosList";
import GrandChild2 from "./GrandChild2";

const RenderColection = () => {
  const toDos = [
    { id: 1, todo: "firstTodo" },
    { id: 2, todo: "secondTodo" },
    { id: 3, todo: "thirdTodo" },
    { id: 4, todo: "fourTodo" },
    { id: 5, todo: "fiveTodo" },
  ];

const myName = {
    name:"Leonid",
}
const myNameinarray = ["Leonid"];

const myFunctionname = ()=> {
    return "Leonid";
}



  return (
    <div>
      {toDos.map((todo) => {
        return <TodosList key={todo.id} todo={todo.todo} renderOneTodo={todo.todo} />;
      })}
      
<GrandChild2 myName={myName} myNameinarray={myNameinarray} myFunctionname={myFunctionname}/>

    </div>
  );
};

export default RenderColection;
