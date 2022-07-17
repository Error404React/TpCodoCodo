import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='navLink'>GENERAL</Nav.Link>
            <Nav.Link href="/sports" className='navLink'>DEPORTES</Nav.Link>
            <Nav.Link href="/entertainment" className='navLink'>ENTRETENIMIENTO</Nav.Link>
            <Nav.Link href="/business" className='navLink'>NEGOCIOS</Nav.Link>
            <Nav.Link href="/technology" className='navLink'>TECNOLOGÍA</Nav.Link>
            <Nav.Link href="/science" className='navLink'>CIENCIA</Nav.Link>
            <Nav.Link href="/sports" className='navLink'>DEPORTES</Nav.Link>
            <Nav.Link href="/health" className='navLink'>SALUD</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;