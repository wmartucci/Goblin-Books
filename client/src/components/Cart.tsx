import "../assets/css/Cart.css"
import CartTable from "./CartTable.tsx";
import {itemCountLabel, cartSubtotal} from "../cartUtils.tsx";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.tsx";

function Cart() {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cart container">
            <CartTable/>
            <div className="subtotal-area">
                <p className="subtotal">Subtotal ({itemCountLabel(cartItems)}): {cartSubtotal(cartItems)}</p>
                <button className="checkout-button">Proceed to checkout</button>
                <button className="continue-shopping-button">Continue shopping</button>
            </div>
        </div>
    );
}

export default Cart;