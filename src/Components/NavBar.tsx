import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Pages/Dog";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">PetMy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dog">
              Dog's
            </Nav.Link>
            <Nav.Link as={Link} to="/cat">
              Cat's
            </Nav.Link>
            <Nav.Link as={Link} to="/SmallPet">
              Small Pet's
            </Nav.Link>
            <Nav.Link as={Link} to="/Bird">
              Bird's
            </Nav.Link>
            <Nav.Link as={Link} to="/Aquatic">
              Aquatic's
            </Nav.Link>
            <Nav.Link as={Link} to="/Vet">
              Vet's
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
