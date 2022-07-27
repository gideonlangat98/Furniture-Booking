import React, { useEffect, useState } from 'react'
import Furniture from "./Furniture"


function FurnitureList() {

  const [furnitures, setFurnitures] = useState([]);
  const [cart, setCart] = useState(furnitures);

  useEffect(() => {
    fetch("http://localhost:3000/furnitures")
    .then((response) => response.json())
    .then((data) => {
      setFurnitures(data)
    })
  }, [])

  const addToCart = (furniture) => {
    setCart([...cart, {...furniture}])
    console.log('furnitures');
  }

 
  const furnitureList = furnitures.map((furniture) => {
    return (
    <Furniture key={furniture.id} className="furn" furniture={furniture}/>
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