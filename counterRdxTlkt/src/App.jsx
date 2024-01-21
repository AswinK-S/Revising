
import './App.css'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './redux/counterSlice'

function App() {

  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={()=>{dispatch(increment())}}>increment</button>
      <button onClick={()=>{dispatch(decrement())}} >decrement</button>
    </>
  )
}

export default App
