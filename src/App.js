import './App.css';
import React, { useState, useEffect } from "react"
import NavBar from './Components/NavBar';
import FurnitureList from './Components/FurnitureList';

function App() {
  return (
    <div>
      <NavBar />
      <FurnitureList  />
    </div>
  );
}

export default App;
