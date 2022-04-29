import React, {useState, useEffect} from 'react'
import CategoryForm from './CategoryForm'
import CategoryCard from './CategoryCard'

function Categories () {

    const [categories, setCategories] = useState([])
    const [categoryFormFlag, setCategoryFormFlag] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/categories")
        .then((r) => r.json())
        .then(categories => {
            setCategories(categories)
            console.log(categories)
        })
      },[])

     let categoryList = categories.map(c => {
          return <CategoryCard
                    key={c.id} 
                    category={c}
                    // name={c.name}
                    // image={c.image}
                    />
      })

      function handleNewCategory(formData){

        console.log(formData)


        fetch("http://localhost:9292/categories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then(r => r.json())
            .then(newItem =>  setCategories([...categories, newItem]));


      }

    return (
        <div>
            <CategoryForm handleNewCategory={handleNewCategory}/>
            <h3>Categories:</h3>
            {categoryList}

        </div>
    )
}

export default Categories 