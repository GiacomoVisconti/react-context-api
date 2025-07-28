import { Link } from "react-router-dom";

export default function ProductCard({ element }) {


    return (
        <div className="col-12 col-lg-6">
            <div className="card h-100 mb-3">
                <Link className="nav-link" to={`/products/${element.id}`}>
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
                                        }/5 {"  "}
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
                </Link>
            </div>
        </div>
    )
}