import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
import './Lista.css'
import Navbarrr from "../../Navbars/Navbar"

const ListaCompras = () => {
    const { listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, reducirCantidad } = useContext(CarritoContext)

    const handleAumentar = (id) => {
        aumentarCantidad(id)
    }
    const handleReducir = (id) => {
        reducirCantidad(id)
    }
    const handleEliminar = (id) => {
        eliminarCompra(id)
    }

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)
    }

    return (
        <>
        <Navbar/>
        <button className="btn btn-success">
            <a href="/ComprasPage" className={"text-decoration-none text-white"}>Volver Menu</a>
        </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.map(item => (
                        <tr key={item.id}>
                            <td>{item.titulo}</td>
                            <td>{item.precio}</td>
                            <td>
                                <button className="btn btn-outline-success" onClick={() => handleReducir(item.id)}>-</button>
                                <button className="btn btn-success">{item.cantidad}</button>
                                <button className="btn btn-outline-success" onClick={() => handleAumentar(item.id)}>+</button>

                            </td>
                            <td><button className="btn btn-danger" onClick={() => handleEliminar(item.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                    <tr>
                        <th scope="row">TOTAL:</th>
                        <td></td>
                        <td>${calcularTotal()}</td>
                        <td></td>
                    </tr>
                </tbody>

            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-success" onClick={() => print()}>COMPRAR</button>
            </div>
            
        </>

    )
}

export default ListaCompras