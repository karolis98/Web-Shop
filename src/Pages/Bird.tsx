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
        <Navbar.Brand href="#home">Bird</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Bird Food" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Bird Food</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bird Cages</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bird Cages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Bird Food</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bird Cages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Bird Snacks & Crackers</Nav.Link>
            <Nav.Link href="#link">Bird Toys</Nav.Link>
            <Nav.Link href="#home">Bird Food Supplements</Nav.Link>
            <Nav.Link href="#home">Bird Cage Bedding & Litter</Nav.Link>
            <Nav.Link href="#home">Wild Birds</Nav.Link>
            <Nav.Link href="#home">Other Bird Supplies</Nav.Link>
            <Nav.Link href="#home">Bird Special Offers</Nav.Link>
            <Nav.Link href="#home">Bird New Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
