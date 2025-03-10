import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Sign() {
  return (
    <div>
    <div className="main">
      <div className="cont">
        <h1 id='logHead'>SignUp Here</h1>
        <div className="data">
          <input type="text" placeholder="Username" />
          <i id="icon" class="fa-solid fa-user" />
        </div>
        <div className="data">
          <input type="password" placeholder="Password" />
          <i id="icon" class="fa-solid fa-lock" />
        </div>
        <div className="data">
          <input type="password" placeholder="Confirm Password" />
          <i id="icon" class="fa-solid fa-lock" />
        </div>
        <div className='mt-4'>
          <button className='logbtn'>SignUp</button>
        </div>
        <div>Already have an Account? <Link className='signup' to="/LoginSignup">Login</Link></div>
      </div>
    </div>
    </div>
  )
}
