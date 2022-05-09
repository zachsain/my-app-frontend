import React, {useState} from 'react'
import ItemEditForm from './ItemEditForm'


function ItemCard({item, handleDelete, handleEditItem}){

    const [liked, setLiked] = useState(false)
    const [editClick, setEdit] = useState(false)

    function handleDeleteClick(event){
        // let convertToString = event.currentTarget.id.toString()
        console.log(event.currentTarget.id)
        handleDelete(event.currentTarget.id)
    }
    
    const editMenu = <ItemEditForm
                        handleEditItem={handleEditItem} 
                        item={item}
                     />

    

    return (
        <ul className="card">
          <h4>{item.name}</h4>
          <img className="item-image" src={item.image} alt={item.name} />
         
          <p>Price: {item.price}</p>
          {liked ? (
            <button onClick={() => setLiked(!liked)} className="primary">★</button>
          ) : (
            <button onClick={() => setLiked(!liked)} >☆</button>
          )}
          <button id={item.id} onClick={handleDeleteClick}>Delete</button>
          <button id={item.id} onClick={() => setEdit(!editClick) }>Edit</button>
          {editClick ? editMenu : null }

        </ul>
      ); 
}


export default ItemCard