import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)
  let i=0;
  return (
    <>
    <h1>Hello</h1>
        <Button a={"red"} b={"rounded"}/>
         <Button a={"green"}/>
        <Button a={"pink"}/> 
        <input type="text" onChange={()=>

          {
            i++;
            console.log(i);
          }
        }/>
    </>
  )
}
export default App
