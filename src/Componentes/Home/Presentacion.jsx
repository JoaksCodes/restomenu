import React from 'react'
import './Presentacion.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Presentacion = () => {
    return (
        <section className="image-background">
            <div className="background-image"></div>
            <div className="content">
                <h1 className='titulo'>SPRING ROLL</h1>
                <p>In the heart San Miguel city</p>
                <Link to='https://web.whatsapp.com/' ><Button variant="light">Reserva</Button></Link>
            </div>

        </section>

    )
}

export default Presentacion