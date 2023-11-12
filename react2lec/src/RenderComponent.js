import React from "react";

const RenderComponent = () => {
//   const firstRanderValue = false;
//   const secondRanderValue = true;
// "" - пустий рядок це false, "sdfds"-а рядок то ціниться як true;
//[]-пустий масив це теж true
  const firstRanderValue = [];
  const secondRanderValue = [1,2,3];

  return <>
  {/* firstRanderValue &&  - якщо true то рендирить  */}
   {/* {firstRanderValue && <p>I`m firstRanderValue</p> } */}
  {/* якщо масив пустий то щоб не рендирилось */}
  {/* {!!firstRanderValue.length && <p>I`m firstRanderValue</p> } */}
  {/* {firstRanderValue.length ? <p>I`m firstRanderValue</p> : <p>hello</p> } */}
 {/* якщо нічого не хочемо повертати  */}
 {firstRanderValue.length ? <p>I`m firstRanderValue</p> : null }

  {secondRanderValue && <p>I`m secondRanderValue</p> }
  
  
  </>;
};

export default RenderComponent;
