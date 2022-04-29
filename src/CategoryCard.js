import React from 'react'
import {Link} from 'react-router-dom'

function CategoryCard({image, name, id}){


    return (
        <ul className="category-card">
            <Link to={`http://localhost:9292/categories/${id}`}>
            <h4>{name}</h4>
          <img className="category-image" src={image} alt={name} />
            </Link >
        </ul>
      );
}

export default CategoryCard