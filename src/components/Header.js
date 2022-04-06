import React, { useState } from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo-lapaloma.png';
import '../assets/styles/style.css';

const styles = {
  nav: {
    paddingLeft: '20px',
  },
};

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="sticky-top"
    >
      <Container>
        <Link to={`/Home`}>
          <Navbar.Brand>
            <Image src={Logo}></Image>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end mx-md-0">
            <Nav.Link
              style={styles.nav}
              className="nav-link hover"
              href="/SenderoCrossing"
            >
              Sendero Crossing
            </Nav.Link>
            <Nav.Link
              style={styles.nav}
              className="nav-link hover"
              href="/SchuettigRd"
            >
              Schuettig Rd
            </Nav.Link>
            <Nav.Link
              style={styles.nav}
              className="nav-link hover"
              href="/BriteOaks"
            >
              Brite Oaks
            </Nav.Link>
            <Nav.Link
              style={styles.nav}
              className="nav-link hover"
              href="/SummitOrchards"
            >
              Summit Orchards
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
