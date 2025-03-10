import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

export default function Popular() {
  return (
    <div className='popular d-flex flex-column   '> 
     <h1 >POPULAR IN WOMEN</h1>
     <hr />
     <div className="popular-item row">
        {data_product.map((item,i)=>{
            return <Item className='col-md-4' key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
     </div>
      
    </div>
  )
}
