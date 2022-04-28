import React, {useState} from 'react'

// will need to use props to push up info from here to display the cards 


// addig dynamic category: 
// create state with existing categories...
// loop through state in a select tag 
// with add category form when add is clicked update that state 
// use if / else logic to confirm that the category doesnt already exist 

function Form ({handleNewItem}) {

  const [newItem, setNewItem] = useState()
  const [itemName, setItemName] = useState("")
  const [newImage, setNewImage] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  
  const formData = {
    name : itemName, 
    image : newImage,
    price : price,
    category : category
  }

  function handleAddName(event){
    console.log(event.target.value)
    setItemName(event.target.value)
  }

  function handleAddImage(event) {
    setNewImage(event.target.value)

  }

  function handleAddPrice(event){
    setPrice(parseInt(event.target.value))

  }

  function handleSubmit(e){
    e.preventDefault()
    // console.log(formData)
    handleNewItem(formData)
    setNewItem(formData)
    console.log(e)
  }

  function handleCategory(event){
    setCategory(event.target.value)
  }
  
  return (
    <div className="add-item-form">
      <h2>New Item</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleAddName} value={itemName} type="text" name="name" placeholder="Item name" />
        <input onChange={handleAddImage} value={newImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleCategory} value={category} type="text" name="category" placeholder="Category" />
        <input onChange={handleAddPrice} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add new item</button>
      </form>
    </div>
  );
  
}

export default Form 