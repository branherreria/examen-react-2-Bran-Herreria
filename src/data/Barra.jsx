import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import { PaginasApp } from '../data/PaginasApp';

class Barra extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="xl" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                className="logo-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/50px-React.svg.png"
              />
              Menu
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {PaginasApp.map((item) => {
                  return (
                    <Nav.Link key={uuid()} as={Link} to={item.path}>
                      {item.title}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Barra;
