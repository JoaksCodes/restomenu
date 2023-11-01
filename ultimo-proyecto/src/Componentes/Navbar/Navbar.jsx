import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

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
          <Nav.Link href='/Carrito'>
          <Badge badgeContent={4} color="success">
            <ShoppingCart color="action" />
          </Badge>
          </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;