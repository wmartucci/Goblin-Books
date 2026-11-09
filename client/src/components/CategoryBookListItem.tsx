import "../assets/css/CategoryBookListItem.css";
import "../types";
import "../types";
import type {BookItem} from "../types";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.tsx";
import {asDollarsAndCents, bookImageFileName} from "../cartUtils.tsx";

function CategoryBookListItem(props: BookItem) {
    const {dispatch} = useContext(CartContext);
    const addToCart = () => {
        dispatch({type: 'ADD', payload: props})
    }

    return (
        <li className="book-box container">
            <div className="book-image">
                <img
                    src={`${import.meta.env.BASE_URL}/assets/images/books/${bookImageFileName(props)}`}
                    alt={props.title}
                />
                {props.isPublic && (
                    <button className="button read-now-button">
                        Read Now!
                    </button>
                )}
            </div>
            <div className="book-info-and-actions">
                <section className="book-info">
                    <div className="book-title">{props.title}</div>
                    <div className="book-author">{props.author}</div>
                    <div className="book-price">{asDollarsAndCents(props.price)}</div>
                </section>
                <button onClick={addToCart} className="button add-to-cart-button">
                    Add to Cart
                </button>
            </div>
        </li>
    );
}

export default CategoryBookListItem;
