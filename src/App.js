import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'
import DisplayItems from './DisplayItems'

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
      <DisplayItems items={items} />
    </div>
  );
}

export default App;
