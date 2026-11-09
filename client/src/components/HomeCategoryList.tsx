import {Link} from "react-router-dom";
import "../assets/css/HomeCategoryList.css";
import {useContext} from "react";
import {CategoryContext} from "../contexts/CategoryContext.tsx";

function HomeCategoryList() {
    const categories = useContext(CategoryContext);

    return (
        <section className="home-categories container rounded-border">
            <h2>Featured Categories</h2>

            <ul className="category-cards">
                {categories.slice(0, 3).map((category) => (
                    <li key={category.categoryId} className="category-cards-li">
                        <Link to={`/categories/${category.name}`} className="clean-link">
                            <p className="category-name">{category.name}</p>
                            <img
                                src={`${import.meta.env.BASE_URL}/assets/images/categories/${category.name.toLowerCase()}.jpg`}
                                alt={`${category.name} category`}
                                className="category-img rounded-border"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default HomeCategoryList;
