import { useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"

const ProductosProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    const fetchStoreApi = async () => {
        const response = await fetch('https://spring-roll.onrender.com/api/products/getProducts')
        const data = await response.json()
        setProductos(data.data)
    }

    useEffect(() => {
        fetchStoreApi()
    }, [])

    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}
export default ProductosProvider