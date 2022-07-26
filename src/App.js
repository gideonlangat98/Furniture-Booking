import './App.css';
import React from "react"
import NavBar from './Components/NavBar';
import FurnitureList from './Components/FurnitureList';
import Login from './Components/Login';

function App() {
  
  return (
    <div>
      <NavBar />
      <FurnitureList  />
      <Login />
    </div>
  );
}

export default App;
