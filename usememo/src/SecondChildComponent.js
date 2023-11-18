// import { memo } from "react";
// import React from "react";

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.object.name !== nextProps.object.name
// }

// const SecondChildComponent = memo(() => {
//   console.log("SecondChildComponent");
//   return <div>SecondChildComponent</div>;
// }, areEqual);

// export default SecondChildComponent;

import { memo } from "react";
import React from "react";

const areEqual = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
}

const SecondChildComponent = memo((props) => {
  console.log("SecondChildComponent");
  return <div>{props.name}</div>;
}, areEqual);

export default SecondChildComponent;
