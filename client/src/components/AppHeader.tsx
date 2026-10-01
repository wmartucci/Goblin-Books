import HeaderDropdown from "./HeaderDropdown";
import "../assets/css/global.css";
import "../assets/css/AppHeader.css";
import logo from "../assets/images/site/bookstore-logo.png";
import { Link } from "react-router-dom";
import { categoryList } from "../types";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

function AppHeader() {
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
                    Goblin <br /> Books
                </h1>
            </Link>
            <form action="" className="search-bar">
                <input
                    type="text"
                    className="search-field rounded-border"
                    placeholder="Search..."
                />
                <button type="submit" className="search-button">
                    <IoIosSearch />
                </button>
            </form>

            <HeaderDropdown categories={categoryList} />

            <button className="button login-button">Log In</button>

            <button className="cart-button">
                <PiShoppingCartSimpleFill className="cart-icon" />
                <p className="cart-count">3</p>
            </button>
        </header>
    );
}

export default AppHeader;
