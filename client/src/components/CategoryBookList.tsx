import "../types";
import "../assets/css/CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookListItem";
import CategoryNav from "./CategoryNav";
import "../types";
import { bookList } from "../types";

function CategoryBookList() {
    return (
        <>
            <CategoryNav />
            <ul className="book-lists">
                {/*
                  // You need to add a code to display all the books here
                   The following code only displays the first book
              */}
                <CategoryBookListItem
                    bookId={bookList[0].bookId}
                    isPublic={bookList[0].isPublic}
                    price={bookList[0].price}
                    title={bookList[0].title}
                    author={bookList[0].author}
                />
            </ul>
        </>
    );
}

export default CategoryBookList;
