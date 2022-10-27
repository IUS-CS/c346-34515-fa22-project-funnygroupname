import React from 'react'
import './style.css'
import logo from "./images/logoWeb.png";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const bar = (
    <Navbar collapseOnSelect expand="lg" bg="Info" variant="Info">
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="home" width="80" height="60"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/appointments">Appointments</Nav.Link>
                    <Nav.Link href="/contactus">Contact Us</Nav.Link>
                    <NavDropdown title="Others" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                        <NavDropdown.Item href="/photos">
                            Photos
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/overview">
                            Overview
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item href="/test">
                            TESTING
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

function NavigationBar() {
    return bar
}

export default NavigationBar;
