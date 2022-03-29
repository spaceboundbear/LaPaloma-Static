import React from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo/logo-lapaloma.png';

const Header = () => {
  return (
    <Navbar bg="white" variant="light" className="sticky-top">
      <Container>
        <Navbar.Brand className="d-none d-sm-block" to="/">
          <Image src={Logo}></Image>
        </Navbar.Brand>
        <Nav className="justify-content-end   mx-md-0">
          <NavLink className="nav-link" to="/SenderoCrossing">
            Sendero Crossing
          </NavLink>
          <NavLink className="nav-link" to="/SchuettigRd">
            Schuettig Rd
          </NavLink>
          <NavLink className="nav-link" to="/BriteOaks">
            Brite Oaks
          </NavLink>
          <NavLink className="nav-link" to="/SummitOrchards">
            Summit Orchards
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
