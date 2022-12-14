// import axios from 'axios'
// import React from 'react'
// import { useState } from 'react'



// function DisplayImages({handleImages, handleNumbers}) {

//   const [randomImages, setRandomImages]=useState([]);
//   const randomImageDisplay=()=>{
//     axios.get(`https://dog.ceo/api/breed/${handleImages}/images/random/${handleNumbers}`)
//     .then(res=>{setRandomImages(res.data.message)})
//     .catch(err=>console.log(err))
//   };
//   return (
    
//     <div>
//       <div>
//             <button className='btn' onClick={randomImageDisplay}>Randomize Breed Number Display</button>
//       </div>
        
//       <div className='images'>
//         <div>
//           {randomImages.map((display)=><img className='msg' alt='loading' src={display}/>)}
//         </div>

//       </div>

//     </div>
//   )
// }

// export default DisplayImages