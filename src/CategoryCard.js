import React from 'react'
import {Link} from 'react-router-dom'

function CategoryCard({category}){


    return (
        <ul className="category-card">
            <Link to={`${category.id}`}>
            <h4>{category.name}</h4>
          <img className="category-image" src={category.image} alt={category.name} />
            </Link >
        </ul>
      );
}

export default CategoryCard