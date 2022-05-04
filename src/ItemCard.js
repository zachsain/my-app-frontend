import React, {useState} from 'react'


function ItemCard({item, handleDelete}){

    const [liked, setLiked] = useState(false)

    function handleDelete(event){
        handleDelete(event.currentTarget.id)
    }
    

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
          <button id={item.id} onClick={handleDelete}>Delete</button>
        </ul>
      ); 
}


export default ItemCard