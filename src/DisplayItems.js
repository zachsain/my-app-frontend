import React from 'react'
import ItemCard from './ItemCard'

function DisplayItems({items}){
    console.log(items)

   const itemCards = items.map(item => {
       return <ItemCard 
            name={item.name}
            image={item.image}
            price={item.price} 
            />
   })

   return <div> {itemCards} </div>

}

export default DisplayItems