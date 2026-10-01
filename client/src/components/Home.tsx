import "../assets/css/global.css";
import "../assets/css/Home.css";
import HomeCategoryList from "./HomeCategoryList";
import WelcomePane from "./WelcomePane";

function Home() {
    return (
        <div className="home-pages">
            <section className="container">
                <WelcomePane />
            </section>
            <section className="container">
                <HomeCategoryList />
            </section>
        </div>
    );
}

export default Home;
