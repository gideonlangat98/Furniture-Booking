import React from 'react'

function NavBar({setShow}) {
  return (

    <div>
         <div className='navbar--wrapper' onClick={() => setShow(true)}>
          <div>MyFurnitureApp</div>
          </div>
          <div className='rightbar-wrapper'>
            <span>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <div>
            <button className='login' onClick={() => setShow(false)}>View Products</button>
            </div>
            <div>
            {/* <div>AddToCart</div> */}
            </div>
        
        </div> 
           
    </div>
    
  )
}

export default NavBar;