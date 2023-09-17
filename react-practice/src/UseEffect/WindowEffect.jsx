import React,{useState,useEffect} from 'react'

export default function WindowEffect() {

    const[windowWidth,setwindowWidth]=useState(window.innerWidth);

    const handleResize=()=>{
        setwindowWidth(window.innerWidth)
    }


    useEffect(()=>{

     window.addEventListener('resize',handleResize)
    },[])
  return (
    <div>
      

    



        <h1> Windows  Width :{windowWidth}</h1>


    </div>
  )
}
