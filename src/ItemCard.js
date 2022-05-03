import React, {useState} from 'react'


function ItemCard({item}){

    const [liked, setLiked] = useState(false)
    

    return (
        <ul className="card">
          <h4>{item.name}</h4>
          <img src={item.image} alt={item.name} />
         
          <p>Price: {item.price}</p>
          {liked ? (
            <button onClick={() => setLiked(!liked)} className="primary">★</button>
          ) : (
            <button onClick={() => setLiked(!liked)} >☆</button>
          )}
        </ul>
      );
}


export default ItemCard