import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './myNav.css'

const MyNav = () => {
    return (
        <Navbar expand="lg" className="nav-bg">
            <Container>
                <h5 className="nav-logo m-0">bbhgembook</h5>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#" className="nav-link">About</Nav.Link>
                        <Nav.Link href="#" className="nav-link">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default MyNav;