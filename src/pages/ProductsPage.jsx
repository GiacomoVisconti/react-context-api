import { useState, useEffect } from "react";

export default function ProductPage() {
    const url = "https://fakestoreapi.com/products";
    const [productsData, setProdutctsData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProdutctsData(data);
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

            {/* Products Card */}
            <div className="container mt-5">
                <div className="row g-4">
                    {productsData.map((element, index) => {
                        return (
                            <div key={index} className="col-12 col-lg-6">
                                <div className="card h-100 mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={element.image}
                                                className="img-fluid rounded-start p-2"
                                                alt={element.title}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-center">
                                                    {element.title}
                                                </h5>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="p-3 d-flex gap-2">
                                                        Price:
                                                        <h5>
                                                            {element.price.toLocaleString(
                                                                "it-IT",
                                                                {
                                                                    style: "currency",
                                                                    currency:
                                                                        "EUR",
                                                                }
                                                            )}
                                                        </h5>
                                                    </div>
                                                    <div className="text-center py-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning">
                                                            Acquista
                                                        </button>
                                                    </div>
                                                </div>

                                                <p className="card-text p-3 pt-0">
                                                    {element.description}
                                                </p>
                                                <div className="card-text d-flex justify-content-between px-3">
                                                    <small className="text-body-secondary">
                                                        {element.category.toUpperCase()}
                                                    </small>
                                                    <small className="text-body-secondary">
                                                        rating:{"  "}
                                                        {
                                                            element.rating.rate
                                                        }/10 {"  "}
                                                        <small>
                                                            (recensioni:{"  "}
                                                            {
                                                                element.rating
                                                                    .count
                                                            }
                                                            )
                                                        </small>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
