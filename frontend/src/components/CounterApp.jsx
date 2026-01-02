import React, { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleDClick = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>+</button>
      <button onClick={handleDClick}>-</button>
    </>
  )
}

export default CounterApp
