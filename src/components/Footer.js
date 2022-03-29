import React from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import LogoWhite from '../assets/logo/logo-white.png';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top text-center">
      <Navbar.Brand className="d-none d-sm-block" to="/">
        <Image src={LogoWhite} style={{ height: '50px' }} />
      </Navbar.Brand>
      <Nav className="text-right mx-md-0">
        <li className="d-md-none d-lg-block">
          <span class="navbar-text">For More Information:</span>
        </li>
        <NavLink className="nav-link" to="/SenderoCrossing">
          (210) 900-5992
        </NavLink>
        <NavLink className="nav-link" to="/SchuettigRd">
          @lydiasellsland
        </NavLink>
        <NavLink className="nav-link" to="/BriteOaks">
          Broker #9001432
        </NavLink>
        <NavLink className="nav-link" to="/SummitOrchards">
          License #595743
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Footer;
