import { useContext } from "react"
import {Card} from '../../Card/Card'
import { ProductosContext } from "../../../Context/ProductosContext"
import { CarritoContext } from "../../../Context/CarritoContext"
import './ComprasPage.css'

export const ComprasPage = () => {

  const { productos } = useContext(ProductosContext)
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)
  const handleAgregar = (p) => {
    agregarCompra(p)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }

  return (
    <>
     <section className="fondoComprasPage">
      <hr />
      <h4 className="titulosPlatos">PLATOS CALIENTES</h4>
      <hr />

      {productos.map(producto => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
          >
        </Card>
      ))}
 <hr />
      <h4 className="titulosPlatos" id="platosFrios">PLATOS FRIOS </h4>
      <hr />
      <hr />
      <h4 className="titulosPlatos">POSTRES</h4>
      <hr />
      </section>
    </>
  )
}