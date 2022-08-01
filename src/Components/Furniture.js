import React from 'react'

function Furniture({furniture, onAdd}) {

    // const { imageurl, type, price, location} = furniture;

  return (
    <div className='furn'>
    <div className='image-wrapper'>
      <img src={furniture.imageurl} alt={furniture.type} style={{height:"220px"}}/>
    </div>
    <div className='furn-details'>
     <p>{furniture.type}</p>
     <p>{furniture.price}</p>
     <p>{furniture.location}</p>
      <button onClick={() => onAdd(furniture)} className="addCart">Add to Cart</button>
      </div>
    </div>
  )
}

export default Furniture;