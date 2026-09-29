import Fantasy from "./assets/images/categories/fantasy.jpg";
import Finance from "./assets/images/categories/finance.jpg";
import Romance from "./assets/images/categories/romance.jpg";

export interface BookItem {
    bookId: number;
    title: string;
    author: string;
    price: number;
    isPublic: boolean;
}

export interface CategoryItem {
    categoryId: number;
    name: string;
}

export const featuredCategories = [
    { id: 0, name: "Fantasy", imgName: Fantasy },
    { id: 1, name: "Finance", imgName: Finance },
    { id: 2, name: "Romance", imgName: Romance },
];

export const categoryList = [
    { categoryId: 1001, name: "Fantasy" },
    { categoryId: 1002, name: "Finance" },
    { categoryId: 1003, name: "Romance" },
    { categoryId: 1004, name: "Mystery" },
];

export const bookList = [
    {
        bookId: 1001,
        title: "The Alchemy of Finance",
        author: "George Soros",
        price: 13,
        isPublic: false,
    },
    {
        bookId: 1002,
        title: "Finance",
        author: "Angelico Groppelli, Ehsan Nikbakht",
        price: 53,
        isPublic: true,
    },
    {
        bookId: 1003,
        title: "Obedience in Finances",
        author: "Kenneth E Hagin",
        price: 29,
        isPublic: false,
    },
    {
        bookId: 1004,
        title: "Personal Finance",
        author: "E. Thomas Garman",
        price: 37,
        isPublic: true,
    },
    {
        bookId: 1005,
        title: "Finance Basics",
        author: "Harvard Business Review",
        price: 19,
        isPublic: false,
    },
    {
        bookId: 1006,
        title: "Public Finance",
        author: "Harvey S. Rosen",
        price: 73,
        isPublic: false,
    },
];
