import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavbarComponent() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>Todo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link>Lists</Nav.Link>
            </Nav>
        </Navbar>
    )
}
