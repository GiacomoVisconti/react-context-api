import { createContext, useContext, useState, useEffect } from "react";
const ProductContext = createContext()


function ProductProvider({ children }) {
    const url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState(null); // null, [] , {}
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)

            })
            .finally(() => setIsLoading(false))

    }, [])

    return (
        <ProductContext.Provider
            value={{
                products, setProducts,
            }}>

            {children}
        </ProductContext.Provider>
    )
}

function useProduct() {
    return useContext(ProductContext)

}

export { ProductProvider, useProduct }