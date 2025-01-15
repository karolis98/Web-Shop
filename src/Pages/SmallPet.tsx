import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Header />
        <Navbar.Brand href="#home">Small Pet Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Small Pet Cages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Rabbit & Guinea Pig Hutches"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Rums & Fencing</Nav.Link>
            <Nav.Link href="#home">Small Pet Food</Nav.Link>
            <Nav.Link href="#home">Cage & Grooming</Nav.Link>
            <Nav.Link href="#home">Snacks & Supplements</Nav.Link>
            <Nav.Link href="#home">Hay & Straw</Nav.Link>
            <Nav.Link href="#home">Care & Grooming</Nav.Link>
            <Nav.Link href="#home">Toys & Travel</Nav.Link>
            <Nav.Link href="#home">Rabbit</Nav.Link>
            <Nav.Link href="#home">Guinea Pig</Nav.Link>
            <Nav.Link href="#home">Hamster</Nav.Link>
            <Nav.Link href="#home">Rat</Nav.Link>
            <Nav.Link href="#home">Mouse</Nav.Link>
            <Nav.Link href="#home">Chinchilla</Nav.Link>
            <Nav.Link href="#home">Gerbil</Nav.Link>
            <Nav.Link href="#home">Degu</Nav.Link>
            <Nav.Link href="#home">Ferret</Nav.Link>
            <Nav.Link href="#home">Small Pet Special Offers</Nav.Link>
            <Nav.Link href="#home">Small Pet New Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
