# React + Vite
# . create a user input and buttion write  some text in input then press submit that text is display also.

import React,{useState} from 'react'

export default function Display() {

     const [name,setName]=useState(' ')
     const [display,setDisplay]=useState(' ')

     function handleChange(e){
        e.preventDefault()
        setName( e.target.value)
     }

     const DisplayHandler=()=>{

        setDisplay(name)
     }
  return (
    <div>

       <h1> Input :</h1> 
        <input  placeHolder= "enter text"  onChange={handleChange} />   <br></br>
        <button onClick={ DisplayHandler}> Submit</button>
        dd
       <p> Name is : {display}</p>



    </div>  )
}



# add fruit and delete that

# useEffect