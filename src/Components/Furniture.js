import React from 'react'

function Furniture({furniture, handleClick}) {

    const { imageurl, type, price, location} = furniture;

  return (
    <div className='furn'>
    <div className='image-wrapper'>
      <img src={imageurl} alt={furniture.type} style={{height:"220px"}}/>
    </div>
    <div className='furn-details'>
     <p>{type}</p>
     <p>{price}</p>
     <p>{location}</p>
      <button onClick = { () => handleClick(furniture)} className="addCart">Add to Cart</button>
      </div>
    </div>
  )
}

export default Furniture;