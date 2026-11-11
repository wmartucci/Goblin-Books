import "../assets/css/CartTable.css"
import {FaMinus, FaPlus} from "react-icons/fa";
import {FaRegTrashCan} from "react-icons/fa6";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.tsx";
import {asDollarsAndCents, bookImageFileName} from "../cartUtils.tsx";
import type {ShoppingCartItem} from "../types.tsx";

function CartTable() {
    const {cartItems, dispatch} = useContext(CartContext);
    const quantityButtonSize = "0.85em";
    const trashButtonSize = "0.75em";

    return (
        <ul className="cart-table container">
            <li className="cart-table-header">
                <div className="header-book">Book</div>
                <div className="header-price">Price</div>
                <div className="header-quantity">Quantity</div>
                <div className="header-subtotal">Amount</div>
            </li>
            {cartItems.map((item: ShoppingCartItem) => (
                <li key={item.id}>
                    <div className="cart-book-image">
                        <img src={`${import.meta.env.BASE_URL}/assets/images/books/${bookImageFileName(item.book)}`}
                             alt={item.book.title}/>
                    </div>
                    <div className="cart-book-title">{item.book.title}</div>

                    <div className="cart-book-price">{asDollarsAndCents(item.book.price)}</div>

                    <div className="cart-book-quantity">
                        <div className="inc-and-dec">
                            <button onClick={() => dispatch({type: "REMOVE", payload: item.book})}
                                    className="icon-button dec-button">
                                <FaMinus size={quantityButtonSize}/>
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button onClick={() => dispatch({type: "ADD", payload: item.book})}
                                    className="icon-button inc-button">
                                <FaPlus size={quantityButtonSize}/>
                            </button>
                        </div>
                        <button onClick={() => dispatch({type: "REMOVE ALL COPIES", payload: item.book})}
                                className="clear-book-button">
                            <FaRegTrashCan size={trashButtonSize}/>
                        </button>
                    </div>

                    <div className="cart-book-subtotal">{asDollarsAndCents(item.quantity * item.book.price)}</div>
                </li>
            ))}
        </ul>
    );
}

export default CartTable;

