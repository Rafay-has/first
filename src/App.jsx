import { useState,useCallback } from 'react'
import './App.css'
import { Typography, Button, Alert } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Generate from './Generate'
import { blueGrey } from '@mui/material/colors'
import Practice from './assets/Component/Practice';

function App() {
  // const [Length, setLength] = useState(6)
  // const [Number, setNumber] = useState(false)
  // const [Char, setChar] = useState(false)
  // const [Password, setPassword] = useState(false) 
  const PasswordGenerater=useCallback ( ()=> {
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz"

if(Number) str +="0123456789"
if(Char) str +="!@#$%^&*(){}()*+,-./:"
for(let i=0; i<=str.length; i++){
  let ch = Math.floor(Math.random() * str.length + 1)
}


},[length,Number,Char,setPass,])

  // const [count,setCount] = useState(1)
  // let firstIncrement = ()=>(
  //   setCount(count+1)
  // )
  //   const firstDecrement = ()=>(
  //   setCount(count-1)
  //   )
  return (
    <> 
    <Practice first='hello'/>
      {
        <div>
          

        </div>

/* <h1>{count}</h1>


      <button onClick={firstIncrement}> Click here to increment</button>
      <button onClick={firstDecrement}>Click here to Decrement</button> */}
    </>
  )
}

export default App
