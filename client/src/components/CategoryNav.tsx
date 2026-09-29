import { Link } from "react-router-dom";
import "../assets/css/CategoryNav.css";
import "../assets/css/global.css";
import type { CategoryItem } from "../types";

type CategoryNavProps = {
    categories: CategoryItem[];
};

function CategoryNav({ categories }: CategoryNavProps) {
    return (
        <nav className="category-nav">
            <ul className="category-buttons">
                {categories.map((category) => (
                    <li
                        className={`button ${category.categoryId == 1002 ? "" : "un"}selected-category-button`}
                        key={category.categoryId}
                    >
                        <Link to="/categories">{category.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default CategoryNav;
