import React, { useEffect, useState } from 'react'
import Furniture from "./Furniture"


function FurnitureList() {

  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/furnitures")
    .then((response) => response.json())
    .then((data) => {
      setFurnitures(data)
    })
  }, [])

 
  const furnitureList = furnitures.map((furniture) => {
    return (
    <Furniture key={furniture.id} className="furn" furniture={furniture} />
    )
  })


  return (
    <div>
      <header>
      {/* <button>Cart {cart.length}</button> */}
      </header>
      {furnitureList}
    </div>
  )
}

export default FurnitureList;