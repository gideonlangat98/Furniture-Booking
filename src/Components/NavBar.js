import React from 'react'
import { NavLink } from "react-router-dom"

const navLinks = {
  display: "inline",
  padding: "30px",
  textDecoration: "none",
  fontSize: "25px",
  marginLeft: "9rem"
}

function NavBar({setShow}) {

  return (
    <div className='nav'>
      <div>
      <h3 style={{fontSize: "30px", marginLeft: "2rem"}}>MyFurniture</h3>
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
        <div className='icon'>
        <span>
          <i className="fas fa-cart-plus"></i>
        </span>
        </div>
        </div> 
        </div>
           
      
    </div>
    
  )
}

export default NavBar;