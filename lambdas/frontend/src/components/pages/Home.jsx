import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import panel1 from '../../assets/images/panel1.jpeg';
import panel2 from '../../assets/images/panel2.jpg';
import panel3 from '../../assets/images/panel3.jpeg';
import panel4 from '../../assets/images/panel4.png';
import './Home.css'; // Make sure to create this CSS file
import StartupOverlay from './StartupOverlay';

function Home() {
    const [overlayVisible, setOverlayVisible] = useState(true);

    const handleOverlayComplete = () => {
        setOverlayVisible(false);
    };

    return (
        <div id="home">
            {overlayVisible && <StartupOverlay onComplete={handleOverlayComplete} />}
            <Container fluid className="custom-container">
                <Row>
                    <Col md={6} className="pr-md-2">
                        <a href="#about-us">
                            <Card className="mb-4 image-card large-card">
                                <Card.Img variant="top" src={panel1} />
                                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                    <div className="card-title">Recruitment</div>
                                </Card.ImgOverlay>
                            </Card>
                        </a>
                        <a href="#membership">
                            <Card className="mb-4 image-card small-card">
                                <Card.Img variant="top" src={panel3} />
                                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                    <div className="card-title">Brothers</div>
                                </Card.ImgOverlay>
                            </Card>
                        </a>
                    </Col>
                    <Col md={6} className="pl-md-2">
                        <Link to="/legacy">
                            <Card className="mb-4 image-card small-card">
                                <Card.Img variant="top" src={panel4} />
                                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                    <div className="card-title">Legacy</div>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                        <a href="#contact-us">
                            <Card className="image-card large-card">
                                <Card.Img variant="top" src={panel2} />
                                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                                    <div className="card-title">Media</div>
                                </Card.ImgOverlay>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
