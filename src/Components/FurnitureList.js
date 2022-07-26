import React, { useEffect, useState } from 'react'


function FurnitureList() {

  const [furnitures, setFurnitures] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/furnitures")
    .then((response) => response.json())
    .then((data) => {
      setFurnitures(data)
    })
  }, [])

  const addToCart = (furniture) => {
    setCart([...cart, {...furniture}])
    console.log('We are in cart');
  }

  const furnitureList = furnitures.map((furniture) => {
    return (
    <div key={furniture.id} className="furn">
      <div className='image-wrapper'>
      <img src={furniture.imageurl} alt={furniture.type} style={{height:"200px"}}/>
     <p>{furniture.type}</p>
     <p>{furniture.price}</p>
     <p>{furniture.location}</p>
      <button onClick={() => addToCart(furnitures)}>Add to Cart</button>
      </div>
     </div>
    )
  })


  return (
    <div>
      <header>
      <button>Cart {cart.length}</button>
      </header>
      {furnitureList}
    </div>
  )
}

export default FurnitureList;