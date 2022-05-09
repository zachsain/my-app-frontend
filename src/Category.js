import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm'


function Category() {

    const params = useParams()
    const [id, setId] = useState(params.id)

    // const [category, setCategory] = useState({
    //     items: []
    // })

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
    
    // let item = category.items.map(i => {
    //     // debugger; 
    //    return <ItemCard
    //    handleDelete={handleDelete}
    //    key={i.id} 
    //    item={i} />
    // })

    let itemList = []

    function editItem(formData){
        console.log(formData)
        
    }

    
    if (categorySet) {
        itemList = category.items.map(i => {
       return <ItemCard
       handleDelete={handleDelete}
       key={i.id} 
       item={i} 
       handleEditItem={editItem}/>
    }) 
    }

    

    function handleDelete(buttonId){
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
        // let copyOfObj = category

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


        //  .then((newItem)=> {
        //     const updatedCategory = [...category, newItem];
        //     setCategory(updatedCategory);
        //     })
    

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