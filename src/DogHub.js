import React from 'react'
import './DogHub.css'
import Footer from './component/Varient1/Footer'
import NavBar from './component/Varient1/NavBar'
import Select from './component/Varient1/Select'
import Title from './component/Varient1/Title'
import Text1 from './component/Varient1/Text1'


function DogHub() {
  return (
    <div>
       <Title/>
       <NavBar/>
       <Text1/>
       <Select/>
       <Footer/> 
    </div>
  )
}

export default DogHub