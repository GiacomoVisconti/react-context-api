import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layout/DefaultLayout";
import AboutusPage from "./pages/AboutusPage";
import ProductPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route path="/" Component={HomePage} />
                        <Route path="/AboutUs" Component={AboutusPage} />
                        <Route path="/Products" Component={ProductPage} />
                        <Route path="/Products/:id" Component={SingleProductPage} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
