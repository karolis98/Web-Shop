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
        <Navbar.Brand href="#home">Cat's</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dry Cat Food" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.4">Applaws</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Concept for Life
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Cosma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Hill's Prescription Diet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Hill's Science Plan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">IAMS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Jams</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                James Wellbeloved
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">PURINA ONE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Purina Pro Plan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Purizon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Rosie's Farm
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Royal Canin Veterinary & Expert
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sanabelle</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pan Mięsko</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Wet cat food" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.4">
                Almo Nature
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                animonda Carny
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Applaws</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Cosma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Cosma Nature
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Felix</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Gourmet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Hill's Prescription Diet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Royal Canin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Royal Canin Veterinary & Expert
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sheba</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Whiskas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/CatLitter">
              Cat Litter
            </Nav.Link>
            <Nav.Link as={Link} to="/CatLitterBoxes">
              Cat Litter Boxes & Litter Trays
            </Nav.Link>
            <Nav.Link as={Link} to="/CatTrees">
              Cat Trees & Cat Scratching Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/CatBaskets">
              Cat Baskets & Beds
            </Nav.Link>
            <Nav.Link as={Link} to="/CatToys">
              Cat Toys
            </Nav.Link>
            <Nav.Link as={Link} to="/CatBowls">
              Cat Bowls & Fountains
            </Nav.Link>
            <Nav.Link as={Link} to="/CatFlaps">
              Cat Flaps & Nets
            </Nav.Link>
            <Nav.Link as={Link} to="/CatTreats">
              Cat Treats & Grooming
            </Nav.Link>
            <Nav.Link as={Link} to="/CatSupplements">
              Cat Supplements & Specialty Food
            </Nav.Link>
            <Nav.Link as={Link} to="/CatCarriers">
              Cat Carriers & Transport
            </Nav.Link>
            <Nav.Link as={Link} to="/Kitten">
              Kitten Products
            </Nav.Link>
            <Nav.Link as={Link} to="/CatBreed">
              Cat Breed Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/PetParents">
              Pet Parents - Everything for You
            </Nav.Link>
            <Nav.Link as={Link} to="/SpecialOffers">
              Cat Special Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/CatTrial">
              Cat Trial Packs
            </Nav.Link>
            <Nav.Link as={Link} to="/CatNew">
              Cat New Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
