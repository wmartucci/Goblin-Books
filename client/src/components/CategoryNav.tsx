import {Link, useParams} from "react-router-dom";
import "../assets/css/CategoryNav.css";
import "../assets/css/global.css";
import { useContext } from 'react';
import {CategoryContext} from "../contexts/CategoryContext.tsx";

function CategoryNav() {
    const {catId} = useParams();
    const categories = useContext(CategoryContext);

    return (
        <nav className="category-nav">
            <ul className="category-buttons container">
                {categories.map((category) => (
                    <li key={category.categoryId}>
                        <Link
                            to={`/categories/${category.name}`}
                            className={`button clean-link ${category.name == catId ? "" : "un"}selected-category-button`}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default CategoryNav;
