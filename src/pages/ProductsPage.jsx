import ProductList from "../components/ProductList";

export default function ProductPage() {


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
                    <ProductList />
                </div>
            </div>
        </>
    );
}
