import { useState } from 'react'
import Board from './Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board/>
    </>
  )
}

export default App
