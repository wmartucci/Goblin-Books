import type {BookItem, ShoppingCartItem} from "./types.tsx";

export function cartItemCount(cart: ShoppingCartItem[]): number {
    return cart.reduce((total: number, current: ShoppingCartItem): number => total + current.quantity, 0);
}

export function cartSubtotal(cart: ShoppingCartItem[]): string {
    return asDollarsAndCents(
        cart.reduce((total: number, current: ShoppingCartItem): number =>
            total + current.quantity * current.book.price, 0)
    );
}

export function itemCountLabel(cart: ShoppingCartItem[]): string {
    let itemCount = cartItemCount(cart);
    switch (itemCount) {
        case 0:
            return "Cart is empty";
        case 1:
            return `${itemCount} book`;
        default:
            return `${itemCount} books`;
    }
}

export const bookImageFileName: (book: BookItem) => string = (book: BookItem) => {
    let name: string = book.title.toLowerCase();
    name = name.replace(/ /g, "-");
    name = name.replace(/[':]/g, "");
    return `${name}.gif`;
};

const PriceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", minimumFractionDigits: 2,
});
export const asDollarsAndCents: (cents: number) => string = function (cents: number): string {
    return PriceFormatter.format(cents / 100.0);
};