import { useContext } from "react"
import { CarritoContext } from "../../../Context/CarritoContext"
import { ListaCompras } from "../../ListaCompras/ListaCompra"

export const CarritoPage = () => {

  const {listaCompras} = useContext(CarritoContext)

  return (
    <>
<section className="fondo-lista">
    <h4>Lista de Compras</h4>
    <hr />

    <ListaCompras></ListaCompras>
    </section>
    </>
  )
}
