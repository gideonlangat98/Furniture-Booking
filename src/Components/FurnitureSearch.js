import React  from 'react'

function FurnitureSearch({setSearch}) {
    function handleChange(e){
        setSearch(e.target.value)
    }
  return (
    <div className='search-input'>
        <input placeholder="Search for furniture" onChange={handleChange}></input>
    </div>
  )
}

export default FurnitureSearch;