import React, { useState } from "react";
import Listitem from "./Listitem";
import ButtonComponent from "./ButtonComponent";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const onClickHandler = () => {
    const updatedElement =  { id: items.length + 1, name: input };
    setItems([...items,updatedElement]);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item)=> item.id !== id);
    setItems(filteredItems)
  };

  return (
    <>
      <input
        onKeyDown={onEnterKeyPress}
        onChange={onChangeHandler}
        value={input}
        placeholder="New Task"
      />
      <p>Total tasks: {items.length}</p>
      <ul>
        {items.map((element) => (
          <Listitem 
          key={element.id} 
          id={element.id} 
          name={element.name}>
            {
              <ButtonComponent
                text={"delete"}
                onClick={()=>handleDelete(element.id)}
                type={"button"}
              />
            }
          </Listitem>
        ))}
      </ul>

      <button onClick={onClickHandler}>Add TO DO</button>
    </>
  );
};

export default ListComponent;
