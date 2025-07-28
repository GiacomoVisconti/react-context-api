import ProductCard from "./ProductCard";
import { useProduct } from "../contexts/DefaultContexts";
import { Link } from "react-router-dom";

export default function ProductList() {
    const { products } = useProduct()

    return (
        <>
            {products?.map((element, index) => {
                return <ProductCard key={index} element={element} />

            })}
        </>
    );
}