import React, { useEffect, useState } from 'react'
import Furniture from "./Furniture"


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

 function handleClick(furniture){
  setCart([...cart, furniture])
 }

 
  const furnitureList = furnitures.map((furniture) => {
    return (
    <Furniture key={furniture.id} className="furn" furniture={furniture} handleClick={handleClick} />
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