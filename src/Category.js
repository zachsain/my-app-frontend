import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from './ItemCard';


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
    
    category.items.map(i => {
        console.log(i.name)
    })

    return (
        <div>
            <h3>{category.name}</h3>

        </div>
    )
}

export default Category