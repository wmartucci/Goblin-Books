import {CartContext} from "../contexts/CartContext.tsx";
import React, {useReducer} from "react";
import {cartKey, cartReducer, initialCart} from "../reducers/CartReducer.tsx";

function CartProvider({children}: { children: React.ReactNode }) {
    const [cartItems, dispatch] = useReducer(cartReducer, initialCart);
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            dispatch: dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;