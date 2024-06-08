import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Hero from './assets/images/Hero.jpg';
import Crest from './assets/images/Crest.png';
import lphie_logo3 from './assets/images/lphie_logo3.png'
import './Home.css'; // Make sure to create this CSS file

function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach((span, index) => {
                        setTimeout(() => {
                            span.classList.add('zoom-out');
                        }, index * 400); // Adjust the delay as needed
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const leadersText = document.querySelector('.leaders-text');
        const text = leadersText.textContent;
        leadersText.innerHTML = text.split(' ').map((word, index) => `<span class="delay-${index}">${word}</span>`).join(' ');
        observer.observe(leadersText);
    }, []);

    return (
        <Container fluid>
            {/* Large Main Panel */}
            <Row className="my-5">
                <Col>
                    <Card className="text-center">
                        <Card.Img variant="top" src={Hero} />
                    </Card>
                </Col>
            </Row>

            {/* Text between panels */}
            <Row className="text-center my-5">
                <Col>
                    <div className="leaders-text">
                        Leaders Among Men
                    </div>
                    <img src={lphie_logo3} alt="Logo" className="mt-3" style={{ height: '40px', backgroundColor: 'transparent' }}/>
                </Col>
            </Row>

            {/* Four Smaller Panels */}
            <Row>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="about-us.jpg" />
                        <Card.Body>
                            <Card.Title>About Us</Card.Title>
                            <Card.Text>Learn about our history and mission.</Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="events.jpg" />
                        <Card.Body>
                            <Card.Title>Events</Card.Title>
                            <Card.Text>Check out our upcoming and past events.</Card.Text>
                            <Button variant="primary">View Events</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="membership.jpg" />
                        <Card.Body>
                            <Card.Title>Membership</Card.Title>
                            <Card.Text>Join us and become a part of the brotherhood.</Card.Text>
                            <Button variant="primary">Join Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="contact-us.jpg" />
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>Get in touch with us for more information.</Card.Text>
                            <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
