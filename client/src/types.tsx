// Contains all the custom types we want to use for our application
import Classics from "./assets/images/categories/classics.jpg";
import Fantasy from "./assets/images/categories/fantasy.jpg";
import Mystery from "./assets/images/categories/mystery.jpg";
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

export const categoryImages: Record<string, any> = {
    classics: Classics,
    fantasy: Fantasy,
    mystery: Mystery,
    romance: Romance,
};
export const categoryList = [
    { categoryId: 1001, name: "Fantasy" },
    { categoryId: 1002, name: "Finance" },
    { categoryId: 1003, name: "Romance" },
    { categoryId: 1004, name: "Mystery" },
];

export const bookList = [
    {
        bookId: 1001,
        title: "The Iliad",
        author: "Homer",
        price: 699,
        isPublic: true,
    },
    {
        bookId: 1002,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        price: 1399,
        isPublic: false,
    },
    {
        bookId: 1003,
        title: "Little Dorrit",
        author: "Charles Dickens",
        price: 599,
        isPublic: true,
    },
    {
        bookId: 1004,
        title: "Moby Dick",
        author: "Herman Melville",
        price: 699,
        isPublic: true,
    },
];
