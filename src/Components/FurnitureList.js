import React, { useEffect, useState } from 'react'

function FurnitureList() {

  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/furnitures")
    .then((response) => response.json())
    .then((data) => {
      setFurnitures(data)
    })
  }, [])

  const [cart, setCart] = useState([]);


  const addToCart = (furnitures) => {
    setCart([...cart, furnitures])
    console.log('We are in cart');
  }
  
  const furnitureList = furnitures.map((furniture) => {
    return <div key={furniture.id} className="furnitures" furniture={furniture}>
      <div className='furniture-wrapper'>
      <img src={furniture.imageurl} alt={furnitures.type} style={{height:"200px"}}/>
     {furniture.price}
     {furniture.type}
     {furniture.location}
      <button onClick={() => addToCart(furnitures)}>Add to Cart</button>
     </div>
     </div>
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