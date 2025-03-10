import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItem() {

    const{all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);

  return (
    <div className='cartitem m-4 p-4'>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr"}} className="main mb-0 mx-4 ">
            <p>Products</p>
            <p>Title</p>
            <p style={{marginLeft:"25px"}}>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                <div style={{height:"110px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr"}} className="format mx-4 ">
                    <img style={{height:"110px",borderRadius:"10px"}} src={e.image} alt="" className='product-icon'/>
                    <p>{e.name}</p>
                    <p style={{marginLeft:"25px"}}>${e.new_price}</p>
                    <button style={{height:"35px",width:"30px",border:"none",background:"transparent"}} className='quantity mx-3'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img style={{height:"20px",marginLeft:"25px",cursor:"pointer"}} src={remove_icon} onClick={()=>removeFromCart(e.id)} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-down ">
            <div style={{width:"90vmin"}} className="cartitems-total m-4 p-4 d-flex flex-column ">
                <h1 className='mx-4'>Cart Totals</h1>
                <div className='d-flex flex-column  justify-content-between m-4'>
                    <div className="total-item d-flex justify-content-between ">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-item d-flex justify-content-between ">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="tital-item d-flex justify-content-between ">
                     <h3>Total</h3>
                     <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button style={{width:"40vmin"}} className='btn btn-lg btn-dark mx-4'>PROCEED TO CHECKOUT</button>
            </div>
        </div>
      
    </div>
  )
}
