import './App.css';
import React, {useState} from "react";
import NavBar from './Components/NavBar';
import FurnitureList from './Components/FurnitureList';
import Login from './Components/Login';
import FurnitureForm from './Components/FurnitureForm';
import HomePage from "./Components/HomePage"


function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      <NavBar setShow={setShow}/>
      <HomePage />
      {show ? <FurnitureList /> : "Furniture"}
      <FurnitureForm />
      <Login />
    </div>
    
  );
}

export default App;
