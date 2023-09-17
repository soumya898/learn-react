import React,{useState} from 'react'

export default function FruitAdd() {

    const [fruit,setFruits]=useState(["apple","banana","orrange","grapse"])
    const[foodList,setFoodList]=useState('')
    function addFruits(e){
        e.preventDefault()
       
         let arr=[...fruit]
         arr.push(foodList)
          // arr= ... fruit+ foodList

          setFruits(arr)
        //  setFoodList('')

    }
     function deleteFruits(){
       let arr= [...fruit]
       arr.pop(foodList)
       setFruits(arr)


     }
  return (
    <div>

    <input placeHolder="enter a fruit" onChange={(e)=>setFoodList(e.target.value)} />
    <button onClick={addFruits}>  add fruit</button>
    <button onClick={deleteFruits}> delete fruit</button>
 <h2> FruitsLists:</h2> 
 <ul>
        {fruit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>




    </div>








  )
}
