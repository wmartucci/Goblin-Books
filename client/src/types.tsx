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

// Represents an item in the cart
export class ShoppingCartItem {
    id: number;
    book: BookItem;
    quantity: number;

    constructor(theBook: BookItem) {
        this.id = theBook.bookId;
        this.book = theBook;
        this.quantity = 1;
    }
}
export const initialCartState: ShoppingCartItem[] = [];
