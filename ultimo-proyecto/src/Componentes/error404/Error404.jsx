import React from 'react'
import './Error404.css'
import Button from 'react-bootstrap/Button';

const Error404 = () => {
  return (
    <>
    <section className='error404'>
      <img src="../src/assets/error404.jpg" alt="Imagen de error" />
      <div>
      <Button className='btn-error' variant="success">Volver</Button>
      </div>
      </section>
    </>
  )
}

export default Error404