import React from 'react'
import './Franquicia.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Tarjetas = () => {

  return (
    <>
      <section className="fondo2">
        <div className="fondo-2"></div>
        <div className="contenido">
          <h1>Adquirí una franquicia</h1>
          <p className='container '>Cuando iniciamos en 1998 no imaginamos que nuestro bar tendría tanta convocatoria. Nuestro plan original era comercializar con el formato cervecero tradicional: en barriles, latas y botellas. Con los años finalmente nos convencimos y llevamos el concepto Spring Roll a otras ciudades. Hoy estamos presentes en gran parte del país. ¿Te gustaría ser parte?</p>
          <Link to='https://web.whatsapp.com/' ><Button variant="light">Contactanos</Button></Link>
        </div>
      </section>



    </>


  )
}

export default Tarjetas