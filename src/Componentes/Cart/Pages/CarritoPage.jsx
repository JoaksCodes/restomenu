import { useContext } from "react"
import { CarritoContext } from "../../Cart/Context/CarritoContext/"
import ListaCompras  from "../ListaCompras/ListaCompra"

const CarritoPage = () => {

  const {listaCompras} = useContext(CarritoContext)

  return (
    <>
<section className="fondo-lista">

    

    <ListaCompras></ListaCompras>
    </section>
    </>
  )
}
export default CarritoPage