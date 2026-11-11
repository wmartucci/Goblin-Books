import "../types";
import "../assets/css/CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookListItem";
import CategoryNav from "./CategoryNav";
import {type BookItem} from "../types";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {continueShoppingPathKey} from "./Cart.tsx";

function CategoryBookList() {
    const {catId} = useParams();
    const booksUrl =
        import.meta.env.VITE_URL_PREFIX +
        `${import.meta.env.BASE_URL}/api/categories/name/${catId}/books;`;
    const [books, setBooks] = useState<BookItem[]>([]);

    // Fetch books from selected category
    useEffect(() => {
        axios.get(booksUrl).then((response) => {
            setBooks(response.data);
        });
    }, [catId, booksUrl]);

    useEffect(() => {
        if (catId) {
            localStorage.setItem(continueShoppingPathKey, catId);
        }
    }, [catId]);

    return (
        <>
            <CategoryNav/>
            <ul className="book-list">
                {books.map((book) => (
                    <CategoryBookListItem
                        key={book.bookId}
                        bookId={book.bookId}
                        isPublic={book.isPublic}
                        price={book.price}
                        title={book.title}
                        author={book.author}
                    />
                ))}
            </ul>
        </>
    );
}

export default CategoryBookList;
