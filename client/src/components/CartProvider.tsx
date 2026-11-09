import {CartContext} from "../contexts/CartContext.tsx";
import React, {useReducer} from "react";
import {cartReducer} from "../reducers/CartReducer.tsx";
import {initialCartState} from "../types.tsx";

function CartProvider({children}: { children: React.ReactNode }) {
    const [cartItems, dispatch] = useReducer(cartReducer, initialCartState);
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