import React from "react";

const RenderThree = () => {
  const firstRanderValue = false;
  const secondRanderValue = [1, 2, 3];

  if (firstRanderValue) {
    return <p>one </p>;
  }
  if (secondRanderValue) {
    return <p>two </p>;
  }

  return <p>Three</p>;
};

export default RenderThree;
