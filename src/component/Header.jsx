import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css'

function Header() {
  return (
    <section>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Taysir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#photography">Photography</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#footer">Contact Me</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </section>
     )
}

export default Header;