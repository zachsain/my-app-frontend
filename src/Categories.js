import React, {useState, useEffect} from 'react'
import CategoryForm from './CategoryForm'

function Categories () {

    const [categories, setCategories] = useState([])
    const [categoryFormFlag, setCategoryFormFlag] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/categories")
        .then((r) => r.json())
        .then(categories => (setCategories(categories), console.log(categories)))
      },[])

    return (
        <div>
            <CategoryForm />
            <h3>Categories:</h3>
            
        </div>
    )
}

export default Categories 