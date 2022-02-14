import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import { MenuElements } from '../data/MenuElements';

class Barra extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {MenuElements.map((item) => {
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
