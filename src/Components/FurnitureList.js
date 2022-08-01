import React, { useEffect, useState } from 'react'
import Furniture from "./Furniture"
import FurnitureSearch from "./FurnitureSearch"


function FurnitureList({onAdd}) {

  const [furnitures, setFurnitures] = useState([]);
  const [searchFurniture, setSearch] = useState("")

  useEffect(() => {
    fetch("https://gideon-server.herokuapp.com/furnitures")
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
    <Furniture key={furniture.id} className="furn" furniture={furniture} onAdd={onAdd}/>
    )
  })


  return (
    <div>
      <header>
      {/* <button>Cart {cart.length}</button> */}
      </header>
      <FurnitureSearch setSearch={setSearch}/>
      {furnitureList}

      <div className='footer'>
      <h3 style={{fontSize:"23px"}}>Important Links</h3>
      <div className='links'>
        <li>Home </li>
        <li>Products</li>
        <li>Login</li>
      </div>
      <div className='footer-icons' style={{fontSize: "25px"}}>
        <i class="fa-brands fa-instagram-square " style={{padding: "2rem", marginLeft: "10rem"}}></i>
        <i class="fa-brands fa-facebook "  style={{paddingRight: "2rem"}}></i>
        <i class="fa-brands fa-twitter-square " id="twitter "></i>
      </div>
      </div>
    </div>
  )
}

export default FurnitureList;