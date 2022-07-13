import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarHome = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Assignment Logiq</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarHome;
