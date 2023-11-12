import React from "react";

const Listitem = ({item}) => {
  return (
    <>
    
      <li key={item.id}>
        {item.text}
        
      </li>
    </>
  );
};

export default Listitem;
