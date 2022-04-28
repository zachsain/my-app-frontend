import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './CategoryForm'
import DisplayItems from './DisplayItems'
import Categories from './Categories'
import Home from './Home'
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar'


function App() {

  const [items , setItems] = useState([])
  
  function handleNewItem(formData) {  
    console.log(formData)
    setItems([...items, formData])
  }
  
  return (
    <div className="App">
      <header className="header">rentmystuff.com</header>
      {/* <img className="image-rent" src="https://www.moneymagpie.com/cl_resize/cl9s2JcBLc8Lob08wksMSakpLnD4fWRplF23NLE5CUg/rs:fill:500:0/g:ce/q:70/aHR0cHM6Ly93d3cubW9uZXltYWdwaWUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDExLzAyL01vbmV5TWFncGllX0Zvci1yZW50LmpwZw"/> */}

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="categories" element={<Categories/>} />
      </Routes>


      
    </div>
  );
}

export default App;
