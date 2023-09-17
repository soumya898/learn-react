import React,{useState,useEffect} from 'react'

export default function Effect() {

let [resource,setResource]=useState('posts')
        
console.log("state update and render....")

    useEffect(()=>{

       console.log("useEffect updating....")
        return ()=>{ console.log('return and resource changed ')}
    },[resource])

    // if i clicked  2nd time user or cooments use effct is not updatig bcz its value alredy there no updataion 
    // so f React optimizes re-renders by comparing the new state or props values with the previous ones. 
    //If a state value remains the same, 
    //React will not trigger a re-render or the associated effect.


  return (
    <div>
    
      <button onClick={()=>setResource('posts')}>POST</button>
      <button onClick={()=>setResource('Users')}>USER</button>
      <button onClick={()=>setResource('Comments')}>COMMENT</button>
   
         
         <h2> {resource}</h2>

    </div>
  )
}
