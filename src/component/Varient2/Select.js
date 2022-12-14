import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Text2 from './Text2';

function Select() {

  const[selectBreed, setSelectBreed]=useState([]);
  useEffect(()=>{
    axios.get("https://dog.ceo/api/breeds/list")
    .then(res=>{setSelectBreed(res.data.message)})
    .catch(err=>{console.log(err)})
  },[]);

  const [numbers, setNumbers]=useState(0);
  const selectNumber =(e)=>{
    setNumbers(e.target.value)
  };

  const [selectBreedImages, setSelectBreedImages]=useState("");
  const breedImages =(e)=>{
    setSelectBreedImages(e.target.value)
  };


  const [randomImages, setRandomImages]=useState([]);
  const randomImageDisplay=()=>{
    axios.get(`https://dog.ceo/api/breed/${selectBreedImages}/images/random/${numbers}`)
    .then(res=>{setRandomImages(res.data.message)})
    .catch(err=>console.log(err))
  };

  return (
    <div>
        {/* {selectBreed} */}
      <div className='select'>

        <div>
          <select className='cell' onChange={breedImages}>
            <option>Breeds</option>
            {selectBreed.map((breeds, index)=><option key={index} value={breeds} className='sell'>{breeds}</option>)}
          </select>
          {/* {selectBreedImages} */}
        </div>

        <div>
            <select className='cell'>
              <option className='sell'>Sub-Breeds</option>
            </select>
        </div>    

        <div>
            <select className='cell' onChange={selectNumber}>
              <option className='sell'>Display Number</option>
              <option value={3}>3</option>
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={12}>12</option>
              <option value={15}>15</option>
              <option value={18}>18</option>
              <option value={21}>21</option>
            </select>
            {/* {numbers} */}
        </div>
        
        <div>
            <button className='btn' onClick={randomImageDisplay}>Randomize Breed Number Display</button>
        </div>
        
        <Text2/>

        <div className='images'>
          
            {randomImages.map((display)=><div><img className='msg' alt='loading' src={display}/></div>)}
          

        </div>

      </div>
      
    </div>
  )
}

export default Select