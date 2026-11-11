import {CartContext} from "../contexts/CartContext.tsx";
import React, {useEffect, useReducer} from "react";
import {cartReducer} from "../reducers/CartReducer.tsx";
import {ShoppingCartItem} from "../types.tsx";

const cartKey = "CartKey";

function CartProvider({children}: { children: React.ReactNode }) {
    const [cartItems, dispatch] = useReducer(cartReducer, [], initCart);

    useEffect(() => {
        localStorage.setItem(cartKey, JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                dispatch: dispatch,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

function initCart(initialCart: ShoppingCartItem[]): ShoppingCartItem[] {
    const savedCart: string | null = localStorage.getItem(cartKey);
    return savedCart ? JSON.parse(savedCart) : initialCart;
}

export default CartProvider;
