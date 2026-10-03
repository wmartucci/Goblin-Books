import "../assets/css/CategoryBookListItem.css";
import "../types";
import "../types";
import type { BookItem } from "../types";

const bookImageFileName = (book: BookItem) => {
    let name = book.title.toLowerCase();
    name = name.replace(/ /g, "-");
    name = name.replace(/'/g, "");
    return `${name}.gif`;
};

function CategoryBookListItem(props: BookItem) {
    return (
        <li className="book-box container">
            <div className="book-image">
                <img
                    src={`../assets/images/books/${bookImageFileName(props)}`}
                    alt={props.title}
                />
                {/* Hard code which books have "Read Now" for now */}
                {(props.bookId === 1002 || props.bookId === 1004) && (
                    <button className="button read-now-button">Read Now!</button>
                )}
            </div>
            <div className="book-info-and-actions">
                <section className="book-info">
                    <div className="book-title">{props.title}</div>
                    <div className="book-author">{props.author}</div>
                    <div className="book-price">${props.price}</div>
                </section>
                <button className="button add-to-cart-button">
                    Add to Cart
                </button>
            </div>
        </li>
    );
}

export default CategoryBookListItem;
