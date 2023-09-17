import React from 'react'

export default function Button({btntext,color,paraText,Children}) {
    //  here we directly pass as name 
  return (
    <div>
          <button  style={{backgroundColor:color}}>
         {paraText}
      <p>  {btntext}   </p>
        </button >
             

    </div>
  )
}
