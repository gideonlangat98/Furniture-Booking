import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar({setShow}) {
  return (
    <div className='nav'>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/furniturelist">
        Furnitures
      </NavLink>
      <NavLink to="/addtocart">
        AddToCart
      </NavLink>
      <NavLink to="/furnitureform">
        Login
      </NavLink>
      <NavLink to="/login">
        Sign up
      </NavLink>
      {/* <div className='navbar--wrapper' > */}
        <button onClick={() => setShow(true)}>View Furniture</button>
        {/* </div> */}
        <div className='rightbar-wrapper'>
          <span>
            </span>
            <div>
              <button onClick={() => setShow(false)}>Cart</button>
              </div>
              <div>
            {/* <div>AddToCart</div> */}
            </div>
        
        </div> 
           
    </div>
    
  )
}

export default NavBar;