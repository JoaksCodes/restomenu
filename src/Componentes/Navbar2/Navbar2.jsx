import {  Link, Outlet, useLocation } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navbar2 = () => {

const {state} = useLocation()


    return (
      <>
      <header>

     <Link to="/" > 
      <Container>
          <Navbar.Brand href="#home">
            <img
              src="src/assets/assets.loginregister/img/logo.jpeg"
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
     </Link>
     
     


{/* //en el nav pongo link con la primera letra mayucula ya que si pongo to y pongo el nombre que le puse a la ruta para iniciar sesion que seria el login me llevara al formulario de registro */}
   

      
        {state?.logged ? (
        <div className="user" >

          <span className="username">
            {state?.name}
           </span>
           <Link to="/Sobrenosotros" className="btn-iniciar">Sobre Nosotros</Link>
             <Link to="/" className="btn-iniciar" >Cerrar sesion</Link>
             </div>

        ): (

          <nav>
      
                <Link to="/Login" className="btn-iniciar">Iniciar sesion</Link>
                        <Link to="/registro" className="btn-iniciar">Registrarse</Link>

                        </nav>
        
        )}
      

        
      </header>
      







      <Outlet/>
      
      </>
    )
  }
  
  export default Navbar2