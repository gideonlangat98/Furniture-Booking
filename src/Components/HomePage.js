import React from 'react';
import furn1 from '../images/furn.jpg'

function HomePage() {
  return (
    <div>
    <div className='home-page'>
      <div>
      <p style={{fontSize:"5rem", marginLeft: "5rem"}}>Best<br></br> Quality<br></br>Furniture</p>
      </div>
      <div>
      <img src={furn1} alt="" className='furn1'/>
      </div>
    </div>

    <div className='footer'>
      <div class="links">
        <h4>Important Links</h4>
      </div>
      <div>
        <li>Home</li>
        <li>Products</li>
        <li>About us</li>
        <li>Contact us</li>
      </div>
    </div>
    </div>

    
  )
}

export default HomePage;