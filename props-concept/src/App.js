import React from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import BookList from "./components/BookList"
import BookItem from "./components/BookItem"
import Navbar from "./Basic-template/Navbar"
import About from "./Basic-template/About"

import Section from "./Basic-template/Section"

const App = () => {
  return (
    <div>
      {/* hello react! */}
      {/* <Header     name="Soumya Ranjan"    titel="Nayak"          /> */}

      {/*  this is parent componet and child component is Header so we pass
              data from parent to child  */}
      {/* <Button btntext="apple" color="red" paraText="brining Apple" />
      <Button btntext="Mango" color="yellow" paraText="Mango color yellow" />
      <p>lorem ipsum dolor sit amet</p>
       <p>lorem ipsum dolor sit amet</p>

      <Button btntext="Banana" color="green">
      <p> inside p </p>
      </Button>

      <p> this is a  children  and this is extra code </p> */}


      {/* <BookItem/> */}

     {/*   Basic Template  */}
 
let section_data = [
    {title: "Skills", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto ipsam voluptate soluta sunt suscipit officiis illo at autem sint eos vero provident impedit sequi, deserunt beatae, a eaque dicta ut? Quae sed totam, accusamus facere nemo exercitationem placeat facilis nesciunt ullam animi ipsa quos itaque, perspiciatis quo id quibusdam incidunt debitis qui error tempora soluta alias eius aliquid? Deserunt saepe sequi quos necessitatibus id expedita provident itaque dolore velit pariatur! Minima, ratione. Quisquam, voluptatum."},

    {
        title: "Experience",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto ipsam voluptate soluta sunt suscipit officiis illo at autem sint eos vero provident impedit sequi, deserunt beatae, a eaque dicta ut? Quae sed totam, accusamus facere nemo exercitationem placeat facilis nesciunt ullam animi ipsa quos itaque, perspiciatis quo id quibusdam incidunt debitis qui error tempora soluta alias eius aliquid? Deserunt saepe sequi quos necessitatibus id expedita provident itaque dolore velit pariatur! Minima, ratione. Quisquam, voluptatum."
    },

    {
        title: "Education",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto ipsam voluptate soluta sunt suscipit officiis illo at autem sint eos vero provident impedit sequi, deserunt beatae, a eaque dicta ut? Quae sed totam, accusamus facere nemo exercitationem placeat facilis nesciunt ullam animi ipsa quos itaque, perspiciatis quo id quibusdam incidunt debitis qui error tempora soluta alias eius aliquid? Deserunt saepe sequi quos necessitatibus id expedita provident itaque dolore velit pariatur! Minima, ratione. Quisquam, voluptatum."
    }
]

export default section_data

   <Navbar/>
   <About/>
     {
      section_data.map((index,value)=>(

        <Section   key={index}  value={value} />
       ))
     }

</div>


      // {/*     chapter03  ||    State Management                        */


            



  




  )
}

export default App