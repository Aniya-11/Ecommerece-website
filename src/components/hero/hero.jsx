import React from 'react'
import './hero.css'
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men from "../../assets/men.webp"

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="Hero-left">
            <h2>Best Deals !  Best Prices !</h2>
       
        <div className="Hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" height="60px" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="Hero-latest-btn">
            <div> Latest Collection</div>
            <img src={arrow_icon} alt="" height="30px"/>
        </div>

        </div>
        <div className="Hero-right">
            <img src={men} alt="" height="300px" />

        </div>

    </div>
  )
}

export default Hero