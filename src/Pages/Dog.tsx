import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Header from "../Components/Header";

const Dog = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Header />
        <Navbar.Brand href="#home">Dog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Dry Dog Food" id="basic-nav-dropdown">
            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/Burns">
              Burns
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Concept">
              Concept for Life
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Eukanuba">
              Eukanuba
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Hills">
              Hill's Prescription Diet
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Science">
              Hill's Science Plan
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Markus">
              Markus Muhle
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Rosies">
              Rosie's Farm
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Royal">
              Royal Canin Breed
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Size">
              Royal Canin Size
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Care">
              Royal Canin Care Nutrition
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Veterinary">
              Royal Canin Veterinary & Expert
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Taste">
              Taste of the Wild
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Wolf">
              Wolf of Wilderness
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Wet Dog Food" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Applaws</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Burns</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Forthglade</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Hill's Prescription Diet
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              James Wellbeloved
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Lily's Kitchen
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Lukullus</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pedigree</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Purizon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Rebel Belle</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">RINTI</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Rocco</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Royal Canin Veterinary & Expert
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Wolf of Wilderness
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Briantos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Butcher's</NavDropdown.Item>
          </NavDropdown>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Supplements">
              Dog's Supplements & Special Food
            </Nav.Link>
            <Nav.Link as={Link} to="/Kennels">
              Dog Kennels, Dog Flaps & Gates
            </Nav.Link>
            <Nav.Link as={Link} to="/Crates">
              Dog Crates & Dog Travel
            </Nav.Link>
            <Nav.Link as={Link} to="/Beds">
              Dog Beds & Dog Baskets
            </Nav.Link>
            <Nav.Link as={Link} to="/Toys">
              Dog Toys, Sports & Training
            </Nav.Link>
            <Nav.Link as={Link} to="/Grooming">
              Dog Grooming & Care
            </Nav.Link>
            <Nav.Link as={Link} to="/Leads">
              Dog Leads & Dog Collars
            </Nav.Link>
            <Nav.Link as={Link} to="/Bowls">
              Dog Bowls & Feeders
            </Nav.Link>
            <Nav.Link as={Link} to="/Clothing">
              Dog Clothing & Dog Wear
            </Nav.Link>
            <Nav.Link as={Link} to="/Technology">
              Dog Technology
            </Nav.Link>
            <Nav.Link as={Link} to="/Puppy">
              Puppy Products
            </Nav.Link>
            <Nav.Link as={Link} to="/Breed">
              Dog Breed Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/Parents">
              Pet Parents - Everything for You
            </Nav.Link>
            <Nav.Link as={Link} to="/SpecialOffers">
              Dog Special Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/DogTrial">
              Dog Trial Packs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Dog;
