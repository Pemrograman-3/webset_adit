import React, { Component } from "react";
import {navbar,Container,Nav} from "reacy-bootstrap"

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Tutorial</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
              {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
