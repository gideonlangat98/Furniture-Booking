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
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true)

 function handleClick(furniture){
 if(cart.indexOf(furniture) !== -1){
  setCart([...cart, furniture])
 }
  
 }

 function handleChange(furniture, d){
  const ind = cart.indexOf(furniture)
  const arr = cart;
  arr[ind].amount += d

  if (arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr]);
};


  return (
    <div>
      <NavBar setShow={setShow} />
      <Switch>
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/furniturelist">
      {show ? (
        <FurnitureList handleClick={handleClick} />
      ) : (
        <AddToCart cart={cart} setCart={setCart} handleChange={handleChange}/>
      )}
      </Route>
      <Route exact path="/furnitureform">
      <FurnitureForm />
      </Route>
      <Route exact path="login">
      <Login />
      </Route>
      </Switch>
    </div>
    
  );
}

export default App;