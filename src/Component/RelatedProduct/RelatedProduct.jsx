import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

export default function RelatedProduct() {
  return (
    <div className='relatedproduct my-4 py-4'>
        <h1 style={{marginLeft:"33vw",fontSize:"3rem"}}>Related Products</h1>
        <div style={{gap:"20px"}} className="relatedproduct-item row">
            {data_product.map((item,i)=>{
                    return <Item className='col-md-4 ' key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>        
            })}
        </div>
      
    </div>
  )
}
