import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'
import DisplayItems from './DisplayItems'
import Categories from './Categories'
import Home from './Home'
import { Route, Switch } from "react-router-dom";


function App() {

  const [items , setItems] = useState([])
  
  function handleNewItem(formData) {  
    console.log(formData)
    setItems([...items, formData])
  }
  
  return (
    <div className="App">
      <header className="header">rentmystuff.com</header>
      <Form handleNewItem={handleNewItem} />
      {/* <DisplayItems items={items} />
      <Categories /> */}
      <NavBar />
      <Switch>
        <Route exact path="/categories">
           <Categories /> 
        </Route>
        </Switch>
      
    </div>
  );
}

export default App;
