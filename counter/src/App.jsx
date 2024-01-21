import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0)

const handleSubmitInc = ()=>{
  setCount(count+1)
}

const handleSubmitDec = () =>{
  setCount(count-1)
}

  return (
    <div>
      <h1>counter</h1>
      <p>count:{count}</p>
      <button onClick={handleSubmitInc}>increment</button>
      <button onClick={handleSubmitDec}>decrement</button>
    </div>
    
  )
}

export default App
