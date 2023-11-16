import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BotonCarrito from '../CarritoAni/Boton/BotonCarrito'
import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/SobreNosotros">Sobre Nosotros</Nav.Link>
          </Nav>
          <NavLink to='/Carrito'>
            <BotonCarrito/>
          </NavLink>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;