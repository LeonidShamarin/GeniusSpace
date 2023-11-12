import React from 'react'

const GrandChild2 = (props) => {
    console.log(props);
  return (
    <div>
     {props.myName.name} 
     <br/>
     {props.myNameinarray[0]}
     <br/>
     {props.myFunctionname()}


    </div>
  )
}

export default GrandChild2
