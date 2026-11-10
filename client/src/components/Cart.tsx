import "../assets/css/Cart.css"
import CartTable from "./CartTable.tsx";
import {itemCountLabel, cartSubtotal} from "../cartUtils.tsx";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.tsx";
import {Link} from "react-router-dom";

function Cart() {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cart container">
            <CartTable/>
            <div className="subtotal-area container">
                <h2 className="subtotal-header">Your Cart</h2>
                <div className="subtotal">Subtotal ({itemCountLabel(cartItems)}): {cartSubtotal(cartItems)}</div>
                <Link to="/checkout" className="checkout-button button clean-link">Proceed to checkout</Link>
                <button className="continue-shopping-button">Continue shopping</button>
            </div>
        </div>
    );
}

export default Cart;