import "../assets/css/AppFooter.css";
import "../assets/css/global.css";
import { Link } from "react-router-dom";
import facebookLogo from "../assets/images/social-media/facebook-logo.png";
import twitterLogo from "../assets/images/social-media/twitter-logo.png";
import {useState} from "react";

function AppFooter() {
    const [year] = useState(() => new Date().getFullYear());

    return (
        <footer className="container">
            <section className="links">
                <Link to="/">Contact</Link>
                <Link to="/">Directions</Link>
            </section>
            <section className="copyright">
                <p>© {year} Goblin Books</p>
            </section>
            <section className="social-media-icons">
                <a href="https://www.facebook.com">
                    <img src={facebookLogo}  alt="facebook"/>
                </a>
                <a href="https://www.twitter.com">
                    <img src={twitterLogo}  alt="twitter"/>
                </a>
            </section>
        </footer>
    );
}
export default AppFooter;
