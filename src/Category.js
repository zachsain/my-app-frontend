import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from './ItemCard';


function Category(props) {

    const [category, setCategory] = useState({
        items: []
    })
    const [itemFormFlad, setItemFormFlag] = useState(false)

    const params = useParams()
    debugger;

    useEffect(() => {
        debugger;
        fetch(`http://localhost:9292/categories/${props.match.params.id}`)
        .then((r) => r.json())
        .then(data=> (setCategory(data), console.log(data)))
    }, [])
    

    return (
        <div>
            <h3>Hello</h3>

        </div>
    )
}

export default Category