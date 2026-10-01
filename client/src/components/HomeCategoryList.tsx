import { Link } from "react-router-dom";
import "../assets/css/HomeCategoryList.css";
import { featuredCategories } from "../types";

function HomeCategoryList() {
    return (
        <section className="home-categories container rounded-border">
            <h2>Featured Categories</h2>

            <ul className="category-cards">
                {featuredCategories.map((category) => (
                    <li key={category.id} className="category-cards-li">
                        <Link to="/categories" className="clean-link">
                            <p className="category-name">{category.name}</p>
                            <img
                                src={category.imgName}
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
