import { useState } from 'react'
import Navbar from './components/Navbar'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar />
      <h1>count = {count}</h1>
      <h1>React + Django</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default App
