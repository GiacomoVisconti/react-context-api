import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layout/DefaultLayout";
import AboutusPage from "./pages/AboutusPage";
import ProductPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import Page404 from "./pages/Page404";
import { ProductProvider } from "./contexts/DefaultContexts";

function App() {

    return (
        <>
            <ProductProvider>
                <BrowserRouter>
                    <Routes>
                        <Route Component={DefaultLayout}>
                            <Route path="/" Component={HomePage} />
                            <Route path="/about-us" Component={AboutusPage} />
                            <Route path="/products" Component={ProductPage} />
                            <Route path="/products/:id" Component={SingleProductPage} />
                            <Route path="/*" Component={Page404} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ProductProvider>
        </>
    );
}

export default App;
