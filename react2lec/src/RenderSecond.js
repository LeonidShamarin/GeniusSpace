import React from "react";

const RenderSecond = () => {
  const firstRanderValue = true;

  return (
    <>
      {/* якшо true повертає першу частину */}
      {firstRanderValue ? "I`m here" : "I`m over there"}
    </>
  );
};

export default RenderSecond;
