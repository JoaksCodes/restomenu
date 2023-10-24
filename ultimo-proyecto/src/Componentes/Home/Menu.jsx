import React from 'react'
import Button from 'react-bootstrap/Button';
import './Menu.css'


const Menu = () => {
  return (
    <>
    <section className="image-fondo">
      <div className="contenido3">
        <div className="contenido33">
          <h1>Menu</h1>
        </div>
        <div className="card-container">
          <div className="at-item">
            <div className="custom-card">
              <img
                className="card-img-top"
                src="../src/assets/comida1.jpg"
                alt="Imagen 1"
              />
              <div className="card-body">
                <h5 className="card-title">Comida 1</h5>
                <p className="card-text">Comida</p>
                <Button variant="dark">Ver mas</Button>
              </div>
            </div>
          </div>
          <div className="at-item">
            <div className="custom-card">
              <img
                className="card-img-top"
                src="../src/assets/comida1.jpg"
                alt="Imagen 2"
              />
              <div className="card-body">
                <h5 className="card-title">Comida 2</h5>
                <p className="card-text">Comida</p>
                <Button variant="dark">Ver mas</Button>
              </div>
            </div>
          </div>
          <div className="at-item">
            <div className="custom-card">
              <img
                className="card-img-top"
                src="../src/assets/comida1.jpg"
                alt="Imagen 3"
              />
              <div className="card-body">
                <h5 className="card-title">Comida 3</h5>
                <p className="card-text">Comida</p>
                <Button variant="dark">Ver mas</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}

export default Menu