import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: white;
    border-bottom: 1px solid #5c8a8a;
    height: 100px;
}
.navButton:hover {
    background-color: #465cd2 !important;
    color: #FFF;
 }

.navbar-brand, .navbar-nav .nav-link {
    font-family: 'Raleway';
    padding: 10px;
    color: #000000;

    &:hover {
        color: 	#B0B0B0;
    }
}
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand >
            <img src="
            https://logogeek.uk/wp-content/uploads/2016/02/HILLandFriends.jpg" alt="Logo" height="90" width="95"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </Nav.Item>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)