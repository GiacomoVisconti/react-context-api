import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function SingleProductPage() {
    const { id } = useParams()
    const url = `https://fakestoreapi.com/products/${id}`
    const [singleProduct, setSingleProduct] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        setisLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setSingleProduct(data)

            })
            .finally(() => setisLoading(false))

    }, [navigate])


    return (
        <>

            <div className="container">
                <div className="my-4 navigate d-flex justify-content-between">
                    <button
                        type="button"
                        className="btn btn-primary" onClick={() => navigate(`/Products/${Number(id) - 1}`)}
                    >
                        Precedente
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary" onClick={() => navigate(`/Products/${Number(id) + 1}`)}
                    >
                        Prossimo
                    </button>


                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card h-100 mb-3">
                            {isLoading && <p>Loading. We are fetching the datas from the server. Wait a second please...</p>}
                            {singleProduct && <div className="row">
                                <div className="col-md-4">
                                    <img
                                        src={singleProduct.image}
                                        className="img-fluid rounded-start p-2"
                                        alt={singleProduct.title}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            {singleProduct.title}
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="p-3 d-flex gap-2">
                                                Price:
                                                <h5>
                                                    {singleProduct.price.toLocaleString(
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
                                            {singleProduct.description}
                                        </p>
                                        <div className="card-text d-flex justify-content-between px-3">
                                            <small className="text-body-secondary">
                                                {singleProduct.category}
                                            </small>
                                            <small className="text-body-secondary">
                                                rating:
                                                {
                                                    singleProduct.rating.rate
                                                }/5 {"  "}
                                                <small>
                                                    (recensioni:{"  "}
                                                    {
                                                        singleProduct.rating
                                                            .count
                                                    }
                                                    )
                                                </small>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>
                {/* <p> {singleProduct.description} </p>
            <h1> {singleProduct.title} </h1> */}
            </div>
        </>

    )




}