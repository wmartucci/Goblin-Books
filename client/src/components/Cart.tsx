import "../assets/css/Cart.css";
import CartTable from "./CartTable.tsx";
import {itemCountLabel, cartSubtotal} from "../cartUtils.tsx";
import {useContext, useState} from "react";
import {CartContext} from "../contexts/CartContext.tsx";
import {Link} from "react-router-dom";
import {FaRegTrashCan} from "react-icons/fa6";

export const continueShoppingPathKey = "ContinueShoppingPathKey";

function Cart() {
    const {dispatch, cartItems} = useContext(CartContext);

    const [continueShoppingPath, _] = useState(() => {
        const saved = localStorage.getItem(continueShoppingPathKey);
        return saved ? `/categories/${saved}` : "/";
    });

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart-display">
                <p>Your cart is empty.</p>
                <Link to={continueShoppingPath} className="button clean-link">
                    Continue shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="cart container">
            <CartTable/>
            <div className="subtotal-area container">
                <h2 className="subtotal-header">Your Cart</h2>
                <div className="subtotal">
                    Subtotal ({itemCountLabel(cartItems)}):{" "}
                    {cartSubtotal(cartItems)}
                </div>
                <Link
                    to="/checkout"
                    className="checkout-button button clean-link"
                >
                    Proceed to checkout
                </Link>
                <Link
                    to={continueShoppingPath}
                    className="continue-shopping-button clean-link"
                >
                    Continue shopping
                </Link>
                <button className="clear-cart-button">
                    <div
                        onClick={() => dispatch({type: "CLEAR"})}
                        className="clear-cart-label"
                    >
                        <FaRegTrashCan/>
                        <span>Clear cart</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Cart;
