import React from "react"
import {useState} from 'react'

function App() {
  const [todo,setTodo]= useState("");
  const [todoArr,setTodoArr]= useState([]);


  function pushData(){
    setTodoArr([...todoArr,todo]);
    console.log(todoArr);
  }

  
  return (
    <div>
      <input type="text" id="input" placeholder='Todo Input' onChange={(e)=>{setTodo(e.target.value)}} />
      <button onClick={pushData}>Click</button>
      {
        todoArr.map((e1)=>(
          <h1>{e1}</h1>
        ))
      }
    </div>
  )
}

export default App
