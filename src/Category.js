import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemCard from './ItemCard';


function Category(props) {

    const params = useParams()
    const [id, setId] = useState(params.id)

    const [category, setCategory] = useState({
        items: []
    })
    const [itemFormFlad, setItemFormFlag] = useState(false)

   

    useEffect(() => {
      
        fetch(`http://localhost:9292/categories/${id}`)
        .then((r) => r.json())
        .then(data=> {
            console.log(data)
            setCategory(data)
        })
    }, [])
    
    let item = category.items.map(i => {
       return <ItemCard
       key={i.id} 
       item={i} />
       console.log(i)
    })

    return (
        <div>
            <br/>
            <h3>{category.name}:</h3>
            <hr/>
            <br/>
            {item}           
        </div>
    )
}

export default Category