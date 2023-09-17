
import React,{useState} from 'react'

export default function Display() {

     const [name,setName]=useState(' ')
     const [display,setDisplay]=useState(' ')

     function handleChange(e){
        e.preventDefault()
        setName( e.target.value)
     }

     const DisplayHandler=()=>{

        setDisplay(name.charAt(0).toUpperCase()+name.slice(1))
        setName('')
      
     }
  return (
    <div>

       <h1> Input :</h1> 
        <input  placeHolder= "enter text"  onChange={handleChange} />   <br></br>
        <button onClick={ DisplayHandler}> Submit</button>

       <p> Name is : {display}</p>



    </div>  )
}
