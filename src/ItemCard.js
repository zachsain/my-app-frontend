import React, {useState} from 'react'


function ItemCard({item, handleDelete}){

    const [liked, setLiked] = useState(false)

    function handleDeleteClick(event){
        let convertToString = event.currentTarget.id.toString()
        console.log(event.currentTarget.id)
        handleDelete(convertToString)
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
          <button id={item.id} onClick={handleDeleteClick}>Delete</button>
        </ul>
      ); 
}


export default ItemCard