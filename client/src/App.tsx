import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import CategoryBookList from "./components/CategoryBookList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import "./App.css";

function App() {
    return (
        <Router basename="/WillBookstoreReact">
            {/* app-shell and app-main are wrappers that allow the app to take up the entire vertical screen space */}
            <div className="app-shell">
                <AppHeader />
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categories" element={<CategoryBookList />} />
                        <Route path="*" element={<div>Page Not Found</div>} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </Router>
    );
}

export default App;
