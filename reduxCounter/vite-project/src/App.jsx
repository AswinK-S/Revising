import './App.css'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from './redux/action'


function App() {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={()=>{dispatch(increment())}} >increment</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    </div>
  )
  
}

export default App
