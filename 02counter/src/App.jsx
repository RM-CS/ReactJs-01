import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = ()=>{
    // counter = counter + 1
    if(counter<20){
      setCounter(counter + 1)
    }
  }
  const removeValue = ()=>{
    if(counter>=1)
    {
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>ReactHooks with counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> <br /><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
