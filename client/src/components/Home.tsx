import HomeCategoryList from "./HomeCategoryList";
import "../assets/css/global.css";
import "../assets/css/Home.css";

function Home() {
    return (
        <div className="home-pages">
            <div className="welcome-text flow-content container dark-background">
                <h2>Welcome to Goblin Books</h2>
                <p>
                    Knowledge is gold... and our books are a STEAL! 
                </p>
                <p>
                    Discover your next great read at Goblin Books.
                </p>
            </div>
            <div className="category-images container">
                <HomeCategoryList />
            </div>
        </div>
    );
}

export default Home;
