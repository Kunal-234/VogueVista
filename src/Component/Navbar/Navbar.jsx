import React, { useState } from "react";
import './Navbar.css'

import { NavLink,Link } from "react-router-dom";
import Logo from './Vogue.PNG'

export default function Navbar() {

  const[menu,setMenu]=useState("shop");

  return (
    <div>
      <nav
        className="navbar mx-2  navbar-expand-lg border-bottom border-dark bg-body-light "
        style={{ backdropFilter: "blur(5px)", padding:"14px",fontSize:"1.2rem" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" style={{fontSize:"1.8rem",fontWeight:"570",marginRight:"190px"}} onClick={()=>{setMenu("shop")}} to="/">
          <img src={Logo} alt="404" style={{height:"60px",margin:"0px 10px",opacity:"99"}}/>
           VogueVista
          </NavLink> {menu==="shop"?<hr/>:<></>}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={()=>{setMenu("shop")}}>
                <NavLink  className="nav-link mx-4" to="/">
                  Shop
                </NavLink>
                {/* {menu==="shop"?<hr/>:<></>} */}
              </li>
        
              <li className="nav-item" onClick={()=>{setMenu("mens")}}>
                <NavLink style={menu==="mens"?{textDecoration:"underline"}:{textDecoration:"none"}} className="nav-link mx-4" to="/mens">
                  Mens
                {/* {menu==="womens"?<hr/>:<></>} */}
                </NavLink>
              </li>
              <li className="nav-item" onClick={()=>{setMenu("womens")}}>
                <NavLink style={menu==="womens"?{textDecoration:"underline"}:{textDecoration:"none"}} className="nav-link mx-4" to="/womens">
                  Womens
                {/* {menu==="womens"?<hr/>:<></>} */}
                </NavLink>
              </li>
              <li className="nav-item" onClick={()=>{setMenu("kids")}}>
                <NavLink style={menu==="kids"?{textDecoration:"underline"}:{textDecoration:"none"}} className="nav-link  mx-4" to="/kids">
                  Kids
                </NavLink>
                {/* {menu==="kids"?<hr/>:<></>} */}
              </li>
            </ul>
          </div>
          <div>
            <Link className="cart" to="/Cart">
            <i 
              className="fa-solid cart-img fa-cart-shopping mx-4"
              style={{ color: " black", cursor: "pointer" }}
            ></i>
            </Link>
          </div>
         <Link className="logout-btn" to="/LoginSignup">Login</Link>
        </div>
      </nav>
    </div>
  );
}
