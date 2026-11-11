import {createContext, type Dispatch} from "react";
import {type ShoppingCartItem} from "../types";
import {type CartTypes} from "../reducers/CartReducer.tsx";

interface CartContextType {
    cartItems: ShoppingCartItem[];
    dispatch: Dispatch<CartTypes>;
}

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    dispatch: () => {
    },
});
CartContext.displayName = 'CartContext';
