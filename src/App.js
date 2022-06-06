import React from "react";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Newsletter from "./Newsletter";
import "./styles.css";
function App() {
  return (
<Router>
        <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="logoName" href="/">Sergio</Navbar.Brand>          
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter/>} />
      </Routes>
      </Router>
  );
}

export default App;
