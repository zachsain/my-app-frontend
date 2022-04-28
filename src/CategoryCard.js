import React from 'react'

function CategoryCard({image, name}){


    return (
        <li className="category-card">
            <h4>{name}</h4>
          <img className="category-image" src={image} alt={name} />
        </li>
      );
}

export default CategoryCard