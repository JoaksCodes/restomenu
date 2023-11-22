import { useContext} from "react";
import Card from '../../Cart/Card/Card';
import { ProductosContext } from "../../Cart/Context/ProductosContext";
import { CarritoContext } from "../../Cart/Context/CarritoContext/";
import './ComprasPage.css';
import React from 'react';
import Navbarrr from "../../Home/Navbar";


const ComprasPage = () => {

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
    <Navbarrr/>
     <section className="fondoComprasPage">
      <hr />
      <h4 className="titulosPlatos" id="platosCalientes">PLATOS CALIENTES</h4>
      <hr />

      {productos.map((producto) => (
        (producto.categoria==='Platos Calientes' &&( 
        <Card
          key={producto.id}
          imagen={producto.imagen}
          titulo={producto.titulo}
          descripcion={producto.texto}
          precio={producto.precio}
          activo={producto.activo}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        />))
      ))};
      <hr />
      <h4 className="titulosPlatos" id="platosFrios">PLATOS FRIOS </h4>
      <hr />
      {productos.map((producto) => (
        (producto.categoria==='Platos Frios' &&( 
        <Card
          key={producto.id}
          imagen={producto.imagen}
          titulo={producto.titulo}
          descripcion={producto.texto}
          precio={producto.precio}
          activo={producto.activo}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        />))
      ))};
      <hr />
      <h4 className="titulosPlatos" id="postres">POSTRES</h4>
      <hr />
      {productos.map((producto) => (
        (producto.categoria==='Postres' &&( 
        <Card
          key={producto.id}
          imagen={producto.imagen}
          titulo={producto.titulo}
          descripcion={producto.texto}
          precio={producto.precio}
          activo={producto.activo}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        />))
      ))};
      </section>
    </>
  )
}
export default ComprasPage