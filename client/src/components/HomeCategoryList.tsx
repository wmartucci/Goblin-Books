import "../assets/css/HomeCategoryList.css";
import { categoryImages } from "../types";

/*const categoryImageFileName = (category) => {
  let name = category.name.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.jpg`;
};*/

function HomeCategoryList() {
    return (
        <ul className="home-list">
            {/*  This displays a single category image on the home page.
                You have to modify it in such a way that it should
                display all your bookstore categories with proper images
                and descriptions as shown on the sample screenshots of
                "Anotherbookstore" on the project specification
         */}
            <li className="home-list-li">
                <img src={categoryImages["classics"]} alt="book.title" />
                <div className="home-list-div">
                    {" "}
                    {"You Should display the category name here"}{" "}
                </div>
            </li>
        </ul>
    );
}
export default HomeCategoryList;
