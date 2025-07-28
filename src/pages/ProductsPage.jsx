import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
    const url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setProducts(data);
            });
    }, []);

    return (
        <>
            {/* Jumbo Products presentation */}
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Our Products</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this
                        jumbotron, just like the one in previous versions of
                        Bootstrap. Check out the examples below for how you can
                        remix and restyle it to your liking.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Explore
                    </button>
                </div>
            </div>

            {/* Products List */}
            <div className="container mt-5">
                <div className="row g-4">
                    {/* <ProductList productsData={productsData} /> */}
                    {products.map((product, index) => {

                        return (

                            <ProductCard product={product} index={index} />
                        )


                    })}
                </div>
            </div>
        </>
    );
}
