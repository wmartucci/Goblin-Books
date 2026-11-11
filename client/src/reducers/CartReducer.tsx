import {ShoppingCartItem, type BookItem} from "../types.tsx";

export const cartKey = "CartKey";
const initialCartJSON: string | null = localStorage.getItem(cartKey);
export const initialCart: ShoppingCartItem[] = initialCartJSON ? JSON.parse(initialCartJSON) : [];

export type CartTypes =
    | { type: "ADD"; payload: BookItem }
    | { type: "REMOVE"; payload: BookItem }
    | { type: "REMOVE ALL COPIES", payload: BookItem }
    | { type: "CLEAR" };

export function cartReducer(state: ShoppingCartItem[], action: CartTypes): ShoppingCartItem[] {
    switch (action.type) {
        case "ADD":
            return addBook(state, action.payload);
        case "REMOVE":
            return removeBook(state, action.payload);
        case "REMOVE ALL COPIES":
            return removeAllCopies(state, action.payload);
        case "CLEAR":
            return [];
        default:
            console.log("Error: unrecognized action");
            return [];
    }
}

function addBook(state: ShoppingCartItem[], book: BookItem): ShoppingCartItem[] {
    let cartItems: ShoppingCartItem[] = structuredClone(state);
    let cartItem = cartItems.find(item => item.id === book.bookId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cartItems.push(new ShoppingCartItem(book));
    }

    return cartItems;
}

function removeBook(state: ShoppingCartItem[], book: BookItem): ShoppingCartItem[] {
    let cartItems: ShoppingCartItem[] = structuredClone(state);
    let cartItemIndex = cartItems.findIndex(item => item.id === book.bookId);

    if (cartItemIndex > -1) {
        let cartItem: ShoppingCartItem = cartItems[cartItemIndex];
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
            cartItems.splice(cartItemIndex, 1);
        }
    }

    return cartItems;
}

function removeAllCopies(state: ShoppingCartItem[], book: BookItem): ShoppingCartItem[] {
    let cartItems: ShoppingCartItem[] = structuredClone(state);
    let cartItemIndex = cartItems.findIndex(item => item.id === book.bookId);

    if (cartItemIndex > -1) {
        cartItems.splice(cartItemIndex, 1);
    }

    return cartItems;
}