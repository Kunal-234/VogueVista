import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

export default function NewCollection() {
  return (
    <div className='new-collections m-2'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections row">
            {new_collection.map((item,i)=>{
            return <Item className='col-md-4 ' key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}
