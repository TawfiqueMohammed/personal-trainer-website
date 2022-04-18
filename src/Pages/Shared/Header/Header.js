import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Banner from '../../Home/Banner/Banner';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Tawfique <span className='text-warning'>Umar</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#note">Note</Nav.Link>
                        <Nav.Link href="home#courses">Courses</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <div>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none ps-0' onClick={handleSignOut}><span className='text-warning'>{user.displayName}</span> <span className='rounded-3 p-1' style={{ border: '1px solid orange' }}>Sign out</span> </button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;