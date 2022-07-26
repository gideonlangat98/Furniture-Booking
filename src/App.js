import './App.css';
import React from "react"
import NavBar from './Components/NavBar';
import FurnitureList from './Components/FurnitureList';
import Login from './Components/Login';
import FurnitureForm from './Components/FurnitureForm';
import HomePage from './Components/HomePage';

function App() {
  
  return (
    <div>
      <NavBar />
      <HomePage />
      <FurnitureList  />
      <FurnitureForm />
      <Login />
    </div>
  );
}

export default App;
