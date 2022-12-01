import React from 'react'
import './style.css'
import logo from "./images/logoWeb.png";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/**
 * Creates a different navigation link depending on if the user is logged in or not
 * @returns react component of either a Login link or Account link
 */
function loginResult() {
    let isLoggedIn = localStorage.getItem("loggedIn")
    if (isLoggedIn !== "true") {
        return (<Nav.Link href="/login">Login</Nav.Link>)
    } else {
        return(<Nav.Link href="/account">Account</Nav.Link>)
    }
}



/**
 * navigation bar variable
 */
const bar = (
    <div>
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
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/schedule">
                            Schedule
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    {loginResult()}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <div className="spacer03"/>
    </div>
);

/**
 * Gets the Navigation Bar
 * @returns react component of Navigation bar
 */
function NavigationBar() {
    return bar
}

export default NavigationBar;
