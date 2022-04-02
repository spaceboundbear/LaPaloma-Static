import React from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo/logo-lapaloma.png';

const styles = {
  nav: {
    color: '#803308',
    fontFamily: 'helveticaStdBold',
  },
};

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end mx-md-0">
            <NavLink
              style={styles.nav}
              className="nav-link"
              to="/SenderoCrossing"
            >
              Sendero Crossing
            </NavLink>
            <NavLink style={styles.nav} className="nav-link" to="/SchuettigRd">
              Schuettig Rd
            </NavLink>
            <NavLink style={styles.nav} className="nav-link" to="/BriteOaks">
              Brite Oaks
            </NavLink>
            <NavLink
              style={styles.nav}
              className="nav-link"
              to="/SummitOrchards"
            >
              Summit Orchards
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
