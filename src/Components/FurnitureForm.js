import React, { useState } from 'react'

function FurnitureForm(){

  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    firstName: "", lastName: ""
  });

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function onAddUser(newUser){
    setUsers([...users, newUser])
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/furnitures", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName
      })
      .then ((response) => response.json())
      .then((data) => {
        onAddUser(data)
        setFormData({...formData, firstName: "", lastName: ""})
        console.log(data)
      })
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={formData.firstName} name="firstName" placeholder="firstName" />
      <input onChange={handleChange} value={formData.lastName} name="lastName" placeholder="lastName" />
      <button>Submit</button>
    </form>
  )
}

export default FurnitureForm;