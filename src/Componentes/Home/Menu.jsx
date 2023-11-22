import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
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
                alt="Imagen 1 "
              />
              <div className="card-body">
                <h5 className="card-title">Platos Calientes</h5>
                <p className="card-text">Comida</p>
                <Button variant="dark"><NavLink to='/ComprasPage' className={"text-decoration-none text-white"}>Ver mas</NavLink ></Button>
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
                <h5 className="card-title">Platos Frios</h5>
                <p className="card-text">Comida</p>
                <Button variant="dark"><NavLink to='/ComprasPage#platosFrios' className={"text-decoration-none text-white"}>Ver mas</NavLink ></Button>
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
                <h5 className="card-title">Postres</h5>
                <p className="card-text">Comida</p>
                <Button variant="dark"><NavLink to='/ComprasPage#postres' className={"text-decoration-none text-white"}>Ver mas</NavLink ></Button>
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