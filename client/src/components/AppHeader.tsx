import HeaderDropdown from "./HeaderDropdown";
import "../assets/css/global.css";
import "../assets/css/AppHeader.css";
import logo from "../assets/images/site/bookstore-logo.png";
import {Link} from "react-router-dom";
import {PiShoppingCartSimpleFill} from "react-icons/pi";
import {IoIosSearch} from "react-icons/io";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.tsx";
import {cartItemCount} from "../cartUtils.tsx";

function AppHeader() {
    const {cartItems} = useContext(CartContext);
    const numItems = cartItemCount(cartItems);

    return (
        <header className="container">
            <Link to="/" className="logo-title clean-link">
                <img
                    src={logo}
                    alt="Goblin Books Logo"
                    width="140px"
                    height="auto"
                />

                <h1 className="text-logo">
                    Goblin <br/> Books
                </h1>
            </Link>
            <form action="" className="search-bar">
                <input
                    type="text"
                    className="search-field rounded-border"
                    placeholder="Search..."
                />
                <button type="submit" className="search-button">
                    <IoIosSearch/>
                </button>
            </form>

            <HeaderDropdown/>

            <button className="button login-button">Log In</button>

            <Link to="/cart" className="cart-button clean-link">
                <PiShoppingCartSimpleFill className="cart-icon"/>
                <p className="cart-count">{numItems}</p>
            </Link>
        </header>
    );
}

export default AppHeader;
