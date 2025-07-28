import ProductCard from "./ProductCard";

export default function ProductList({ productsData }) {

    {
        productsData?.map((element, index) => {
            return (

                <ProductCard element={element} index={index} />
            )

        })
    }

}