import React, { useState, useEffect } from 'react'

function AddToCart({cart, setCart, handleChange}) {
  const [price, setPrice] = useState(0);

  function handleRemove(id){
    const arr = cart.filter((furniture) => furniture.id !== id);
    setCart(arr);
    handlePrice();
  };

  function handlePrice(){
    let answ = price
    cart.map((furniture) => (answ += furniture.amount * furniture.price));
    setPrice(answ)
  }

  useEffect(()=>{
    handlePrice()
  })

  return (
    <article>
    {cart.map((furniture) => (
      <div className="cart_box" key={furniture.id}>
        <div className="cart_img">
          <img src={furniture.imageurl} alt="" />
          <p>{furniture.type}</p>
        </div>
        <div>
          <button onClick={() => handleChange(furniture, 1)}>+</button>
          <button>{furniture.price}</button>
          <button onClick={() => handleChange(furniture, -1)}>-</button>
        </div>
        <div>
          <span>{furniture.price}</span>
          <button onClick={() => handleRemove(furniture.id)}>Remove</button>
        </div>
      </div>
    ))}
    <div className="total">
      <span>Total Price of your Cart</span>
      <span>Rs - {price}</span>
    </div>
  </article>
);
};

export default AddToCart