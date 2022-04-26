import React, {useState} from 'react'


function ItemCard({image, name, price,}){

    const [liked, setLiked] = useState(false)

    return (
        <li className="card">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <p>Price: {price}</p>
          {liked ? (
            <button onClick={() => setLiked(!liked)} className="primary">★</button>
          ) : (
            <button onClick={() => setLiked(!liked)} >☆</button>
          )}
        </li>
      );
}

export default ItemCard