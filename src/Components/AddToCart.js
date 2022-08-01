import React from 'react'

function AddToCart({cart, onAdd, onRemove}) {
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{cart.length === 0 && <div>Cart is Empty</div>}</div>
      {cart.map((item) =>(
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>+</button>
          </div>
          <div>
            {item.qty} * Ksh{item.price}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AddToCart;