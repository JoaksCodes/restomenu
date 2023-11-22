import React from 'react'
import './Servicios.css'


const Servicios = () => {
    return (
        <>
            <section className='image-fondo'>
                <div className="container contenido3">
                    <div className='contenido33'>
                        <h1>Por qué elegirnos</h1>
                    </div>

                    <div className="img-contenedor row">
                        <div className="col-lg-4 col-md-4 col-sm-12 d-none d-md-block">
                            <div className="d-flex flex-column align-items-center">
                                <img className='img-servicios' src="../src/assets/comida-fresca2.jpg" alt="" />
                                <p className='contenido33'>Comida fresca y de temporada</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-none d-md-block">
                            <div className="d-flex flex-column align-items-center">
                                <img className='img-servicios' src="../src/assets/mejor oferta.jpg" alt="" />
                                <p className='contenido33'>Mejor Oferta</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="d-flex flex-column align-items-center">
                                <img className='img-servicios' src="../src/assets/delivery2.jpg" alt="" />
                                <p className='contenido33'>Delivery</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="d-flex flex-column align-items-center">
                                <img className='img-servicios' src="../src/assets/cf.jpg" alt="" />
                                <p className='contenido33'>Productos libres de crueldad animal</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-none d-md-block">
                            <div className="d-flex flex-column align-items-center">
                                <img className='img-servicios' src="../src/assets/gluten-free.jpg" alt="" />
                                <p className='contenido33'>Opciones sin gluten</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-none d-md-block">
                            <div className="d-flex flex-column align-items-center">
                                <img className='img-servicios' src="../src/assets/reciclable.jpg" alt="" />
                                <p className='contenido33'>Estamos comprometidos con el medioambiente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Servicios