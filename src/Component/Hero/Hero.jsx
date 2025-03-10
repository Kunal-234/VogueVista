import React from 'react'
import "./Hero.css"
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h4> NEW ARRIVALS ONLY</h4>
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon}alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img className='arrow' src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img className='hero-img' src={hero_image} alt="" />

      </div>
    </div>
  )
}
