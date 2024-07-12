import React from "react"
import {useState} from 'react'
import TodoComp from "./componenets/TodoComp"

function App() {
  const [todo,setTodo]= useState("");
  const [todoArr,setTodoArr]= useState([]);


  function pushData(){
    let todoObj={
      id:Math.random()+Date.now()+todo,
      todo:todo,
      isCompleted:false
    }
    setTodoArr([...todoArr,todo]);
    console.log(todoArr);
  }

  function handleDel(id){
    console.log(id);
    let newTodoArr= todoArr.filter((el)=>el.id !== id);
    setTodoArr(newTodoArr);
  }
  function update(id){
    let updatedArr = todoArr.map((el)=>{
      el.id === id ? {...el,isCompleted :  !el.isCompleted} : el;
    })
    console.log(updatedArr);
    setTodoArr(updatedArr);
  }
  
  return (
    <div>
      <input type="text" id="" placeholder='Todo Input' onChange={(e)=>{setTodo(e.target.value)}} />
      <button onClick={pushData}>Click</button>
      {
        todoArr.map((el)=>(
          <div>
            <h1>{el.todo}</h1>
            <h1>{el.isCompleted? "Completed" : "Not Completed"}</h1>
            <button onClick={()=>{handleDel(el.id)}}>Delete</button>
            <button onClick={()=>{update(el.id)}}>Update Task</button>
          </div>
        ))
      }
    </div>
  )
}

export default App
