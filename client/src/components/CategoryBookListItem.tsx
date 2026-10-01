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
        <li className="book-box">
            <div className="book-image">
                <img
                    src={`../assets/images/books/${bookImageFileName(props)}`}
                    alt={props.title}
                />
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-author">{props.author}</div>
            <div className="book-price">${props.price}</div>
            <button className="button">Add to Cart</button>
            <button className="button">Read Now</button>
        </li>
    );
}

export default CategoryBookListItem;
