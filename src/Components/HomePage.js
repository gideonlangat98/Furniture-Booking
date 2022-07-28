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
      <h3>Footer</h3>
    </div>
    </div>

    
  )
}

export default HomePage;