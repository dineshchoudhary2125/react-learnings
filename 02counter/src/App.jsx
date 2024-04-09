import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 10

  const increaseValue= () =>{
    if(counter <20){
      counter = counter + 1
      setCounter(counter)
    }
  }
  const decreaseValue= () =>{
    if (counter >0){
      counter = counter - 1
      setCounter(counter )
    }
  }
  return (
    <>
      <h1>Hello everyone, Dinesh this side</h1>
      <h2>Counter value : {counter}</h2>
      
      <button
      onClick={increaseValue}
      >Increase value {counter}</button>
      <br />
      <button
      onClick={decreaseValue}
      >Decrease value {counter}</button>
    </>
  )
}

export default App
