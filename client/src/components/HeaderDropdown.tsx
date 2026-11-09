import "../assets/css/global.css";
import "../assets/css/HeaderDropdown.css";
import {Link} from "react-router-dom";
import {IoMdArrowDropdown} from "react-icons/io";
import {useContext} from "react";
import {CategoryContext} from "../contexts/CategoryContext.tsx";

function HeaderDropdown() {
    const categories = useContext(CategoryContext);
    return (
        <div className="header-dropdown">
            <button className="button categories-button rounded-border">
                <p>Categories</p>
                <IoMdArrowDropdown/>
            </button>
            <ul>
                {categories.map((category) => (
                    <li key={category.categoryId}>
                        <Link to={`/categories/${category.name}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderDropdown;
