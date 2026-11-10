import "../assets/css/Cart.css"
import CartTable from "./CartTable.tsx";
import {itemCountLabel, cartSubtotal} from "../cartUtils.tsx";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.tsx";
import {Link} from "react-router-dom";
import {FaRegTrashCan} from "react-icons/fa6";

// TODO: make continue shopping button work

function Cart() {
    const {dispatch, cartItems} = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart-display">
                <p>Your cart is empty.</p>
                <button className="button">Continue shopping</button>
            </div>
        );
    }

    return (
        <div className="cart container">
            <CartTable/>
            <div className="subtotal-area container">
                <h2 className="subtotal-header">Your Cart</h2>
                <div className="subtotal">Subtotal ({itemCountLabel(cartItems)}): {cartSubtotal(cartItems)}</div>
                <Link to="/checkout" className="checkout-button button clean-link">Proceed to checkout</Link>
                <button className="continue-shopping-button">Continue shopping</button>
                <button className="clear-cart-button">
                    <div onClick={() => (dispatch({type: "CLEAR"}))} className="clear-cart-label">
                        <FaRegTrashCan/>
                        <span>Clear cart</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Cart;