import React from 'react'
import './SobreNosotros.css'
import Footer from '../Footer/Footer'
import Navbarrr from '../Navbar1/Navbar1'

function Sobrenosotros  () {

  return (
    <>
<Navbarrr/>
       <section >
      <div className="container">
        <h1 className="text-center">Sobre Nosotros</h1>
        <h3 className="text-center">Los pilares que nos caracterizan</h3>
        <p>
          SABER: Es la búsqueda constante de mejora, enfocando todos nuestros esfuerzos en garantizar la calidad absoluta de la comida. Y por supuesto, compartir con nuestros colegas todo lo que aprendemos en el camino.
        </p>
        <p>
          INNOVACIÓN: Vivimos en la búsqueda constante de innovar, de conocer, aprender y compartir nuevas técnicas, ingredientes y sabores, de ahí surge lo distintivo de este tipo de comidas vegetarianas.
        </p>
        <p>
          ARTESANALIDAD: Ante todo, el componente más importante del producto acabado son nuestras manos. Desde que empezamos con la idea de una receta, hasta que llega el producto a sus mesas.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-around p-3">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                className="card-img-top"
                src="../src/assets/celeste-foto.jpg"
                alt="Imagen 1"
              />
              <div className="card-body">
                <h5 className="card-title">Celeste Carrizo</h5>
                <p className="card-text">Desarrolladora full stack</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                className="card-img-top"
                src="../src/assets/ana-foto.jpeg"
                alt="Imagen 2"
              />
              <div className="card-body">
                <h5 className="card-title">Anabella Margagliotti</h5>
                <p className="card-text">Desarrolladora full stack</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                className="card-img-top"
                src="../src/assets/joaquin-foto.jpg"
                alt="Imagen 3"
              />
              <div className="card-body">
                <h5 className="card-title">Joaquin Severini</h5>
                <p className="card-text">Desarrollador full stack</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                className="card-img-top"
                src="../src/assets/rocio-foto.jpg"
                alt="Imagen 4"
              />
              <div className="card-body">
                <h5 className="card-title">Rocio Ramos</h5>
                <p className="card-text">Desarrolladora full stack</p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </section>
    <Footer/>
    </>

  )

}



 


export default Sobrenosotros