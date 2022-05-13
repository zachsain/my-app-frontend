import React, {useState} from 'react'


function ItemEditForm ({handleEditItem, item}) {

  const [newItem, setNewItem] = useState()
  const [itemName, setItemName] = useState(item.name)
  const [newImage, setNewImage] = useState(item.image)
  const [price, setPrice] = useState(item.price)
  const [itemId, setId] = useState(item.id)


  function handleAddName(event){
    console.log(event.target.value)
    setItemName(event.target.value)
  }

  function handleAddImage(event) {
    setNewImage(event.target.value)

  }

  function handleAddPrice(event){
    setPrice(event.target.value)

  }

  function clearForm(){
    setItemName("")
    setNewImage("")
    setPrice(0)

  }

  function handleSubmit(e){

    e.preventDefault()

    const formData = {
        id: itemId,
        name : itemName, 
        image : newImage,
        price : price,
      }
   
    handleEditItem(formData)
    setNewItem(formData)
    console.log(e)
    clearForm()
  }

  
  return (
    <div className="add-item-form">
      <h5 className="add-new-item"> Edit Item:</h5>
      <form onSubmit={handleSubmit}>
        <input onChange={handleAddName} value={itemName} type="text" name="name" placeholder="Item name" />
        <input onChange={handleAddImage} value={newImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleAddPrice} value={price} type="number" name="price" placeholder="Price" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
}

export default ItemEditForm 