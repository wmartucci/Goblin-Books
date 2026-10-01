import "../assets/css/global.css";
import "../assets/css/HeaderDropdown.css";
import { Link } from "react-router-dom";
import type { CategoryItem } from "../types";
import { IoMdArrowDropdown } from "react-icons/io";

type HeaderDropdownProps = {
    categories: CategoryItem[];
};

function HeaderDropdown({ categories }: HeaderDropdownProps) {
    return (
        <div className="header-dropdown">
            <button className="button categories-button rounded-border">
                <p>Categories</p>
                <IoMdArrowDropdown />
            </button>
            <ul>
                {categories.map((category) => (
                    <li key={category.categoryId}>
                        <Link to="/categories">{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderDropdown;
