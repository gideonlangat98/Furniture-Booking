import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar({setShow}) {
  return (
    <div className='nav'>
      <NavLink to="/">
        HomePage
      </NavLink>
      <NavLink to="/furniturelist">
        FurnitureList
      </NavLink>
      <NavLink to="/addtocart">
        AddToCart
      </NavLink>
      <NavLink to="/furnitureform">
        FurnitureForm
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>


      <div className='navbar--wrapper' onClick={() => setShow(true)}>
        <div>MyFurnitureApp</div>
        </div>
        <div className='rightbar-wrapper'>
          <span>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <div>
              <button onClick={() => setShow(false)}>View Products</button>
              </div>
              <div>
            {/* <div>AddToCart</div> */}
            </div>
        
        </div> 
           
    </div>
    
  )
}

export default NavBar;