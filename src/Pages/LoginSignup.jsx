import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

export default function LoginSignup() {
  return (
    <div>
    <div className="main">
      <div className="cont">
        <h1 id='logHead'>Login Here</h1>
        <div className="data">
          <input type="text" placeholder="Username" />
          <i id="icon" class="fa-solid fa-user" />
        </div>
        <div className="data">
          <input type="password" placeholder="Password" />
          <i id="icon" class="fa-solid fa-lock" />
        </div>
        <div className="forgot">
          
          <a  href="/"> Forgot Password?</a>
        </div>
        <div>
          <button className='logbtn'>Login</button>
        </div>
        <div>Don't have any Account? <Link className='signup' to="/sign">Sign up</Link></div>
      </div>
    </div>
    </div>
  )
}
