import React from 'react';
import furn1 from '../images/furn.jpg'

function HomePage() {
  return (
    <div className='home-page'>
      <div>
      <p style={{fontSize:"5rem", marginLeft: "5rem"}}>Best<br></br> Quality<br></br>Furniture</p>
      </div>
      <div>
      <img src={furn1} alt="" />
      </div>
    </div>
  )
}

export default HomePage;