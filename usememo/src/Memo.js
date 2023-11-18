//useMemo
import React from "react";
import { useMemo, useState } from "react";

const Memo = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  // Використовуйте useMemo для копії масиву, тільки якщо list змінився
  const memoizedList = useMemo(() => {
    return [...list];
  }, [list]);

  const handleListChange = () => {
    setList([...list, 6]);
  };
  //   console.log("render");
  return (
    <div>
      {memoizedList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={handleListChange}>Click Me </button>
    </div>
  );
};

export default Memo;
