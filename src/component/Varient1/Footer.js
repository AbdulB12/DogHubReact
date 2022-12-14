import React from 'react'

function Footer() {
  return (
    <div>
      <hr style={{color: '#E3E7EE'}}/>
      <div className='footer'>

        <div className='f1' style={{flexGrow: '4'}}>
          <div className='f2'>
            <div>
              <img alt='loading' src='img/Group 1.png'/>
            </div>

            <div>
              <p></p>
              <b className='bld'>DogHub</b>
            </div>
          </div>

          <div style={{marginLeft: '50px'}}>
            <li>The Dogs API was made by dog.ceo, you could<br/>
buy the author a dog treat via this link <a href='https://www.paypal.com'>https://<br/>www.paypal.com/paypalme/dogapi</a>, you could<br/> also view the project on Github via this link<br/><a href='https://www.github.com'> https://github.com/ElliottLandsborough/dog<br/>-ceo-api</a></li>
          </div>
        </div>

        <div className='f1' style={{flexGrow: '2'}}>

          <div className='list' style={{marginRight: '50px'}}>
            <p></p>
            <span className='pan'>Popular</span>
          </div>
          <div className='lst'>
            <ul>
              <li>Categories</li>
              <li>New Arrival</li>
              <li>Popular</li>
            </ul>
          </div>

        </div>

        <div className='f1' style={{flexGrow: '2'}}>

          <div className='list' style={{marginRight: '50px'}}>
            <p></p>
            <span className='pan'>Breeds</span>
          </div>
          <div className='lst'>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
          </div>

        </div>

        <div className='f1' style={{flexGrow: '4', marginLeft:'120px'}}>

          <div style={{textAlign:'left'}}>
            <p></p>
            <span className='pan'>Join Newsletter</span>
          </div>

          <div>
            <p></p>
            <li>To learn more and get major updates,<br/> subscribe to our newsletter</li>
          </div>
          <p></p>
          <input type='email' placeholder='enter your email address' className='email'/>
          {/* <img src='img/Ellipse.png'/> */}
        </div>

      </div>
      <hr/>
      <div className='foot'>

        <div className='foot1' style={{marginLeft:'50px'}}>
          <p></p>
          <img src='img/c.png' alt='loading'/>&nbsp;
          <b className='foott'>2021 wizsullivan</b>
        </div>

        <div className='foot1'>
          <p></p>
          <b className='foott g'>Privacy Policy</b>
        </div>

        <div className='foot1'>
          <p></p>
          <b className='foott g'>Terms Of Service</b>
        </div>

        <div className='foot1 x' style={{marginLeft:'220px'}}>
          <b className='foott' style={{textAlign:'left'}}>Language</b>
          <select className='eng'>
            <option >English</option>
          </select>
        </div>

        <div className='foot1 x' style={{marginLeft:'100px'}}>
          <b className='foott' style={{textAlign:'left'}}> Follow Us</b>
          <div className='z'>
            <img src='/img/twitter.png' alt='loading' className='m'/>
            <img src='img/insta.png' alt='loading' className='m'/>
            <img src='/img/spiral.png' alt='loading' className='m'/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer