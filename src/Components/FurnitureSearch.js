import React  from 'react'

function FurnitureSearch({setSearch}) {
    function handleChange(e){
        setSearch(e.target.value)
    }
  return (
    <div>
        <input placeholder="Search-Furn" onChange={handleChange}></input>
    </div>
  )
}

export default FurnitureSearch;