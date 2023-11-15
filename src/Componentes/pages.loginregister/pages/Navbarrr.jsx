import {  Link, Outlet, useLocation } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SobreNosotros from "../../SobreNosotros/SobreNosotros";

const Navbarrr = () => {

const {state} = useLocation()


    return (
      <>
      <header>


     <h1>
     <Link to="/" >  
     <Container>
          <Navbar.Brand href="">
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
     </h1>


{/* //en el nav pongo link con la primera letra mayucula ya que si pongo to y pongo el nombre que le puse a la ruta para iniciar sesion que seria el login me llevara al formulario de registro */}
   

      
         {state?.logged ? (
        <div className="user">
          
          <Link to={SobreNosotros}>Sobre Nosotros</Link>

             <Link to="/"><button>Cerrar sesion</button></Link>
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
  
  export default Navbarrr
  