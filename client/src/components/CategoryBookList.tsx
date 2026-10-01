import "../types";
import "../assets/css/CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookListItem";
import CategoryNav from "./CategoryNav";
import "../types";
import { bookList, categoryList } from "../types";

function CategoryBookList() {
    return (
        <>
            <CategoryNav categories={categoryList} />
            <ul className="book-lists">
                {bookList.map((book) => (
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
