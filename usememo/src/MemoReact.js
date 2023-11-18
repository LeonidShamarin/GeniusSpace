import React from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";
import SecondChildComponent from "./SecondChildComponent";

const MemoReact = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <SecondChildComponent  name="SecondChildComponent"/>
      {list.map((item, index) => {
        return <ChildComponent key={index} item={item} />;
      })}
      <button onClick={() => setList([...list, 4])}> OnClick</button>
    </div>
  );
};

export default MemoReact;
