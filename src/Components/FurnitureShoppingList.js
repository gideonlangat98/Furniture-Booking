// import React, { useState } from 'react';
// import Furniture from './Furniture';

// const myFurnitures = [
//   {
    
//   }
// ]

// function FurnitureShoppingList({furnitures}) {

//     const [selectedCategory, setCategory] = useState('All')

//     function handleSelectedCategory(event){
//         setCategory(event.target.value)
//     }

//     const updatedCategory = furnitures.filter((furniture) =>{
//       if (selectedCategory === 'All'){
//         return true;
//       }else{
//         furniture.category === selectedCategory;
//       }
//     })

//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleSelectedCategory}>
//           <option value="All">Filter by category</option>
//           <option value="luxury sofas">Sofas</option>
//           <option value="office chairs">Office Chairs</option>
//           <option value="stools">Nest of stools</option>
//         </select>
//       </div>
//       <ul className='furnitures'>
//         {updatedCategory.map((furniture) =>{
//           return <Furniture key={furniture.id} name={furniture.name} category={furniture.category}/>
//         })}
//       </ul>
//       </div>
//   )
// }

// export default FurnitureShoppingList