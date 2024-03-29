import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbarr () {
  return (
    <Navbar expand="lg" className="mmm">
      <Container >
        <Navbar.Brand href="#home">ARSHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navli">
            <Nav.Link as={Link} to="/" className='whi'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about"className='whi'>About</Nav.Link>
            <Nav.Link as={Link} to="/service"className='whi'>service</Nav.Link>
            <Nav.Link as={Link} to="/whyus" className='whi'>whyus</Nav.Link>
            <Nav.Link as={Link} to="/team"className='whi'>Team</Nav.Link>
            <Nav.Link as={Link} to="/skills"className='whi'>Skills</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"className='whi'>
              <NavDropdown.Item href="#action/3.1">Drop down</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className='whi'>contact</Nav.Link>
            <Nav.Link href="#link" className='whi'><button className='get'>Get started</button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navbarr