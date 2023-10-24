import React from 'react'
// import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
  return (
    <>
    <footer className="footer">
  <div className="container row">
    <div className="col-md-4">
      <img src="../src/assets/comida1.jpg" alt="" style={{ width: "100px", height: "100px" }} className='img-fluid' />
    </div>

    <div className="col-md-4">
      <a href="https://www.google.com/maps/place/RollingCode+School/@-26.8367009,-65.2072018,15z/data=!4m6!3m5!1s0x94225d3ad7f30f1d:0xf8606cd659b8e3e4!8m2!3d-26.8367009!4d-65.2072018!16s%2Fg%2F11h0b4kn08?entry=ttu" className="footer-link">📍Gral. Paz 576, San Miguel de Tucumán</a><br />
      <a href="/Contacto" className="footer-link">✉️Contacto</a>
      <p> ☎️0381 578-3030</p>
    </div>

    <div className="col-md-4">
      <a href="/SobreNosotros" className="footer-link">Acerca de Nosotros</a> <br />
      <a href="https://www.facebook.com/RollingCodeSchool/" className="footer-link"> Facebook</a> <br />
      <a href="https://www.instagram.com/rollingcodeschool/" className="footer-link"> Instagram</a><br />
    </div>
  </div>
</footer>
   </>

  )
}

export default Footer