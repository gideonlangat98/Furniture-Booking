import './App.css';
import React, {useState} from "react";
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
 if(cart.indexOf(furniture) !== -1)return;
  setCart([...cart, furniture])
 }

  
  return (
    <div>
      <NavBar setShow={setShow}/>
      <HomePage />
      {show ? <FurnitureList handleClick={handleClick} /> : <AddToCart cart={cart} />}
      <FurnitureForm />
      <Login />
    </div>
    
  );
}

export default App;
