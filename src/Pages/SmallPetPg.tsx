import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

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
            <Nav.Link as={Link} to="/RunsFencing">
              Runs & Fencing
            </Nav.Link>
            <Nav.Link as={Link} to="/SmallPetFood">
              Small Pet Food
            </Nav.Link>
            <Nav.Link as={Link} to="/CagesAccessories">
              Cage Accessories
            </Nav.Link>
            <Nav.Link as={Link} to="/SnacksSupplements">
              Snacks & Supplements
            </Nav.Link>
            <Nav.Link as={Link} to="/HayStraw">
              Hay & Straw
            </Nav.Link>
            <Nav.Link as={Link} to="/CageGrooming">
              Care & Grooming
            </Nav.Link>
            <Nav.Link as={Link} to="/ToyTravel">
              Toys & Travel
            </Nav.Link>
            <Nav.Link as={Link} to="/Rabbit">
              Rabbit
            </Nav.Link>
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
