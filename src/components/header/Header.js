import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={`${classes.navbar}`}>
      <Container className="custom-green border-bottom border-dark">
        <Navbar.Brand className="d-lg-none d-flex w-50">
          <Image src={logo} className="w-25" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
          </Nav>
          <Navbar.Brand className="d-lg-flex d-none justify-content-center w-25">
            <Image src={logo} className="w-25" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link>Learn</Nav.Link>
            <Nav.Link>Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
