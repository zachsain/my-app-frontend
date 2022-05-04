import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm'


function Category(props) {

    const params = useParams()
    const [id, setId] = useState(params.id)

    const [category, setCategory] = useState({
        items: []
    })
    

    useEffect(() => {
      
        fetch(`http://localhost:9292/categories/${id}`)
        .then((r) => r.json())
        .then(data=> {
            console.log(data)
            setCategory(data)
        })
    }, [])
    
    let item = category.items.map(i => {
        // debugger; 
       return <ItemCard
       key={i.id} 
       item={i} />
    })


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
                
                setCategory([...category, newItem])
                // debugger;
                // console.log(category)
            });
         }


    // `http://localhost:9292/categories/{id}/items`
    

    return (

        <div>
            <ItemForm 
            handleNewItem={handleNewItem}/>
            <br/>
            <h3>{category.name}:</h3>
            <hr/>
            <br/>
            {item}           
        </div>
    )
}

export default Category