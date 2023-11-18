import React from 'react'
import { useCounter } from './useCounter'

const ParentUseCounter = () => {
    const { value, increment, decrement }=useCounter();
  return (
    <div>
      <p>{value}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default ParentUseCounter
