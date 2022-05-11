import React, {useState} from 'react'

function CategoryForm ({handleNewCategory}) {

  const [newImage, setNewImage] = useState("")
  const [categoryName, setCategory] = useState("")

  

  function handleCategory(event){
    console.log(event.target.value)
    setCategory(event.target.value)
  }

  function handleAddImage(event) {
    setNewImage(event.target.value)

  }

  function clearForm(){
    setCategory("")
    setNewImage("")

  }

  function handleSubmit(e){

    e.preventDefault()

    const formData = {
      name : categoryName, 
      image : newImage,
    }

    handleNewCategory(formData)
    // setCategory(formData) //??
    clearForm()
  }

  return (
    <div className="add-item-form">
      <h3 className="add-new-category"> Add New Category:</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleCategory} value={categoryName} type="text" name="category" placeholder="Category" />
        <input onChange={handleAddImage} value={newImage} type="text" name="image" placeholder="Image URL" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
  
}

export default CategoryForm 