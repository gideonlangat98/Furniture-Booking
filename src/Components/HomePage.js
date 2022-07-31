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
      <h5 style={{fontSize:"20px"}}>Important Links</h5>
      {/* <div className='links'> */}
        <li>Home </li>
        <li>Products</li>
        <li>Login</li>
      {/* </div> */}
      <div className='footer-icons' style={{fontSize: "35px"}}>
        <i class="fa-brands fa-instagram-square " style={{padding: "2rem", marginLeft: "10rem"}}></i>
        <i class="fa-brands fa-facebook "  style={{paddingRight: "2rem"}}></i>
        <i class="fa-brands fa-twitter-square " id="twitter "></i>
      </div>
      </div>
      <h4>Copyright@2022MyFurnitureCollections-All rights Reserved.</h4>
    
    </div>

    
  )
}

export default HomePage;