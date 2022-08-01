import './App.css';
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import FurnitureList from './Components/FurnitureList';
import Login from './Components/Login';
import FurnitureForm from './Components/FurnitureForm';
import HomePage from "./Components/HomePage"
import AddToCart from './Components/AddToCart';


function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const onAdd = (furniture) =>{
    const exist = cart.find(x => x.id === furniture.id)
    if(exist){
      setCart(cart.map(x => x.id === furniture.id ? {...exist, qty: exist.qty + 1} : x))
    }else{
      setCart([...cart, {...furniture, qty: 1}])
    }
  }


  return (
    <div>
      <NavBar setShow={setShow} />
      <Switch>
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/furniturelist">
      {show ? (
        <FurnitureList  onAdd={onAdd}/>
      ) : (
        'No products in cart'
      )}
      </Route>
      <Route exact path="/furnitureform">
      <FurnitureForm />
      </Route>
      <Route exact path="/addtocart">
      <AddToCart onAdd={onAdd}cart={cart}/>
      </Route>
      <Route exact path="login">
      <Login />
      </Route>
      </Switch>
    </div>
    
  );
}

export default App;