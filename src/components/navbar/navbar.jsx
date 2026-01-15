import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/shop-bag-logo-.avif"
import carticon from "../../assets/images.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

 

const Navbar = () => {
  const { getTotalCartItems } = React.useContext(ShopContext)
  const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" height="50px" />
            <p> Buy Bliss</p>
            
        </div>
        <ul className='nav-menu'>
            <li  onClick={()=>{setMenu("home")}}><Link  style={{textDecoration:"none",color:"#626262"}} to="/home">Home</Link> {menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/Men">Men</Link>{menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/Women">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/Kids">Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"> <button>Login</button></Link>
            <Link to="/cart"><img src={carticon} alt="" height="40px" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>

        </div>

    </div>
  )
}

export default Navbar