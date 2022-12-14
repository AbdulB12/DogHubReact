import React from 'react'

function Title() {
    const date= new Date();
  
  return (
    
    <div className='title'>
        
        <div className='tone' style={{flexGrow: '2'}}>
            <div className='dog'>
                <img className='d1' alt='loading' src='/img/Group 1.png'/>
            </div>

            <div className='dog2'>
                <p></p>
                <b className='bold'>DogHub</b>
            </div>
        </div>



        <div className='ttwo' style={{flexGrow: '2'}}>

            <div>
                <p></p>
                <b className='varient'>Varient 1</b>
            </div>
            <div>
            <p></p>
                <b className='varient'>Varient 2</b>
            </div>

        </div>



        <div className='tthree' style={{flexGrow: '8'}}>
            <p></p>
            <input type='text' value={date} className='inp'/>

        </div>
    
    </div>
    
    
  )
}

export default Title