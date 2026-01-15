import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/navbar/navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from './pages/shop'
import ShopCategory from './pages/shopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/loginSignup'
import Footer from './components/Footer/Footer'
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"






function App() {
  const [count, setCount] = useState(0)


  return (
    <div >
      <BrowserRouter>
      <Nav />
      <Routes>
         <Route path="/" element={<Shop/>}/>
                  <Route path="/home" element={<Shop/>}/>

        <Route path="/Men" element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path="/Women" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/" element={<Product />}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/login" element={<LoginSignup/>}/>
      
           
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
    
    
  )
}


export default App
