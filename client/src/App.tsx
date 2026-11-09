import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import CategoryBookList from "./components/CategoryBookList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home.tsx";
import "./App.css";
import CategoryProvider from "./components/CategoryProvider";
import CartProvider from "./components/CartProvider.tsx";
import Checkout from "./components/Checkout.tsx";
import Cart from "./components/Cart.tsx";

function App() {
    return (
        <CartProvider>
            <CategoryProvider>
                <Router basename={import.meta.env.BASE_URL}>
                    {/* app-shell and app-main are wrappers that allow the app to take up the entire vertical screen space */}
                    <div className="app-shell">
                        <AppHeader/>
                        <main className="app-main">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/categories/:catId" element={<CategoryBookList/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                                <Route path="/checkout" element={<Checkout/>}/>
                                <Route path="*" element={<div>Page Not Found</div>}/>
                            </Routes>
                        </main>
                        <AppFooter/>
                    </div>
                </Router>
            </CategoryProvider>
        </CartProvider>
    );
}

export default App;
