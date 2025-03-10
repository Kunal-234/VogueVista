import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {

  const { product } = props;
  const{addToCart} = useContext(ShopContext);


  return (
    <div className="productdisplay mb-4 pb-4">
      <div className="productdisplay-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="img">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right mx-4 px-2">
        <h1>{product.name}</h1>
        <div className="star d-flex my-2 ">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(128)</p>
        </div>
        <div className="prices d-flex">
          <div style={{fontSize:"1.95rem"}} className="new-price ">${product.new_price}</div>
          <div className="old-price ">${product.old_price}</div>
        </div>
        <div className="right-description ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          molestias aliquid unde soluta explicabo, quasi esse asperiores illo,
          atque, fugiat quia quo?
        </div>
        <div className="size">
            <div className="size mb-3">
            <h2>Select Size</h2>
                <div className="btn btn-outline-dark mx-1">S</div>
                <div className="btn btn-outline-dark mx-1">M</div>
                <div className="btn btn-outline-dark mx-1">L</div>
                <div className="btn btn-outline-dark mx-1">Xl</div>
                <div className="btn btn-outline-dark mx-1">XXl</div>
            </div>
        </div>
        <button className="btn btn-dark btn-lg mb-2 mx-1" onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        <p className="right-category"><span>Category: </span> Women , T-shirt , Crop Top</p>
        <p className="right-category"><span>Tags: </span> Modern , T-Latest </p>
      </div>
    </div>
  );
}
