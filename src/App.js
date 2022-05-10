import React, {useState, useEffect} from 'react'
import './App.css';
import DisplayItems from './DisplayItems';
import Categories from './Categories';
import Home from './Home';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import Category from './Category';


function App() {

  const [items , setItems] = useState([])
  
  function handleNewItem(formData) {  
    console.log(formData)
    setItems([...items, formData])
  }
  
  return (
    <div className="App">
      <header className="header">rentmystuff.com</header>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="categories/:id" element={<Category/>} />
      </Routes>


    </div>
  );
}

export default App;
