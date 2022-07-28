import React, { useEffect, useState } from 'react'
import Furniture from "./Furniture"
import FurnitureSearch from "./FurnitureSearch"


function FurnitureList() {

  const [furnitures, setFurnitures] = useState([]);
  const [searchFurniture, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/furnitures")
    .then((response) => response.json())
    .then((data) => {
      setFurnitures(data)
    })
  }, [])

  const furnitureFilter = furnitures.filter((furniture) =>{ 
    if(searchFurniture === ""){
      return true;
    }else{
      return furniture.type.toLowerCase().includes(searchFurniture.toLowerCase())
    }
  });

 
  const furnitureList = furnitureFilter.map((furniture) => {
    return (
    <Furniture key={furniture.id} className="furn" furniture={furniture} />
    )
  })


  return (
    <div>
      <header>
      {/* <button>Cart {cart.length}</button> */}
      </header>
      <FurnitureSearch setSearch={setSearch}/>
      {furnitureList}
    </div>
  )
}

export default FurnitureList;