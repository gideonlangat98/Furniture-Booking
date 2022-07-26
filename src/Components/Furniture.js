import React from 'react'

function Furniture({furnitures}) {

  const [imageurl, price, type, location] = furnitures;
  return (
    <div>
      {imageurl}
      {price}
      {type}
      {location}
    </div>
  )
}

export default Furniture;