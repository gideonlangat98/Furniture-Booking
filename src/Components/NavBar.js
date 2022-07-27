import React from 'react'

function NavBar() {
  return (
    <div>
        <div className='navbar--wrapper'>
          <div>MyFurnitureApp</div>
          <div className='rightbar-wrapper'>
            <div>
            <button className='login'>Login</button>
            </div>
            <div>
            <div>AddToCart</div>
            </div>
          </div>
        </div>
           
    </div>
    
  )
}

export default NavBar;