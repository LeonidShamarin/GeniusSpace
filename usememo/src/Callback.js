//useCallback

import React from "react";
import { useCallback, useEffect, useState } from "react";

const Callback = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const handleUseCallbackExample = useCallback(() => {
    setList([...list, 6]);
  }, [list]);

  useEffect(() => {
    handleUseCallbackExample();
    console.log("render");
  }, [handleUseCallbackExample]);

  const handleClick = () => setList([]);

  return (
    <div>
      <button onClick={handleClick}>Callback </button>
    </div>
  );
};

export default Callback;
