import React from 'react'

function Furniture({furniture}) {

    const {id, imageurl, type, price, location} = furniture;

  return (
    <div>
    <div className='image-wrapper'>
      <img src={imageurl} alt={furniture.type} style={{height:"200px"}}/>
     <p>{type}</p>
     <p>{price}</p>
     <p>{location}</p>
      <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Furniture