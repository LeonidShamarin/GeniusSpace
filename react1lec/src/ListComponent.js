import React,{ useState } from "react";
import Listitem from "./Listitem";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const onClickHandler = () => {
    const newItem = {id:items.length+1, text: input};
    setItems([...items, newItem]);
    setInput("");
  };
 
const onEnterKeyPress = (e)=> {
    if (e.key === "Enter") {
        onClickHandler();
    }
}

  return (
    <>
      <input 
      onChange={(e)=> setInput(e.target.value)} 
      onKeyDown={onEnterKeyPress}
      value={input} 
      placeholder="New Task" 
      />
      <p>Total tasks: {items.length}</p>
      <ul>
        {items.map((item) => (
         <Listitem key={item.id} item ={item}/>
        ))}
      </ul>
      
      <button onClick={onClickHandler}>Add TO DO</button>
    </>
  );
};

export default ListComponent;
