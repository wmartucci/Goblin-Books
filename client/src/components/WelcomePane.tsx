import "../assets/css/global.css";
import "../assets/css/WelcomePane.css";
import { Link } from "react-router-dom";

function WelcomePane() {
    return (
        <div className="welcome-text flow-content container rounded-border">
            <h2>Welcome to my tome shoppe!</h2>
            <p>
                Knowledge is gold... and my books are a STEAL! <br />
                <em>Discover your next great read at Goblin Books.</em>
            </p>
            <Link
                to="/categories"
                className="shop-now-button button clean-link"
            >
                SHOP NOW!
            </Link>
        </div>
    );
}

export default WelcomePane;
