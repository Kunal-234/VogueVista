import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import Logo from '../Navbar/Vogue.PNG'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={Logo} alt="" />
            <p>VOGUEVISTA</p>
        </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <a href='https://www.instagram.com' target='__blank' className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </a>
        <a href='https://in.pinterest.com' target='__blank' className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </a>
        <a href='https://www.whatsapp.com' target='__blank' className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </a>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  )
}