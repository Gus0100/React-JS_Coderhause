import './Navbar.scss'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

function NavBarOffCanvas() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container>
                        <img src={'./public/LogoPatin.png'} alt="LOGO" className='logo' />
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link to='/' className='nav-link'>Inicio</Link>
                                    <Link to='/nosotros' className='nav-link'>Quienes Somos</Link>
                                    <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                        <NavDropdown.Item><Link to={'/category/ruedas'} className='nav-link'>Ruedas</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/category/patin'} className='nav-link'>Patin</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <CartWidget />
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBarOffCanvas;