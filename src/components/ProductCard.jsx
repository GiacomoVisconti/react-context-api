import { Link } from "react-router-dom";


export default function ProductCard({ product, index }) {

    console.log(product);

    return (

        <div key={index} className="col-12 col-lg-6">


            <div className="card h-100 mb-3">
                <Link className="nav-link" to={`/products/${product.id}`}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={product.image}
                                className="img-fluid rounded-start p-2"
                                alt={product.title}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {product.title}
                                </h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="p-3 d-flex gap-2">
                                        Price:
                                        <h5>
                                            {product.price.toLocaleString(
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
                                    {product.description}
                                </p>
                                <div className="card-text d-flex justify-content-between px-3">
                                    <small className="text-body-secondary">
                                        {product.category.toUpperCase()}
                                    </small>
                                    <small className="text-body-secondary">
                                        rating:{"  "}
                                        {
                                            product.rating.rate
                                        }/5 {"  "}
                                        <small>
                                            (recensioni:{"  "}
                                            {
                                                product.rating
                                                    .count
                                            }
                                            )
                                        </small>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}