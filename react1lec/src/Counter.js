import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment me </button>
      <button onClick={decrement}>Decrement me </button>
    </div>
  );
};

export default Counter;
