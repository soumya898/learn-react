import React from 'react'

export default function Section(props) {
 

const { title, description } = props.value;
console.log(props.value)
    
  return (
    <div className="section"> 
    <h1>{title}</h1>
    <p>{description}</p>
    <hr />
</div>
    
  )
}
