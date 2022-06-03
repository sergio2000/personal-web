import React from "react";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import "./styles.css";
function App() {
  return (
<Router>
        <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="home">Sergio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Newsletter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      </Router>
  );
}

export default App;
