import React from 'react'
import { NavLink } from "react-router-dom"
import shoppingIcon from "../images/shopping-cart"

const navLinks = {
  display: "inline",
  padding: "30px",
  textDecoration: "none",
  fontSize: "25px",
}

function NavBar({setShow}) {

  return (
    <div className='nav'>
      <NavLink to="/" style={navLinks}>
        Home
      </NavLink>
      <NavLink to="/furniturelist" style={navLinks}>
        Products
      </NavLink>
      <NavLink to="/furnitureform" style={navLinks}>
        Login
      </NavLink> 
        <button onClick={() => setShow(true)} className="view-button">View Products</button>
        <div className='rightbar-wrapper' onClick={() => setShow(false)}>
        <img src={shoppingIcon} alt="" style={{height:"30px"}}/>
              <div>
            {/* <div>AddToCart</div> */}
            </div>
        
        </div> 
           
    </div>
    
  )
}

export default NavBar;