import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm'


function Category() {

    const params = useParams()
    const [id, setId] = useState(params.id)

    const [category, setCategory] = useState({})
    const [categorySet, setCategorySet] = useState(false)
    

    useEffect(() => {
      
        fetch(`http://localhost:9292/categories/${id}`)
        .then((r) => r.json())
        .then(data=> {
            console.log(data)
            setCategory(data)
            setCategorySet(true)
        })
    }, [])
    
    let itemList = []

    
    if (categorySet) {
        itemList = category.items.map(i => {
            return <ItemCard
            handleDelete={handleDelete}
            key={i.id} 
            item={i} 
            handleEditItem={editItem}
       />
        }) 
    }

    function editItem(formData){

        console.log(formData)

        fetch(`http://localhost:9292/items/${formData.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then(r => r.json())
            .then(editedItem => {
                console.log(editedItem)
                const newItemList = category.items.map(i => i.id == editedItem.id ? editedItem : i)
                let updatedCategory = {...category, items: newItemList}
                setCategory(updatedCategory)
            }) 

    }

    function handleDelete(buttonId) {
        console.log(buttonId)

        fetch(`http://localhost:9292/items/${buttonId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
          });

          const updatedItems = category.items.filter((item) => {
            //   debugger;
           return item.id.toString() !== buttonId
          });
          console.log(updatedItems)
          let filteredCategory = {...category}
          filteredCategory.items = updatedItems
          setCategory(filteredCategory)
    }


    function handleNewItem(formData){
       
        console.log(formData)

        fetch(`http://localhost:9292/categories/${id}/items`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then(r => r.json())
            .then(newItem => {
                const itemList = [...category.items, newItem]
                let updatedCategory = {...category}
                updatedCategory.items = itemList
                setCategory(updatedCategory)
            }) 
         }
    

    return (

        <div>
            <ItemForm 
            handleNewItem={handleNewItem}/>
            <br/>
            <h3>{category.name}:</h3>
            <hr/>
            <br/>
            {itemList ? itemList : null}          
        </div> 
    )
}

export default Category