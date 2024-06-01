/**
 * Everything related to the navigation bar and its properties
 * are outlined here.
 * 
 * Template sourced from https://react-bootstrap.netlify.app/docs/components/navbar/.
 * 
 * @author #67 Jordan "InterstellHer" Miller
 * @since May 30, 2024
 */

// Import components for the navigation bar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect, useState } from 'react';

// Import CSS styling
import './LambdaNav.css'

// Import assets
import ncsu_logo from './assets/images/ncsu_logo.png'
import lphie_logo from './assets/images/lphie_logo.png'
import lphie_logo2 from './assets/images/lphie_logo2.png'

/**
 * Definition and properties for an offcanvas example navigation bar. This
 * is a functional component in React.
 * 
 * @returns The navigation bar JSX with offcanvas functionality.
 */
function OffcanvasExample() {

    const [showNavbar, setShowNavbar] = useState(true);  // Add this state
    let lastScrollY = 0;  // Add this variable

    useEffect(() => {  // Ensure this useEffect
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setShowNavbar(true);
            } else if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else if (window.scrollY < lastScrollY) {
                setShowNavbar(true);
            }
            lastScrollY = window.scrollY;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            {/* Change to true if you want a search bar */}
            {[false].map((expand) => (

                // Navbar component with expand and custom background class
                <Navbar key={expand} expand={expand} className={`navbar-transparent mb-3 ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`} style={{ position: 'relative' }}>
                    <Container fluid>

                        {/* Brand name link */}
                        <Navbar.Brand href="#">
                            <img src={lphie_logo2} alt="Logo" style={{ height: '70px', backgroundColor: 'transparent' }} />
                        </Navbar.Brand>

                        {/* Toggle button for collapsing the navbar */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        {/* Offcanvas component for responsive behavior */}
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            {/* Offcanvas header with close button */}
                            <Offcanvas.Header closeButton>

                                {/* Offcanvas title */}
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={ncsu_logo} alt="Logo" style={{ height: '80px' }} />
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            {/* Offcanvas body containing nav links and form */}
                            <Offcanvas.Body className='nav-link-fonts'>

                                {/* Nav component with right alignment */}
                                <Nav className="justify-content-end flex-grow-1 pe-3">

                                    {/* Navigation links */}
                                    <Nav.Link href="#action1">Recruitment</Nav.Link>
                                    <Nav.Link href="#action2">Legacy</Nav.Link>
                                    <Nav.Link href="#action3">Brothers</Nav.Link>
                                    <Nav.Link href="#action4">Media</Nav.Link>
                                    <hr className="my-2 w-100" />
                                    <Nav.Link href="#action4">Contact Us</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
