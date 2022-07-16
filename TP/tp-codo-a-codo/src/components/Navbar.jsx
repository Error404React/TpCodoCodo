import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">GENERAL</Nav.Link>
            <Nav.Link href="/sports">DEPORTES</Nav.Link>
            <Nav.Link href="/entertainment">ENTRETENIMIENTO</Nav.Link>
            <Nav.Link href="/business">NEGOCIOS</Nav.Link>
            <Nav.Link href="/technology">TECNOLOGÍA</Nav.Link>
            <Nav.Link href="/science">CIENCIA</Nav.Link>
            <Nav.Link href="/sports">DEPORTES</Nav.Link>
            <Nav.Link href="/health">SALUD</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;