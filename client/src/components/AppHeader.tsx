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
            <section className="bookstore-logo">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Goblin Books Logo"
                        width="150px"
                        height="auto"
                    />
                </Link>
            </section>
            <section className="title-and-search-bar">
                <Link to="/">
                    <h1 className="text-logo"> Goblin Books</h1>
                </Link>
                <form action="">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                    />
                    <button type="submit" className="button search-button">
                        <IoIosSearch />
                    </button>
                </form>
            </section>
            <section className="header-dropdown-and-cart">
                <button className="button">
                    <PiShoppingCartSimpleFill />0
                </button>
                <button className="button">Log In</button>
                <HeaderDropdown categories={categoryList} />
            </section>
        </header>
    );
}

export default AppHeader;
