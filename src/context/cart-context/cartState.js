import { useState } from "react";
import cartContext from "./cartContext";

// Provider

const CartState = ({children}) => {

const [cartItems, setCartItems] = useState([])

return (
    <cartContext.Provider value={[cartItems, setCartItems]}>
        {children}
    </cartContext.Provider>
)
}

export default CartState