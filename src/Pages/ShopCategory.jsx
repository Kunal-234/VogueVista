import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Item/Item'

export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-catgory pb-4 mb-4' style={{overflow:"hidden"}}>
    <img className='mx-1' style={{height:"280px",width:"98vw"}} src={props.banner} alt="" />
    <div className="shopcategory-indexSort d-flex justify-content-between mt-4 mx-4 px-4">
      <p>
        <span className='fw-semibold'>Showing 1-12</span> out of 36 products
      </p>
      <div style={{float:"right"}} role="button" tabIndex="0" className="shopcategory-sort ">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div style={{gap:"20px"}} className="shopcategory-products row ">
      {all_product.map((item,i)=>{
        if(props.category===item.category){
          return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }
      })}
    </div>
    </div>
  )
}
