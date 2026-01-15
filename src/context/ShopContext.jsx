import React,{createContext,useState} from "react";
import all_product from "../assets/all_product";
import CartItems from "../components/CartItems/CartItems";



export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let index=0;index < all_product.length+1;index++){
       cart[index] = 0
    } return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState([])
    

    const addTocart = (item) =>{
        setCartItems((prev)=>[...prev, item])
    }
  
        const removeFromCart = (itemId) =>{
            setCartItems((prev)=> prev.filter(val => val.id != itemId))
        }
         const getTotalCartAmount = () =>{
            let totalAmount = 0;
            for(const item of cartItems)
            {
                totalAmount += item.price;
              
            }
            return totalAmount;
        }

        const getTotalCartItems = () =>{
           return cartItems.length;
        }
           


   
        
    
    return (
        <ShopContext.Provider value ={{ getTotalCartItems,getTotalCartAmount, removeFromCart,addTocart,all_product,cartItems}}>
     {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;
