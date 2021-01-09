import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import '../Components/nav.css'


export default function App() {
  return (
    <>
    
     
      
      <Navbar collapseOnSelect expand="lg" bg = "dark"variant="dark">
       
     
        <Navbar.Brand href="/"><h2>ChefsCorner</h2></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">

          <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Explore More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Aout">About</NavDropdown.Item>
              <NavDropdown.Item href="/Nutrition">Nutrition</NavDropdown.Item>
              <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/SignUp">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        
        </Navbar>
       
        
     
     
      
     
    </>
  );
}