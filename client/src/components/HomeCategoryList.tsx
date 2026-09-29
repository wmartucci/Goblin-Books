import { Link } from "react-router-dom";
import "../assets/css/HomeCategoryList.css";
import { featuredCategories } from "../types";

function HomeCategoryList() {
    return (
        <>
            <h2>Featured Categories</h2>

            <ul className="home-list">
                {featuredCategories.map((category) => (
                    <li key={category.id} className="home-list-li">
                        <Link to="/categories">
                            <div className="home-list-div">{category.name}</div>
                            <img
                                src={category.imgName}
                                alt={`${category.name} category`}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default HomeCategoryList;
