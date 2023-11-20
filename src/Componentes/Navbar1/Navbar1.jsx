import {  Link, Outlet, useLocation } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navbarrr = () => {

const {state} = useLocation()


    return (
      <>


      <header>
      <nav>

   <h1>
     <Link to="/" >  <Container>
          <Navbar.Brand href="#home">
            <img
              src="src/assets/assets.loginregister/img/WhatsApp_Image_2023-10-24_at_1.54.37_PM-removebg-preview.png"
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
     </Link>
     </h1>


{/* //en el nav pongo link con la primera letra mayucula ya que si pongo to y pongo el nombre que le puse a la ruta para iniciar sesion que seria el login me llevara al formulario de registro */}
   
        {state?.logged ? (
        <div className="user">
         <Link to="/sobrenosotros">Sobre Nosotros</Link>
         <Link to="/"><button>Cerrar sesion</button></Link>
        </div>

        ): (

          <div>
          <Link to="/Login" className="btn-iniciar">Iniciar sesion</Link>
          <Link to="/registro" className="btn-iniciar">Registrarse</Link>
          </div>                
        
        )}
      

      </nav>  
      </header>
      
      <Outlet/>
      
      </>
    )
  }
  
  export default Navbarrr
  