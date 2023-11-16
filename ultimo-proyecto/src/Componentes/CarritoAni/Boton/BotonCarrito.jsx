import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"


const BotonCarrito = () => {

  const { listaCompras, agregarCompra, eliminarCompra } = useContext (CarritoContext)

  return (
        <Badge badgeContent={listaCompras.length} color="success">
            <ShoppingCart color="action"/>
        </Badge>
  )
}

export default BotonCarrito;
