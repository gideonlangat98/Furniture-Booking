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
  

  const furnitureList = furnitures.map((furniture) => {
    return <div key={furniture.id} className="furnitures">
      <div className='imgs'>
      <img src={furniture.imageurl} alt={furniture.type}/>
      </div>
     {furniture.price}
     {furniture.type}
     {furniture.location}
  </div>
  })

  return (
    <div>
      {furnitureList}
    </div>
  )
}

export default FurnitureList;